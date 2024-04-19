# .OrderApi

All URIs are relative to *https://dom.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveOrder**](OrderApi.md#approveOrder) | **POST** /order.Order/ApproveOrder | Approve Order
[**assignShipment**](OrderApi.md#assignShipment) | **POST** /order.Order/AssignShipment | Assign Shipment
[**calculateRefund**](OrderApi.md#calculateRefund) | **POST** /order.Order/CalculateRefund | Calculate Refund
[**cancelFulfillment**](OrderApi.md#cancelFulfillment) | **POST** /order.Order/CancelFulfillment | Cancel Fulfillment
[**cancelOrder**](OrderApi.md#cancelOrder) | **POST** /order.Order/CancelOrder | Cancel Order
[**cancelShipment**](OrderApi.md#cancelShipment) | **POST** /order.Order/CancelShipment | Cancel Shipment
[**completeShipmentPacking**](OrderApi.md#completeShipmentPacking) | **POST** /order.Order/CompleteShipmentPacking | Complete Shipment Packing
[**createFulfillment**](OrderApi.md#createFulfillment) | **POST** /order.Order/CreateFulfillment | Create Fulfillment
[**createOrder**](OrderApi.md#createOrder) | **POST** /order.Order/CreateOrder | Create Order
[**createOrderHistory**](OrderApi.md#createOrderHistory) | **POST** /order.Order/CreateHistory | Create Order History
[**createPayment**](OrderApi.md#createPayment) | **POST** /order.Order/CreatePayment | Create Payment
[**createPaymentTransaction**](OrderApi.md#createPaymentTransaction) | **POST** /order.Order/CreatePaymentTransaction | Create Payment Transaction
[**createRefund**](OrderApi.md#createRefund) | **POST** /order.Order/CreateRefund | Create Refund
[**createRefundTransaction**](OrderApi.md#createRefundTransaction) | **POST** /order.Order/CreateRefundTransaction | Create Refund Transaction
[**createShipment**](OrderApi.md#createShipment) | **POST** /order.Order/CreateShipment | Create Shipment
[**deleteOrder**](OrderApi.md#deleteOrder) | **POST** /order.Order/DeleteOrder | Delete Order
[**getFulfillment**](OrderApi.md#getFulfillment) | **POST** /order.Order/GetFulfillment | Get Fulfillment
[**getOrder**](OrderApi.md#getOrder) | **POST** /order.Order/GetOrder | Get Order
[**getOrderByCartId**](OrderApi.md#getOrderByCartId) | **POST** /order.Order/GetOrderByCartId | Get Order by Cart ID
[**getOrderByOrderNumber**](OrderApi.md#getOrderByOrderNumber) | **POST** /order.Order/GetOrderByOrderNumber | Get Order by Order Number
[**getPayment**](OrderApi.md#getPayment) | **POST** /order.Order/GetPayment | Get Payment
[**getShipment**](OrderApi.md#getShipment) | **POST** /order.Order/GetShipment | Get Shipment
[**getTransaction**](OrderApi.md#getTransaction) | **POST** /order.Order/GetTransaction | Get Transaction
[**holdOrder**](OrderApi.md#holdOrder) | **POST** /order.Order/HoldOrder | Hold Order
[**importOrder**](OrderApi.md#importOrder) | **POST** /order.Order/ImportOrder | Import Order
[**listFulfillments**](OrderApi.md#listFulfillments) | **POST** /order.Order/ListFulfillments | List Fulfillments
[**listOrders**](OrderApi.md#listOrders) | **POST** /order.Order/ListOrders | List Orders
[**listOrdersByCustomer**](OrderApi.md#listOrdersByCustomer) | **POST** /order.Order/ListOrdersByCustomer | List Orders by Customer
[**listOrdersByNumbers**](OrderApi.md#listOrdersByNumbers) | **POST** /order.Order/ListOrdersByNumbers | List Orders by Numbers
[**listShipments**](OrderApi.md#listShipments) | **POST** /order.Order/ListShipments | List Shipments
[**orderAddDocument**](OrderApi.md#orderAddDocument) | **POST** /order.Order/AddDocument | Documents
[**orderRemoveDocumentByCode**](OrderApi.md#orderRemoveDocumentByCode) | **POST** /order.Order/RemoveDocumentByCode | 
[**printOrdersLabels**](OrderApi.md#printOrdersLabels) | **POST** /order.Order/PrintOrdersLabels | Print Orders Labels
[**quashFulfillment**](OrderApi.md#quashFulfillment) | **POST** /order.Order/QuashFulfillment | Quash Fulfillment
[**quashShipment**](OrderApi.md#quashShipment) | **POST** /order.Order/QuashShipment | Quash Shipment
[**receiveFulfillment**](OrderApi.md#receiveFulfillment) | **POST** /order.Order/ReceiveFulfillment | Receive Fulfillment
[**reportFulfillmentError**](OrderApi.md#reportFulfillmentError) | **POST** /order.Order/ReportFulfillmentError | Report Fulfillment Error
[**reportFulfillmentNotResolvable**](OrderApi.md#reportFulfillmentNotResolvable) | **POST** /order.Order/ReportFulfillmentNotResolvable | Report Fulfillment Not Resolvable
[**reportFulfillmentReady**](OrderApi.md#reportFulfillmentReady) | **POST** /order.Order/ReportFulfillmentReady | Report Fulfillment Ready
[**reportShipmentDelivery**](OrderApi.md#reportShipmentDelivery) | **POST** /order.Order/ReportShipmentDelivery | Report Shipment Delivery
[**reportShipmentMissingStock**](OrderApi.md#reportShipmentMissingStock) | **POST** /order.Order/ReportShipmentMissingStock | Report Shipment Missing Stock
[**resolveShipmentMissingStock**](OrderApi.md#resolveShipmentMissingStock) | **POST** /order.Order/ResolveShipmentMissingStock | Resolve Shipment Missing Stock
[**retryFulfillment**](OrderApi.md#retryFulfillment) | **POST** /order.Order/RetryFulfillment | Retry Fulfillment
[**searchOrders**](OrderApi.md#searchOrders) | **POST** /order.Order/SearchOrders | Search Orders
[**sendFulfillment**](OrderApi.md#sendFulfillment) | **POST** /order.Order/SendFulfillment | Send Fulfillment
[**sendOrderNotification**](OrderApi.md#sendOrderNotification) | **POST** /order.Order/SendOrderNotification | Send Order Notification
[**startFulfillmentProcessing**](OrderApi.md#startFulfillmentProcessing) | **POST** /order.Order/StartFulfillmentProcessing | Start Fulfillment Processing
[**startShipmentProcessing**](OrderApi.md#startShipmentProcessing) | **POST** /order.Order/StartShipmentProcessing | Start Shipment Processing
[**unholdOrder**](OrderApi.md#unholdOrder) | **POST** /order.Order/UnholdOrder | Unhold Order
[**updateOrder**](OrderApi.md#updateOrder) | **POST** /order.Order/UpdateOrder | Update Order
[**updatePayment**](OrderApi.md#updatePayment) | **POST** /order.Order/UpdatePayment | Update Payment


# **approveOrder**
> any approveOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiApproveOrderRequest = {
  // OrderApproveOrderRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
  },
};

apiInstance.approveOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderApproveOrderRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **assignShipment**
> any assignShipment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiAssignShipmentRequest = {
  // OrderAssignShipmentRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
  },
};

apiInstance.assignShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderAssignShipmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **calculateRefund**
> OrderCalculateRefundResponse calculateRefund(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCalculateRefundRequest = {
  // OrderCalculateRefundRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    items: [
      {
        orderItemId: "orderItemId_example",
        qty: 1,
      },
    ],
    shipping: true,
  },
};

apiInstance.calculateRefund(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCalculateRefundRequest**|  |


### Return type

**OrderCalculateRefundResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelFulfillment**
> any cancelFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCancelFulfillmentRequest = {
  // OrderCancelFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
    reason: "reason_example",
  },
};

apiInstance.cancelFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCancelFulfillmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelOrder**
> any cancelOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCancelOrderRequest = {
  // OrderCancelOrderRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    reason: "reason_example",
  },
};

apiInstance.cancelOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCancelOrderRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelShipment**
> any cancelShipment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCancelShipmentRequest = {
  // OrderCancelShipmentRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
    reason: "reason_example",
  },
};

apiInstance.cancelShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCancelShipmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **completeShipmentPacking**
> any completeShipmentPacking(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCompleteShipmentPackingRequest = {
  // OrderCompleteShipmentPackingRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
  },
};

apiInstance.completeShipmentPacking(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCompleteShipmentPackingRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFulfillment**
> OrderFulfillment createFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateFulfillmentRequest = {
  // OrderCreateFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    items: [
      {
        orderItemId: "orderItemId_example",
        qty: 1,
      },
    ],
  },
};

apiInstance.createFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateFulfillmentRequest**|  |


### Return type

**OrderFulfillment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrder**
> OrderOrderData createOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateOrderRequest = {
  // OrderCreateOrderRequest
  body: {
    tenantId: "tenantId_example",
    number: "number_example",
    channel: "channel_example",
    market: "market_example",
    locale: "locale_example",
    items: [
      {
        id: "id_example",
        productGrn: "productGrn_example",
        qtyOrdered: 1,
        qtyCommitted: 1,
        unitSalePrice: {
          units: "units_example",
          micros: 1,
        },
        unitListPrice: {
          units: "units_example",
          micros: 1,
        },
        unitBasePrice: {
          units: "units_example",
          micros: 1,
        },
        unitVatAmount: {
          units: "units_example",
          micros: 1,
        },
        rowSalePrice: {
          units: "units_example",
          micros: 1,
        },
        rowListPrice: {
          units: "units_example",
          micros: 1,
        },
        rowVatAmount: {
          units: "units_example",
          micros: 1,
        },
        discountAmount: {
          units: "units_example",
          micros: 1,
        },
        rowBasePrice: {
          units: "units_example",
          micros: 1,
        },
        unitCustomPrice: {
          units: "units_example",
          micros: 1,
        },
        rowCustomPrice: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        productName: "productName_example",
        productCode: "productCode_example",
        productSku: "productSku_example",
        productOptions: "productOptions_example",
        productImg: "productImg_example",
        productData: "productData_example",
        shipmentInfoReference: "shipmentInfoReference_example",
        promotionGrn: [
          "promotionGrn_example",
        ],
        productIsVirtual: true,
        productConfiguration: [
          {
            id: "id_example",
            grn: "grn_example",
            label: "label_example",
            description: "description_example",
            options: [
              {
                id: "id_example",
                grn: "grn_example",
                label: "label_example",
                priceVariation: {
                  units: "units_example",
                  micros: 1,
                },
                image: {
                  grn: "grn_example",
                  url: "url_example",
                },
                hasQuantity: true,
                quantity: 1,
              },
            ],
          },
        ],
      },
    ],
    paymentsInfo: [
      {
        code: "code_example",
        additionalInfo: "additionalInfo_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        fee: {
          units: "units_example",
          micros: 1,
        },
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        title: {
          value: {
            "key": "key_example",
          },
        },
        label: {
          value: {
            "key": "key_example",
          },
        },
      },
    ],
    shipmentsInfo: [
      {
        reference: "reference_example",
        code: "code_example",
        method: "method_example",
        title: "title_example",
        additionalInfo: "additionalInfo_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        fee: {
          units: "units_example",
          micros: 1,
        },
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        grn: "grn_example",
        fromAddress: {
          revision: 1,
          regionCode: "regionCode_example",
          languageCode: "languageCode_example",
          postalCode: "postalCode_example",
          sortingCode: "sortingCode_example",
          administrativeArea: "administrativeArea_example",
          locality: "locality_example",
          sublocality: "sublocality_example",
          addressLines: [
            "addressLines_example",
          ],
          recipients: [
            "recipients_example",
          ],
          organization: "organization_example",
          phoneNumber: "phoneNumber_example",
          additionalInfo: {},
        },
        returnAddress: {
          revision: 1,
          regionCode: "regionCode_example",
          languageCode: "languageCode_example",
          postalCode: "postalCode_example",
          sortingCode: "sortingCode_example",
          administrativeArea: "administrativeArea_example",
          locality: "locality_example",
          sublocality: "sublocality_example",
          addressLines: [
            "addressLines_example",
          ],
          recipients: [
            "recipients_example",
          ],
          organization: "organization_example",
          phoneNumber: "phoneNumber_example",
          additionalInfo: {},
        },
      },
    ],
    promotions: [
      {
        promotionGrn: "promotionGrn_example",
        type: "type_example",
        additionalInfo: "additionalInfo_example",
        name: "name_example",
        description: "description_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        couponCode: "couponCode_example",
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
      },
    ],
    payments: [
      {
        code: "code_example",
        additionalInfo: "additionalInfo_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        ccInfo: {
          approval: "approval_example",
          expMonth: 1,
          expYear: "expYear_example",
          last4: "last4_example",
          numberEnc: "numberEnc_example",
          owner: "owner_example",
          avsStatus: "avsStatus_example",
          type: "type_example",
        },
        transaction: {
          type: "UNKNOWN",
          additionalInfo: "additionalInfo_example",
        },
      },
    ],
    currency: "XXX",
    subtotals: {
      "key": {
        code: "UNKNOWN",
        value: {
          units: "units_example",
          micros: 1,
        },
      },
    },
    totals: {
      "key": {
        code: "UNKNOWN",
        value: {
          units: "units_example",
          micros: 1,
        },
      },
    },
    vatIncluded: true,
    billingAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    shippingAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    customerInfo: {
      grn: "grn_example",
      firstname: "firstname_example",
      lastname: "lastname_example",
      email: "email_example",
      phone: "phone_example",
      segment: "segment_example",
      data: "data_example",
      certifiedEmail: "certifiedEmail_example",
      taxCode: "taxCode_example",
      sdiCode: "sdiCode_example",
      fiscalCode: "fiscalCode_example",
      companyName: "companyName_example",
      agentGrn: "agentGrn_example",
    },
    cartGrn: "cartGrn_example",
    onHold: true,
    notes: "notes_example",
  },
};

apiInstance.createOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateOrderRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createOrderHistory**
> OrderDataHistory createOrderHistory(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateOrderHistoryRequest = {
  // OrderCreateHistoryRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    comment: "comment_example",
  },
};

apiInstance.createOrderHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateHistoryRequest**|  |


### Return type

**OrderDataHistory**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPayment**
> OrderPayment createPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreatePaymentRequest = {
  // OrderCreatePaymentRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    code: "code_example",
    additionalInfo: "additionalInfo_example",
    amount: {
      units: "units_example",
      micros: 1,
    },
    ccInfo: {
      approval: "approval_example",
      expMonth: 1,
      expYear: "expYear_example",
      last4: "last4_example",
      numberEnc: "numberEnc_example",
      owner: "owner_example",
      avsStatus: "avsStatus_example",
      type: "type_example",
    },
  },
};

apiInstance.createPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreatePaymentRequest**|  |


### Return type

**OrderPayment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPaymentTransaction**
> OrderTransaction createPaymentTransaction(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreatePaymentTransactionRequest = {
  // OrderCreatePaymentTransactionRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    type: "UNKNOWN",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.createPaymentTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreatePaymentTransactionRequest**|  |


### Return type

**OrderTransaction**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRefund**
> OrderRefund createRefund(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateRefundRequest = {
  // OrderCreateRefundRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    items: [
      {
        orderItemId: "orderItemId_example",
        qty: 1,
      },
    ],
    amounts: [
      {
        code: "UNKNOWN",
        value: {
          units: "units_example",
          micros: 1,
        },
      },
    ],
    note: "note_example",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.createRefund(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateRefundRequest**|  |


### Return type

**OrderRefund**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRefundTransaction**
> OrderTransaction createRefundTransaction(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateRefundTransactionRequest = {
  // OrderCreateRefundTransactionRequest
  body: {
    tenantId: "tenantId_example",
    refundId: "refundId_example",
    parentTransactionId: "parentTransactionId_example",
    type: "UNKNOWN",
    additionalInfo: "additionalInfo_example",
  },
};

apiInstance.createRefundTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateRefundTransactionRequest**|  |


### Return type

**OrderTransaction**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShipment**
> OrderShipment createShipment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiCreateShipmentRequest = {
  // OrderCreateShipmentRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    items: [
      {
        orderItemId: "orderItemId_example",
        qty: 1,
        rowWeight: "rowWeight_example",
      },
    ],
    address: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    fromAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    returnAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    tracking: [
      {
        carrierCode: "carrierCode_example",
        carrierTitle: "carrierTitle_example",
        url: "url_example",
        number: "number_example",
        labelUrl: "labelUrl_example",
      },
    ],
    returnTracking: [
      {
        carrierCode: "carrierCode_example",
        carrierTitle: "carrierTitle_example",
        url: "url_example",
        number: "number_example",
        labelUrl: "labelUrl_example",
      },
    ],
    code: "code_example",
    method: "method_example",
  },
};

apiInstance.createShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderCreateShipmentRequest**|  |


### Return type

**OrderShipment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOrder**
> any deleteOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiDeleteOrderRequest = {
  // OrderDeleteOrderRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
  },
};

apiInstance.deleteOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderDeleteOrderRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFulfillment**
> OrderFulfillment getFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetFulfillmentRequest = {
  // OrderGetFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetFulfillmentRequest**|  |


### Return type

**OrderFulfillment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrder**
> OrderOrderData getOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetOrderRequest = {
  // OrderGetOrderRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetOrderRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderByCartId**
> OrderOrderData getOrderByCartId(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetOrderByCartIdRequest = {
  // OrderGetOrderByCartIdRequest
  body: {
    tenantId: "tenantId_example",
    cartId: "cartId_example",
  },
};

apiInstance.getOrderByCartId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetOrderByCartIdRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getOrderByOrderNumber**
> OrderOrderData getOrderByOrderNumber(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetOrderByOrderNumberRequest = {
  // OrderGetOrderByOrderNumberRequest
  body: {
    tenantId: "tenantId_example",
    orderNumber: "orderNumber_example",
  },
};

apiInstance.getOrderByOrderNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetOrderByOrderNumberRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPayment**
> OrderPayment getPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetPaymentRequest = {
  // OrderGetPaymentRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetPaymentRequest**|  |


### Return type

**OrderPayment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getShipment**
> OrderShipment getShipment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetShipmentRequest = {
  // OrderGetShipmentRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetShipmentRequest**|  |


### Return type

**OrderShipment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransaction**
> OrderTransaction getTransaction(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiGetTransactionRequest = {
  // OrderGetTransactionRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.getTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderGetTransactionRequest**|  |


### Return type

**OrderTransaction**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **holdOrder**
> any holdOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiHoldOrderRequest = {
  // OrderHoldOrderRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    reason: "reason_example",
  },
};

apiInstance.holdOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderHoldOrderRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importOrder**
> OrderOrderData importOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiImportOrderRequest = {
  // OrderImportOrderRequest
  body: {
    tenantId: "tenantId_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    number: "number_example",
    channel: "channel_example",
    market: "market_example",
    locale: "locale_example",
    customerInfo: {
      grn: "grn_example",
      firstname: "firstname_example",
      lastname: "lastname_example",
      email: "email_example",
      phone: "phone_example",
      segment: "segment_example",
      data: "data_example",
      certifiedEmail: "certifiedEmail_example",
      taxCode: "taxCode_example",
      sdiCode: "sdiCode_example",
      fiscalCode: "fiscalCode_example",
      companyName: "companyName_example",
      agentGrn: "agentGrn_example",
    },
    shippingAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    billingAddress: {
      revision: 1,
      regionCode: "regionCode_example",
      languageCode: "languageCode_example",
      postalCode: "postalCode_example",
      sortingCode: "sortingCode_example",
      administrativeArea: "administrativeArea_example",
      locality: "locality_example",
      sublocality: "sublocality_example",
      addressLines: [
        "addressLines_example",
      ],
      recipients: [
        "recipients_example",
      ],
      organization: "organization_example",
      phoneNumber: "phoneNumber_example",
      additionalInfo: {},
    },
    payments: [
      {
        code: "code_example",
        additionalInfo: "additionalInfo_example",
        amounts: [
          {
            code: "UNKNOWN",
            value: {
              units: "units_example",
              micros: 1,
            },
          },
        ],
        ccInfo: {
          approval: "approval_example",
          expMonth: 1,
          expYear: "expYear_example",
          last4: "last4_example",
          numberEnc: "numberEnc_example",
          owner: "owner_example",
          avsStatus: "avsStatus_example",
          type: "type_example",
        },
        isUpfront: true,
      },
    ],
    paymentsInfo: [
      {
        code: "code_example",
        additionalInfo: "additionalInfo_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        fee: {
          units: "units_example",
          micros: 1,
        },
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        title: {
          value: {
            "key": "key_example",
          },
        },
        label: {
          value: {
            "key": "key_example",
          },
        },
      },
    ],
    shipmentsInfo: [
      {
        reference: "reference_example",
        code: "code_example",
        method: "method_example",
        title: "title_example",
        additionalInfo: "additionalInfo_example",
        amount: {
          units: "units_example",
          micros: 1,
        },
        fee: {
          units: "units_example",
          micros: 1,
        },
        vatAmount: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        grn: "grn_example",
        fromAddress: {
          revision: 1,
          regionCode: "regionCode_example",
          languageCode: "languageCode_example",
          postalCode: "postalCode_example",
          sortingCode: "sortingCode_example",
          administrativeArea: "administrativeArea_example",
          locality: "locality_example",
          sublocality: "sublocality_example",
          addressLines: [
            "addressLines_example",
          ],
          recipients: [
            "recipients_example",
          ],
          organization: "organization_example",
          phoneNumber: "phoneNumber_example",
          additionalInfo: {},
        },
        returnAddress: {
          revision: 1,
          regionCode: "regionCode_example",
          languageCode: "languageCode_example",
          postalCode: "postalCode_example",
          sortingCode: "sortingCode_example",
          administrativeArea: "administrativeArea_example",
          locality: "locality_example",
          sublocality: "sublocality_example",
          addressLines: [
            "addressLines_example",
          ],
          recipients: [
            "recipients_example",
          ],
          organization: "organization_example",
          phoneNumber: "phoneNumber_example",
          additionalInfo: {},
        },
      },
    ],
    items: [
      {
        id: "id_example",
        productGrn: "productGrn_example",
        qtyOrdered: 1,
        qtyCommitted: 1,
        unitSalePrice: {
          units: "units_example",
          micros: 1,
        },
        unitListPrice: {
          units: "units_example",
          micros: 1,
        },
        unitBasePrice: {
          units: "units_example",
          micros: 1,
        },
        unitVatAmount: {
          units: "units_example",
          micros: 1,
        },
        rowSalePrice: {
          units: "units_example",
          micros: 1,
        },
        rowListPrice: {
          units: "units_example",
          micros: 1,
        },
        rowVatAmount: {
          units: "units_example",
          micros: 1,
        },
        discountAmount: {
          units: "units_example",
          micros: 1,
        },
        rowBasePrice: {
          units: "units_example",
          micros: 1,
        },
        unitCustomPrice: {
          units: "units_example",
          micros: 1,
        },
        rowCustomPrice: {
          units: "units_example",
          micros: 1,
        },
        vatPercentage: 3.14,
        vatInaccurate: true,
        vatCalculated: true,
        productName: "productName_example",
        productCode: "productCode_example",
        productSku: "productSku_example",
        productOptions: "productOptions_example",
        productImg: "productImg_example",
        productData: "productData_example",
        shipmentInfoReference: "shipmentInfoReference_example",
        promotionGrn: [
          "promotionGrn_example",
        ],
        productIsVirtual: true,
        productConfiguration: [
          {
            id: "id_example",
            grn: "grn_example",
            label: "label_example",
            description: "description_example",
            options: [
              {
                id: "id_example",
                grn: "grn_example",
                label: "label_example",
                priceVariation: {
                  units: "units_example",
                  micros: 1,
                },
                image: {
                  grn: "grn_example",
                  url: "url_example",
                },
                hasQuantity: true,
                quantity: 1,
              },
            ],
          },
        ],
      },
    ],
    subtotals: {
      "key": {
        code: "UNKNOWN",
        value: {
          units: "units_example",
          micros: 1,
        },
      },
    },
    totals: {
      "key": {
        code: "UNKNOWN",
        value: {
          units: "units_example",
          micros: 1,
        },
      },
    },
    status: "status_example",
    currency: "XXX",
    vatIncluded: true,
  },
};

apiInstance.importOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderImportOrderRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFulfillments**
> OrderListFulfillmentsResponse listFulfillments(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiListFulfillmentsRequest = {
  // OrderListFulfillmentsRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
  },
};

apiInstance.listFulfillments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderListFulfillmentsRequest**|  |


### Return type

**OrderListFulfillmentsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrders**
> OrderListOrdersResponse listOrders(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiListOrdersRequest = {
  // OrderListOrdersRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    orderBy: [
      {
        field: "field_example",
        direction: "DEFAULT",
      },
    ],
    statusFilter: {
      statuses: [
        "statuses_example",
      ],
      condition: "IN",
    },
  },
};

apiInstance.listOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderListOrdersRequest**|  |


### Return type

**OrderListOrdersResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrdersByCustomer**
> OrderListOrdersByCustomerResponse listOrdersByCustomer(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiListOrdersByCustomerRequest = {
  // OrderListOrdersByCustomerRequest
  body: {
    tenantId: "tenantId_example",
    customerGrn: "customerGrn_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    orderBy: [
      {
        field: "field_example",
        direction: "DEFAULT",
      },
    ],
  },
};

apiInstance.listOrdersByCustomer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderListOrdersByCustomerRequest**|  |


### Return type

**OrderListOrdersByCustomerResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOrdersByNumbers**
> OrderListOrdersByNumbersResponse listOrdersByNumbers(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiListOrdersByNumbersRequest = {
  // OrderListOrdersByNumbersRequest
  body: {
    tenantId: "tenantId_example",
    numbers: [
      "numbers_example",
    ],
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.listOrdersByNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderListOrdersByNumbersRequest**|  |


### Return type

**OrderListOrdersByNumbersResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listShipments**
> OrderListShipmentsResponse listShipments(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiListShipmentsRequest = {
  // OrderListShipmentsRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
  },
};

apiInstance.listShipments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderListShipmentsRequest**|  |


### Return type

**OrderListShipmentsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderAddDocument**
> any orderAddDocument(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiOrderAddDocumentRequest = {
  // OrderAddDocumentRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    code: "code_example",
    label: "label_example",
    assetGrn: "assetGrn_example",
    url: "url_example",
  },
};

apiInstance.orderAddDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderAddDocumentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **orderRemoveDocumentByCode**
> any orderRemoveDocumentByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiOrderRemoveDocumentByCodeRequest = {
  // OrderRemoveDocumentByCodeRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
    code: "code_example",
  },
};

apiInstance.orderRemoveDocumentByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderRemoveDocumentByCodeRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **printOrdersLabels**
> OrderPrintOrdersLabelsResponse printOrdersLabels(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiPrintOrdersLabelsRequest = {
  // OrderPrintOrdersLabelsRequest
  body: {
    tenantId: "tenantId_example",
    orderNumbers: [
      "orderNumbers_example",
    ],
  },
};

apiInstance.printOrdersLabels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderPrintOrdersLabelsRequest**|  |


### Return type

**OrderPrintOrdersLabelsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **quashFulfillment**
> any quashFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiQuashFulfillmentRequest = {
  // OrderQuashFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
    reason: "reason_example",
  },
};

apiInstance.quashFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderQuashFulfillmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **quashShipment**
> any quashShipment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiQuashShipmentRequest = {
  // OrderQuashShipmentRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
    reason: "reason_example",
  },
};

apiInstance.quashShipment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderQuashShipmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **receiveFulfillment**
> any receiveFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReceiveFulfillmentRequest = {
  // OrderReceiveFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.receiveFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReceiveFulfillmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportFulfillmentError**
> any reportFulfillmentError(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReportFulfillmentErrorRequest = {
  // OrderReportFulfillmentErrorRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.reportFulfillmentError(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReportFulfillmentErrorRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportFulfillmentNotResolvable**
> any reportFulfillmentNotResolvable(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReportFulfillmentNotResolvableRequest = {
  // OrderReportFulfillmentNotResolvableRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.reportFulfillmentNotResolvable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReportFulfillmentNotResolvableRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportFulfillmentReady**
> any reportFulfillmentReady(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReportFulfillmentReadyRequest = {
  // OrderReportFulfillmentReadyRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.reportFulfillmentReady(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReportFulfillmentReadyRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportShipmentDelivery**
> any reportShipmentDelivery(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReportShipmentDeliveryRequest = {
  // OrderReportShipmentDeliveryRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
  },
};

apiInstance.reportShipmentDelivery(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReportShipmentDeliveryRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **reportShipmentMissingStock**
> any reportShipmentMissingStock(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiReportShipmentMissingStockRequest = {
  // OrderReportShipmentMissingStockRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
    reason: "reason_example",
  },
};

apiInstance.reportShipmentMissingStock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderReportShipmentMissingStockRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resolveShipmentMissingStock**
> any resolveShipmentMissingStock(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiResolveShipmentMissingStockRequest = {
  // OrderResolveShipmentMissingStockRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
  },
};

apiInstance.resolveShipmentMissingStock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderResolveShipmentMissingStockRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retryFulfillment**
> any retryFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiRetryFulfillmentRequest = {
  // OrderRetryFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.retryFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderRetryFulfillmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchOrders**
> OrderSearchOrdersResponse searchOrders(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiSearchOrdersRequest = {
  // OrderSearchOrdersRequest
  body: {
    tenantId: "tenantId_example",
    searchQuery: "searchQuery_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    orderBy: [
      {
        field: "field_example",
        direction: "DEFAULT",
      },
    ],
    statusFilter: {
      statuses: [
        "statuses_example",
      ],
      condition: "IN",
    },
    fromDate: new Date('1970-01-01T00:00:00.00Z'),
    toDate: new Date('1970-01-01T00:00:00.00Z'),
    paymentFilter: {
      codes: [
        "codes_example",
      ],
      condition: "IN",
    },
    agentGrn: "agentGrn_example",
    updatedFrom: new Date('1970-01-01T00:00:00.00Z'),
    updatedTo: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.searchOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderSearchOrdersRequest**|  |


### Return type

**OrderSearchOrdersResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendFulfillment**
> any sendFulfillment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiSendFulfillmentRequest = {
  // OrderSendFulfillmentRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.sendFulfillment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderSendFulfillmentRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendOrderNotification**
> any sendOrderNotification(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiSendOrderNotificationRequest = {
  // OrderSendOrderNotificationRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.sendOrderNotification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderSendOrderNotificationRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startFulfillmentProcessing**
> any startFulfillmentProcessing(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiStartFulfillmentProcessingRequest = {
  // OrderStartFulfillmentProcessingRequest
  body: {
    tenantId: "tenantId_example",
    fulfillmentId: "fulfillmentId_example",
  },
};

apiInstance.startFulfillmentProcessing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderStartFulfillmentProcessingRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **startShipmentProcessing**
> any startShipmentProcessing(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiStartShipmentProcessingRequest = {
  // OrderStartShipmentProcessingRequest
  body: {
    tenantId: "tenantId_example",
    shipmentId: "shipmentId_example",
  },
};

apiInstance.startShipmentProcessing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderStartShipmentProcessingRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unholdOrder**
> any unholdOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiUnholdOrderRequest = {
  // OrderUnholdOrderRequest
  body: {
    tenantId: "tenantId_example",
    orderId: "orderId_example",
  },
};

apiInstance.unholdOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderUnholdOrderRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOrder**
> OrderOrderData updateOrder(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiUpdateOrderRequest = {
  // OrderUpdateOrderRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      billingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      shippingAddress: {
        revision: 1,
        regionCode: "regionCode_example",
        languageCode: "languageCode_example",
        postalCode: "postalCode_example",
        sortingCode: "sortingCode_example",
        administrativeArea: "administrativeArea_example",
        locality: "locality_example",
        sublocality: "sublocality_example",
        addressLines: [
          "addressLines_example",
        ],
        recipients: [
          "recipients_example",
        ],
        organization: "organization_example",
        phoneNumber: "phoneNumber_example",
        additionalInfo: {},
      },
      additionalInfo: {},
    },
    fieldMask: "fieldMask_example",
  },
};

apiInstance.updateOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderUpdateOrderRequest**|  |


### Return type

**OrderOrderData**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePayment**
> OrderPayment updatePayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OrderApi(configuration);

let body:.OrderApiUpdatePaymentRequest = {
  // OrderUpdatePaymentRequest
  body: {
    tenantId: "tenantId_example",
    paymentId: "paymentId_example",
    ccInfo: {
      approval: "approval_example",
      expMonth: 1,
      expYear: "expYear_example",
      last4: "last4_example",
      numberEnc: "numberEnc_example",
      owner: "owner_example",
      avsStatus: "avsStatus_example",
      type: "type_example",
    },
  },
};

apiInstance.updatePayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrderUpdatePaymentRequest**|  |


### Return type

**OrderPayment**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**500** | An internal error occurred is thrown when an incompatible payload is sent |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


