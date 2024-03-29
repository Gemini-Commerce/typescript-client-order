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

import { OptionImage } from '../models/OptionImage';
import { OrderMoney } from '../models/OrderMoney';
import { HttpFile } from '../http/http';

export class ProductConfigurationStepOption {
    'id'?: string;
    'grn'?: string;
    'label'?: string;
    'priceVariation'?: OrderMoney;
    'image'?: OptionImage;
    'hasQuantity'?: boolean;
    'quantity'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "grn",
            "baseName": "grn",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "priceVariation",
            "baseName": "priceVariation",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "OptionImage",
            "format": ""
        },
        {
            "name": "hasQuantity",
            "baseName": "hasQuantity",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ProductConfigurationStepOption.attributeTypeMap;
    }

    public constructor() {
    }
}

