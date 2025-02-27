import { createAsyncThunk } from "@reduxjs/toolkit";
import { wrapper } from "libraries/apiUtils/wrapper";
import { ExaminationsApi, PatientExaminationDTO } from "../../generated";
import { customConfiguration } from "../../libraries/apiUtils/configuration";

const api = new ExaminationsApi(customConfiguration());

export const examinationsByPatientId = createAsyncThunk(
  "examinations/examinationsByPatientId",
  async (patId: number | undefined, thunkApi) =>
    wrapper(() => api.getByPatientId({ patId: patId ?? -1 }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getDefaultPatientExamination = createAsyncThunk(
  "examinations/getDefaultPatientExamination",
  async (patId: number, thunkApi) =>
    wrapper(() => api.getDefaultPatientExamination({ patId }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getLastByPatientId = createAsyncThunk(
  "examinations/getLastByPatientId",
  async (patId: number, thunkApi) =>
    wrapper(() => api.getLastByPatientId({ patId }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createExamination = createAsyncThunk(
  "examinations/createExamination",
  async (patientExaminationDTO: PatientExaminationDTO, thunkApi) =>
    wrapper(() => api.newPatientExamination({ patientExaminationDTO }))
      .toPromise()
      .then(() => patientExaminationDTO)
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateExamination = createAsyncThunk(
  "examinations/updateExamination",
  async (
    payload: { id: number; patientExaminationDTO: PatientExaminationDTO },
    thunkApi
  ) =>
    wrapper(() => api.updateExamination(payload))
      .toPromise()
      .then(() => ({ ...payload.patientExaminationDTO, id: payload.id }))
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deleteExamination = createAsyncThunk(
  "examinations/deleteExamination",
  async (id: number, thunkApi) =>
    thunkApi.rejectWithValue({ message: "Delete api not yet available !!!" })
);
