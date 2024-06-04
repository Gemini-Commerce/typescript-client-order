/* tslint:disable */
/* eslint-disable */
/**
 * order Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface OrderOrderData
 */
export interface OrderOrderData {
    /**
     * 
     * @type {Date}
     * @memberof OrderOrderData
     */
    'createdAt'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrderOrderData
     */
    'updatedAt'?: Date;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'grn'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'number'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'channel'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'market'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'locale'?: string;
    /**
     * 
     * @type {object}
     * @memberof OrderOrderData
     */
    'additionalInfo'?: object;
    /**
     * 
     * @type {Array<OrderOrderDataItem>}
     * @memberof OrderOrderData
     */
    'items'?: Array<OrderOrderDataItem>;
    /**
     * 
     * @type {Array<OrderPayment>}
     * @memberof OrderOrderData
     */
    'payments'?: Array<OrderPayment>;
    /**
     * 
     * @type {Array<OrderShipment>}
     * @memberof OrderOrderData
     */
    'shipments'?: Array<OrderShipment>;
    /**
     * 
     * @type {Array<OrderDataPaymentInfo>}
     * @memberof OrderOrderData
     */
    'paymentsInfo'?: Array<OrderDataPaymentInfo>;
    /**
     * 
     * @type {Array<OrderDataShipmentInfo>}
     * @memberof OrderOrderData
     */
    'shipmentsInfo'?: Array<OrderDataShipmentInfo>;
    /**
     * 
     * @type {Array<OrderDataPromotionInfo>}
     * @memberof OrderOrderData
     */
    'promotions'?: Array<OrderDataPromotionInfo>;
    /**
     * 
     * @type {OrderCurrency}
     * @memberof OrderOrderData
     */
    'currency'?: OrderCurrency;
    /**
     * 
     * @type {{ [key: string]: OrderDataSubtotal; }}
     * @memberof OrderOrderData
     */
    'subtotals'?: { [key: string]: OrderDataSubtotal; };
    /**
     * 
     * @type {{ [key: string]: OrderDataTotal; }}
     * @memberof OrderOrderData
     */
    'totals'?: { [key: string]: OrderDataTotal; };
    /**
     * 
     * @type {boolean}
     * @memberof OrderOrderData
     */
    'vatIncluded'?: boolean;
    /**
     * 
     * @type {OrderPostalAddress}
     * @memberof OrderOrderData
     */
    'billingAddress'?: OrderPostalAddress;
    /**
     * 
     * @type {OrderPostalAddress}
     * @memberof OrderOrderData
     */
    'shippingAddress'?: OrderPostalAddress;
    /**
     * 
     * @type {OrderDataCustomerInfo}
     * @memberof OrderOrderData
     */
    'customerInfo'?: OrderDataCustomerInfo;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'cartGrn'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderOrderData
     */
    'onHold'?: boolean;
    /**
     * 
     * @type {Array<OrderDataHistory>}
     * @memberof OrderOrderData
     */
    'historyEvents'?: Array<OrderDataHistory>;
    /**
     * 
     * @type {Array<OrderFulfillment>}
     * @memberof OrderOrderData
     */
    'fulfillments'?: Array<OrderFulfillment>;
    /**
     * 
     * @type {string}
     * @memberof OrderOrderData
     */
    'notes'?: string;
    /**
     * this field is used to delete an order in \"soft-delete mode\". This field must be used from get/list endpoint to exclude these orders.
     * @type {boolean}
     * @memberof OrderOrderData
     */
    'isDeleted'?: boolean;
    /**
     * this field is used to save the original created_at order date. The created_at field is used to filter data.
     * @type {Date}
     * @memberof OrderOrderData
     */
    'insertedAt'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrderOrderData
     */
    'deletedAt'?: Date;
}
