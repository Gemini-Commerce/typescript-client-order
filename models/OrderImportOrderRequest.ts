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

import { ImportOrderRequestImportedPayment } from '../models/ImportOrderRequestImportedPayment';
import { OrderCurrency } from '../models/OrderCurrency';
import { OrderDataCustomerInfo } from '../models/OrderDataCustomerInfo';
import { OrderDataPaymentInfo } from '../models/OrderDataPaymentInfo';
import { OrderDataShipmentInfo } from '../models/OrderDataShipmentInfo';
import { OrderDataSubtotal } from '../models/OrderDataSubtotal';
import { OrderDataTotal } from '../models/OrderDataTotal';
import { OrderOrderDataItem } from '../models/OrderOrderDataItem';
import { OrderPostalAddress } from '../models/OrderPostalAddress';
import { HttpFile } from '../http/http';

export class OrderImportOrderRequest {
    'tenantId': string;
    'createdAt'?: Date;
    'number': string;
    'channel'?: string;
    'market': string;
    'locale': string;
    'customerInfo': OrderDataCustomerInfo;
    'shippingAddress': OrderPostalAddress;
    'billingAddress': OrderPostalAddress;
    'payments': Array<ImportOrderRequestImportedPayment>;
    'paymentsInfo': Array<OrderDataPaymentInfo>;
    'shipmentsInfo': Array<OrderDataShipmentInfo>;
    'items': Array<OrderOrderDataItem>;
    'subtotals': { [key: string]: OrderDataSubtotal; };
    'totals': { [key: string]: OrderDataTotal; };
    'status': string;
    'currency': OrderCurrency;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string",
            "format": ""
        },
        {
            "name": "market",
            "baseName": "market",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerInfo",
            "baseName": "customerInfo",
            "type": "OrderDataCustomerInfo",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "OrderPostalAddress",
            "format": ""
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "OrderPostalAddress",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<ImportOrderRequestImportedPayment>",
            "format": ""
        },
        {
            "name": "paymentsInfo",
            "baseName": "paymentsInfo",
            "type": "Array<OrderDataPaymentInfo>",
            "format": ""
        },
        {
            "name": "shipmentsInfo",
            "baseName": "shipmentsInfo",
            "type": "Array<OrderDataShipmentInfo>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<OrderOrderDataItem>",
            "format": ""
        },
        {
            "name": "subtotals",
            "baseName": "subtotals",
            "type": "{ [key: string]: OrderDataSubtotal; }",
            "format": ""
        },
        {
            "name": "totals",
            "baseName": "totals",
            "type": "{ [key: string]: OrderDataTotal; }",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "OrderCurrency",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OrderImportOrderRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



