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
import { OrderPaymentAmountCode } from '../models/OrderPaymentAmountCode';
import { HttpFile } from '../http/http';

export class OrderPaymentAmount {
    'code'?: OrderPaymentAmountCode;
    'value'?: OrderMoney;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "OrderPaymentAmountCode",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "OrderMoney",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderPaymentAmount.attributeTypeMap;
    }

    public constructor() {
    }
}



