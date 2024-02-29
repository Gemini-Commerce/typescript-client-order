/**
 * order Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrderOrderBy } from '../models/OrderOrderBy';
import { HttpFile } from '../http/http';

export class OrderListOrdersByCustomerRequest {
    'tenantId': string;
    'customerGrn': string;
    /**
    * The maximum number of orders to return. The service may return fewer than this value. If unspecified, at most 10 orders will be returned. The maximum value is 100; values above 100 will be coerced to 100.
    */
    'pageSize'?: number;
    /**
    * A page token, received from a previous `ListOrders` call. Provide this to retrieve the subsequent page.   When paginating, all other parameters provided to `ListOrders` must match the call that provided the page token.
    */
    'pageToken'?: string;
    'orderBy'?: Array<OrderOrderBy>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerGrn",
            "baseName": "customerGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pageToken",
            "baseName": "pageToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderBy",
            "baseName": "orderBy",
            "type": "Array<OrderOrderBy>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderListOrdersByCustomerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

