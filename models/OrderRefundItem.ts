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

export class OrderRefundItem {
    'orderItemId'?: string;
    'qty'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "orderItemId",
            "baseName": "orderItemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "qty",
            "baseName": "qty",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return OrderRefundItem.attributeTypeMap;
    }

    public constructor() {
    }
}

