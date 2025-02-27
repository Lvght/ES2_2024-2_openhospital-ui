import { createAsyncThunk } from "@reduxjs/toolkit";
import { wrapper } from "libraries/apiUtils/wrapper";
import {
  PregnantTreatmentTypeDTO,
  PregnantTreatmentTypesApi,
} from "../../../generated";
import { customConfiguration } from "../../../libraries/apiUtils/configuration";

const api = new PregnantTreatmentTypesApi(customConfiguration());

export const getPregnantTreatmentTypes = createAsyncThunk(
  "pregnantTreatmentTypes/getPregnantTreatmentTypes",
  async (_, thunkApi) =>
    wrapper(() => api.getPregnantTreatmentTypes())
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createPregnantTreatmentType = createAsyncThunk(
  "pregnantTreatmentTypes/createPregnantTreatmentType",
  async (pregnantTreatmentTypeDTO: PregnantTreatmentTypeDTO, thunkApi) =>
    wrapper(() => api.newPregnantTreatmentType({ pregnantTreatmentTypeDTO }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updatePregnantTreatmentType = createAsyncThunk(
  "pregnantTreatmentTypes/updatePregnantTreatmentType",
  async (
    payload: {
      code: string;
      pregnantTreatmentTypeDTO: PregnantTreatmentTypeDTO;
    },
    thunkApi
  ) =>
    wrapper(() => api.updatePregnantTreatmentTypes(payload))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deletePregnantTreatmentType = createAsyncThunk(
  "pregnantTreatmentTypes/deletePregnantTreatmentType",
  async (code: string, thunkApi) =>
    wrapper(() => api.deletePregnantTreatmentType({ code }))
      .toPromise()
      .then(() => ({ code }))
      .catch((error) => thunkApi.rejectWithValue(error.response))
);
