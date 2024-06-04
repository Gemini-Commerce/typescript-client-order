import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateOrderRequestInitialPayment } from '../models/CreateOrderRequestInitialPayment';
import { ImportOrderRequestImportedPayment } from '../models/ImportOrderRequestImportedPayment';
import { InitialPaymentInitialTransaction } from '../models/InitialPaymentInitialTransaction';
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
import { OrderCreateOrderRequest } from '../models/OrderCreateOrderRequest';
import { OrderCreatePaymentRequest } from '../models/OrderCreatePaymentRequest';
import { OrderCreatePaymentTransactionRequest } from '../models/OrderCreatePaymentTransactionRequest';
import { OrderCreateRefundRequest } from '../models/OrderCreateRefundRequest';
import { OrderCreateRefundTransactionRequest } from '../models/OrderCreateRefundTransactionRequest';
import { OrderCreateShipmentRequest } from '../models/OrderCreateShipmentRequest';
import { OrderCurrency } from '../models/OrderCurrency';
import { OrderDataCustomerInfo } from '../models/OrderDataCustomerInfo';
import { OrderDataHistory } from '../models/OrderDataHistory';
import { OrderDataPaymentInfo } from '../models/OrderDataPaymentInfo';
import { OrderDataPromotionInfo } from '../models/OrderDataPromotionInfo';
import { OrderDataShipmentInfo } from '../models/OrderDataShipmentInfo';
import { OrderDataSubtotal } from '../models/OrderDataSubtotal';
import { OrderDataSubtotalCode } from '../models/OrderDataSubtotalCode';
import { OrderDataTotal } from '../models/OrderDataTotal';
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
import { OrderImportOrderRequest } from '../models/OrderImportOrderRequest';
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
import { OrderOrderBy } from '../models/OrderOrderBy';
import { OrderOrderData } from '../models/OrderOrderData';
import { OrderOrderDataItem } from '../models/OrderOrderDataItem';
import { OrderPayment } from '../models/OrderPayment';
import { OrderPaymentAmount } from '../models/OrderPaymentAmount';
import { OrderPaymentAmountCode } from '../models/OrderPaymentAmountCode';
import { OrderPaymentFilter } from '../models/OrderPaymentFilter';
import { OrderPaymentFilterCondition } from '../models/OrderPaymentFilterCondition';
import { OrderPostalAddress } from '../models/OrderPostalAddress';
import { OrderPrintOrdersLabelsRequest } from '../models/OrderPrintOrdersLabelsRequest';
import { OrderPrintOrdersLabelsResponse } from '../models/OrderPrintOrdersLabelsResponse';
import { OrderQuashFulfillmentRequest } from '../models/OrderQuashFulfillmentRequest';
import { OrderQuashShipmentRequest } from '../models/OrderQuashShipmentRequest';
import { OrderReceiveFulfillmentRequest } from '../models/OrderReceiveFulfillmentRequest';
import { OrderRefund } from '../models/OrderRefund';
import { OrderRefundAmount } from '../models/OrderRefundAmount';
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
import { OrderStatusFilter } from '../models/OrderStatusFilter';
import { OrderStatusFilterCondition } from '../models/OrderStatusFilterCondition';
import { OrderTransaction } from '../models/OrderTransaction';
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

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiApproveOrderRequest {
    /**
     * 
     * @type OrderApproveOrderRequest
     * @memberof OrderApiapproveOrder
     */
    body: OrderApproveOrderRequest
}

export interface OrderApiAssignShipmentRequest {
    /**
     * 
     * @type OrderAssignShipmentRequest
     * @memberof OrderApiassignShipment
     */
    body: OrderAssignShipmentRequest
}

export interface OrderApiCalculateRefundRequest {
    /**
     * 
     * @type OrderCalculateRefundRequest
     * @memberof OrderApicalculateRefund
     */
    body: OrderCalculateRefundRequest
}

export interface OrderApiCancelFulfillmentRequest {
    /**
     * 
     * @type OrderCancelFulfillmentRequest
     * @memberof OrderApicancelFulfillment
     */
    body: OrderCancelFulfillmentRequest
}

export interface OrderApiCancelOrderRequest {
    /**
     * 
     * @type OrderCancelOrderRequest
     * @memberof OrderApicancelOrder
     */
    body: OrderCancelOrderRequest
}

export interface OrderApiCancelShipmentRequest {
    /**
     * 
     * @type OrderCancelShipmentRequest
     * @memberof OrderApicancelShipment
     */
    body: OrderCancelShipmentRequest
}

