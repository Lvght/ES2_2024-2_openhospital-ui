import { createAsyncThunk } from "@reduxjs/toolkit";
import { wrapper } from "libraries/apiUtils/wrapper";
import moment from "moment";
import {
  LaboratoriesApi,
  LaboratoryDTO,
  LabWithRowsDTO,
  UpdateLaboratoryRequest,
} from "../../generated";
import { customConfiguration } from "../../libraries/apiUtils/configuration";

const api = new LaboratoriesApi(customConfiguration());

export const searchLabs = createAsyncThunk(
  "laboratories/searchLabs",
  async (query: any, thunkApi) =>
    wrapper(() =>
      api.getLaboratoryForPrint({
        dateFrom: query.dateFrom ?? moment().add("-30", "days").toISOString(),
        dateTo: query.dateTo ?? moment().toISOString(),
        examName: query.examName,
        patientCode: !isNaN(query.patientCode) ? query.patientCode : undefined,
        status: query.status ?? undefined,
        paged: query.paged,
        page: query.page,
        size: query.size,
      })
    )
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getLabsByPatientId = createAsyncThunk(
  "laboratories/getLabsByPatientId",
  async (patId: number | undefined, thunkApi) =>
    wrapper(() => api.getLaboratory1({ patId: patId ?? -1 }))
      .toPromise()
      .then((result) =>
        (result ?? []).map((item) =>
          item.laboratoryDTO ? item : { laboratoryDTO: item }
        )
      )
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getLabsRequestByPatientId = createAsyncThunk(
  "laboratories/getLabsRequestByPatientId",
  async (patId: number | undefined, thunkApi) =>
    wrapper(() => api.getLaboratoryExamRequest1({ patId: patId ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getLabByCode = createAsyncThunk(
  "laboratories/getLabByCode",
  async (patId: number | undefined, thunkApi) =>
    wrapper(() => api.getLaboratory1({ patId: patId ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getLabWithRowsByCode = createAsyncThunk(
  "laboratories/getLabWithRowsByCode",
  async (code: number | undefined, thunkApi) =>
    wrapper(() => api.getExamWithRowsById({ code: code ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getMaterials = createAsyncThunk(
  "laboratories/getMaterials",
  async (_, thunkApi) =>
    wrapper(() => api.getMaterials())
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createLab = createAsyncThunk(
  "laboratories/createLab",
  async (labWithRowsDTO: LabWithRowsDTO, thunkApi) =>
    wrapper(() => api.newLaboratory({ labWithRowsDTO }))
      .toPromise()
      .then(() => labWithRowsDTO)
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createLabRequest = createAsyncThunk(
  "laboratories/createLabRequest",
  async (laboratoryDTO: LaboratoryDTO, thunkApi) =>
    wrapper(() => api.newExamRequest({ laboratoryDTO }))
      .toPromise()
      .then(() => laboratoryDTO)
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateLab = createAsyncThunk(
  "laboratories/updateLab",
  async (payload: UpdateLaboratoryRequest, thunkApi) =>
    wrapper(() => api.updateLaboratory(payload))
      .toPromise()
      .then(() => ({ ...payload.labWithRowsDTO }))
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateLabStatus = createAsyncThunk(
  "laboratories/updateLabStatus",
  async (payload: { code: number; status: string }, thunkApi) =>
    wrapper(() => api.updateExamRequest(payload))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deleteLab = createAsyncThunk(
  "laboratories/deleteLab",
  async (code: number | undefined, thunkApi) =>
    wrapper(() => api.deleteExam({ code: code ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const cancelLab = createAsyncThunk(
  "laboratories/cancelLab",
  async (code: number | undefined, thunkApi) =>
    wrapper(() => api.deleteExamRequest({ code: code ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);
