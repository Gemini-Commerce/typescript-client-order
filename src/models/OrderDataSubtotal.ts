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
 * @interface OrderDataSubtotal
 */
export interface OrderDataSubtotal {
    /**
     * 
     * @type {OrderDataSubtotalCode}
     * @memberof OrderDataSubtotal
     */
    'code'?: OrderDataSubtotalCode;
    /**
     * 
     * @type {OrderMoney}
     * @memberof OrderDataSubtotal
     */
    'value'?: OrderMoney;
}