export interface OrderApiCompleteShipmentPackingRequest {
    /**
     * 
     * @type OrderCompleteShipmentPackingRequest
     * @memberof OrderApicompleteShipmentPacking
     */
    body: OrderCompleteShipmentPackingRequest
}

export interface OrderApiCreateFulfillmentRequest {
    /**
     * 
     * @type OrderCreateFulfillmentRequest
     * @memberof OrderApicreateFulfillment
     */
    body: OrderCreateFulfillmentRequest
}

export interface OrderApiCreateOrderRequest {
    /**
     * 
     * @type OrderCreateOrderRequest
     * @memberof OrderApicreateOrder
     */
    body: OrderCreateOrderRequest
}

export interface OrderApiCreateOrderHistoryRequest {
    /**
     * 
     * @type OrderCreateHistoryRequest
     * @memberof OrderApicreateOrderHistory
     */
    body: OrderCreateHistoryRequest
}

export interface OrderApiCreatePaymentRequest {
    /**
     * 
     * @type OrderCreatePaymentRequest
     * @memberof OrderApicreatePayment
     */
    body: OrderCreatePaymentRequest
}

export interface OrderApiCreatePaymentTransactionRequest {
    /**
     * 
     * @type OrderCreatePaymentTransactionRequest
     * @memberof OrderApicreatePaymentTransaction
     */
    body: OrderCreatePaymentTransactionRequest
}

export interface OrderApiCreateRefundRequest {
    /**
     * 
     * @type OrderCreateRefundRequest
     * @memberof OrderApicreateRefund
     */
    body: OrderCreateRefundRequest
}

export interface OrderApiCreateRefundTransactionRequest {
    /**
     * 
     * @type OrderCreateRefundTransactionRequest
     * @memberof OrderApicreateRefundTransaction
     */
    body: OrderCreateRefundTransactionRequest
}

export interface OrderApiCreateShipmentRequest {
    /**
     * 
     * @type OrderCreateShipmentRequest
     * @memberof OrderApicreateShipment
     */
    body: OrderCreateShipmentRequest
}

export interface OrderApiDeleteOrderRequest {
    /**
     * 
     * @type OrderDeleteOrderRequest
     * @memberof OrderApideleteOrder
     */
    body: OrderDeleteOrderRequest
}

export interface OrderApiGetFulfillmentRequest {
    /**
     * 
     * @type OrderGetFulfillmentRequest
     * @memberof OrderApigetFulfillment
     */
    body: OrderGetFulfillmentRequest
}

export interface OrderApiGetOrderRequest {
    /**
     * 
     * @type OrderGetOrderRequest
     * @memberof OrderApigetOrder
     */
    body: OrderGetOrderRequest
}

export interface OrderApiGetOrderByCartIdRequest {
    /**
     * 
     * @type OrderGetOrderByCartIdRequest
     * @memberof OrderApigetOrderByCartId
     */
    body: OrderGetOrderByCartIdRequest
}

export interface OrderApiGetOrderByOrderNumberRequest {
    /**
     * 
     * @type OrderGetOrderByOrderNumberRequest
     * @memberof OrderApigetOrderByOrderNumber
     */
    body: OrderGetOrderByOrderNumberRequest
}

export interface OrderApiGetPaymentRequest {
    /**
     * 
     * @type OrderGetPaymentRequest
     * @memberof OrderApigetPayment
     */
    body: OrderGetPaymentRequest
}

export interface OrderApiGetShipmentRequest {
    /**
     * 
     * @type OrderGetShipmentRequest
     * @memberof OrderApigetShipment
     */
    body: OrderGetShipmentRequest
}

export interface OrderApiGetTransactionRequest {
    /**
     * 
     * @type OrderGetTransactionRequest
     * @memberof OrderApigetTransaction
     */
    body: OrderGetTransactionRequest
}

export interface OrderApiHoldOrderRequest {
    /**
     * 
     * @type OrderHoldOrderRequest
     * @memberof OrderApiholdOrder
     */
    body: OrderHoldOrderRequest
}

export interface OrderApiImportOrderRequest {
    /**
     * 
     * @type OrderImportOrderRequest
     * @memberof OrderApiimportOrder
     */
    body: OrderImportOrderRequest
}

export interface OrderApiListFulfillmentsRequest {
    /**
     * 
     * @type OrderListFulfillmentsRequest
     * @memberof OrderApilistFulfillments
     */
    body: OrderListFulfillmentsRequest
}

export interface OrderApiListOrdersRequest {
    /**
     * 
     * @type OrderListOrdersRequest
     * @memberof OrderApilistOrders
     */
    body: OrderListOrdersRequest
}

