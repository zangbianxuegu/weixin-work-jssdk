import { AgentConfigParams, AgentConfigRes, CheckJsApiParams, CheckJsApiRes, ConfigParams, ConfigRes } from '../wx/basic';
import { OpenEnterpriseChatParams, OpenEnterpriseChatRes } from '../wx/session';
import { ScanQRCodeParams, ScanQRCodeRes } from '../wx/ui';
import { ChooseImageParams, ChooseImageRes, DownloadImageParams, DownloadImageRes, DownloadVoiceParams, DownloadVoiceRes, GetLocalImgDataParams, GetLocalImgDataRes, StopRecordParams, StopRecordRes, TranslateVoiceParams, TranslateVoiceRes, UploadImageParams, UploadImageRes, UploadVoiceParams, UploadVoiceRes } from '../wx/media';
import { CloseBLEConnectionParams, CloseBLEConnectionRes, CloseBluetoothAdapterParams, CloseBluetoothAdapterRes, ConnectWifiParams, ConnectWifiRes, CreateBLEConnectionParams, CreateBLEConnectionRes, GetBeaconsParams, GetBeaconsRes, GetBLEDeviceCharacteristicsParams, GetBLEDeviceCharacteristicsRes, GetBLEDeviceServicesParams, GetBLEDeviceServicesRes, GetBluetoothAdapterStateParams, OnGetBluetoothAdapterStateRes, GetBluetoothDevicesParams, GetBluetoothDevicesRes, GetClipboardDataParams, GetClipboardDataRes, GetConnectedBluetoothDevicesParams, GetConnectedBluetoothDevicesRes, GetConnectedWifiParams, GetConnectedWifiRes, GetLocationParams, GetLocationRes, GetNetworkTypeParams, GetNetworkTypeRes, GetWifiListParams, OnGetWifiListRes, NotifyBLECharacteristicValueChangeParams, NotifyBLECharacteristicValueChangeRes, OpenBluetoothAdapterParams, OpenBluetoothAdapterRes, ReadBLECharacteristicValueParams, ReadBLECharacteristicValueRes, SetClipboardDataParams, SetClipboardDataRes, StartBeaconDiscoveryParams, StartBeaconDiscoveryRes, StartBluetoothDevicesDiscoveryParams, StartBluetoothDevicesDiscoveryRes, StartWifiParams, StartWifiRes, StopBeaconDiscoveryParams, StopBeaconDiscoveryRes, StopBluetoothDevicesDiscoveryParams, StopBluetoothDevicesDiscoveryRes, StopWifiParams, StopWifiRes, WriteBLECharacteristicValueParams, WriteBLECharacteristicValueRes } from '../wx/device';
export interface AsyncCallMap {
    checkJsApi: {
        params: CheckJsApiParams;
        res: CheckJsApiRes;
    };
    config: {
        params: ConfigParams;
        res: ConfigRes;
    };
    agentConfig: {
        params: AgentConfigParams;
        res: AgentConfigRes;
    };
    openEnterpriseChat: {
        params: OpenEnterpriseChatParams;
        res: OpenEnterpriseChatRes;
    };
    scanQRCode: {
        params: ScanQRCodeParams;
        res: ScanQRCodeRes;
    };
    getLocalImgData: {
        params: GetLocalImgDataParams;
        res: GetLocalImgDataRes;
    };
    chooseImage: {
        params: ChooseImageParams;
        res: ChooseImageRes;
    };
    uploadImage: {
        params: UploadImageParams;
        res: UploadImageRes;
    };
    downloadImage: {
        params: DownloadImageParams;
        res: DownloadImageRes;
    };
    stopRecord: {
        params: StopRecordParams;
        res: StopRecordRes;
    };
    uploadVoice: {
        params: UploadVoiceParams;
        res: UploadVoiceRes;
    };
    downloadVoice: {
        params: DownloadVoiceParams;
        res: DownloadVoiceRes;
    };
    translateVoice: {
        params: TranslateVoiceParams;
        res: TranslateVoiceRes;
    };
    startWifi: {
        params: StartWifiParams;
        res: StartWifiRes;
    };
    stopWifi: {
        params: StopWifiParams;
        res: StopWifiRes;
    };
    connectWifi: {
        params: ConnectWifiParams;
        res: ConnectWifiRes;
    };
    getWifiList: {
        params: GetWifiListParams;
        res: OnGetWifiListRes;
    };
    getConnectedWifi: {
        params: GetConnectedWifiParams;
        res: GetConnectedWifiRes;
    };
    openBluetoothAdapter: {
        params: OpenBluetoothAdapterParams;
        res: OpenBluetoothAdapterRes;
    };
    closeBluetoothAdapter: {
        params: CloseBluetoothAdapterParams;
        res: CloseBluetoothAdapterRes;
    };
    getBluetoothAdapterState: {
        params: GetBluetoothAdapterStateParams;
        res: OnGetBluetoothAdapterStateRes;
    };
    startBluetoothDevicesDiscovery: {
        params: StartBluetoothDevicesDiscoveryParams;
        res: StartBluetoothDevicesDiscoveryRes;
    };
    stopBluetoothDevicesDiscovery: {
        params: StopBluetoothDevicesDiscoveryParams;
        res: StopBluetoothDevicesDiscoveryRes;
    };
    getBluetoothDevices: {
        params: GetBluetoothDevicesParams;
        res: GetBluetoothDevicesRes;
    };
    getConnectedBluetoothDevices: {
        params: GetConnectedBluetoothDevicesParams;
        res: GetConnectedBluetoothDevicesRes;
    };
    createBLEConnection: {
        params: CreateBLEConnectionParams;
        res: CreateBLEConnectionRes;
    };
    closeBLEConnection: {
        params: CloseBLEConnectionParams;
        res: CloseBLEConnectionRes;
    };
    getBLEDeviceServices: {
        params: GetBLEDeviceServicesParams;
        res: GetBLEDeviceServicesRes;
    };
    getBLEDeviceCharacteristics: {
        params: GetBLEDeviceCharacteristicsParams;
        res: GetBLEDeviceCharacteristicsRes;
    };
    readBLECharacteristicValue: {
        params: ReadBLECharacteristicValueParams;
        res: ReadBLECharacteristicValueRes;
    };
    writeBLECharacteristicValue: {
        params: WriteBLECharacteristicValueParams;
        res: WriteBLECharacteristicValueRes;
    };
    notifyBLECharacteristicValueChange: {
        params: NotifyBLECharacteristicValueChangeParams;
        res: NotifyBLECharacteristicValueChangeRes;
    };
    startBeaconDiscovery: {
        params: StartBeaconDiscoveryParams;
        res: StartBeaconDiscoveryRes;
    };
    stopBeaconDiscovery: {
        params: StopBeaconDiscoveryParams;
        res: StopBeaconDiscoveryRes;
    };
    getBeacons: {
        params: GetBeaconsParams;
        res: GetBeaconsRes;
    };
    setClipboardData: {
        params: SetClipboardDataParams;
        res: SetClipboardDataRes;
    };
    getClipboardData: {
        params: GetClipboardDataParams;
        res: GetClipboardDataRes;
    };
    getNetworkType: {
        params: GetNetworkTypeParams;
        res: GetNetworkTypeRes;
    };
    getLocation: {
        params: GetLocationParams;
        res: GetLocationRes;
    };
}
