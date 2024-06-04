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
 * @interface CreateOrderRequestInitialPayment
 */
export interface CreateOrderRequestInitialPayment {
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequestInitialPayment
     */
    'code'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrderRequestInitialPayment
     */
    'additionalInfo'?: string;
    /**
     * 
     * @type {OrderMoney}
     * @memberof CreateOrderRequestInitialPayment
     */
    'amount'?: OrderMoney;
    /**
     * 
     * @type {PaymentCcInfo}
     * @memberof CreateOrderRequestInitialPayment
     */
    'ccInfo'?: PaymentCcInfo;
    /**
     * 
     * @type {InitialPaymentInitialTransaction}
     * @memberof CreateOrderRequestInitialPayment
     */
    'transaction'?: InitialPaymentInitialTransaction;
}
