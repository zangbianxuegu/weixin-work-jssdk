export type FnApi = "onLocationChange" | "onHistoryBack" | "onGetWifiList" | "onWifiConnected" | "onBluetoothDeviceFound" | "onBeaconUpdate" | "onBeaconServiceChange" | "onNetworkStatusChange" | "onBluetoothAdapterStateChange" | "onBLEConnectionStateChange" | "onBLECharacteristicValueChange" | "onUserCaptureScreen" | "checkJsApi" | "stopRecord" | "uploadVoice" | "downloadVoice" | "translateVoice" | "chooseImage" | "uploadImage" | "downloadImage" | "getLocalImgData" | "getLocation" | "scanQRCode" | "openEnterpriseChat" | "startWifi" | "stopWifi" | "connectWifi" | "getWifiList" | "getConnectedWifi" | "setClipboardData" | "openBluetoothAdapter" | "closeBluetoothAdapter" | "getBluetoothAdapterState" | "startBluetoothDevicesDiscovery" | "stopBluetoothDevicesDiscovery" | "getBluetoothDevices" | "getConnectedBluetoothDevices" | "createBLEConnection" | "closeBLEConnection" | "getBLEDeviceServices" | "getBLEDeviceCharacteristics" | "readBLECharacteristicValue" | "writeBLECharacteristicValue" | "notifyBLECharacteristicValueChange" | "startBeaconDiscovery" | "stopBeaconDiscovery" | "agentConfig" | "config" | "startRecord" | "playVoice" | "pauseVoice" | "stopVoice" | "previewImage" | "getNetworkType" | "openLocation" | "hideOptionMenu" | "showOptionMenu" | "hideMenuItems" | "showMenuItems" | "hideAllNonBaseMenuItem" | "showAllNonBaseMenuItem" | "closeWindow" | "previewFile" | "onVoiceRecordEnd" | "onVoicePlayEnd" | "onMenuShareAppMessage" | "onMenuShareWechat" | "onMenuShareTimeline";
export type InvokeApi = "getContext" | "sendChatMessage" | "startAutoLBS" | "stopAutoLBS" | "openDefaultBrowser" | "selectEnterpriseContact" | "chooseInvoice" | "selectExternalContact" | "getCurExternalContact" | "openUserProfile" | "shareAppMessage" | "shareWechatMessage" | "getCurExternalChat" | "createSchoolPayment" | "startMeeting" | "startLiving" | "replayLiving" | "downloadLivingReplay" | "selectCorpGroupContact" | "claimClassAdmin" | "updateEnterpriseChat" | "openExistedChatWithMsg" | "hideChatAttachmentMenu" | "setShareAttr" | "getShareInfo" | "createCorpGroupChat" | "updateCorpGroupChat" | "shareToExternalContact" | "shareToExternalChat" | "navigateToAddCustomer" | "shareToExternalMoments" | "updateMomentsSetting" | "openThirdAppServiceChat";
export type Api = FnApi | InvokeApi;
/**
 * 所有企业微信 SDK 的回调返回类型
 * 类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：
 * 调用成功时：”xxx:ok” ，其中xxx为调用的接口名
 * 用户取消时：”xxx:cancel”，其中xxx为调用的接口名
 * 调用失败时：其值为具体错误信息
 */
export interface WxFnCallbackRes {
    errMsg: string;
}
export interface WxInvokeCallbackRes {
    err_msg: string;
}
export type WxFnCallback<ExtraRes = {}> = (res: WxFnCallbackRes & ExtraRes) => void;
export type WxInvokeCallback<ExtraRes = {}> = (res: WxInvokeCallbackRes & ExtraRes) => void;
export interface WxFnCommonParams {
    success?: WxFnCallback<any>;
    fail?: WxFnCallback<any>;
    complete?: WxFnCallback<any>;
    cancel?: WxFnCallback<any>;
    trigger?: WxFnCallback<any>;
}
export interface TextMessage {
    msgtype: "text";
    text: {
        content: string;
    };
}
export interface ImageMessage {
    msgtype: "image";
    image: {
        mediaid: string;
    };
}
export interface VideoMessage {
    msgtype: "video";
    video: {
        mediaid: string;
    };
}
export interface FileMessage {
    msgtype: "file";
    file: {
        mediaid: string;
    };
}
export interface NewsMessage {
    msgtype: "news";
    news: {
        link: string;
        title: string;
        desc: string;
        imgUrl: string;
    };
}
export interface MiniProgramMessage {
    msgtype: "miniprogram";
    miniprogram: {
        appid: string;
        title: string;
        imgUrl: string;
        page: string;
    };
}
export interface LinkMessage {
    msgtype: "link";
    link: {
        title?: string;
        desc?: string;
        url: string;
        imgUrl?: string;
    };
}
export type Message = TextMessage | ImageMessage | VideoMessage | FileMessage | NewsMessage | MiniProgramMessage | LinkMessage;
export interface CorpGroupUserId {
    corpId: string;
    userId?: string;
    openUserId?: string;
}
