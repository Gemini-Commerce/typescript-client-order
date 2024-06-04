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
 * @interface OrderMoney
 */
export interface OrderMoney {
    /**
     * The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.
     * @type {string}
     * @memberof OrderMoney
     */
    'units'?: string;
    /**
     * Number of micro (10^-6) units of the amount. The value must be between -999,999 and +999,999 inclusive. If `units` is positive, `micros` must be positive or zero. If `units` is zero, `micros` can be positive, zero, or negative. If `units` is negative, `micros` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `micros`=-750,000.
     * @type {number}
     * @memberof OrderMoney
     */
    'micros'?: number;
}
