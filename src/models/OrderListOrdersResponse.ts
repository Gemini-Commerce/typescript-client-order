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
 * @interface OrderListOrdersResponse
 */
export interface OrderListOrdersResponse {
    /**
     * 
     * @type {Array<OrderOrderData>}
     * @memberof OrderListOrdersResponse
     */
    'orders'?: Array<OrderOrderData>;
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     * @type {string}
     * @memberof OrderListOrdersResponse
     */
    'nextPageToken'?: string;
}