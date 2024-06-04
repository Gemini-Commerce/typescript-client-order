export * from '../models/CreateOrderRequestInitialPayment';
export * from '../models/ImportOrderRequestImportedPayment';
export * from '../models/InitialPaymentInitialTransaction';
export * from '../models/OrderApproveOrderRequest';
export * from '../models/OrderAssignShipmentRequest';
export * from '../models/OrderByDirection';
export * from '../models/OrderCalculateRefundRequest';
export * from '../models/OrderCalculateRefundResponse';
export * from '../models/OrderCancelFulfillmentRequest';
export * from '../models/OrderCancelOrderRequest';
export * from '../models/OrderCancelShipmentRequest';
export * from '../models/OrderCompleteShipmentPackingRequest';
export * from '../models/OrderCreateFulfillmentRequest';
export * from '../models/OrderCreateHistoryRequest';
export * from '../models/OrderCreateOrderRequest';
export * from '../models/OrderCreatePaymentRequest';
export * from '../models/OrderCreatePaymentTransactionRequest';
export * from '../models/OrderCreateRefundRequest';
export * from '../models/OrderCreateRefundTransactionRequest';
export * from '../models/OrderCreateShipmentRequest';
export * from '../models/OrderCurrency';
export * from '../models/OrderDataCustomerInfo';
export * from '../models/OrderDataHistory';
export * from '../models/OrderDataPaymentInfo';
export * from '../models/OrderDataPromotionInfo';
export * from '../models/OrderDataShipmentInfo';
export * from '../models/OrderDataSubtotal';
export * from '../models/OrderDataSubtotalCode';
export * from '../models/OrderDataTotal';
export * from '../models/OrderDataTotalCode';
export * from '../models/OrderDeleteOrderRequest';
export * from '../models/OrderFulfillment';
export * from '../models/OrderFulfillmentItem';
export * from '../models/OrderGetFulfillmentRequest';
export * from '../models/OrderGetOrderByCartIdRequest';
export * from '../models/OrderGetOrderByOrderNumberRequest';
export * from '../models/OrderGetOrderRequest';
export * from '../models/OrderGetPaymentRequest';
export * from '../models/OrderGetShipmentRequest';
export * from '../models/OrderGetTransactionRequest';
export * from '../models/OrderHoldOrderRequest';
export * from '../models/OrderImportOrderRequest';
export * from '../models/OrderListFulfillmentsRequest';
export * from '../models/OrderListFulfillmentsResponse';
export * from '../models/OrderListOrdersByCustomerRequest';
export * from '../models/OrderListOrdersByCustomerResponse';
export * from '../models/OrderListOrdersByNumbersRequest';
export * from '../models/OrderListOrdersByNumbersResponse';
export * from '../models/OrderListOrdersRequest';
export * from '../models/OrderListOrdersResponse';
export * from '../models/OrderListShipmentsRequest';
export * from '../models/OrderListShipmentsResponse';
export * from '../models/OrderLocalizedText';
export * from '../models/OrderMoney';
export * from '../models/OrderOrderBy';
export * from '../models/OrderOrderData';
export * from '../models/OrderOrderDataItem';
export * from '../models/OrderPayment';
export * from '../models/OrderPaymentAmount';
export * from '../models/OrderPaymentAmountCode';
export * from '../models/OrderPaymentFilter';
export * from '../models/OrderPaymentFilterCondition';
export * from '../models/OrderPostalAddress';
export * from '../models/OrderPrintOrdersLabelsRequest';
export * from '../models/OrderPrintOrdersLabelsResponse';
export * from '../models/OrderQuashFulfillmentRequest';
export * from '../models/OrderQuashShipmentRequest';
export * from '../models/OrderReceiveFulfillmentRequest';
export * from '../models/OrderRefund';
export * from '../models/OrderRefundAmount';
export * from '../models/OrderRefundAmountCode';
export * from '../models/OrderRefundItem';
export * from '../models/OrderReportFulfillmentErrorRequest';
export * from '../models/OrderReportFulfillmentNotResolvableRequest';
export * from '../models/OrderReportFulfillmentReadyRequest';
export * from '../models/OrderReportShipmentDeliveryRequest';
export * from '../models/OrderReportShipmentMissingStockRequest';
export * from '../models/OrderResolveShipmentMissingStockRequest';
export * from '../models/OrderRetryFulfillmentRequest';
export * from '../models/OrderSearchOrdersRequest';
export * from '../models/OrderSearchOrdersResponse';
export * from '../models/OrderSendFulfillmentRequest';
export * from '../models/OrderSendOrderNotificationRequest';
export * from '../models/OrderShipment';
export * from '../models/OrderShipmentItem';
export * from '../models/OrderStartFulfillmentProcessingRequest';
export * from '../models/OrderStartShipmentProcessingRequest';
export * from '../models/OrderStatusFilter';
export * from '../models/OrderStatusFilterCondition';
export * from '../models/OrderTransaction';
export * from '../models/OrderTransactionType';
export * from '../models/OrderUnholdOrderRequest';
export * from '../models/OrderUpdateOrderRequest';
export * from '../models/OrderUpdatePaymentRequest';
export * from '../models/PaymentCcInfo';
export * from '../models/PrintOrdersLabelsResponseFailedOrder';
export * from '../models/ProtobufAny';
export * from '../models/ProtobufNullValue';
export * from '../models/RpcStatus';
export * from '../models/ShipmentTracking';
export * from '../models/UpdateOrderRequestPayload';

