import { WxFnCallback } from "../wx/common";
import { HideMenuItemsParams, OnMenuShareAppMessageParams, OnMenuShareTimeline, OnMenuShareWechat, ShowMenuItemParams } from "../wx/ui";
import { OnVoicePlayEndParams, OnVoiceRecordEndParams, PauseVoiceParams, PlayVoiceParams, PreviewFileParams, PreviewImageParams, StopVoiceParams } from "../wx/media";
import { BluetoothDevice, BluetoothInfo, OnBeaconServiceChangeRes, OnBeaconUpdateRes, OnBLECharacteristicValueChangeRes, OnBLEConnectionStateChangeRes, OnLocationChangeRes, OnNetworkStatusChangeRes, OpenLocationParams, WifiInfo } from "../wx/device";
export interface CallMap {
    error: {
        params: WxFnCallback;
        res: void;
    };
    onMenuShareAppMessage: {
        params: OnMenuShareAppMessageParams;
        res: void;
    };
    onMenuShareWechat: {
        params: OnMenuShareWechat;
        res: void;
    };
    onMenuShareTimeline: {
        params: OnMenuShareTimeline;
        res: void;
    };
    onHistoryBack: {
        params: () => boolean;
        res: void;
    };
    hideOptionMenu: {
        params: {};
        res: void;
    };
    showOptionMenu: {
        params: {};
        res: void;
    };
    closeWindow: {
        params: {};
        res: void;
    };
    hideMenuItems: {
        params: HideMenuItemsParams;
        res: void;
    };
    showMenuItems: {
        params: ShowMenuItemParams;
        res: void;
    };
    hideAllNonBaseMenuItem: {
        params: {};
        res: void;
    };
    showAllNonBaseMenuItem: {
        params: {};
        res: void;
    };
    onUserCaptureScreen: {
        params: (res: any) => void;
        res: void;
    };
    onNetworkStatusChange: {
        params: (params: OnNetworkStatusChangeRes) => void;
        res: void;
    };
    previewImage: {
        params: PreviewImageParams;
        res: void;
    };
    startRecord: {
        params: {};
        res: void;
    };
    onVoiceRecordEnd: {
        params: OnVoiceRecordEndParams;
        res: void;
    };
    playVoice: {
        params: PlayVoiceParams;
        res: void;
    };
    pauseVoice: {
        params: PauseVoiceParams;
        res: void;
    };
    stopVoice: {
        params: StopVoiceParams;
        res: void;
    };
    onVoicePlayEnd: {
        params: OnVoicePlayEndParams;
        res: void;
    };
    previewFile: {
        params: PreviewFileParams;
        res: void;
    };
    onGetWifiList: {
        params: (res: {
            wifiList: WifiInfo[];
        }) => void;
        res: void;
    };
    onWifiConnected: {
        params: (res: {
            wifi: WifiInfo;
        }) => void;
        res: void;
    };
    onBluetoothAdapterStateChange: {
        params: (res: {
            bluetoothInfo: BluetoothInfo;
        }) => void;
        res: void;
    };
    onBluetoothDeviceFound: {
        params: (devices: BluetoothDevice[]) => void;
        res: void;
    };
    onBLEConnectionStateChange: {
        params: (res: OnBLEConnectionStateChangeRes) => void;
        res: void;
    };
    onBLECharacteristicValueChange: {
        params: (res: OnBLECharacteristicValueChangeRes) => void;
        res: void;
    };
    onBeaconUpdate: {
        params: (res: OnBeaconUpdateRes) => void;
        res: void;
    };
    onBeaconServiceChange: {
        params: (res: OnBeaconServiceChangeRes) => void;
        res: void;
    };
    onLocationChange: {
        params: (res: OnLocationChangeRes) => void;
        res: void;
    };
    openLocation: {
        params: OpenLocationParams;
        res: void;
    };
}
