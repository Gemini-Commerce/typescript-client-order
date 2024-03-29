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

import { ItemProductConfigurationStep } from '../models/ItemProductConfigurationStep';
import { OrderMoney } from '../models/OrderMoney';
import { HttpFile } from '../http/http';

export class OrderOrderDataItem {
    'id'?: string;
    'productGrn'?: string;
    'qtyOrdered'?: number;
    'qtyCommitted'?: number;
    'unitSalePrice'?: OrderMoney;
    'unitListPrice'?: OrderMoney;
    'unitBasePrice'?: OrderMoney;
    'unitVatAmount'?: OrderMoney;
    'rowSalePrice'?: OrderMoney;
    'rowListPrice'?: OrderMoney;
    'rowVatAmount'?: OrderMoney;
    'discountAmount'?: OrderMoney;
    'rowBasePrice'?: OrderMoney;
    'unitCustomPrice'?: OrderMoney;
    'rowCustomPrice'?: OrderMoney;
    'vatPercentage'?: number;
    'vatInaccurate'?: boolean;
    'vatCalculated'?: boolean;
    'productName'?: string;
    'productCode'?: string;
    'productSku'?: string;
    'productOptions'?: string;
    'productImg'?: string;
    'productData'?: string;
    'shipmentInfoReference'?: string;
    'promotionGrn'?: Array<string>;
    'productIsVirtual'?: boolean;
    'productConfiguration'?: Array<ItemProductConfigurationStep>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "productGrn",
            "baseName": "productGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "qtyOrdered",
            "baseName": "qtyOrdered",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "qtyCommitted",
            "baseName": "qtyCommitted",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unitSalePrice",
            "baseName": "unitSalePrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "unitListPrice",
            "baseName": "unitListPrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "unitBasePrice",
            "baseName": "unitBasePrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "unitVatAmount",
            "baseName": "unitVatAmount",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "rowSalePrice",
            "baseName": "rowSalePrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "rowListPrice",
            "baseName": "rowListPrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "rowVatAmount",
            "baseName": "rowVatAmount",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "discountAmount",
            "baseName": "discountAmount",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "rowBasePrice",
            "baseName": "rowBasePrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "unitCustomPrice",
            "baseName": "unitCustomPrice",
            "type": "OrderMoney",
            "format": ""
        },
        {
            "name": "rowCustomPrice",
            "baseName": "rowCustomPrice",
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
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "productSku",
            "baseName": "productSku",
            "type": "string",
            "format": ""
        },
        {
            "name": "productOptions",
            "baseName": "productOptions",
            "type": "string",
            "format": ""
        },
        {
            "name": "productImg",
            "baseName": "productImg",
            "type": "string",
            "format": ""
        },
        {
            "name": "productData",
            "baseName": "productData",
            "type": "string",
            "format": ""
        },
        {
            "name": "shipmentInfoReference",
            "baseName": "shipmentInfoReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "promotionGrn",
            "baseName": "promotionGrn",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "productIsVirtual",
            "baseName": "productIsVirtual",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "productConfiguration",
            "baseName": "productConfiguration",
            "type": "Array<ItemProductConfigurationStep>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderOrderDataItem.attributeTypeMap;
    }

    public constructor() {
    }
}

