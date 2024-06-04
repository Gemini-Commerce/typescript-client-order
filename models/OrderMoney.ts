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

export class OrderMoney {
    /**
    * The whole units of the amount. For example if `currencyCode` is `\"USD\"`, then 1 unit is one US dollar.
    */
    'units'?: string;
    /**
    * Number of micro (10^-6) units of the amount. The value must be between -999,999 and +999,999 inclusive. If `units` is positive, `micros` must be positive or zero. If `units` is zero, `micros` can be positive, zero, or negative. If `units` is negative, `micros` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `micros`=-750,000.
    */
    'micros'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "units",
            "baseName": "units",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "micros",
            "baseName": "micros",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return OrderMoney.attributeTypeMap;
    }

    public constructor() {
    }
}

