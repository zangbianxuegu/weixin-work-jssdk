import { WxFnCallback, WxFnCallbackRes, WxFnCommonParams, WxInvokeCallbackRes } from "./common";
export type NetworkType = "wifi" | "2g" | "3g" | "4g" | "none" | "unknown";
export interface WifiInfo {
    SSID: string;
    BSSID: string;
    secure: boolean;
    signalStrength: number;
}
export type OnNetworkStatusChangeRes = {
    isConnected: boolean;
    networkType: NetworkType;
};
export type StartWifiParams = WxFnCommonParams & {
    success?: WxFnCallback<StartWifiRes>;
};
export type StartWifiRes = WxFnCallbackRes;
export type StopWifiParams = WxFnCommonParams & {
    success?: WxFnCallback<StopWifiRes>;
};
export type StopWifiRes = WxFnCallbackRes;
export type ConnectWifiParams = WxFnCommonParams & {
    SSID: string;
    BSSID?: string;
    password?: string;
    success?: WxFnCallback<ConnectWifiRes>;
};
export type ConnectWifiRes = WxFnCallbackRes;
export type GetWifiListParams = WxFnCommonParams & {
    success?: WxFnCallback<OnGetWifiListRes>;
};
export type OnGetWifiListRes = WxFnCallbackRes & {
    wifiList: WifiInfo[];
};
export type OnWifiConnectedParams = {
    wifi: WifiInfo;
};
export type GetConnectedWifiParams = WxFnCommonParams & {
    success?: WxFnCallback<GetConnectedWifiRes>;
};
export type GetConnectedWifiRes = WxFnCallbackRes & {
    wifi: WifiInfo;
};
export interface BluetoothInfo {
    discovering: boolean;
    available: boolean;
}
export interface BluetoothDevice {
    name?: string;
    deviceId: string;
    RSSI: number;
    advertisData: ArrayBuffer;
    advertisServiceUUIDs: string[];
    localName: string;
    serviceData: ArrayBuffer;
}
export type OpenBluetoothAdapterParams = WxFnCommonParams & {
    success?: WxFnCallback<OpenBluetoothAdapterRes>;
};
export type OpenBluetoothAdapterRes = WxFnCallbackRes;
export type CloseBluetoothAdapterParams = WxFnCommonParams & {
    success?: WxFnCallback<CloseBluetoothAdapterRes>;
};
export type CloseBluetoothAdapterRes = WxFnCallbackRes;
export type GetBluetoothAdapterStateParams = WxFnCommonParams & {
    success?: WxFnCallback<OnGetBluetoothAdapterStateRes>;
};
export type OnGetBluetoothAdapterStateRes = WxFnCallbackRes & BluetoothInfo;
export type StartBluetoothDevicesDiscoveryParams = WxFnCommonParams & {
    services?: string[];
    allowDuplicatesKey?: boolean;
    interval?: number;
    success?: WxFnCallback<StartBluetoothDevicesDiscoveryRes>;
};
export type StartBluetoothDevicesDiscoveryRes = WxFnCallbackRes;
export type StopBluetoothDevicesDiscoveryParams = WxFnCommonParams & {
    success: WxFnCallback<StopBluetoothDevicesDiscoveryRes>;
};
export type StopBluetoothDevicesDiscoveryRes = WxFnCallbackRes;
export type GetBluetoothDevicesParams = WxFnCommonParams & {
    success: WxFnCallback<GetBluetoothDevicesRes>;
};
export type GetBluetoothDevicesRes = WxFnCallbackRes & {
    devices: BluetoothDevice[];
};
export type OnBluetoothDeviceFoundCallback = (devices: BluetoothDevice[]) => void;
export type GetConnectedBluetoothDevicesParams = WxFnCommonParams & {
    services: string[];
    success?: WxFnCallback<GetConnectedBluetoothDevicesRes>;
};
export type GetConnectedBluetoothDevicesRes = WxFnCallbackRes & {
    devices: Array<Pick<BluetoothDevice, "name" | "deviceId">>;
};
export type CreateBLEConnectionParams = WxFnCommonParams & {
    deviceId: string;
    success?: WxFnCallback<CreateBLEConnectionRes>;
};
export type CreateBLEConnectionRes = WxFnCallbackRes;
export type CloseBLEConnectionParams = WxFnCommonParams & {
    deviceId: string;
    success?: WxFnCallback<CloseBLEConnectionRes>;
};
export type CloseBLEConnectionRes = WxFnCallbackRes;
export type OnBLEConnectionStateChangeRes = {
    deviceId: string;
    connected: boolean;
};
export type GetBLEDeviceServicesParams = WxFnCommonParams & {
    deviceId: string;
    success?: WxFnCallback<GetBLEDeviceServicesRes>;
};
export type GetBLEDeviceServicesRes = WxFnCallbackRes & {
    services: {
        uuid: string;
        isPrimary: boolean;
    }[];
};
export interface BLEDeviceCharacteristics {
    uuid: string;
    properties: {
        read: boolean;
        write: boolean;
        notify: boolean;
        indicate: boolean;
    };
}
export type GetBLEDeviceCharacteristicsParams = WxFnCommonParams & {
    deviceId: string;
    serviceId: string;
    success?: WxFnCallback<GetBLEDeviceCharacteristicsRes>;
};
export type GetBLEDeviceCharacteristicsRes = WxFnCallbackRes & {
    characteristics: BLEDeviceCharacteristics[];
};
export type OnBLECharacteristicValueChangeRes = {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: ArrayBuffer;
};
export type ReadBLECharacteristicValueParams = WxFnCommonParams & {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    success?: WxFnCallback<ReadBLECharacteristicValueRes>;
};
export type ReadBLECharacteristicValueRes = WxFnCallbackRes;
export type WriteBLECharacteristicValueParams = WxFnCommonParams & {
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    value: ArrayBuffer;
    success?: WxFnCallback<WriteBLECharacteristicValueRes>;
};
export type WriteBLECharacteristicValueRes = WxFnCallbackRes;
export type NotifyBLECharacteristicValueChangeParams = WxFnCommonParams & {
    state: boolean;
    deviceId: string;
    serviceId: string;
    characteristicId: string;
    success?: WxFnCallback<NotifyBLECharacteristicValueChangeRes>;
};
export type NotifyBLECharacteristicValueChangeRes = WxFnCallbackRes;
export interface Beacon {
    uuid: string;
    major: string;
    minor: string;
    proximity: number;
    accuracy: number;
    rssi: number;
}
export type StartBeaconDiscoveryParams = WxFnCommonParams & {
    uuids: string[];
    success?: WxFnCallback<StartBeaconDiscoveryRes>;
};
export type StartBeaconDiscoveryRes = WxFnCallbackRes;
export type StopBeaconDiscoveryParams = WxFnCommonParams & {
    success?: WxFnCallback<StopBeaconDiscoveryRes>;
};
export type StopBeaconDiscoveryRes = WxFnCallbackRes;
export type GetBeaconsParams = WxFnCommonParams & {
    success?: WxFnCallback<GetBeaconsRes>;
};
export type GetBeaconsRes = WxFnCallbackRes & {
    beacons: Beacon[];
};
export type onBeaconUpdateCallback = (res: {
    beacons: Beacon[];
}) => void;
export type OnBeaconUpdateRes = {
    beacons: Beacon[];
};
export type OnBeaconServiceChangeRes = {
    available: boolean;
    discovering: boolean;
};
export type SetClipboardDataParams = WxFnCommonParams & {
    data: string;
    success?: WxFnCallback<SetClipboardDataRes>;
};
export type SetClipboardDataRes = WxFnCallbackRes;
export type GetClipboardDataParams = WxFnCommonParams & {
    success?: WxFnCallback<GetClipboardDataRes>;
};
export type GetClipboardDataRes = WxFnCallbackRes & {
    data: string;
};
export type GetNetworkTypeParams = WxFnCommonParams & {
    success?: WxFnCallback<GetNetworkTypeRes>;
};
export type GetNetworkTypeRes = WxFnCallbackRes & {
    isConnected: boolean;
    networkType: NetworkType;
};
export type OpenLocationParams = {
    latitude: number;
    longitude: number;
    name: string;
    address: string;
    scale: number;
};
export type GetLocationParams = WxFnCommonParams & {
    type: "wgs84" | "gcj02";
    success?: WxFnCallback<GetLocationRes>;
};
export type GetLocationRes = WxFnCallbackRes & {
    latitude: number;
    longitude: number;
    speed: number;
    accuracy: number;
};
export type OnLocationChangeRes = {
    latitude: number;
    longitude: number;
    speed: number;
    accuracy: number;
};
export type StartAutoLBSParams = {
    type: "gcj02" | "wgs84";
};
export type startAutoLBSRes = WxInvokeCallbackRes;
export type StopAutoLBSRes = WxInvokeCallbackRes;
