import { CorpGroupUserId, FileMessage, ImageMessage, LinkMessage, Message, MiniProgramMessage, NewsMessage, TextMessage, VideoMessage, WxFnCommonParams, WxInvokeCallback, WxInvokeCallbackRes } from "./common";
export type OpenEnterpriseChatParams = WxFnCommonParams & {
    userIds?: string;
    externalUserIds?: string;
    groupName?: string;
    chatId?: string;
    success?: WxInvokeCallback<OpenEnterpriseChatRes>;
};
export type OpenEnterpriseChatRes = WxInvokeCallbackRes & {
    chatId: string;
};
export type UpdateEnterpriseChatParams = {
    chatId: string;
    userIdsToAdd: string;
};
export type UpdateEnterpriseChatRes = WxInvokeCallbackRes;
export type HideChatAttachmentMenuParams = {
    menuList: string[];
};
export type HideChatAttachmentMenuRes = WxInvokeCallbackRes;
export interface SendChatMessageCommonParams {
    enterChat: boolean;
}
export type SendChatMessageParams = (TextMessage & SendChatMessageCommonParams) | (ImageMessage & SendChatMessageCommonParams) | (VideoMessage & SendChatMessageCommonParams) | (FileMessage & SendChatMessageCommonParams) | (NewsMessage & SendChatMessageCommonParams) | (MiniProgramMessage & SendChatMessageCommonParams);
export type SendChatMessageRes = WxInvokeCallbackRes;
export type CreateChatWithMsgParams = {
    selectedOpenUserIds?: string[];
    selectedTickets?: string[];
    chatName?: string;
    msg: LinkMessage;
};
export type CreateChatWithMsgRes = {
    chatId: string;
};
export type OpenExistedChatWithMsgParams = {
    chatId: string;
    msg?: Message;
};
export type OpenExistedChatWithMsgRes = WxInvokeCallbackRes;
export type SetShareAttrParams = {
    withShareTicket?: boolean;
    state?: string;
};
export type SetShareAttrRes = WxInvokeCallbackRes;
export type GetShareInfoParams = {
    shareTicket: string;
};
export type GetShareInfoRes = WxInvokeCallbackRes & {
    encryptedData: string;
    iv: string;
};
export type CreateCorpGroupChatParams = {
    groupName: string;
    userIds?: string[];
    externalUserIds?: string[];
    openUserIds?: string[];
    corpGroupUserIds?: {
        corpId: string;
        userId: string;
        openUserId: string;
    }[];
};
export type CreateCorpGroupChatRes = WxInvokeCallbackRes & {
    chatId: string;
};
export type UpdateCorpGroupChatParams = {
    chatId: string;
    userIdsToAdd?: string[];
    openUserIdsToAdd?: string[];
    corpGroupUserIdsToAdd?: CorpGroupUserId[];
};
export type UpdateCorpGroupChatRes = WxInvokeCallbackRes;
export interface ShareContent {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
}
export type ShareAppMessageParams = {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
};
export type ShareAppMessageRes = WxInvokeCallbackRes;
export type ShareWechatMessageParams = {
    title: string;
    desc: string;
    link: string;
    imgUrl: string;
};
export type ShareWechatMessageRes = WxInvokeCallbackRes;
