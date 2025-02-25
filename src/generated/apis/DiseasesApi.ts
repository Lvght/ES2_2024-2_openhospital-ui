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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    DiseaseDTO,
} from '../models';

export interface DeleteDiseaseRequest {
    code: string;
}

export interface GetDiseaseByCodeRequest {
    code: string;
}

export interface GetDiseases1Request {
    typecode: string;
}

export interface GetDiseasesIpdInByCodeRequest {
    typecode: string;
}

export interface GetDiseasesIpdOutByCodeRequest {
    typecode: string;
}

export interface GetDiseasesOpdByCodeRequest {
    typecode: string;
}

export interface NewDiseaseRequest {
    diseaseDTO: DiseaseDTO;
}

export interface UpdateDiseaseRequest {
    diseaseDTO: DiseaseDTO;
}

/**
 * no description
 */
export class DiseasesApi extends BaseAPI {

    /**
     */
    deleteDisease({ code }: DeleteDiseaseRequest): Observable<boolean>
    deleteDisease({ code }: DeleteDiseaseRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteDisease({ code }: DeleteDiseaseRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDisease');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/diseases/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getAllDiseases(): Observable<Array<DiseaseDTO>>
    getAllDiseases(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getAllDiseases(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/all',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseaseByCode({ code }: GetDiseaseByCodeRequest): Observable<DiseaseDTO>
    getDiseaseByCode({ code }: GetDiseaseByCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    getDiseaseByCode({ code }: GetDiseaseByCodeRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(code, 'code', 'getDiseaseByCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DiseaseDTO>({
            url: '/diseases/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseases(): Observable<Array<DiseaseDTO>>
    getDiseases(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseases(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/both',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseases1({ typecode }: GetDiseases1Request): Observable<Array<DiseaseDTO>>
    getDiseases1({ typecode }: GetDiseases1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseases1({ typecode }: GetDiseases1Request, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseases1');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/both/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesIpdIn(): Observable<Array<DiseaseDTO>>
    getDiseasesIpdIn(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdIn(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/in',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesIpdInByCode({ typecode }: GetDiseasesIpdInByCodeRequest): Observable<Array<DiseaseDTO>>
    getDiseasesIpdInByCode({ typecode }: GetDiseasesIpdInByCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdInByCode({ typecode }: GetDiseasesIpdInByCodeRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesIpdInByCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/in/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesIpdOut(): Observable<Array<DiseaseDTO>>
    getDiseasesIpdOut(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdOut(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/out',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesIpdOutByCode({ typecode }: GetDiseasesIpdOutByCodeRequest): Observable<Array<DiseaseDTO>>
    getDiseasesIpdOutByCode({ typecode }: GetDiseasesIpdOutByCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdOutByCode({ typecode }: GetDiseasesIpdOutByCodeRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesIpdOutByCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/out/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesOpd(): Observable<Array<DiseaseDTO>>
    getDiseasesOpd(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesOpd(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/opd',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDiseasesOpdByCode({ typecode }: GetDiseasesOpdByCodeRequest): Observable<Array<DiseaseDTO>>
    getDiseasesOpdByCode({ typecode }: GetDiseasesOpdByCodeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesOpdByCode({ typecode }: GetDiseasesOpdByCodeRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesOpdByCode');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/opd/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newDisease({ diseaseDTO }: NewDiseaseRequest): Observable<DiseaseDTO>
    newDisease({ diseaseDTO }: NewDiseaseRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    newDisease({ diseaseDTO }: NewDiseaseRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(diseaseDTO, 'diseaseDTO', 'newDisease');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DiseaseDTO>({
            url: '/diseases',
            method: 'POST',
            headers,
            body: diseaseDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateDisease({ diseaseDTO }: UpdateDiseaseRequest): Observable<DiseaseDTO>
    updateDisease({ diseaseDTO }: UpdateDiseaseRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    updateDisease({ diseaseDTO }: UpdateDiseaseRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(diseaseDTO, 'diseaseDTO', 'updateDisease');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DiseaseDTO>({
            url: '/diseases',
            method: 'PUT',
            headers,
            body: diseaseDTO,
        }, opts?.responseOpts);
    };

}