import { CreateOrderRequestInitialPayment } from '../models/CreateOrderRequestInitialPayment';
import { ImportOrderRequestImportedPayment } from '../models/ImportOrderRequestImportedPayment';
import { InitialPaymentInitialTransaction   } from '../models/InitialPaymentInitialTransaction';
import { OrderApproveOrderRequest } from '../models/OrderApproveOrderRequest';
import { OrderAssignShipmentRequest } from '../models/OrderAssignShipmentRequest';
import { OrderByDirection } from '../models/OrderByDirection';
import { OrderCalculateRefundRequest } from '../models/OrderCalculateRefundRequest';
import { OrderCalculateRefundResponse } from '../models/OrderCalculateRefundResponse';
import { OrderCancelFulfillmentRequest } from '../models/OrderCancelFulfillmentRequest';
import { OrderCancelOrderRequest } from '../models/OrderCancelOrderRequest';
import { OrderCancelShipmentRequest } from '../models/OrderCancelShipmentRequest';
import { OrderCompleteShipmentPackingRequest } from '../models/OrderCompleteShipmentPackingRequest';
import { OrderCreateFulfillmentRequest } from '../models/OrderCreateFulfillmentRequest';
import { OrderCreateHistoryRequest } from '../models/OrderCreateHistoryRequest';
import { OrderCreateOrderRequest                     } from '../models/OrderCreateOrderRequest';
import { OrderCreatePaymentRequest } from '../models/OrderCreatePaymentRequest';
import { OrderCreatePaymentTransactionRequest     } from '../models/OrderCreatePaymentTransactionRequest';
import { OrderCreateRefundRequest } from '../models/OrderCreateRefundRequest';
import { OrderCreateRefundTransactionRequest      } from '../models/OrderCreateRefundTransactionRequest';
import { OrderCreateShipmentRequest } from '../models/OrderCreateShipmentRequest';
import { OrderCurrency } from '../models/OrderCurrency';
import { OrderDataCustomerInfo } from '../models/OrderDataCustomerInfo';
import { OrderDataHistory } from '../models/OrderDataHistory';
import { OrderDataPaymentInfo } from '../models/OrderDataPaymentInfo';
import { OrderDataPromotionInfo } from '../models/OrderDataPromotionInfo';
import { OrderDataShipmentInfo } from '../models/OrderDataShipmentInfo';
import { OrderDataSubtotal   } from '../models/OrderDataSubtotal';
import { OrderDataSubtotalCode } from '../models/OrderDataSubtotalCode';
import { OrderDataTotal   } from '../models/OrderDataTotal';
import { OrderDataTotalCode } from '../models/OrderDataTotalCode';
import { OrderDeleteOrderRequest } from '../models/OrderDeleteOrderRequest';
import { OrderFulfillment } from '../models/OrderFulfillment';
import { OrderFulfillmentItem } from '../models/OrderFulfillmentItem';
import { OrderGetFulfillmentRequest } from '../models/OrderGetFulfillmentRequest';
import { OrderGetOrderByCartIdRequest } from '../models/OrderGetOrderByCartIdRequest';
import { OrderGetOrderByOrderNumberRequest } from '../models/OrderGetOrderByOrderNumberRequest';
import { OrderGetOrderRequest } from '../models/OrderGetOrderRequest';
import { OrderGetPaymentRequest } from '../models/OrderGetPaymentRequest';
import { OrderGetShipmentRequest } from '../models/OrderGetShipmentRequest';
import { OrderGetTransactionRequest } from '../models/OrderGetTransactionRequest';
import { OrderHoldOrderRequest } from '../models/OrderHoldOrderRequest';
import { OrderImportOrderRequest                  } from '../models/OrderImportOrderRequest';
import { OrderListFulfillmentsRequest } from '../models/OrderListFulfillmentsRequest';
import { OrderListFulfillmentsResponse } from '../models/OrderListFulfillmentsResponse';
import { OrderListOrdersByCustomerRequest } from '../models/OrderListOrdersByCustomerRequest';
import { OrderListOrdersByCustomerResponse } from '../models/OrderListOrdersByCustomerResponse';
import { OrderListOrdersByNumbersRequest } from '../models/OrderListOrdersByNumbersRequest';
import { OrderListOrdersByNumbersResponse } from '../models/OrderListOrdersByNumbersResponse';
import { OrderListOrdersRequest } from '../models/OrderListOrdersRequest';
import { OrderListOrdersResponse } from '../models/OrderListOrdersResponse';
import { OrderListShipmentsRequest } from '../models/OrderListShipmentsRequest';
import { OrderListShipmentsResponse } from '../models/OrderListShipmentsResponse';
import { OrderLocalizedText } from '../models/OrderLocalizedText';
import { OrderMoney } from '../models/OrderMoney';
import { OrderOrderBy   } from '../models/OrderOrderBy';
import { OrderOrderData                                } from '../models/OrderOrderData';
import { OrderOrderDataItem } from '../models/OrderOrderDataItem';
import { OrderPayment } from '../models/OrderPayment';
import { OrderPaymentAmount   } from '../models/OrderPaymentAmount';
import { OrderPaymentAmountCode } from '../models/OrderPaymentAmountCode';
import { OrderPaymentFilter   } from '../models/OrderPaymentFilter';
import { OrderPaymentFilterCondition } from '../models/OrderPaymentFilterCondition';
import { OrderPostalAddress } from '../models/OrderPostalAddress';
import { OrderPrintOrdersLabelsRequest } from '../models/OrderPrintOrdersLabelsRequest';
import { OrderPrintOrdersLabelsResponse } from '../models/OrderPrintOrdersLabelsResponse';
import { OrderQuashFulfillmentRequest } from '../models/OrderQuashFulfillmentRequest';
import { OrderQuashShipmentRequest } from '../models/OrderQuashShipmentRequest';
import { OrderReceiveFulfillmentRequest } from '../models/OrderReceiveFulfillmentRequest';
import { OrderRefund } from '../models/OrderRefund';
import { OrderRefundAmount   } from '../models/OrderRefundAmount';
import { OrderRefundAmountCode } from '../models/OrderRefundAmountCode';
import { OrderRefundItem } from '../models/OrderRefundItem';
import { OrderReportFulfillmentErrorRequest } from '../models/OrderReportFulfillmentErrorRequest';
import { OrderReportFulfillmentNotResolvableRequest } from '../models/OrderReportFulfillmentNotResolvableRequest';
import { OrderReportFulfillmentReadyRequest } from '../models/OrderReportFulfillmentReadyRequest';
import { OrderReportShipmentDeliveryRequest } from '../models/OrderReportShipmentDeliveryRequest';
import { OrderReportShipmentMissingStockRequest } from '../models/OrderReportShipmentMissingStockRequest';
import { OrderResolveShipmentMissingStockRequest } from '../models/OrderResolveShipmentMissingStockRequest';
import { OrderRetryFulfillmentRequest } from '../models/OrderRetryFulfillmentRequest';
import { OrderSearchOrdersRequest } from '../models/OrderSearchOrdersRequest';
import { OrderSearchOrdersResponse } from '../models/OrderSearchOrdersResponse';
import { OrderSendFulfillmentRequest } from '../models/OrderSendFulfillmentRequest';
import { OrderSendOrderNotificationRequest } from '../models/OrderSendOrderNotificationRequest';
import { OrderShipment } from '../models/OrderShipment';
import { OrderShipmentItem } from '../models/OrderShipmentItem';
import { OrderStartFulfillmentProcessingRequest } from '../models/OrderStartFulfillmentProcessingRequest';
import { OrderStartShipmentProcessingRequest } from '../models/OrderStartShipmentProcessingRequest';
import { OrderStatusFilter   } from '../models/OrderStatusFilter';
import { OrderStatusFilterCondition } from '../models/OrderStatusFilterCondition';
import { OrderTransaction       } from '../models/OrderTransaction';
import { OrderTransactionType } from '../models/OrderTransactionType';
import { OrderUnholdOrderRequest } from '../models/OrderUnholdOrderRequest';
import { OrderUpdateOrderRequest } from '../models/OrderUpdateOrderRequest';
import { OrderUpdatePaymentRequest } from '../models/OrderUpdatePaymentRequest';
import { PaymentCcInfo } from '../models/PaymentCcInfo';
import { PrintOrdersLabelsResponseFailedOrder } from '../models/PrintOrdersLabelsResponseFailedOrder';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { ShipmentTracking } from '../models/ShipmentTracking';
import { UpdateOrderRequestPayload } from '../models/UpdateOrderRequestPayload';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "OrderByDirection",
    "OrderCurrency",
    "OrderDataSubtotalCode",
    "OrderDataTotalCode",
    "OrderPaymentAmountCode",
    "OrderPaymentFilterCondition",
    "OrderRefundAmountCode",
    "OrderStatusFilterCondition",
    "OrderTransactionType",
    "ProtobufNullValue",
]);

