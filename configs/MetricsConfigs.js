import {Trend, Counter, Gauge, Rate} from "k6/metric";

export const metrics = {
    PublicCrocodiles: {
        errors: new Counter("Public_Crocodiles_error_request"),
        request: new Counter("Public_Crocodiles_request"),
        requestDuration: new Trend("Public_Crocodiles_request_duration"),
        requestSending: new Trend("Public_Crocodiles_request_sending"),
        requestsReceived: new Trend("Public_Crocodiles_request_received"),
        requestWaiting: new Trend("Public_Crocodiles_request_waiting"),
        successRate: new Rate("Public_Crocodiles_success_rate")
    },
    UserCreate: {
        errors: new Counter("UserCreate_error_request"),
        request: new Counter("UserCreate_request"),
        requestDuration: new Trend("UserCreate_request_duration"),
        requestSending: new Trend("UserCreate_request_sending"),
        requestsReceived: new Trend("UserCreate_request_received"),
        requestWaiting: new Trend("UserCreate_request_waiting"),
        successRate: new Rate("UserCreate_success_rate")
    },
    AuthTokenLogin:{
        errors: new Counter("AuthTokenLogin_error_request"),
        request: new Counter("AuthTokenLogin_request"),
        requestDuration: new Trend("AuthTokenLogin_request_duration"),
        requestSending: new Trend("AuthTokenLogin_request_sending"),
        requestsReceived: new Trend("AuthTokenLogin_request_received"),
        requestWaiting: new Trend("AuthTokenLogin_request_waiting"),
        successRate: new Rate("AuthTokenLogin_success_rate")
    },
    errorCheck: {
        generalErrors: new Counter("errors"),
    },
}