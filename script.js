import http from 'k6/http';
import { group, sleep } from 'k6';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import publicCrocodiles from "./publicCrocodiles";
const stages = (occurrence) => {
    return [
        { duration: stagesTotal[0].duration, target: Math.ceil(stagesTotal[0].target * occurrence) },
        { duration: stagesTotal[1].duration, target: Math.ceil(stagesTotal[1].target * occurrence) },
        { duration: stagesTotal[2].duration, target: Math.ceil(stagesTotal[2].target * occurrence) },
        { duration: stagesTotal[3].duration, target: Math.ceil(stagesTotal[3].target * occurrence) },
        { duration: stagesTotal[4].duration, target: Math.ceil(stagesTotal[4].target * occurrence) },
        { duration: stagesTotal[5].duration, target: Math.ceil(stagesTotal[5].target * occurrence) },
    ];
};
export const options = {
    scenarios:{
        public_coco: {
            executor:"ramping-vus",
            startVUs: 0,
            stages: stages(0.01),
            gracefulRampDown: "0s",
            exec: "scenarioVU1",
        }
    }
};
const scenarioWithSleep = (scenario) => {
    scenario();
    sleep(1);
};

export default function public_coco() {
    publicCrocodiles();
}


export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}
