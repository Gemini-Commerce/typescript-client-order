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

import { HttpFile } from '../http/http';

export class OrderStartFulfillmentProcessingRequest {
    'tenantId'?: string;
    'fulfillmentId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "fulfillmentId",
            "baseName": "fulfillmentId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderStartFulfillmentProcessingRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