let typeMap: {[index: string]: any} = {
    "CreateOrderRequestInitialPayment": CreateOrderRequestInitialPayment,
    "ImportOrderRequestImportedPayment": ImportOrderRequestImportedPayment,
    "InitialPaymentInitialTransaction": InitialPaymentInitialTransaction,
    "OrderApproveOrderRequest": OrderApproveOrderRequest,
    "OrderAssignShipmentRequest": OrderAssignShipmentRequest,
    "OrderCalculateRefundRequest": OrderCalculateRefundRequest,
    "OrderCalculateRefundResponse": OrderCalculateRefundResponse,
    "OrderCancelFulfillmentRequest": OrderCancelFulfillmentRequest,
    "OrderCancelOrderRequest": OrderCancelOrderRequest,
    "OrderCancelShipmentRequest": OrderCancelShipmentRequest,
    "OrderCompleteShipmentPackingRequest": OrderCompleteShipmentPackingRequest,
    "OrderCreateFulfillmentRequest": OrderCreateFulfillmentRequest,
    "OrderCreateHistoryRequest": OrderCreateHistoryRequest,
    "OrderCreateOrderRequest": OrderCreateOrderRequest,
    "OrderCreatePaymentRequest": OrderCreatePaymentRequest,
    "OrderCreatePaymentTransactionRequest": OrderCreatePaymentTransactionRequest,
    "OrderCreateRefundRequest": OrderCreateRefundRequest,
    "OrderCreateRefundTransactionRequest": OrderCreateRefundTransactionRequest,
    "OrderCreateShipmentRequest": OrderCreateShipmentRequest,
    "OrderDataCustomerInfo": OrderDataCustomerInfo,
    "OrderDataHistory": OrderDataHistory,
    "OrderDataPaymentInfo": OrderDataPaymentInfo,
    "OrderDataPromotionInfo": OrderDataPromotionInfo,
    "OrderDataShipmentInfo": OrderDataShipmentInfo,
    "OrderDataSubtotal": OrderDataSubtotal,
    "OrderDataTotal": OrderDataTotal,
    "OrderDeleteOrderRequest": OrderDeleteOrderRequest,
    "OrderFulfillment": OrderFulfillment,
    "OrderFulfillmentItem": OrderFulfillmentItem,
    "OrderGetFulfillmentRequest": OrderGetFulfillmentRequest,
    "OrderGetOrderByCartIdRequest": OrderGetOrderByCartIdRequest,
    "OrderGetOrderByOrderNumberRequest": OrderGetOrderByOrderNumberRequest,
    "OrderGetOrderRequest": OrderGetOrderRequest,
    "OrderGetPaymentRequest": OrderGetPaymentRequest,
    "OrderGetShipmentRequest": OrderGetShipmentRequest,
    "OrderGetTransactionRequest": OrderGetTransactionRequest,
    "OrderHoldOrderRequest": OrderHoldOrderRequest,
    "OrderImportOrderRequest": OrderImportOrderRequest,
    "OrderListFulfillmentsRequest": OrderListFulfillmentsRequest,
    "OrderListFulfillmentsResponse": OrderListFulfillmentsResponse,
    "OrderListOrdersByCustomerRequest": OrderListOrdersByCustomerRequest,
    "OrderListOrdersByCustomerResponse": OrderListOrdersByCustomerResponse,
    "OrderListOrdersByNumbersRequest": OrderListOrdersByNumbersRequest,
    "OrderListOrdersByNumbersResponse": OrderListOrdersByNumbersResponse,
    "OrderListOrdersRequest": OrderListOrdersRequest,
    "OrderListOrdersResponse": OrderListOrdersResponse,
    "OrderListShipmentsRequest": OrderListShipmentsRequest,
    "OrderListShipmentsResponse": OrderListShipmentsResponse,
    "OrderLocalizedText": OrderLocalizedText,
    "OrderMoney": OrderMoney,
    "OrderOrderBy": OrderOrderBy,
    "OrderOrderData": OrderOrderData,
    "OrderOrderDataItem": OrderOrderDataItem,
    "OrderPayment": OrderPayment,
    "OrderPaymentAmount": OrderPaymentAmount,
    "OrderPaymentFilter": OrderPaymentFilter,
    "OrderPostalAddress": OrderPostalAddress,
    "OrderPrintOrdersLabelsRequest": OrderPrintOrdersLabelsRequest,
    "OrderPrintOrdersLabelsResponse": OrderPrintOrdersLabelsResponse,
    "OrderQuashFulfillmentRequest": OrderQuashFulfillmentRequest,
    "OrderQuashShipmentRequest": OrderQuashShipmentRequest,
    "OrderReceiveFulfillmentRequest": OrderReceiveFulfillmentRequest,
    "OrderRefund": OrderRefund,
    "OrderRefundAmount": OrderRefundAmount,
    "OrderRefundItem": OrderRefundItem,
    "OrderReportFulfillmentErrorRequest": OrderReportFulfillmentErrorRequest,
    "OrderReportFulfillmentNotResolvableRequest": OrderReportFulfillmentNotResolvableRequest,
    "OrderReportFulfillmentReadyRequest": OrderReportFulfillmentReadyRequest,
    "OrderReportShipmentDeliveryRequest": OrderReportShipmentDeliveryRequest,
    "OrderReportShipmentMissingStockRequest": OrderReportShipmentMissingStockRequest,
    "OrderResolveShipmentMissingStockRequest": OrderResolveShipmentMissingStockRequest,
    "OrderRetryFulfillmentRequest": OrderRetryFulfillmentRequest,
    "OrderSearchOrdersRequest": OrderSearchOrdersRequest,
    "OrderSearchOrdersResponse": OrderSearchOrdersResponse,
    "OrderSendFulfillmentRequest": OrderSendFulfillmentRequest,
    "OrderSendOrderNotificationRequest": OrderSendOrderNotificationRequest,
    "OrderShipment": OrderShipment,
    "OrderShipmentItem": OrderShipmentItem,
    "OrderStartFulfillmentProcessingRequest": OrderStartFulfillmentProcessingRequest,
    "OrderStartShipmentProcessingRequest": OrderStartShipmentProcessingRequest,
    "OrderStatusFilter": OrderStatusFilter,
    "OrderTransaction": OrderTransaction,
    "OrderUnholdOrderRequest": OrderUnholdOrderRequest,
    "OrderUpdateOrderRequest": OrderUpdateOrderRequest,
    "OrderUpdatePaymentRequest": OrderUpdatePaymentRequest,
    "PaymentCcInfo": PaymentCcInfo,
    "PrintOrdersLabelsResponseFailedOrder": PrintOrdersLabelsResponseFailedOrder,
    "ProtobufAny": ProtobufAny,
    "RpcStatus": RpcStatus,
    "ShipmentTracking": ShipmentTracking,
    "UpdateOrderRequestPayload": UpdateOrderRequestPayload,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
