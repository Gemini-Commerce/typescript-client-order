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
 * @interface OrderCancelFulfillmentRequest
 */
export interface OrderCancelFulfillmentRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderCancelFulfillmentRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCancelFulfillmentRequest
     */
    'fulfillmentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderCancelFulfillmentRequest
     */
    'reason'?: string;
}
