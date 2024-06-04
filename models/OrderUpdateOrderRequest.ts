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

import { UpdateOrderRequestPayload } from '../models/UpdateOrderRequestPayload';
import { HttpFile } from '../http/http';

export class OrderUpdateOrderRequest {
    'tenantId': string;
    'id': string;
    'payload'?: UpdateOrderRequestPayload;
    'fieldMask'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "UpdateOrderRequestPayload",
            "format": ""
        },
        {
            "name": "fieldMask",
            "baseName": "fieldMask",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderUpdateOrderRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

