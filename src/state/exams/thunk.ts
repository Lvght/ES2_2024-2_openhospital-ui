import { createAsyncThunk } from "@reduxjs/toolkit";
import { wrapper } from "libraries/apiUtils/wrapper";
import {
  ExamRowsApi,
  ExamsApi,
  NewExamRequest,
  UpdateExamRequest,
} from "../../generated";
import { customConfiguration } from "../../libraries/apiUtils/configuration";

const api = new ExamsApi(customConfiguration());

const examRowsApi = new ExamRowsApi(customConfiguration());

export const getExams = createAsyncThunk(
  "exams/getExams",
  async (_, thunkApi) =>
    wrapper(() => api.getExams())
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const getExamRows = createAsyncThunk(
  "exams/getExamRows",
  async (examCode: string, thunkApi) =>
    wrapper(() => examRowsApi.getExamRowsByExamCode({ examCode }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const createExam = createAsyncThunk(
  "exams/createExam",
  async (payload: NewExamRequest, thunkApi) =>
    wrapper(() => api.newExam(payload))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const updateExam = createAsyncThunk(
  "exams/updateExam",
  async (payload: UpdateExamRequest, thunkApi) =>
    wrapper(() => api.updateExam(payload))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);

export const deleteExam = createAsyncThunk(
  "exams/deleteExam",
  async (code: string, thunkApi) =>
    wrapper(() => api.deleteExam1({ code }))
      .toPromise()
      .catch((error) => thunkApi.rejectWithValue(error.response))
);
