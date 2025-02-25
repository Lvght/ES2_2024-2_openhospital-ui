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
    DeliveryResultTypeDTO,
} from '../models';

export interface DeleteDeliveryResultTypeRequest {
    code: string;
}

export interface NewDeliveryResultTypeRequest {
    deliveryResultTypeDTO: DeliveryResultTypeDTO;
}

export interface UpdateDeliveryResultTypesRequest {
    deliveryResultTypeDTO: DeliveryResultTypeDTO;
}

/**
 * no description
 */
export class DeliveryResultTypeApi extends BaseAPI {

    /**
     */
    deleteDeliveryResultType({ code }: DeleteDeliveryResultTypeRequest): Observable<boolean>
    deleteDeliveryResultType({ code }: DeleteDeliveryResultTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteDeliveryResultType({ code }: DeleteDeliveryResultTypeRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDeliveryResultType');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/deliveryresulttypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getDeliveryResultTypes(): Observable<Array<DeliveryResultTypeDTO>>
    getDeliveryResultTypes(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DeliveryResultTypeDTO>>>
    getDeliveryResultTypes(opts?: OperationOpts): Observable<Array<DeliveryResultTypeDTO> | RawAjaxResponse<Array<DeliveryResultTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<DeliveryResultTypeDTO>>({
            url: '/deliveryresulttypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newDeliveryResultType({ deliveryResultTypeDTO }: NewDeliveryResultTypeRequest): Observable<DeliveryResultTypeDTO>
    newDeliveryResultType({ deliveryResultTypeDTO }: NewDeliveryResultTypeRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DeliveryResultTypeDTO>>
    newDeliveryResultType({ deliveryResultTypeDTO }: NewDeliveryResultTypeRequest, opts?: OperationOpts): Observable<DeliveryResultTypeDTO | RawAjaxResponse<DeliveryResultTypeDTO>> {
        throwIfNullOrUndefined(deliveryResultTypeDTO, 'deliveryResultTypeDTO', 'newDeliveryResultType');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DeliveryResultTypeDTO>({
            url: '/deliveryresulttypes',
            method: 'POST',
            headers,
            body: deliveryResultTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    updateDeliveryResultTypes({ deliveryResultTypeDTO }: UpdateDeliveryResultTypesRequest): Observable<DeliveryResultTypeDTO>
    updateDeliveryResultTypes({ deliveryResultTypeDTO }: UpdateDeliveryResultTypesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DeliveryResultTypeDTO>>
    updateDeliveryResultTypes({ deliveryResultTypeDTO }: UpdateDeliveryResultTypesRequest, opts?: OperationOpts): Observable<DeliveryResultTypeDTO | RawAjaxResponse<DeliveryResultTypeDTO>> {
        throwIfNullOrUndefined(deliveryResultTypeDTO, 'deliveryResultTypeDTO', 'updateDeliveryResultTypes');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<DeliveryResultTypeDTO>({
            url: '/deliveryresulttypes',
            method: 'PUT',
            headers,
            body: deliveryResultTypeDTO,
        }, opts?.responseOpts);
    };

}
