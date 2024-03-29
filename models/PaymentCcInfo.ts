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

export class PaymentCcInfo {
    'approval'?: string;
    'expMonth'?: number;
    'expYear'?: string;
    'last4'?: string;
    'numberEnc'?: string;
    'owner'?: string;
    'avsStatus'?: string;
    /**
    * card type MasterCard, Visa..
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "approval",
            "baseName": "approval",
            "type": "string",
            "format": ""
        },
        {
            "name": "expMonth",
            "baseName": "expMonth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "expYear",
            "baseName": "expYear",
            "type": "string",
            "format": ""
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberEnc",
            "baseName": "numberEnc",
            "type": "string",
            "format": ""
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string",
            "format": ""
        },
        {
            "name": "avsStatus",
            "baseName": "avsStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentCcInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

