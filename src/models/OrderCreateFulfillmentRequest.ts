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
 * @interface OrderCreateFulfillmentRequest
 */
export interface OrderCreateFulfillmentRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderCreateFulfillmentRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {string}
     * @memberof OrderCreateFulfillmentRequest
     */
    'orderId': string;
    /**
     * 
     * @type {Array<OrderFulfillmentItem>}
     * @memberof OrderCreateFulfillmentRequest
     */
    'items': Array<OrderFulfillmentItem>;
}
