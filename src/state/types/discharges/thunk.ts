import { createAsyncThunk } from "@reduxjs/toolkit";
import { DischargeTypeDTO } from "generated/models/DischargeTypeDTO";
import { wrapper } from "libraries/apiUtils/wrapper";
import { DischargeTypeApi } from "../../../generated";
import { customConfiguration } from "../../../libraries/apiUtils/configuration";

const api = new DischargeTypeApi(customConfiguration());

export const getDischargeTypes = createAsyncThunk(
  "dischargeTypes/getDischargeTypes",
  async (_, thunkApi) =>
    wrapper(() => api.getDischargeTypes())
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createDischargeType = createAsyncThunk(
  "dischargeTypes/createDischargeType",
  async (dischargeTypeDTO: DischargeTypeDTO, thunkApi) =>
    wrapper(() => api.newDischargeType({ dischargeTypeDTO }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateDischargeType = createAsyncThunk(
  "dischargeTypes/updateDischargeType",
  async (dischargeTypeDTO: DischargeTypeDTO, thunkApi) =>
    wrapper(() => api.updateDischargeType({ dischargeTypeDTO }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deleteDischargeType = createAsyncThunk(
  "dischargeTypes/deleteDischargeType",
  async (code: string, thunkApi) =>
    wrapper(() => api.deleteDischargeType({ code }))
      .toPromise()
      .then(() => ({ code }))
      .catch((error) => thunkApi.rejectWithValue(error.response))
);