export interface OrderApiListOrdersByCustomerRequest {
    /**
     * 
     * @type OrderListOrdersByCustomerRequest
     * @memberof OrderApilistOrdersByCustomer
     */
    body: OrderListOrdersByCustomerRequest
}

export interface OrderApiListOrdersByNumbersRequest {
    /**
     * 
     * @type OrderListOrdersByNumbersRequest
     * @memberof OrderApilistOrdersByNumbers
     */
    body: OrderListOrdersByNumbersRequest
}

export interface OrderApiListShipmentsRequest {
    /**
     * 
     * @type OrderListShipmentsRequest
     * @memberof OrderApilistShipments
     */
    body: OrderListShipmentsRequest
}

export interface OrderApiPrintOrdersLabelsRequest {
    /**
     * 
     * @type OrderPrintOrdersLabelsRequest
     * @memberof OrderApiprintOrdersLabels
     */
    body: OrderPrintOrdersLabelsRequest
}

export interface OrderApiQuashFulfillmentRequest {
    /**
     * 
     * @type OrderQuashFulfillmentRequest
     * @memberof OrderApiquashFulfillment
     */
    body: OrderQuashFulfillmentRequest
}

export interface OrderApiQuashShipmentRequest {
    /**
     * 
     * @type OrderQuashShipmentRequest
     * @memberof OrderApiquashShipment
     */
    body: OrderQuashShipmentRequest
}

export interface OrderApiReceiveFulfillmentRequest {
    /**
     * 
     * @type OrderReceiveFulfillmentRequest
     * @memberof OrderApireceiveFulfillment
     */
    body: OrderReceiveFulfillmentRequest
}

export interface OrderApiReportFulfillmentErrorRequest {
    /**
     * 
     * @type OrderReportFulfillmentErrorRequest
     * @memberof OrderApireportFulfillmentError
     */
    body: OrderReportFulfillmentErrorRequest
}

export interface OrderApiReportFulfillmentNotResolvableRequest {
    /**
     * 
     * @type OrderReportFulfillmentNotResolvableRequest
     * @memberof OrderApireportFulfillmentNotResolvable
     */
    body: OrderReportFulfillmentNotResolvableRequest
}

export interface OrderApiReportFulfillmentReadyRequest {
    /**
     * 
     * @type OrderReportFulfillmentReadyRequest
     * @memberof OrderApireportFulfillmentReady
     */
    body: OrderReportFulfillmentReadyRequest
}

export interface OrderApiReportShipmentDeliveryRequest {
    /**
     * 
     * @type OrderReportShipmentDeliveryRequest
     * @memberof OrderApireportShipmentDelivery
     */
    body: OrderReportShipmentDeliveryRequest
}

export interface OrderApiReportShipmentMissingStockRequest {
    /**
     * 
     * @type OrderReportShipmentMissingStockRequest
     * @memberof OrderApireportShipmentMissingStock
     */
    body: OrderReportShipmentMissingStockRequest
}

export interface OrderApiResolveShipmentMissingStockRequest {
    /**
     * 
     * @type OrderResolveShipmentMissingStockRequest
     * @memberof OrderApiresolveShipmentMissingStock
     */
    body: OrderResolveShipmentMissingStockRequest
}

export interface OrderApiRetryFulfillmentRequest {
    /**
     * 
     * @type OrderRetryFulfillmentRequest
     * @memberof OrderApiretryFulfillment
     */
    body: OrderRetryFulfillmentRequest
}

export interface OrderApiSearchOrdersRequest {
    /**
     * 
     * @type OrderSearchOrdersRequest
     * @memberof OrderApisearchOrders
     */
    body: OrderSearchOrdersRequest
}

export interface OrderApiSendFulfillmentRequest {
    /**
     * 
     * @type OrderSendFulfillmentRequest
     * @memberof OrderApisendFulfillment
     */
    body: OrderSendFulfillmentRequest
}

export interface OrderApiSendOrderNotificationRequest {
    /**
     * 
     * @type OrderSendOrderNotificationRequest
     * @memberof OrderApisendOrderNotification
     */
    body: OrderSendOrderNotificationRequest
}

export interface OrderApiStartFulfillmentProcessingRequest {
    /**
     * 
     * @type OrderStartFulfillmentProcessingRequest
     * @memberof OrderApistartFulfillmentProcessing
     */
    body: OrderStartFulfillmentProcessingRequest
}

