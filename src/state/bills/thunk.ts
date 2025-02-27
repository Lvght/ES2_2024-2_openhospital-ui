import { createAsyncThunk } from "@reduxjs/toolkit";
import { wrapper } from "libraries/apiUtils/wrapper";
import { Observable, forkJoin, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { TFilterValues } from "../../components/accessories/billTable/types";
import {
  BillDTO,
  BillItemsDTO,
  BillPaymentsDTO,
  BillsApi,
  FullBillDTO,
  UpdateBillRequest,
} from "../../generated";
import { customConfiguration } from "../../libraries/apiUtils/configuration";

const api = new BillsApi(customConfiguration());

const getPayments = (bills: BillDTO[]): Observable<FullBillDTO[]> => {
  if (bills.length === 0) return of([]);
  const fbills = forkJoin(
    bills.map((bill: BillDTO) => {
      const obs = wrapper(() =>
        api.getPaymentsByBillId({
          billId: bill.id ? bill.id : 0,
        })
      );
      return obs.pipe(
        map((payments) => {
          return {
            billDTO: bill,
            billItemsDTO: new Array<BillItemsDTO>(),
            billPaymentsDTO: payments,
          } as any as FullBillDTO;
        }),
        catchError((error) => of({ billDTO: bill } as any as FullBillDTO))
      );
    })
  );
  return fbills;
};

const getItems = (bills: FullBillDTO[]): Observable<FullBillDTO[]> => {
  if (bills.length === 0) return of([]);
  const fbills = forkJoin(
    bills.map((fbill: FullBillDTO) => {
      const obs = wrapper(() =>
        api.getItems({
          billId: fbill?.bill?.id ? fbill.bill.id : 0,
        })
      );
      return obs.pipe(
        map((items) => {
          return {
            billDTO: fbill.bill,
            billItemsDTO: items,
            billPaymentsDTO: fbill.billPayments,
          } as any as FullBillDTO;
        }),
        catchError((error) => of({ ...fbill }))
      );
    })
  );

  return fbills;
};

export const newBill = createAsyncThunk(
  "bills/newBill",
  async (fullBillDTO: FullBillDTO, thunkApi) =>
    wrapper(() => api.newBill({ fullBillDTO }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateBill = createAsyncThunk(
  "bills/updateBill",
  async (payload: UpdateBillRequest, thunkApi) =>
    wrapper(() => api.updateBill(payload))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getBill = createAsyncThunk(
  "bills/getBill",
  async (id: number, thunkApi) =>
    wrapper(() => api.getBill({ id }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getPendingBills = createAsyncThunk(
  "bills/getPendingBills",
  async (patientCode: number, thunkApi) =>
    wrapper(() => api.getPendingBills({ patientCode }))
      .pipe(
        switchMap((bills) => getPayments(bills)),
        catchError(() => of([]))
      )
      .pipe(
        switchMap((payments) => getItems(payments)),
        catchError(() => of([]))
      )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const searchBills = createAsyncThunk(
  "bills/searchBills",
  async (filter: TFilterValues, thunkApi) =>
    wrapper(() =>
      api.searchBills1({
        datefrom: filter.fromDate,
        dateto: filter.toDate,
        patientCode: filter.patientCode,
      })
    )
      .pipe(
        switchMap((bills) => getPayments(bills)),
        catchError(() => of([]))
      )
      .pipe(
        switchMap((payments) => getItems(payments)),
        catchError(() => of([]))
      )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const searchPayments = createAsyncThunk(
  "bills/searchPayments",
  async (filter: TFilterValues, thunkApi) =>
    wrapper(() =>
      api.searchBillsPayments({
        datefrom: filter.fromDate,
        dateto: filter.toDate,
        patientCode: filter.patientCode,
      })
    )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deleteBill = createAsyncThunk(
  "bills/deleteBill",
  async (id: number | undefined, thunkApi) =>
    wrapper(() =>
      api.deleteBill({
        id: id ?? -1,
      })
    )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const payBill = createAsyncThunk(
  "bills/payBill",
  async (payload: BillPaymentsDTO, thunkApi) =>
    wrapper(() =>
      api.updateBill({
        id: payload.billId,
        fullBillDTO: { billPayments: [payload] } as any,
      })
    )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const closeBill = createAsyncThunk(
  "bills/closeBill",
  async ({ id, bill }: { id: number; bill: BillDTO }, thunkApi) =>
    wrapper(() => api.updateBill({ id, fullBillDTO: { bill: bill } as any }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getBillsByYear = createAsyncThunk(
  "bills/getBillsByYear",
  async (year: number, thunkApi) =>
    wrapper(() =>
      api.searchBills1({
        datefrom: new Date(year, 0, 1).toISOString(),
        dateto: new Date(year, 11, 31).toISOString(),
        patientCode: 0,
      })
    )
      .pipe(
        switchMap((bills) => getPayments(bills)),
        catchError(() => of([]))
      )
      .pipe(
        switchMap((payments) => getItems(payments)),
        catchError(() => of([]))
      )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);
