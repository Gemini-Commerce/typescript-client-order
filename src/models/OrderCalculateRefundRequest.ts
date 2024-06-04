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
 * @interface OrderCalculateRefundRequest
 */
export interface OrderCalculateRefundRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderCalculateRefundRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCalculateRefundRequest
     */
    'paymentId'?: string;
    /**
     * 
     * @type {Array<OrderRefundItem>}
     * @memberof OrderCalculateRefundRequest
     */
    'items'?: Array<OrderRefundItem>;
    /**
     * Boolean indicating whether to calculate refund for shipping.
     * @type {boolean}
     * @memberof OrderCalculateRefundRequest
     */
    'shipping'?: boolean;
}
