import { check } from "k6";

export const checking = {
    requestSucceedCheck: (response, message) => {
        const handler = {};
        const msg = `${message}, checking status code is 200`;
        handler[msg] = (r) => r.status === 200;

        check(response, handler);
    },

    loginFailedCheck: (response, message) => {
        const handler = {};
        const msg = `${message}, checking status code is 401`;
        handler[msg] = (r) => r.status === 401;

        check(response, handler);
    }
};
