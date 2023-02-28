import { WxFnCallback, WxFnCallbackRes, WxFnCommonParams, WxInvokeCallbackRes } from "./common";
export type OnMenuShareAppMessageParams = WxFnCommonParams & {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
};
export type OnMenuShareWechat = WxFnCommonParams & {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
};
export type OnMenuShareTimeline = WxFnCommonParams & {
    title: string;
    link: string;
    imgUrl: string;
};
export type MenuItem = "menuItem:setFont" | "menuItem:refresh" | "menuItem:share:appMessage" | "menuItem:share:wechat" | "menuItem:favorite" | "menuItem:copyUrl" | "menuItem:openWithSafari" | "menuItem:share:email";
export type HideMenuItemsParams = {
    menuList: MenuItem[];
};
export type ShowMenuItemParams = {
    menuList: MenuItem[];
};
export type ScanQRCodeParams = WxFnCommonParams & {
    desc?: string;
    needResult?: 0 | 1;
    scanType?: string[];
    success?: WxFnCallback<ScanQRCodeRes>;
};
export type ScanQRCodeRes = WxFnCallbackRes;
export type ChooseInvoiceParams = {
    timestamp: string;
    nonceStr: string;
    signType: string;
    cardSign: string;
};
export type ChooseInvoiceRes = WxInvokeCallbackRes & {
    choose_invoice_info: {
        card_id: string;
        encrypt_code: string;
        app_id: string;
    };
};
export type EnterpriseVerifyParams = {};
export type EnterpriseVerifyRes = WxInvokeCallbackRes;
export type LaunchMiniprogramParams = {
    appid: string;
    path?: string;
};
export type LaunchMiniprogramRes = WxInvokeCallbackRes;
export type OpenDefaultBrowserParams = {
    url: string;
};
export type OpenDefaultBrowserRes = WxInvokeCallbackRes;
