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

import { OrderRefundAmount } from '../models/OrderRefundAmount';
import { OrderRefundItem } from '../models/OrderRefundItem';
import { HttpFile } from '../http/http';

export class OrderCreateRefundRequest {
    'tenantId'?: string;
    'paymentId'?: string;
    'items'?: Array<OrderRefundItem>;
    'amounts'?: Array<OrderRefundAmount>;
    'note'?: string;
    'additionalInfo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<OrderRefundItem>",
            "format": ""
        },
        {
            "name": "amounts",
            "baseName": "amounts",
            "type": "Array<OrderRefundAmount>",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderCreateRefundRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