export interface OrderApiStartShipmentProcessingRequest {
    /**
     * 
     * @type OrderStartShipmentProcessingRequest
     * @memberof OrderApistartShipmentProcessing
     */
    body: OrderStartShipmentProcessingRequest
}

export interface OrderApiUnholdOrderRequest {
    /**
     * 
     * @type OrderUnholdOrderRequest
     * @memberof OrderApiunholdOrder
     */
    body: OrderUnholdOrderRequest
}

export interface OrderApiUpdateOrderRequest {
    /**
     * 
     * @type OrderUpdateOrderRequest
     * @memberof OrderApiupdateOrder
     */
    body: OrderUpdateOrderRequest
}

export interface OrderApiUpdatePaymentRequest {
    /**
     * 
     * @type OrderUpdatePaymentRequest
     * @memberof OrderApiupdatePayment
     */
    body: OrderUpdatePaymentRequest
}

export class ObjectOrderApi {
    private api: ObservableOrderApi

    public constructor(configuration: Configuration, requestFactory?: OrderApiRequestFactory, responseProcessor?: OrderApiResponseProcessor) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Approve Order
     * @param param the request object
     */
    public approveOrderWithHttpInfo(param: OrderApiApproveOrderRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.approveOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Approve Order
     * @param param the request object
     */
    public approveOrder(param: OrderApiApproveOrderRequest, options?: Configuration): Promise<any> {
        return this.api.approveOrder(param.body,  options).toPromise();
    }

    /**
     * Assign Shipment
     * @param param the request object
     */
    public assignShipmentWithHttpInfo(param: OrderApiAssignShipmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.assignShipmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Assign Shipment
     * @param param the request object
     */
    public assignShipment(param: OrderApiAssignShipmentRequest, options?: Configuration): Promise<any> {
        return this.api.assignShipment(param.body,  options).toPromise();
    }

    /**
     * Calculate Refund
     * @param param the request object
     */
    public calculateRefundWithHttpInfo(param: OrderApiCalculateRefundRequest, options?: Configuration): Promise<HttpInfo<OrderCalculateRefundResponse>> {
        return this.api.calculateRefundWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Calculate Refund
     * @param param the request object
     */
    public calculateRefund(param: OrderApiCalculateRefundRequest, options?: Configuration): Promise<OrderCalculateRefundResponse> {
        return this.api.calculateRefund(param.body,  options).toPromise();
    }

    /**
     * Cancel Fulfillment
     * @param param the request object
     */
    public cancelFulfillmentWithHttpInfo(param: OrderApiCancelFulfillmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Cancel Fulfillment
     * @param param the request object
     */
    public cancelFulfillment(param: OrderApiCancelFulfillmentRequest, options?: Configuration): Promise<any> {
        return this.api.cancelFulfillment(param.body,  options).toPromise();
    }

    /**
     * Cancel Order
     * @param param the request object
     */
    public cancelOrderWithHttpInfo(param: OrderApiCancelOrderRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Cancel Order
     * @param param the request object
     */
    public cancelOrder(param: OrderApiCancelOrderRequest, options?: Configuration): Promise<any> {
        return this.api.cancelOrder(param.body,  options).toPromise();
    }

    /**
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipmentWithHttpInfo(param: OrderApiCancelShipmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.cancelShipmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Cancel Shipment
     * @param param the request object
     */
    public cancelShipment(param: OrderApiCancelShipmentRequest, options?: Configuration): Promise<any> {
        return this.api.cancelShipment(param.body,  options).toPromise();
    }

    /**
     * Complete Shipment Packing
     * @param param the request object
     */
    public completeShipmentPackingWithHttpInfo(param: OrderApiCompleteShipmentPackingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.completeShipmentPackingWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Complete Shipment Packing
     * @param param the request object
     */
    public completeShipmentPacking(param: OrderApiCompleteShipmentPackingRequest, options?: Configuration): Promise<any> {
        return this.api.completeShipmentPacking(param.body,  options).toPromise();
    }

    /**
     * Create Fulfillment
     * @param param the request object
     */
    public createFulfillmentWithHttpInfo(param: OrderApiCreateFulfillmentRequest, options?: Configuration): Promise<HttpInfo<OrderFulfillment>> {
        return this.api.createFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Fulfillment
     * @param param the request object
     */
    public createFulfillment(param: OrderApiCreateFulfillmentRequest, options?: Configuration): Promise<OrderFulfillment> {
        return this.api.createFulfillment(param.body,  options).toPromise();
    }

    /**
     * Create Order
     * @param param the request object
     */
    public createOrderWithHttpInfo(param: OrderApiCreateOrderRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.createOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Order
     * @param param the request object
     */
    public createOrder(param: OrderApiCreateOrderRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.createOrder(param.body,  options).toPromise();
    }

    /**
     * Create Order History
     * @param param the request object
     */
    public createOrderHistoryWithHttpInfo(param: OrderApiCreateOrderHistoryRequest, options?: Configuration): Promise<HttpInfo<OrderDataHistory>> {
        return this.api.createOrderHistoryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Order History
     * @param param the request object
     */
    public createOrderHistory(param: OrderApiCreateOrderHistoryRequest, options?: Configuration): Promise<OrderDataHistory> {
        return this.api.createOrderHistory(param.body,  options).toPromise();
    }

    /**
     * Create Payment
     * @param param the request object
     */
    public createPaymentWithHttpInfo(param: OrderApiCreatePaymentRequest, options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        return this.api.createPaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Payment
     * @param param the request object
     */
    public createPayment(param: OrderApiCreatePaymentRequest, options?: Configuration): Promise<OrderPayment> {
        return this.api.createPayment(param.body,  options).toPromise();
    }

    /**
     * Create Payment Transaction
     * @param param the request object
     */
    public createPaymentTransactionWithHttpInfo(param: OrderApiCreatePaymentTransactionRequest, options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        return this.api.createPaymentTransactionWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Payment Transaction
     * @param param the request object
     */
    public createPaymentTransaction(param: OrderApiCreatePaymentTransactionRequest, options?: Configuration): Promise<OrderTransaction> {
        return this.api.createPaymentTransaction(param.body,  options).toPromise();
    }

    /**
     * Create Refund
     * @param param the request object
     */
    public createRefundWithHttpInfo(param: OrderApiCreateRefundRequest, options?: Configuration): Promise<HttpInfo<OrderRefund>> {
        return this.api.createRefundWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Refund
     * @param param the request object
     */
    public createRefund(param: OrderApiCreateRefundRequest, options?: Configuration): Promise<OrderRefund> {
        return this.api.createRefund(param.body,  options).toPromise();
    }

    /**
     * Create Refund Transaction
     * @param param the request object
     */
    public createRefundTransactionWithHttpInfo(param: OrderApiCreateRefundTransactionRequest, options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        return this.api.createRefundTransactionWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Refund Transaction
     * @param param the request object
     */
    public createRefundTransaction(param: OrderApiCreateRefundTransactionRequest, options?: Configuration): Promise<OrderTransaction> {
        return this.api.createRefundTransaction(param.body,  options).toPromise();
    }

    /**
     * Create Shipment
     * @param param the request object
     */
    public createShipmentWithHttpInfo(param: OrderApiCreateShipmentRequest, options?: Configuration): Promise<HttpInfo<OrderShipment>> {
        return this.api.createShipmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create Shipment
     * @param param the request object
     */
    public createShipment(param: OrderApiCreateShipmentRequest, options?: Configuration): Promise<OrderShipment> {
        return this.api.createShipment(param.body,  options).toPromise();
    }

    /**
     * Delete Order
     * @param param the request object
     */
    public deleteOrderWithHttpInfo(param: OrderApiDeleteOrderRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.deleteOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Delete Order
     * @param param the request object
     */
    public deleteOrder(param: OrderApiDeleteOrderRequest, options?: Configuration): Promise<any> {
        return this.api.deleteOrder(param.body,  options).toPromise();
    }

    /**
     * Get Fulfillment
     * @param param the request object
     */
    public getFulfillmentWithHttpInfo(param: OrderApiGetFulfillmentRequest, options?: Configuration): Promise<HttpInfo<OrderFulfillment>> {
        return this.api.getFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Fulfillment
     * @param param the request object
     */
    public getFulfillment(param: OrderApiGetFulfillmentRequest, options?: Configuration): Promise<OrderFulfillment> {
        return this.api.getFulfillment(param.body,  options).toPromise();
    }

    /**
     * Get Order
     * @param param the request object
     */
    public getOrderWithHttpInfo(param: OrderApiGetOrderRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.getOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Order
     * @param param the request object
     */
    public getOrder(param: OrderApiGetOrderRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.getOrder(param.body,  options).toPromise();
    }

    /**
     * Get Order by Cart ID
     * @param param the request object
     */
    public getOrderByCartIdWithHttpInfo(param: OrderApiGetOrderByCartIdRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.getOrderByCartIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Order by Cart ID
     * @param param the request object
     */
    public getOrderByCartId(param: OrderApiGetOrderByCartIdRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.getOrderByCartId(param.body,  options).toPromise();
    }

    /**
     * Get Order by Order Number
     * @param param the request object
     */
    public getOrderByOrderNumberWithHttpInfo(param: OrderApiGetOrderByOrderNumberRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.getOrderByOrderNumberWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Order by Order Number
     * @param param the request object
     */
    public getOrderByOrderNumber(param: OrderApiGetOrderByOrderNumberRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.getOrderByOrderNumber(param.body,  options).toPromise();
    }

    /**
     * Get Payment
     * @param param the request object
     */
    public getPaymentWithHttpInfo(param: OrderApiGetPaymentRequest, options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        return this.api.getPaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Payment
     * @param param the request object
     */
    public getPayment(param: OrderApiGetPaymentRequest, options?: Configuration): Promise<OrderPayment> {
        return this.api.getPayment(param.body,  options).toPromise();
    }

    /**
     * Get Shipment
     * @param param the request object
     */
    public getShipmentWithHttpInfo(param: OrderApiGetShipmentRequest, options?: Configuration): Promise<HttpInfo<OrderShipment>> {
        return this.api.getShipmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Shipment
     * @param param the request object
     */
    public getShipment(param: OrderApiGetShipmentRequest, options?: Configuration): Promise<OrderShipment> {
        return this.api.getShipment(param.body,  options).toPromise();
    }

    /**
     * Get Transaction
     * @param param the request object
     */
    public getTransactionWithHttpInfo(param: OrderApiGetTransactionRequest, options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        return this.api.getTransactionWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get Transaction
     * @param param the request object
     */
    public getTransaction(param: OrderApiGetTransactionRequest, options?: Configuration): Promise<OrderTransaction> {
        return this.api.getTransaction(param.body,  options).toPromise();
    }

    /**
     * Hold Order
     * @param param the request object
     */
    public holdOrderWithHttpInfo(param: OrderApiHoldOrderRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.holdOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Hold Order
     * @param param the request object
     */
    public holdOrder(param: OrderApiHoldOrderRequest, options?: Configuration): Promise<any> {
        return this.api.holdOrder(param.body,  options).toPromise();
    }

    /**
     * Import Order
     * @param param the request object
     */
    public importOrderWithHttpInfo(param: OrderApiImportOrderRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.importOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Import Order
     * @param param the request object
     */
    public importOrder(param: OrderApiImportOrderRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.importOrder(param.body,  options).toPromise();
    }

    /**
     * List Fulfillments
     * @param param the request object
     */
    public listFulfillmentsWithHttpInfo(param: OrderApiListFulfillmentsRequest, options?: Configuration): Promise<HttpInfo<OrderListFulfillmentsResponse>> {
        return this.api.listFulfillmentsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Fulfillments
     * @param param the request object
     */
    public listFulfillments(param: OrderApiListFulfillmentsRequest, options?: Configuration): Promise<OrderListFulfillmentsResponse> {
        return this.api.listFulfillments(param.body,  options).toPromise();
    }

    /**
     * List Orders
     * @param param the request object
     */
    public listOrdersWithHttpInfo(param: OrderApiListOrdersRequest, options?: Configuration): Promise<HttpInfo<OrderListOrdersResponse>> {
        return this.api.listOrdersWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Orders
     * @param param the request object
     */
    public listOrders(param: OrderApiListOrdersRequest, options?: Configuration): Promise<OrderListOrdersResponse> {
        return this.api.listOrders(param.body,  options).toPromise();
    }

    /**
     * List Orders by Customer
     * @param param the request object
     */
    public listOrdersByCustomerWithHttpInfo(param: OrderApiListOrdersByCustomerRequest, options?: Configuration): Promise<HttpInfo<OrderListOrdersByCustomerResponse>> {
        return this.api.listOrdersByCustomerWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Orders by Customer
     * @param param the request object
     */
    public listOrdersByCustomer(param: OrderApiListOrdersByCustomerRequest, options?: Configuration): Promise<OrderListOrdersByCustomerResponse> {
        return this.api.listOrdersByCustomer(param.body,  options).toPromise();
    }

    /**
     * List Orders by Numbers
     * @param param the request object
     */
    public listOrdersByNumbersWithHttpInfo(param: OrderApiListOrdersByNumbersRequest, options?: Configuration): Promise<HttpInfo<OrderListOrdersByNumbersResponse>> {
        return this.api.listOrdersByNumbersWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Orders by Numbers
     * @param param the request object
     */
    public listOrdersByNumbers(param: OrderApiListOrdersByNumbersRequest, options?: Configuration): Promise<OrderListOrdersByNumbersResponse> {
        return this.api.listOrdersByNumbers(param.body,  options).toPromise();
    }

    /**
     * List Shipments
     * @param param the request object
     */
    public listShipmentsWithHttpInfo(param: OrderApiListShipmentsRequest, options?: Configuration): Promise<HttpInfo<OrderListShipmentsResponse>> {
        return this.api.listShipmentsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * List Shipments
     * @param param the request object
     */
    public listShipments(param: OrderApiListShipmentsRequest, options?: Configuration): Promise<OrderListShipmentsResponse> {
        return this.api.listShipments(param.body,  options).toPromise();
    }

    /**
     * Print Orders Labels
     * @param param the request object
     */
    public printOrdersLabelsWithHttpInfo(param: OrderApiPrintOrdersLabelsRequest, options?: Configuration): Promise<HttpInfo<OrderPrintOrdersLabelsResponse>> {
        return this.api.printOrdersLabelsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Print Orders Labels
     * @param param the request object
     */
    public printOrdersLabels(param: OrderApiPrintOrdersLabelsRequest, options?: Configuration): Promise<OrderPrintOrdersLabelsResponse> {
        return this.api.printOrdersLabels(param.body,  options).toPromise();
    }

    /**
     * Quash Fulfillment
     * @param param the request object
     */
    public quashFulfillmentWithHttpInfo(param: OrderApiQuashFulfillmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.quashFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Quash Fulfillment
     * @param param the request object
     */
    public quashFulfillment(param: OrderApiQuashFulfillmentRequest, options?: Configuration): Promise<any> {
        return this.api.quashFulfillment(param.body,  options).toPromise();
    }

    /**
     * Quash Shipment
     * @param param the request object
     */
    public quashShipmentWithHttpInfo(param: OrderApiQuashShipmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.quashShipmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Quash Shipment
     * @param param the request object
     */
    public quashShipment(param: OrderApiQuashShipmentRequest, options?: Configuration): Promise<any> {
        return this.api.quashShipment(param.body,  options).toPromise();
    }

    /**
     * Receive Fulfillment
     * @param param the request object
     */
    public receiveFulfillmentWithHttpInfo(param: OrderApiReceiveFulfillmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.receiveFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Receive Fulfillment
     * @param param the request object
     */
    public receiveFulfillment(param: OrderApiReceiveFulfillmentRequest, options?: Configuration): Promise<any> {
        return this.api.receiveFulfillment(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Error
     * @param param the request object
     */
    public reportFulfillmentErrorWithHttpInfo(param: OrderApiReportFulfillmentErrorRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.reportFulfillmentErrorWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Error
     * @param param the request object
     */
    public reportFulfillmentError(param: OrderApiReportFulfillmentErrorRequest, options?: Configuration): Promise<any> {
        return this.api.reportFulfillmentError(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param param the request object
     */
    public reportFulfillmentNotResolvableWithHttpInfo(param: OrderApiReportFulfillmentNotResolvableRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.reportFulfillmentNotResolvableWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param param the request object
     */
    public reportFulfillmentNotResolvable(param: OrderApiReportFulfillmentNotResolvableRequest, options?: Configuration): Promise<any> {
        return this.api.reportFulfillmentNotResolvable(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Ready
     * @param param the request object
     */
    public reportFulfillmentReadyWithHttpInfo(param: OrderApiReportFulfillmentReadyRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.reportFulfillmentReadyWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Report Fulfillment Ready
     * @param param the request object
     */
    public reportFulfillmentReady(param: OrderApiReportFulfillmentReadyRequest, options?: Configuration): Promise<any> {
        return this.api.reportFulfillmentReady(param.body,  options).toPromise();
    }

    /**
     * Report Shipment Delivery
     * @param param the request object
     */
    public reportShipmentDeliveryWithHttpInfo(param: OrderApiReportShipmentDeliveryRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.reportShipmentDeliveryWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Report Shipment Delivery
     * @param param the request object
     */
    public reportShipmentDelivery(param: OrderApiReportShipmentDeliveryRequest, options?: Configuration): Promise<any> {
        return this.api.reportShipmentDelivery(param.body,  options).toPromise();
    }

    /**
     * Report Shipment Missing Stock
     * @param param the request object
     */
    public reportShipmentMissingStockWithHttpInfo(param: OrderApiReportShipmentMissingStockRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.reportShipmentMissingStockWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Report Shipment Missing Stock
     * @param param the request object
     */
    public reportShipmentMissingStock(param: OrderApiReportShipmentMissingStockRequest, options?: Configuration): Promise<any> {
        return this.api.reportShipmentMissingStock(param.body,  options).toPromise();
    }

    /**
     * Resolve Shipment Missing Stock
     * @param param the request object
     */
    public resolveShipmentMissingStockWithHttpInfo(param: OrderApiResolveShipmentMissingStockRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.resolveShipmentMissingStockWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Resolve Shipment Missing Stock
     * @param param the request object
     */
    public resolveShipmentMissingStock(param: OrderApiResolveShipmentMissingStockRequest, options?: Configuration): Promise<any> {
        return this.api.resolveShipmentMissingStock(param.body,  options).toPromise();
    }

    /**
     * Retry Fulfillment
     * @param param the request object
     */
    public retryFulfillmentWithHttpInfo(param: OrderApiRetryFulfillmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.retryFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Retry Fulfillment
     * @param param the request object
     */
    public retryFulfillment(param: OrderApiRetryFulfillmentRequest, options?: Configuration): Promise<any> {
        return this.api.retryFulfillment(param.body,  options).toPromise();
    }

    /**
     * Search Orders
     * @param param the request object
     */
    public searchOrdersWithHttpInfo(param: OrderApiSearchOrdersRequest, options?: Configuration): Promise<HttpInfo<OrderSearchOrdersResponse>> {
        return this.api.searchOrdersWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Search Orders
     * @param param the request object
     */
    public searchOrders(param: OrderApiSearchOrdersRequest, options?: Configuration): Promise<OrderSearchOrdersResponse> {
        return this.api.searchOrders(param.body,  options).toPromise();
    }

    /**
     * Send Fulfillment
     * @param param the request object
     */
    public sendFulfillmentWithHttpInfo(param: OrderApiSendFulfillmentRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.sendFulfillmentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Send Fulfillment
     * @param param the request object
     */
    public sendFulfillment(param: OrderApiSendFulfillmentRequest, options?: Configuration): Promise<any> {
        return this.api.sendFulfillment(param.body,  options).toPromise();
    }

    /**
     * Send Order Notification
     * @param param the request object
     */
    public sendOrderNotificationWithHttpInfo(param: OrderApiSendOrderNotificationRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.sendOrderNotificationWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Send Order Notification
     * @param param the request object
     */
    public sendOrderNotification(param: OrderApiSendOrderNotificationRequest, options?: Configuration): Promise<any> {
        return this.api.sendOrderNotification(param.body,  options).toPromise();
    }

    /**
     * Start Fulfillment Processing
     * @param param the request object
     */
    public startFulfillmentProcessingWithHttpInfo(param: OrderApiStartFulfillmentProcessingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.startFulfillmentProcessingWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Start Fulfillment Processing
     * @param param the request object
     */
    public startFulfillmentProcessing(param: OrderApiStartFulfillmentProcessingRequest, options?: Configuration): Promise<any> {
        return this.api.startFulfillmentProcessing(param.body,  options).toPromise();
    }

    /**
     * Start Shipment Processing
     * @param param the request object
     */
    public startShipmentProcessingWithHttpInfo(param: OrderApiStartShipmentProcessingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.startShipmentProcessingWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Start Shipment Processing
     * @param param the request object
     */
    public startShipmentProcessing(param: OrderApiStartShipmentProcessingRequest, options?: Configuration): Promise<any> {
        return this.api.startShipmentProcessing(param.body,  options).toPromise();
    }

    /**
     * Unhold Order
     * @param param the request object
     */
    public unholdOrderWithHttpInfo(param: OrderApiUnholdOrderRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.unholdOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Unhold Order
     * @param param the request object
     */
    public unholdOrder(param: OrderApiUnholdOrderRequest, options?: Configuration): Promise<any> {
        return this.api.unholdOrder(param.body,  options).toPromise();
    }

    /**
     * Update Order
     * @param param the request object
     */
    public updateOrderWithHttpInfo(param: OrderApiUpdateOrderRequest, options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        return this.api.updateOrderWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Order
     * @param param the request object
     */
    public updateOrder(param: OrderApiUpdateOrderRequest, options?: Configuration): Promise<OrderOrderData> {
        return this.api.updateOrder(param.body,  options).toPromise();
    }

    /**
     * Update Payment
     * @param param the request object
     */
    public updatePaymentWithHttpInfo(param: OrderApiUpdatePaymentRequest, options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        return this.api.updatePaymentWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Update Payment
     * @param param the request object
     */
    public updatePayment(param: OrderApiUpdatePaymentRequest, options?: Configuration): Promise<OrderPayment> {
        return this.api.updatePayment(param.body,  options).toPromise();
    }

}
