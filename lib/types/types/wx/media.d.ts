import { WxFnCallback, WxFnCallbackRes, WxFnCommonParams } from "./common";
export type GetLocalImgDataParams = WxFnCommonParams & {
    localId: string;
    success?: WxFnCallback<GetLocalImgDataRes>;
};
export type GetLocalImgDataRes = WxFnCallbackRes & {
    localData: string;
};
export type ChooseImageParams = WxFnCommonParams & {
    count?: number;
    sizeType?: Array<"original" | "compressed">;
    sourceType?: Array<"album" | "camera">;
    defaultCameraMode?: "normal" | "batch";
    isSaveToAlbum?: 0 | 1;
    success?: WxFnCallback<ChooseImageRes>;
};
export type ChooseImageRes = WxFnCallbackRes & {
    localIds: string[];
};
export type PreviewImageParams = {
    current: string;
    urls: string[];
};
export type UploadImageParams = WxFnCommonParams & {
    localId: string;
    isShowProgressTips?: 0 | 1;
    success?: WxFnCallback<UploadImageRes>;
};
export type UploadImageRes = WxFnCallbackRes & {
    serverId: string;
};
export type DownloadImageParams = WxFnCommonParams & {
    serverId: string;
    isShowProgressTips?: 0 | 1;
    success?: WxFnCallback<DownloadImageRes>;
};
export type DownloadImageRes = WxFnCallbackRes & {
    localId: string;
};
export type StopRecordParams = WxFnCommonParams & {
    success?: WxFnCallback<StopRecordRes>;
};
export type StopRecordRes = WxFnCallbackRes & {
    localId: string;
};
export type OnVoiceRecordEndParams = WxFnCommonParams & {
    complete: WxFnCallback<{
        localId: string;
    }>;
};
export type PlayVoiceParams = {
    localId: string;
};
export type PauseVoiceParams = {
    localId: string;
};
export type StopVoiceParams = {
    localId: string;
};
export type OnVoicePlayEndParams = WxFnCommonParams & {
    success?: WxFnCallback<{
        localId: string;
    }>;
};
export type UploadVoiceParams = WxFnCommonParams & {
    localId: string;
    isShowProgressTips?: 0 | 1;
    success?: WxFnCallback<UploadVoiceRes>;
};
export type UploadVoiceRes = WxFnCallbackRes & {
    serverId: string;
};
export type DownloadVoiceParams = WxFnCommonParams & {
    serverId: string;
    isShowProgressTips?: 0 | 1;
    success?: WxFnCallback<DownloadVoiceRes>;
};
export type DownloadVoiceRes = WxFnCallbackRes & {
    localId: string;
};
export type TranslateVoiceParams = WxFnCommonParams & {
    localId: string;
    isShowProgressTips?: 0 | 1;
    success?: WxFnCallback<TranslateVoiceRes>;
};
export type TranslateVoiceRes = WxFnCallbackRes & {
    translateResult: any;
};
export type PreviewFileParams = {
    url: string;
    name: string;
    size: number;
};
