import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateOrderRequestInitialPayment } from '../models/CreateOrderRequestInitialPayment';
import { ImportOrderRequestImportedPayment } from '../models/ImportOrderRequestImportedPayment';
import { InitialPaymentInitialTransaction } from '../models/InitialPaymentInitialTransaction';
import { ItemProductConfigurationStep } from '../models/ItemProductConfigurationStep';
import { OptionImage } from '../models/OptionImage';
import { OrderAddDocumentRequest } from '../models/OrderAddDocumentRequest';
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
import { OrderDataDocument } from '../models/OrderDataDocument';
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
import { OrderRemoveDocumentByCodeRequest } from '../models/OrderRemoveDocumentByCodeRequest';
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
import { ProductConfigurationStepOption } from '../models/ProductConfigurationStepOption';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { ShipmentTracking } from '../models/ShipmentTracking';
import { UpdateOrderRequestPayload } from '../models/UpdateOrderRequestPayload';
import { ObservableOrderApi } from './ObservableAPI';

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class PromiseOrderApi {
    private api: ObservableOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Approve Order
     * @param body 
     */
    public approveOrderWithHttpInfo(body: OrderApproveOrderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.approveOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Approve Order
     * @param body 
     */
    public approveOrder(body: OrderApproveOrderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.approveOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Assign Shipment
     * @param body 
     */
    public assignShipmentWithHttpInfo(body: OrderAssignShipmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.assignShipmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Assign Shipment
     * @param body 
     */
    public assignShipment(body: OrderAssignShipmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.assignShipment(body, _options);
        return result.toPromise();
    }

    /**
     * Calculate Refund
     * @param body 
     */
    public calculateRefundWithHttpInfo(body: OrderCalculateRefundRequest, _options?: Configuration): Promise<HttpInfo<OrderCalculateRefundResponse>> {
        const result = this.api.calculateRefundWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Calculate Refund
     * @param body 
     */
    public calculateRefund(body: OrderCalculateRefundRequest, _options?: Configuration): Promise<OrderCalculateRefundResponse> {
        const result = this.api.calculateRefund(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Fulfillment
     * @param body 
     */
    public cancelFulfillmentWithHttpInfo(body: OrderCancelFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cancelFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Fulfillment
     * @param body 
     */
    public cancelFulfillment(body: OrderCancelFulfillmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cancelFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Order
     * @param body 
     */
    public cancelOrderWithHttpInfo(body: OrderCancelOrderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cancelOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Order
     * @param body 
     */
    public cancelOrder(body: OrderCancelOrderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cancelOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Shipment
     * @param body 
     */
    public cancelShipmentWithHttpInfo(body: OrderCancelShipmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.cancelShipmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Cancel Shipment
     * @param body 
     */
    public cancelShipment(body: OrderCancelShipmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.cancelShipment(body, _options);
        return result.toPromise();
    }

    /**
     * Complete Shipment Packing
     * @param body 
     */
    public completeShipmentPackingWithHttpInfo(body: OrderCompleteShipmentPackingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.completeShipmentPackingWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Complete Shipment Packing
     * @param body 
     */
    public completeShipmentPacking(body: OrderCompleteShipmentPackingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.completeShipmentPacking(body, _options);
        return result.toPromise();
    }

    /**
     * Create Fulfillment
     * @param body 
     */
    public createFulfillmentWithHttpInfo(body: OrderCreateFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<OrderFulfillment>> {
        const result = this.api.createFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Fulfillment
     * @param body 
     */
    public createFulfillment(body: OrderCreateFulfillmentRequest, _options?: Configuration): Promise<OrderFulfillment> {
        const result = this.api.createFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Create Order
     * @param body 
     */
    public createOrderWithHttpInfo(body: OrderCreateOrderRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.createOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Order
     * @param body 
     */
    public createOrder(body: OrderCreateOrderRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.createOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Create Order History
     * @param body 
     */
    public createOrderHistoryWithHttpInfo(body: OrderCreateHistoryRequest, _options?: Configuration): Promise<HttpInfo<OrderDataHistory>> {
        const result = this.api.createOrderHistoryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Order History
     * @param body 
     */
    public createOrderHistory(body: OrderCreateHistoryRequest, _options?: Configuration): Promise<OrderDataHistory> {
        const result = this.api.createOrderHistory(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment
     * @param body 
     */
    public createPaymentWithHttpInfo(body: OrderCreatePaymentRequest, _options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        const result = this.api.createPaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment
     * @param body 
     */
    public createPayment(body: OrderCreatePaymentRequest, _options?: Configuration): Promise<OrderPayment> {
        const result = this.api.createPayment(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment Transaction
     * @param body 
     */
    public createPaymentTransactionWithHttpInfo(body: OrderCreatePaymentTransactionRequest, _options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        const result = this.api.createPaymentTransactionWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Payment Transaction
     * @param body 
     */
    public createPaymentTransaction(body: OrderCreatePaymentTransactionRequest, _options?: Configuration): Promise<OrderTransaction> {
        const result = this.api.createPaymentTransaction(body, _options);
        return result.toPromise();
    }

    /**
     * Create Refund
     * @param body 
     */
    public createRefundWithHttpInfo(body: OrderCreateRefundRequest, _options?: Configuration): Promise<HttpInfo<OrderRefund>> {
        const result = this.api.createRefundWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Refund
     * @param body 
     */
    public createRefund(body: OrderCreateRefundRequest, _options?: Configuration): Promise<OrderRefund> {
        const result = this.api.createRefund(body, _options);
        return result.toPromise();
    }

    /**
     * Create Refund Transaction
     * @param body 
     */
    public createRefundTransactionWithHttpInfo(body: OrderCreateRefundTransactionRequest, _options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        const result = this.api.createRefundTransactionWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Refund Transaction
     * @param body 
     */
    public createRefundTransaction(body: OrderCreateRefundTransactionRequest, _options?: Configuration): Promise<OrderTransaction> {
        const result = this.api.createRefundTransaction(body, _options);
        return result.toPromise();
    }

    /**
     * Create Shipment
     * @param body 
     */
    public createShipmentWithHttpInfo(body: OrderCreateShipmentRequest, _options?: Configuration): Promise<HttpInfo<OrderShipment>> {
        const result = this.api.createShipmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create Shipment
     * @param body 
     */
    public createShipment(body: OrderCreateShipmentRequest, _options?: Configuration): Promise<OrderShipment> {
        const result = this.api.createShipment(body, _options);
        return result.toPromise();
    }

    /**
     * Delete Order
     * @param body 
     */
    public deleteOrderWithHttpInfo(body: OrderDeleteOrderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.deleteOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Delete Order
     * @param body 
     */
    public deleteOrder(body: OrderDeleteOrderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.deleteOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Get Fulfillment
     * @param body 
     */
    public getFulfillmentWithHttpInfo(body: OrderGetFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<OrderFulfillment>> {
        const result = this.api.getFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Fulfillment
     * @param body 
     */
    public getFulfillment(body: OrderGetFulfillmentRequest, _options?: Configuration): Promise<OrderFulfillment> {
        const result = this.api.getFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order
     * @param body 
     */
    public getOrderWithHttpInfo(body: OrderGetOrderRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.getOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order
     * @param body 
     */
    public getOrder(body: OrderGetOrderRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.getOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order by Cart ID
     * @param body 
     */
    public getOrderByCartIdWithHttpInfo(body: OrderGetOrderByCartIdRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.getOrderByCartIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order by Cart ID
     * @param body 
     */
    public getOrderByCartId(body: OrderGetOrderByCartIdRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.getOrderByCartId(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order by Order Number
     * @param body 
     */
    public getOrderByOrderNumberWithHttpInfo(body: OrderGetOrderByOrderNumberRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.getOrderByOrderNumberWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Order by Order Number
     * @param body 
     */
    public getOrderByOrderNumber(body: OrderGetOrderByOrderNumberRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.getOrderByOrderNumber(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment
     * @param body 
     */
    public getPaymentWithHttpInfo(body: OrderGetPaymentRequest, _options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        const result = this.api.getPaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Payment
     * @param body 
     */
    public getPayment(body: OrderGetPaymentRequest, _options?: Configuration): Promise<OrderPayment> {
        const result = this.api.getPayment(body, _options);
        return result.toPromise();
    }

    /**
     * Get Shipment
     * @param body 
     */
    public getShipmentWithHttpInfo(body: OrderGetShipmentRequest, _options?: Configuration): Promise<HttpInfo<OrderShipment>> {
        const result = this.api.getShipmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Shipment
     * @param body 
     */
    public getShipment(body: OrderGetShipmentRequest, _options?: Configuration): Promise<OrderShipment> {
        const result = this.api.getShipment(body, _options);
        return result.toPromise();
    }

    /**
     * Get Transaction
     * @param body 
     */
    public getTransactionWithHttpInfo(body: OrderGetTransactionRequest, _options?: Configuration): Promise<HttpInfo<OrderTransaction>> {
        const result = this.api.getTransactionWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get Transaction
     * @param body 
     */
    public getTransaction(body: OrderGetTransactionRequest, _options?: Configuration): Promise<OrderTransaction> {
        const result = this.api.getTransaction(body, _options);
        return result.toPromise();
    }

    /**
     * Hold Order
     * @param body 
     */
    public holdOrderWithHttpInfo(body: OrderHoldOrderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.holdOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Hold Order
     * @param body 
     */
    public holdOrder(body: OrderHoldOrderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.holdOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Import Order
     * @param body 
     */
    public importOrderWithHttpInfo(body: OrderImportOrderRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.importOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Import Order
     * @param body 
     */
    public importOrder(body: OrderImportOrderRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.importOrder(body, _options);
        return result.toPromise();
    }

    /**
     * List Fulfillments
     * @param body 
     */
    public listFulfillmentsWithHttpInfo(body: OrderListFulfillmentsRequest, _options?: Configuration): Promise<HttpInfo<OrderListFulfillmentsResponse>> {
        const result = this.api.listFulfillmentsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Fulfillments
     * @param body 
     */
    public listFulfillments(body: OrderListFulfillmentsRequest, _options?: Configuration): Promise<OrderListFulfillmentsResponse> {
        const result = this.api.listFulfillments(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders
     * @param body 
     */
    public listOrdersWithHttpInfo(body: OrderListOrdersRequest, _options?: Configuration): Promise<HttpInfo<OrderListOrdersResponse>> {
        const result = this.api.listOrdersWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders
     * @param body 
     */
    public listOrders(body: OrderListOrdersRequest, _options?: Configuration): Promise<OrderListOrdersResponse> {
        const result = this.api.listOrders(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders by Customer
     * @param body 
     */
    public listOrdersByCustomerWithHttpInfo(body: OrderListOrdersByCustomerRequest, _options?: Configuration): Promise<HttpInfo<OrderListOrdersByCustomerResponse>> {
        const result = this.api.listOrdersByCustomerWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders by Customer
     * @param body 
     */
    public listOrdersByCustomer(body: OrderListOrdersByCustomerRequest, _options?: Configuration): Promise<OrderListOrdersByCustomerResponse> {
        const result = this.api.listOrdersByCustomer(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders by Numbers
     * @param body 
     */
    public listOrdersByNumbersWithHttpInfo(body: OrderListOrdersByNumbersRequest, _options?: Configuration): Promise<HttpInfo<OrderListOrdersByNumbersResponse>> {
        const result = this.api.listOrdersByNumbersWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Orders by Numbers
     * @param body 
     */
    public listOrdersByNumbers(body: OrderListOrdersByNumbersRequest, _options?: Configuration): Promise<OrderListOrdersByNumbersResponse> {
        const result = this.api.listOrdersByNumbers(body, _options);
        return result.toPromise();
    }

    /**
     * List Shipments
     * @param body 
     */
    public listShipmentsWithHttpInfo(body: OrderListShipmentsRequest, _options?: Configuration): Promise<HttpInfo<OrderListShipmentsResponse>> {
        const result = this.api.listShipmentsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * List Shipments
     * @param body 
     */
    public listShipments(body: OrderListShipmentsRequest, _options?: Configuration): Promise<OrderListShipmentsResponse> {
        const result = this.api.listShipments(body, _options);
        return result.toPromise();
    }

    /**
     * Documents
     * @param body 
     */
    public orderAddDocumentWithHttpInfo(body: OrderAddDocumentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.orderAddDocumentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Documents
     * @param body 
     */
    public orderAddDocument(body: OrderAddDocumentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.orderAddDocument(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public orderRemoveDocumentByCodeWithHttpInfo(body: OrderRemoveDocumentByCodeRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.orderRemoveDocumentByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public orderRemoveDocumentByCode(body: OrderRemoveDocumentByCodeRequest, _options?: Configuration): Promise<any> {
        const result = this.api.orderRemoveDocumentByCode(body, _options);
        return result.toPromise();
    }

    /**
     * Print Orders Labels
     * @param body 
     */
    public printOrdersLabelsWithHttpInfo(body: OrderPrintOrdersLabelsRequest, _options?: Configuration): Promise<HttpInfo<OrderPrintOrdersLabelsResponse>> {
        const result = this.api.printOrdersLabelsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Print Orders Labels
     * @param body 
     */
    public printOrdersLabels(body: OrderPrintOrdersLabelsRequest, _options?: Configuration): Promise<OrderPrintOrdersLabelsResponse> {
        const result = this.api.printOrdersLabels(body, _options);
        return result.toPromise();
    }

    /**
     * Quash Fulfillment
     * @param body 
     */
    public quashFulfillmentWithHttpInfo(body: OrderQuashFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.quashFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Quash Fulfillment
     * @param body 
     */
    public quashFulfillment(body: OrderQuashFulfillmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.quashFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Quash Shipment
     * @param body 
     */
    public quashShipmentWithHttpInfo(body: OrderQuashShipmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.quashShipmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Quash Shipment
     * @param body 
     */
    public quashShipment(body: OrderQuashShipmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.quashShipment(body, _options);
        return result.toPromise();
    }

    /**
     * Receive Fulfillment
     * @param body 
     */
    public receiveFulfillmentWithHttpInfo(body: OrderReceiveFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.receiveFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Receive Fulfillment
     * @param body 
     */
    public receiveFulfillment(body: OrderReceiveFulfillmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.receiveFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Error
     * @param body 
     */
    public reportFulfillmentErrorWithHttpInfo(body: OrderReportFulfillmentErrorRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.reportFulfillmentErrorWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Error
     * @param body 
     */
    public reportFulfillmentError(body: OrderReportFulfillmentErrorRequest, _options?: Configuration): Promise<any> {
        const result = this.api.reportFulfillmentError(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param body 
     */
    public reportFulfillmentNotResolvableWithHttpInfo(body: OrderReportFulfillmentNotResolvableRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.reportFulfillmentNotResolvableWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param body 
     */
    public reportFulfillmentNotResolvable(body: OrderReportFulfillmentNotResolvableRequest, _options?: Configuration): Promise<any> {
        const result = this.api.reportFulfillmentNotResolvable(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Ready
     * @param body 
     */
    public reportFulfillmentReadyWithHttpInfo(body: OrderReportFulfillmentReadyRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.reportFulfillmentReadyWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Report Fulfillment Ready
     * @param body 
     */
    public reportFulfillmentReady(body: OrderReportFulfillmentReadyRequest, _options?: Configuration): Promise<any> {
        const result = this.api.reportFulfillmentReady(body, _options);
        return result.toPromise();
    }

    /**
     * Report Shipment Delivery
     * @param body 
     */
    public reportShipmentDeliveryWithHttpInfo(body: OrderReportShipmentDeliveryRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.reportShipmentDeliveryWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Report Shipment Delivery
     * @param body 
     */
    public reportShipmentDelivery(body: OrderReportShipmentDeliveryRequest, _options?: Configuration): Promise<any> {
        const result = this.api.reportShipmentDelivery(body, _options);
        return result.toPromise();
    }

    /**
     * Report Shipment Missing Stock
     * @param body 
     */
    public reportShipmentMissingStockWithHttpInfo(body: OrderReportShipmentMissingStockRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.reportShipmentMissingStockWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Report Shipment Missing Stock
     * @param body 
     */
    public reportShipmentMissingStock(body: OrderReportShipmentMissingStockRequest, _options?: Configuration): Promise<any> {
        const result = this.api.reportShipmentMissingStock(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve Shipment Missing Stock
     * @param body 
     */
    public resolveShipmentMissingStockWithHttpInfo(body: OrderResolveShipmentMissingStockRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.resolveShipmentMissingStockWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Resolve Shipment Missing Stock
     * @param body 
     */
    public resolveShipmentMissingStock(body: OrderResolveShipmentMissingStockRequest, _options?: Configuration): Promise<any> {
        const result = this.api.resolveShipmentMissingStock(body, _options);
        return result.toPromise();
    }

    /**
     * Retry Fulfillment
     * @param body 
     */
    public retryFulfillmentWithHttpInfo(body: OrderRetryFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.retryFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Retry Fulfillment
     * @param body 
     */
    public retryFulfillment(body: OrderRetryFulfillmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.retryFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Search Orders
     * @param body 
     */
    public searchOrdersWithHttpInfo(body: OrderSearchOrdersRequest, _options?: Configuration): Promise<HttpInfo<OrderSearchOrdersResponse>> {
        const result = this.api.searchOrdersWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Search Orders
     * @param body 
     */
    public searchOrders(body: OrderSearchOrdersRequest, _options?: Configuration): Promise<OrderSearchOrdersResponse> {
        const result = this.api.searchOrders(body, _options);
        return result.toPromise();
    }

    /**
     * Send Fulfillment
     * @param body 
     */
    public sendFulfillmentWithHttpInfo(body: OrderSendFulfillmentRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.sendFulfillmentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Send Fulfillment
     * @param body 
     */
    public sendFulfillment(body: OrderSendFulfillmentRequest, _options?: Configuration): Promise<any> {
        const result = this.api.sendFulfillment(body, _options);
        return result.toPromise();
    }

    /**
     * Send Order Notification
     * @param body 
     */
    public sendOrderNotificationWithHttpInfo(body: OrderSendOrderNotificationRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.sendOrderNotificationWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Send Order Notification
     * @param body 
     */
    public sendOrderNotification(body: OrderSendOrderNotificationRequest, _options?: Configuration): Promise<any> {
        const result = this.api.sendOrderNotification(body, _options);
        return result.toPromise();
    }

    /**
     * Start Fulfillment Processing
     * @param body 
     */
    public startFulfillmentProcessingWithHttpInfo(body: OrderStartFulfillmentProcessingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.startFulfillmentProcessingWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Start Fulfillment Processing
     * @param body 
     */
    public startFulfillmentProcessing(body: OrderStartFulfillmentProcessingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.startFulfillmentProcessing(body, _options);
        return result.toPromise();
    }

    /**
     * Start Shipment Processing
     * @param body 
     */
    public startShipmentProcessingWithHttpInfo(body: OrderStartShipmentProcessingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.startShipmentProcessingWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Start Shipment Processing
     * @param body 
     */
    public startShipmentProcessing(body: OrderStartShipmentProcessingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.startShipmentProcessing(body, _options);
        return result.toPromise();
    }

    /**
     * Unhold Order
     * @param body 
     */
    public unholdOrderWithHttpInfo(body: OrderUnholdOrderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.unholdOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Unhold Order
     * @param body 
     */
    public unholdOrder(body: OrderUnholdOrderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.unholdOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Update Order
     * @param body 
     */
    public updateOrderWithHttpInfo(body: OrderUpdateOrderRequest, _options?: Configuration): Promise<HttpInfo<OrderOrderData>> {
        const result = this.api.updateOrderWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Order
     * @param body 
     */
    public updateOrder(body: OrderUpdateOrderRequest, _options?: Configuration): Promise<OrderOrderData> {
        const result = this.api.updateOrder(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePaymentWithHttpInfo(body: OrderUpdatePaymentRequest, _options?: Configuration): Promise<HttpInfo<OrderPayment>> {
        const result = this.api.updatePaymentWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePayment(body: OrderUpdatePaymentRequest, _options?: Configuration): Promise<OrderPayment> {
        const result = this.api.updatePayment(body, _options);
        return result.toPromise();
    }


}



