/* tslint:disable */
/* eslint-disable */
/**
 * order Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface OrderDataPaymentInfo
 */
export interface OrderDataPaymentInfo {
    /**
     * 
     * @type {string}
     * @memberof OrderDataPaymentInfo
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderDataPaymentInfo
     */
    'additionalInfo'?: string;
    /**
     * 
     * @type {OrderMoney}
     * @memberof OrderDataPaymentInfo
     */
    'amount'?: OrderMoney;
    /**
     * 
     * @type {OrderMoney}
     * @memberof OrderDataPaymentInfo
     */
    'fee'?: OrderMoney;
    /**
     * 
     * @type {OrderMoney}
     * @memberof OrderDataPaymentInfo
     */
    'vatAmount'?: OrderMoney;
    /**
     * 
     * @type {number}
     * @memberof OrderDataPaymentInfo
     */
    'vatPercentage'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDataPaymentInfo
     */
    'vatInaccurate'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderDataPaymentInfo
     */
    'vatCalculated'?: boolean;
    /**
     * 
     * @type {OrderLocalizedText}
     * @memberof OrderDataPaymentInfo
     */
    'title'?: OrderLocalizedText;
    /**
     * 
     * @type {OrderLocalizedText}
     * @memberof OrderDataPaymentInfo
     */
    'label'?: OrderLocalizedText;
}
