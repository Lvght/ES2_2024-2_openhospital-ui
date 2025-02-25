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

/**
 * Class representing a price others
 * @export
 * @interface PricesOthersDTO
 */
export interface PricesOthersDTO {
    /**
     * @type {number}
     * @memberof PricesOthersDTO
     */
    id?: number;
    /**
     * The prices code
     * @type {string}
     * @memberof PricesOthersDTO
     */
    code: string;
    /**
     * The description
     * @type {string}
     * @memberof PricesOthersDTO
     */
    description: string;
    /**
     * Lock
     * @type {number}
     * @memberof PricesOthersDTO
     */
    lock?: number;
    /**
     * @type {boolean}
     * @memberof PricesOthersDTO
     */
    opdInclude: boolean;
    /**
     * @type {boolean}
     * @memberof PricesOthersDTO
     */
    ipdInclude: boolean;
    /**
     * @type {boolean}
     * @memberof PricesOthersDTO
     */
    daily: boolean;
    /**
     * @type {boolean}
     * @memberof PricesOthersDTO
     */
    discharge?: boolean;
    /**
     * @type {boolean}
     * @memberof PricesOthersDTO
     */
    undefined?: boolean;
    /**
     * @type {number}
     * @memberof PricesOthersDTO
     */
    readonly hashCode?: number;
}
