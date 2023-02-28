import { WxInvokeCallbackRes } from "./common";
export type CreateSchoolPaymentParams = {
    projectName?: string;
    amount?: number;
    payers?: {
        students?: string[];
        departments?: number[];
    };
};
export type CreateSchoolPaymentRes = WxInvokeCallbackRes & {
    paymentId: string;
};
