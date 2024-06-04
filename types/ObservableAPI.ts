import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class ObservableOrderApi {
    private requestFactory: OrderApiRequestFactory;
    private responseProcessor: OrderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderApiResponseProcessor();
    }

    /**
     * Approve Order
     * @param body 
     */
    public approveOrderWithHttpInfo(body: OrderApproveOrderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.approveOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.approveOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Approve Order
     * @param body 
     */
    public approveOrder(body: OrderApproveOrderRequest, _options?: Configuration): Observable<any> {
        return this.approveOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Assign Shipment
     * @param body 
     */
    public assignShipmentWithHttpInfo(body: OrderAssignShipmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.assignShipment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.assignShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Assign Shipment
     * @param body 
     */
    public assignShipment(body: OrderAssignShipmentRequest, _options?: Configuration): Observable<any> {
        return this.assignShipmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Calculate Refund
     * @param body 
     */
    public calculateRefundWithHttpInfo(body: OrderCalculateRefundRequest, _options?: Configuration): Observable<HttpInfo<OrderCalculateRefundResponse>> {
        const requestContextPromise = this.requestFactory.calculateRefund(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.calculateRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * Calculate Refund
     * @param body 
     */
    public calculateRefund(body: OrderCalculateRefundRequest, _options?: Configuration): Observable<OrderCalculateRefundResponse> {
        return this.calculateRefundWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderCalculateRefundResponse>) => apiResponse.data));
    }

    /**
     * Cancel Fulfillment
     * @param body 
     */
    public cancelFulfillmentWithHttpInfo(body: OrderCancelFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cancelFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel Fulfillment
     * @param body 
     */
    public cancelFulfillment(body: OrderCancelFulfillmentRequest, _options?: Configuration): Observable<any> {
        return this.cancelFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Cancel Order
     * @param body 
     */
    public cancelOrderWithHttpInfo(body: OrderCancelOrderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cancelOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel Order
     * @param body 
     */
    public cancelOrder(body: OrderCancelOrderRequest, _options?: Configuration): Observable<any> {
        return this.cancelOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Cancel Shipment
     * @param body 
     */
    public cancelShipmentWithHttpInfo(body: OrderCancelShipmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.cancelShipment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Cancel Shipment
     * @param body 
     */
    public cancelShipment(body: OrderCancelShipmentRequest, _options?: Configuration): Observable<any> {
        return this.cancelShipmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Complete Shipment Packing
     * @param body 
     */
    public completeShipmentPackingWithHttpInfo(body: OrderCompleteShipmentPackingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.completeShipmentPacking(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.completeShipmentPackingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Complete Shipment Packing
     * @param body 
     */
    public completeShipmentPacking(body: OrderCompleteShipmentPackingRequest, _options?: Configuration): Observable<any> {
        return this.completeShipmentPackingWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create Fulfillment
     * @param body 
     */
    public createFulfillmentWithHttpInfo(body: OrderCreateFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<OrderFulfillment>> {
        const requestContextPromise = this.requestFactory.createFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Fulfillment
     * @param body 
     */
    public createFulfillment(body: OrderCreateFulfillmentRequest, _options?: Configuration): Observable<OrderFulfillment> {
        return this.createFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderFulfillment>) => apiResponse.data));
    }

    /**
     * Create Order
     * @param body 
     */
    public createOrderWithHttpInfo(body: OrderCreateOrderRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.createOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Order
     * @param body 
     */
    public createOrder(body: OrderCreateOrderRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.createOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * Create Order History
     * @param body 
     */
    public createOrderHistoryWithHttpInfo(body: OrderCreateHistoryRequest, _options?: Configuration): Observable<HttpInfo<OrderDataHistory>> {
        const requestContextPromise = this.requestFactory.createOrderHistory(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Order History
     * @param body 
     */
    public createOrderHistory(body: OrderCreateHistoryRequest, _options?: Configuration): Observable<OrderDataHistory> {
        return this.createOrderHistoryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderDataHistory>) => apiResponse.data));
    }

    /**
     * Create Payment
     * @param body 
     */
    public createPaymentWithHttpInfo(body: OrderCreatePaymentRequest, _options?: Configuration): Observable<HttpInfo<OrderPayment>> {
        const requestContextPromise = this.requestFactory.createPayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Payment
     * @param body 
     */
    public createPayment(body: OrderCreatePaymentRequest, _options?: Configuration): Observable<OrderPayment> {
        return this.createPaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderPayment>) => apiResponse.data));
    }

    /**
     * Create Payment Transaction
     * @param body 
     */
    public createPaymentTransactionWithHttpInfo(body: OrderCreatePaymentTransactionRequest, _options?: Configuration): Observable<HttpInfo<OrderTransaction>> {
        const requestContextPromise = this.requestFactory.createPaymentTransaction(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPaymentTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Payment Transaction
     * @param body 
     */
    public createPaymentTransaction(body: OrderCreatePaymentTransactionRequest, _options?: Configuration): Observable<OrderTransaction> {
        return this.createPaymentTransactionWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderTransaction>) => apiResponse.data));
    }

    /**
     * Create Refund
     * @param body 
     */
    public createRefundWithHttpInfo(body: OrderCreateRefundRequest, _options?: Configuration): Observable<HttpInfo<OrderRefund>> {
        const requestContextPromise = this.requestFactory.createRefund(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRefundWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Refund
     * @param body 
     */
    public createRefund(body: OrderCreateRefundRequest, _options?: Configuration): Observable<OrderRefund> {
        return this.createRefundWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderRefund>) => apiResponse.data));
    }

    /**
     * Create Refund Transaction
     * @param body 
     */
    public createRefundTransactionWithHttpInfo(body: OrderCreateRefundTransactionRequest, _options?: Configuration): Observable<HttpInfo<OrderTransaction>> {
        const requestContextPromise = this.requestFactory.createRefundTransaction(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRefundTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Refund Transaction
     * @param body 
     */
    public createRefundTransaction(body: OrderCreateRefundTransactionRequest, _options?: Configuration): Observable<OrderTransaction> {
        return this.createRefundTransactionWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderTransaction>) => apiResponse.data));
    }

    /**
     * Create Shipment
     * @param body 
     */
    public createShipmentWithHttpInfo(body: OrderCreateShipmentRequest, _options?: Configuration): Observable<HttpInfo<OrderShipment>> {
        const requestContextPromise = this.requestFactory.createShipment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Shipment
     * @param body 
     */
    public createShipment(body: OrderCreateShipmentRequest, _options?: Configuration): Observable<OrderShipment> {
        return this.createShipmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderShipment>) => apiResponse.data));
    }

    /**
     * Delete Order
     * @param body 
     */
    public deleteOrderWithHttpInfo(body: OrderDeleteOrderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.deleteOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Order
     * @param body 
     */
    public deleteOrder(body: OrderDeleteOrderRequest, _options?: Configuration): Observable<any> {
        return this.deleteOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get Fulfillment
     * @param body 
     */
    public getFulfillmentWithHttpInfo(body: OrderGetFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<OrderFulfillment>> {
        const requestContextPromise = this.requestFactory.getFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Fulfillment
     * @param body 
     */
    public getFulfillment(body: OrderGetFulfillmentRequest, _options?: Configuration): Observable<OrderFulfillment> {
        return this.getFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderFulfillment>) => apiResponse.data));
    }

    /**
     * Get Order
     * @param body 
     */
    public getOrderWithHttpInfo(body: OrderGetOrderRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.getOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Order
     * @param body 
     */
    public getOrder(body: OrderGetOrderRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.getOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * Get Order by Cart ID
     * @param body 
     */
    public getOrderByCartIdWithHttpInfo(body: OrderGetOrderByCartIdRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.getOrderByCartId(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderByCartIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Order by Cart ID
     * @param body 
     */
    public getOrderByCartId(body: OrderGetOrderByCartIdRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.getOrderByCartIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * Get Order by Order Number
     * @param body 
     */
    public getOrderByOrderNumberWithHttpInfo(body: OrderGetOrderByOrderNumberRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.getOrderByOrderNumber(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderByOrderNumberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Order by Order Number
     * @param body 
     */
    public getOrderByOrderNumber(body: OrderGetOrderByOrderNumberRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.getOrderByOrderNumberWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * Get Payment
     * @param body 
     */
    public getPaymentWithHttpInfo(body: OrderGetPaymentRequest, _options?: Configuration): Observable<HttpInfo<OrderPayment>> {
        const requestContextPromise = this.requestFactory.getPayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Payment
     * @param body 
     */
    public getPayment(body: OrderGetPaymentRequest, _options?: Configuration): Observable<OrderPayment> {
        return this.getPaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderPayment>) => apiResponse.data));
    }

    /**
     * Get Shipment
     * @param body 
     */
    public getShipmentWithHttpInfo(body: OrderGetShipmentRequest, _options?: Configuration): Observable<HttpInfo<OrderShipment>> {
        const requestContextPromise = this.requestFactory.getShipment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Shipment
     * @param body 
     */
    public getShipment(body: OrderGetShipmentRequest, _options?: Configuration): Observable<OrderShipment> {
        return this.getShipmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderShipment>) => apiResponse.data));
    }

    /**
     * Get Transaction
     * @param body 
     */
    public getTransactionWithHttpInfo(body: OrderGetTransactionRequest, _options?: Configuration): Observable<HttpInfo<OrderTransaction>> {
        const requestContextPromise = this.requestFactory.getTransaction(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Transaction
     * @param body 
     */
    public getTransaction(body: OrderGetTransactionRequest, _options?: Configuration): Observable<OrderTransaction> {
        return this.getTransactionWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderTransaction>) => apiResponse.data));
    }

    /**
     * Hold Order
     * @param body 
     */
    public holdOrderWithHttpInfo(body: OrderHoldOrderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.holdOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.holdOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Hold Order
     * @param body 
     */
    public holdOrder(body: OrderHoldOrderRequest, _options?: Configuration): Observable<any> {
        return this.holdOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Import Order
     * @param body 
     */
    public importOrderWithHttpInfo(body: OrderImportOrderRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.importOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.importOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Import Order
     * @param body 
     */
    public importOrder(body: OrderImportOrderRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.importOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * List Fulfillments
     * @param body 
     */
    public listFulfillmentsWithHttpInfo(body: OrderListFulfillmentsRequest, _options?: Configuration): Observable<HttpInfo<OrderListFulfillmentsResponse>> {
        const requestContextPromise = this.requestFactory.listFulfillments(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFulfillmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Fulfillments
     * @param body 
     */
    public listFulfillments(body: OrderListFulfillmentsRequest, _options?: Configuration): Observable<OrderListFulfillmentsResponse> {
        return this.listFulfillmentsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderListFulfillmentsResponse>) => apiResponse.data));
    }

    /**
     * List Orders
     * @param body 
     */
    public listOrdersWithHttpInfo(body: OrderListOrdersRequest, _options?: Configuration): Observable<HttpInfo<OrderListOrdersResponse>> {
        const requestContextPromise = this.requestFactory.listOrders(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Orders
     * @param body 
     */
    public listOrders(body: OrderListOrdersRequest, _options?: Configuration): Observable<OrderListOrdersResponse> {
        return this.listOrdersWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderListOrdersResponse>) => apiResponse.data));
    }

    /**
     * List Orders by Customer
     * @param body 
     */
    public listOrdersByCustomerWithHttpInfo(body: OrderListOrdersByCustomerRequest, _options?: Configuration): Observable<HttpInfo<OrderListOrdersByCustomerResponse>> {
        const requestContextPromise = this.requestFactory.listOrdersByCustomer(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersByCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Orders by Customer
     * @param body 
     */
    public listOrdersByCustomer(body: OrderListOrdersByCustomerRequest, _options?: Configuration): Observable<OrderListOrdersByCustomerResponse> {
        return this.listOrdersByCustomerWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderListOrdersByCustomerResponse>) => apiResponse.data));
    }

    /**
     * List Orders by Numbers
     * @param body 
     */
    public listOrdersByNumbersWithHttpInfo(body: OrderListOrdersByNumbersRequest, _options?: Configuration): Observable<HttpInfo<OrderListOrdersByNumbersResponse>> {
        const requestContextPromise = this.requestFactory.listOrdersByNumbers(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listOrdersByNumbersWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Orders by Numbers
     * @param body 
     */
    public listOrdersByNumbers(body: OrderListOrdersByNumbersRequest, _options?: Configuration): Observable<OrderListOrdersByNumbersResponse> {
        return this.listOrdersByNumbersWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderListOrdersByNumbersResponse>) => apiResponse.data));
    }

    /**
     * List Shipments
     * @param body 
     */
    public listShipmentsWithHttpInfo(body: OrderListShipmentsRequest, _options?: Configuration): Observable<HttpInfo<OrderListShipmentsResponse>> {
        const requestContextPromise = this.requestFactory.listShipments(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listShipmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Shipments
     * @param body 
     */
    public listShipments(body: OrderListShipmentsRequest, _options?: Configuration): Observable<OrderListShipmentsResponse> {
        return this.listShipmentsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderListShipmentsResponse>) => apiResponse.data));
    }

    /**
     * Documents
     * @param body 
     */
    public orderAddDocumentWithHttpInfo(body: OrderAddDocumentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.orderAddDocument(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderAddDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Documents
     * @param body 
     */
    public orderAddDocument(body: OrderAddDocumentRequest, _options?: Configuration): Observable<any> {
        return this.orderAddDocumentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public orderRemoveDocumentByCodeWithHttpInfo(body: OrderRemoveDocumentByCodeRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.orderRemoveDocumentByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.orderRemoveDocumentByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public orderRemoveDocumentByCode(body: OrderRemoveDocumentByCodeRequest, _options?: Configuration): Observable<any> {
        return this.orderRemoveDocumentByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Print Orders Labels
     * @param body 
     */
    public printOrdersLabelsWithHttpInfo(body: OrderPrintOrdersLabelsRequest, _options?: Configuration): Observable<HttpInfo<OrderPrintOrdersLabelsResponse>> {
        const requestContextPromise = this.requestFactory.printOrdersLabels(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.printOrdersLabelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Print Orders Labels
     * @param body 
     */
    public printOrdersLabels(body: OrderPrintOrdersLabelsRequest, _options?: Configuration): Observable<OrderPrintOrdersLabelsResponse> {
        return this.printOrdersLabelsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderPrintOrdersLabelsResponse>) => apiResponse.data));
    }

    /**
     * Quash Fulfillment
     * @param body 
     */
    public quashFulfillmentWithHttpInfo(body: OrderQuashFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.quashFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.quashFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Quash Fulfillment
     * @param body 
     */
    public quashFulfillment(body: OrderQuashFulfillmentRequest, _options?: Configuration): Observable<any> {
        return this.quashFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Quash Shipment
     * @param body 
     */
    public quashShipmentWithHttpInfo(body: OrderQuashShipmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.quashShipment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.quashShipmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Quash Shipment
     * @param body 
     */
    public quashShipment(body: OrderQuashShipmentRequest, _options?: Configuration): Observable<any> {
        return this.quashShipmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Receive Fulfillment
     * @param body 
     */
    public receiveFulfillmentWithHttpInfo(body: OrderReceiveFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.receiveFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.receiveFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Receive Fulfillment
     * @param body 
     */
    public receiveFulfillment(body: OrderReceiveFulfillmentRequest, _options?: Configuration): Observable<any> {
        return this.receiveFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Report Fulfillment Error
     * @param body 
     */
    public reportFulfillmentErrorWithHttpInfo(body: OrderReportFulfillmentErrorRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.reportFulfillmentError(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportFulfillmentErrorWithHttpInfo(rsp)));
            }));
    }

    /**
     * Report Fulfillment Error
     * @param body 
     */
    public reportFulfillmentError(body: OrderReportFulfillmentErrorRequest, _options?: Configuration): Observable<any> {
        return this.reportFulfillmentErrorWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param body 
     */
    public reportFulfillmentNotResolvableWithHttpInfo(body: OrderReportFulfillmentNotResolvableRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.reportFulfillmentNotResolvable(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportFulfillmentNotResolvableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Report Fulfillment Not Resolvable
     * @param body 
     */
    public reportFulfillmentNotResolvable(body: OrderReportFulfillmentNotResolvableRequest, _options?: Configuration): Observable<any> {
        return this.reportFulfillmentNotResolvableWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Report Fulfillment Ready
     * @param body 
     */
    public reportFulfillmentReadyWithHttpInfo(body: OrderReportFulfillmentReadyRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.reportFulfillmentReady(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportFulfillmentReadyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Report Fulfillment Ready
     * @param body 
     */
    public reportFulfillmentReady(body: OrderReportFulfillmentReadyRequest, _options?: Configuration): Observable<any> {
        return this.reportFulfillmentReadyWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Report Shipment Delivery
     * @param body 
     */
    public reportShipmentDeliveryWithHttpInfo(body: OrderReportShipmentDeliveryRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.reportShipmentDelivery(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportShipmentDeliveryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Report Shipment Delivery
     * @param body 
     */
    public reportShipmentDelivery(body: OrderReportShipmentDeliveryRequest, _options?: Configuration): Observable<any> {
        return this.reportShipmentDeliveryWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Report Shipment Missing Stock
     * @param body 
     */
    public reportShipmentMissingStockWithHttpInfo(body: OrderReportShipmentMissingStockRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.reportShipmentMissingStock(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportShipmentMissingStockWithHttpInfo(rsp)));
            }));
    }

    /**
     * Report Shipment Missing Stock
     * @param body 
     */
    public reportShipmentMissingStock(body: OrderReportShipmentMissingStockRequest, _options?: Configuration): Observable<any> {
        return this.reportShipmentMissingStockWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Resolve Shipment Missing Stock
     * @param body 
     */
    public resolveShipmentMissingStockWithHttpInfo(body: OrderResolveShipmentMissingStockRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.resolveShipmentMissingStock(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resolveShipmentMissingStockWithHttpInfo(rsp)));
            }));
    }

    /**
     * Resolve Shipment Missing Stock
     * @param body 
     */
    public resolveShipmentMissingStock(body: OrderResolveShipmentMissingStockRequest, _options?: Configuration): Observable<any> {
        return this.resolveShipmentMissingStockWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retry Fulfillment
     * @param body 
     */
    public retryFulfillmentWithHttpInfo(body: OrderRetryFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.retryFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retryFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retry Fulfillment
     * @param body 
     */
    public retryFulfillment(body: OrderRetryFulfillmentRequest, _options?: Configuration): Observable<any> {
        return this.retryFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Search Orders
     * @param body 
     */
    public searchOrdersWithHttpInfo(body: OrderSearchOrdersRequest, _options?: Configuration): Observable<HttpInfo<OrderSearchOrdersResponse>> {
        const requestContextPromise = this.requestFactory.searchOrders(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchOrdersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search Orders
     * @param body 
     */
    public searchOrders(body: OrderSearchOrdersRequest, _options?: Configuration): Observable<OrderSearchOrdersResponse> {
        return this.searchOrdersWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderSearchOrdersResponse>) => apiResponse.data));
    }

    /**
     * Send Fulfillment
     * @param body 
     */
    public sendFulfillmentWithHttpInfo(body: OrderSendFulfillmentRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.sendFulfillment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendFulfillmentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send Fulfillment
     * @param body 
     */
    public sendFulfillment(body: OrderSendFulfillmentRequest, _options?: Configuration): Observable<any> {
        return this.sendFulfillmentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Send Order Notification
     * @param body 
     */
    public sendOrderNotificationWithHttpInfo(body: OrderSendOrderNotificationRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.sendOrderNotification(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendOrderNotificationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Send Order Notification
     * @param body 
     */
    public sendOrderNotification(body: OrderSendOrderNotificationRequest, _options?: Configuration): Observable<any> {
        return this.sendOrderNotificationWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Start Fulfillment Processing
     * @param body 
     */
    public startFulfillmentProcessingWithHttpInfo(body: OrderStartFulfillmentProcessingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.startFulfillmentProcessing(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startFulfillmentProcessingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start Fulfillment Processing
     * @param body 
     */
    public startFulfillmentProcessing(body: OrderStartFulfillmentProcessingRequest, _options?: Configuration): Observable<any> {
        return this.startFulfillmentProcessingWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Start Shipment Processing
     * @param body 
     */
    public startShipmentProcessingWithHttpInfo(body: OrderStartShipmentProcessingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.startShipmentProcessing(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.startShipmentProcessingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Start Shipment Processing
     * @param body 
     */
    public startShipmentProcessing(body: OrderStartShipmentProcessingRequest, _options?: Configuration): Observable<any> {
        return this.startShipmentProcessingWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Unhold Order
     * @param body 
     */
    public unholdOrderWithHttpInfo(body: OrderUnholdOrderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.unholdOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unholdOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unhold Order
     * @param body 
     */
    public unholdOrder(body: OrderUnholdOrderRequest, _options?: Configuration): Observable<any> {
        return this.unholdOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Update Order
     * @param body 
     */
    public updateOrderWithHttpInfo(body: OrderUpdateOrderRequest, _options?: Configuration): Observable<HttpInfo<OrderOrderData>> {
        const requestContextPromise = this.requestFactory.updateOrder(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Order
     * @param body 
     */
    public updateOrder(body: OrderUpdateOrderRequest, _options?: Configuration): Observable<OrderOrderData> {
        return this.updateOrderWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderOrderData>) => apiResponse.data));
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePaymentWithHttpInfo(body: OrderUpdatePaymentRequest, _options?: Configuration): Observable<HttpInfo<OrderPayment>> {
        const requestContextPromise = this.requestFactory.updatePayment(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Payment
     * @param body 
     */
    public updatePayment(body: OrderUpdatePaymentRequest, _options?: Configuration): Observable<OrderPayment> {
        return this.updatePaymentWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<OrderPayment>) => apiResponse.data));
    }

}
