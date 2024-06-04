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

import { OrderMoney } from '../models/OrderMoney';
import { OrderPostalAddress } from '../models/OrderPostalAddress';
import { HttpFile } from '../http/http';

export class OrderDataShipmentInfo {
    'reference': string;
    'code': string;
    'method'?: string;
    'title'?: string;
    'additionalInfo'?: string;
    'amount': OrderMoney;
    'fee'?: OrderMoney;
    'vatAmount'?: OrderMoney;
    'vatPercentage'?: number;
    'vatInaccurate'?: boolean;
    'vatCalculated'?: boolean;
    'grn'?: string;
    'fromAddress'?: OrderPostalAddress;
    'returnAddress'?: OrderPostalAddress;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "vatAmount",
            "baseName": "vatAmount",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "vatPercentage",
            "baseName": "vatPercentage",
            "type": "number",
            "format": "float"
        },
        {
            "name": "vatInaccurate",
            "baseName": "vatInaccurate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vatCalculated",
            "baseName": "vatCalculated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromAddress",
            "baseName": "fromAddress",
            "type": "OrderPostalAddress",
            "format": ""
        },
        {
            "name": "returnAddress",
            "baseName": "returnAddress",
            "type": "OrderPostalAddress",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderDataShipmentInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

