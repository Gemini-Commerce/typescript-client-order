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

import { OrderCurrency } from '../models/OrderCurrency';
import { OrderDataCustomerInfo } from '../models/OrderDataCustomerInfo';
import { OrderDataHistory } from '../models/OrderDataHistory';
import { OrderDataPaymentInfo } from '../models/OrderDataPaymentInfo';
import { OrderDataPromotionInfo } from '../models/OrderDataPromotionInfo';
import { OrderDataShipmentInfo } from '../models/OrderDataShipmentInfo';
import { OrderDataSubtotal } from '../models/OrderDataSubtotal';
import { OrderDataTotal } from '../models/OrderDataTotal';
import { OrderFulfillment } from '../models/OrderFulfillment';
import { OrderOrderDataItem } from '../models/OrderOrderDataItem';
import { OrderPayment } from '../models/OrderPayment';
import { OrderPostalAddress } from '../models/OrderPostalAddress';
import { OrderShipment } from '../models/OrderShipment';
import { HttpFile } from '../http/http';

export class OrderOrderData {
    'createdAt'?: Date;
    'updatedAt'?: Date;
    'id'?: string;
    'grn'?: string;
    'number'?: string;
    'status'?: string;
    'channel'?: string;
    'market'?: string;
    'locale'?: string;
    'additionalInfo'?: any;
    'items'?: Array<OrderOrderDataItem>;
    'payments'?: Array<OrderPayment>;
    'shipments'?: Array<OrderShipment>;
    'paymentsInfo'?: Array<OrderDataPaymentInfo>;
    'shipmentsInfo'?: Array<OrderDataShipmentInfo>;
    'promotions'?: Array<OrderDataPromotionInfo>;
    'currency'?: OrderCurrency;
    'subtotals'?: { [key: string]: OrderDataSubtotal; };
    'totals'?: { [key: string]: OrderDataTotal; };
    'vatIncluded'?: boolean;
    'billingAddress'?: OrderPostalAddress;
    'shippingAddress'?: OrderPostalAddress;
    'customerInfo'?: OrderDataCustomerInfo;
    'cartGrn'?: string;
    'onHold'?: boolean;
    'historyEvents'?: Array<OrderDataHistory>;
    'fulfillments'?: Array<OrderFulfillment>;
    'notes'?: string;
    /**
    * this field is used to delete an order in \"soft-delete mode\". This field must be used from get/list endpoint to exclude these orders.
    */
    'isDeleted'?: boolean;
    /**
    * this field is used to save the original created_at order date. The created_at field is used to filter data.
    */
    'insertedAt'?: Date;
    'deletedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
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
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
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
            "name": "additionalInfo",
            "baseName": "additionalInfo",
            "type": "any",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<OrderOrderDataItem>",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<OrderPayment>",
            "format": ""
        },
        {
            "name": "shipments",
            "baseName": "shipments",
            "type": "Array<OrderShipment>",
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
            "name": "promotions",
            "baseName": "promotions",
            "type": "Array<OrderDataPromotionInfo>",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "OrderCurrency",
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
            "name": "vatIncluded",
            "baseName": "vatIncluded",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "OrderPostalAddress",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shippingAddress",
            "type": "OrderPostalAddress",
            "format": ""
        },
        {
            "name": "customerInfo",
            "baseName": "customerInfo",
            "type": "OrderDataCustomerInfo",
            "format": ""
        },
        {
            "name": "cartGrn",
            "baseName": "cartGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "onHold",
            "baseName": "onHold",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "historyEvents",
            "baseName": "historyEvents",
            "type": "Array<OrderDataHistory>",
            "format": ""
        },
        {
            "name": "fulfillments",
            "baseName": "fulfillments",
            "type": "Array<OrderFulfillment>",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "insertedAt",
            "baseName": "insertedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return OrderOrderData.attributeTypeMap;
    }

    public constructor() {
    }
}


