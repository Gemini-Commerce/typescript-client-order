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

import { OrderTransactionType } from '../models/OrderTransactionType';
import { HttpFile } from '../http/http';

export class OrderCreatePaymentTransactionRequest {
    'tenantId': string;
    'paymentId': string;
    'type': OrderTransactionType;
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
            "name": "type",
            "baseName": "type",
            "type": "OrderTransactionType",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderCreatePaymentTransactionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



