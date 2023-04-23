import http from 'k6/http';
import { group, sleep } from 'k6';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import {metrics} from "./metrict-config";

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
    const contentOK = res.json('name') === 'Bert';
    metrics.PublicCrocodiles.request.add(1);
    metrics.PublicCrocodiles.requestDuration.add(res.timings.duration);

    metrics.PublicCrocodiles.requestSending.add(res.timings.sending);
    metrics.PublicCrocodiles.requestWaiting.add(res.timings.waiting);
    metrics.PublicCrocodiles.requestsReceived.add(res.timings.receiving);
    sleep(1);
}

