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
 * @interface OrderSearchOrdersRequest
 */
export interface OrderSearchOrdersRequest {
    /**
     * 
     * @type {string}
     * @memberof OrderSearchOrdersRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderSearchOrdersRequest
     */
    'searchQuery'?: string;
    /**
     * The maximum number of orders to return. The service may return fewer than this value. If unspecified, at most 10 orders will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @type {number}
     * @memberof OrderSearchOrdersRequest
     */
    'pageSize'?: number;
    /**
     * A page token, received from a previous `ListOrders` call. Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to `ListOrders` must match the call that provided the page token.
     * @type {string}
     * @memberof OrderSearchOrdersRequest
     */
    'pageToken'?: string;
    /**
     * 
     * @type {Array<OrderOrderBy>}
     * @memberof OrderSearchOrdersRequest
     */
    'orderBy'?: Array<OrderOrderBy>;
    /**
     * 
     * @type {OrderStatusFilter}
     * @memberof OrderSearchOrdersRequest
     */
    'statusFilter'?: OrderStatusFilter;
    /**
     * 
     * @type {Date}
     * @memberof OrderSearchOrdersRequest
     */
    'fromDate'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrderSearchOrdersRequest
     */
    'toDate'?: Date;
    /**
     * 
     * @type {OrderPaymentFilter}
     * @memberof OrderSearchOrdersRequest
     */
    'paymentFilter'?: OrderPaymentFilter;
}