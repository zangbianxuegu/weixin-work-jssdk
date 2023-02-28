import { FileMessage, ImageMessage, LinkMessage, MiniProgramMessage, VideoMessage, WxInvokeCallbackRes } from "./common";
export type SelectExternalContactParams = {
    filterType: 0 | 1;
};
export type SelectExternalContactRes = WxInvokeCallbackRes & {
    userIds: string[];
};
export type GetCurExternalContactRes = WxInvokeCallbackRes & {
    userId: string;
};
export type GetCurExternalChatRes = WxInvokeCallbackRes & {
    chatId: string;
};
export type ShareToExternalContactParams = {
    text: {
        content: string;
    };
    attachments?: Array<ImageMessage | VideoMessage | LinkMessage | MiniProgramMessage | FileMessage>;
};
export type ShareToExternalContactRes = WxInvokeCallbackRes;
export type ShareToExternalChatParams = ShareToExternalContactParams;
export type ShareToExternalChatRes = WxInvokeCallbackRes;
export type ShareToExternalMomentsParams = ShareToExternalContactParams;
export type ShareToExternalMomentsRes = WxInvokeCallbackRes;
export type UpdateMomentsSettingParams = {
    signature?: string;
    imgUrl?: string;
};
export type UpdateMomentsSettingRes = WxInvokeCallbackRes;
export type NavigateToAddCustomerRes = WxInvokeCallbackRes;
