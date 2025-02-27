// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    PagePatientExaminationDTO,
    PatientExaminationDTO,
} from '../models';

export interface GetByIDRequest {
    id: number;
}

export interface GetByPatientIdRequest {
    patId: number;
}

export interface GetDefaultPatientExaminationRequest {
    patId: number;
}

export interface GetFromLastPatientExaminationRequest {
    id: number;
}

export interface GetLastByPatientIdRequest {
    patId: number;
}

export interface GetLastNByPatIDRequest {
    limit: number;
    patId: number;
}

export interface NewPatientExaminationRequest {
    patientExaminationDTO: PatientExaminationDTO;
}

export interface UpdateExaminationRequest {
    id: number;
    patientExaminationDTO: PatientExaminationDTO;
}

/**
 * no description
 */
export class ExaminationsApi extends BaseAPI {

    /**
     */
    getByID({ id }: GetByIDRequest): Observable<PatientExaminationDTO>
    getByID({ id }: GetByIDRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    getByID({ id }: GetByIDRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(id, 'id', 'getByID');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getByPatientId({ patId }: GetByPatientIdRequest): Observable<Array<PatientExaminationDTO>>
    getByPatientId({ patId }: GetByPatientIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<PatientExaminationDTO>>>
    getByPatientId({ patId }: GetByPatientIdRequest, opts?: OperationOpts): Observable<Array<PatientExaminationDTO> | RawAjaxResponse<Array<PatientExaminationDTO>>> {
        throwIfNullOrUndefined(patId, 'patId', 'getByPatientId');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<PatientExaminationDTO>>({
            url: '/examinations/byPatientId/{patId}'.replace('{patId}', encodeURI(patId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDefaultPatientExamination({ patId }: GetDefaultPatientExaminationRequest): Observable<PatientExaminationDTO>
    getDefaultPatientExamination({ patId }: GetDefaultPatientExaminationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    getDefaultPatientExamination({ patId }: GetDefaultPatientExaminationRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(patId, 'patId', 'getDefaultPatientExamination');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patId': patId,
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations/defaultPatientExamination',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    getFromLastPatientExamination({ id }: GetFromLastPatientExaminationRequest): Observable<PatientExaminationDTO>
    getFromLastPatientExamination({ id }: GetFromLastPatientExaminationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    getFromLastPatientExamination({ id }: GetFromLastPatientExaminationRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(id, 'id', 'getFromLastPatientExamination');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations/fromLastPatientExamination/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLastByPatientId({ patId }: GetLastByPatientIdRequest): Observable<PatientExaminationDTO>
    getLastByPatientId({ patId }: GetLastByPatientIdRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    getLastByPatientId({ patId }: GetLastByPatientIdRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(patId, 'patId', 'getLastByPatientId');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations/lastByPatientId/{patId}'.replace('{patId}', encodeURI(patId)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getLastNByPatID({ limit, patId }: GetLastNByPatIDRequest): Observable<PagePatientExaminationDTO>
    getLastNByPatID({ limit, patId }: GetLastNByPatIDRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PagePatientExaminationDTO>>
    getLastNByPatID({ limit, patId }: GetLastNByPatIDRequest, opts?: OperationOpts): Observable<PagePatientExaminationDTO | RawAjaxResponse<PagePatientExaminationDTO>> {
        throwIfNullOrUndefined(limit, 'limit', 'getLastNByPatID');
        throwIfNullOrUndefined(patId, 'patId', 'getLastNByPatID');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'limit': limit,
            'patId': patId,
        };

        return this.request<PagePatientExaminationDTO>({
            url: '/examinations/lastNByPatId',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     */
    newPatientExamination({ patientExaminationDTO }: NewPatientExaminationRequest): Observable<PatientExaminationDTO>
    newPatientExamination({ patientExaminationDTO }: NewPatientExaminationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    newPatientExamination({ patientExaminationDTO }: NewPatientExaminationRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(patientExaminationDTO, 'patientExaminationDTO', 'newPatientExamination');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations',
            method: 'POST',
            headers,
            body: patientExaminationDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateExamination({ id, patientExaminationDTO }: UpdateExaminationRequest): Observable<PatientExaminationDTO>
    updateExamination({ id, patientExaminationDTO }: UpdateExaminationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<PatientExaminationDTO>>
    updateExamination({ id, patientExaminationDTO }: UpdateExaminationRequest, opts?: OperationOpts): Observable<PatientExaminationDTO | RawAjaxResponse<PatientExaminationDTO>> {
        throwIfNullOrUndefined(id, 'id', 'updateExamination');
        throwIfNullOrUndefined(patientExaminationDTO, 'patientExaminationDTO', 'updateExamination');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<PatientExaminationDTO>({
            url: '/examinations/{id}'.replace('{id}', encodeURI(id)),
            method: 'PUT',
            headers,
            body: patientExaminationDTO,
        }, opts?.responseOpts);
    };

}
