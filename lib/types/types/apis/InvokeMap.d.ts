import { GetContextRes } from "../wx/basic";
import { ClaimClassAdminRes, OpenUserProfileParams, OpenUserProfileRes, SelectCorpGroupContactParams, SelectCorpGroupContactRes, SelectEnterpriseContactParams, SelectEnterpriseContactRes, SelectPrivilegedContactParams, SelectPrivilegedContactRes } from "../wx/contact";
import { CreateChatWithMsgParams, CreateChatWithMsgRes, CreateCorpGroupChatParams, CreateCorpGroupChatRes, GetShareInfoParams, GetShareInfoRes, HideChatAttachmentMenuParams, HideChatAttachmentMenuRes, OpenExistedChatWithMsgParams, OpenExistedChatWithMsgRes, SendChatMessageParams, SendChatMessageRes, SetShareAttrParams, SetShareAttrRes, ShareAppMessageParams, ShareAppMessageRes, ShareWechatMessageParams, ShareWechatMessageRes, UpdateCorpGroupChatParams, UpdateCorpGroupChatRes, UpdateEnterpriseChatParams, UpdateEnterpriseChatRes } from "../wx/session";
import { GetCurExternalChatRes, GetCurExternalContactRes, NavigateToAddCustomerRes, SelectExternalContactParams, SelectExternalContactRes, ShareToExternalChatParams, ShareToExternalChatRes, ShareToExternalContactParams, ShareToExternalContactRes, ShareToExternalMomentsParams, ShareToExternalMomentsRes, UpdateMomentsSettingParams, UpdateMomentsSettingRes } from "../wx/client";
import { NavigateToKfChatParams, NavigateToKfChatRes } from "../wx/customer-service";
import { DownloadLivingReplayParams, DownloadLivingReplayRes, ReplayLivingParams, ReplayLivingRes, StartLivingParams, StartLivingRes, StartMeetingParams, StartMeetingRes } from "../wx/tools";
import { CreateSchoolPaymentParams, CreateSchoolPaymentRes } from "../wx/education";
import { ChooseInvoiceParams, ChooseInvoiceRes, EnterpriseVerifyParams, EnterpriseVerifyRes, LaunchMiniprogramParams, LaunchMiniprogramRes, OpenDefaultBrowserParams, OpenDefaultBrowserRes } from "../wx/ui";
import { StartAutoLBSParams, startAutoLBSRes, StopAutoLBSRes } from "../wx/device";
export interface InvokeMap {
    getContext: {
        params: {};
        res: GetContextRes;
    };
    selectEnterpriseContact: {
        params: SelectEnterpriseContactParams;
        res: SelectEnterpriseContactRes;
    };
    openUserProfile: {
        params: OpenUserProfileParams;
        res: OpenUserProfileRes;
    };
    selectCorpGroupContact: {
        params: SelectCorpGroupContactParams;
        res: SelectCorpGroupContactRes;
    };
    selectPrivilegedContact: {
        params: SelectPrivilegedContactParams;
        res: SelectPrivilegedContactRes;
    };
    claimClassAdmin: {
        params: {};
        res: ClaimClassAdminRes;
    };
    updateEnterpriseChat: {
        params: UpdateEnterpriseChatParams;
        res: UpdateEnterpriseChatRes;
    };
    hideChatAttachmentMenu: {
        params: HideChatAttachmentMenuParams;
        res: HideChatAttachmentMenuRes;
    };
    sendChatMessage: {
        params: SendChatMessageParams;
        res: SendChatMessageRes;
    };
    createChatWithMsg: {
        params: CreateChatWithMsgParams;
        res: CreateChatWithMsgRes;
    };
    openExistedChatWithMsg: {
        params: OpenExistedChatWithMsgParams;
        res: OpenExistedChatWithMsgRes;
    };
    setShareAttr: {
        params: SetShareAttrParams;
        res: SetShareAttrRes;
    };
    getShareInfo: {
        params: GetShareInfoParams;
        res: GetShareInfoRes;
    };
    createCorpGroupChat: {
        params: CreateCorpGroupChatParams;
        res: CreateCorpGroupChatRes;
    };
    updateCorpGroupChat: {
        params: UpdateCorpGroupChatParams;
        res: UpdateCorpGroupChatRes;
    };
    selectExternalContact: {
        params: SelectExternalContactParams;
        res: SelectExternalContactRes;
    };
    getCurExternalContact: {
        params: {};
        res: GetCurExternalContactRes;
    };
    getCurExternalChat: {
        params: {};
        res: GetCurExternalChatRes;
    };
    shareToExternalContact: {
        params: ShareToExternalContactParams;
        res: ShareToExternalContactRes;
    };
    shareToExternalChat: {
        params: ShareToExternalChatParams;
        res: ShareToExternalChatRes;
    };
    navigateToAddCustomer: {
        params: {};
        res: NavigateToAddCustomerRes;
    };
    shareToExternalMoments: {
        params: ShareToExternalMomentsParams;
        res: ShareToExternalMomentsRes;
    };
    updateMomentsSetting: {
        params: UpdateMomentsSettingParams;
        res: UpdateMomentsSettingRes;
    };
    navigateToKfChat: {
        params: NavigateToKfChatParams;
        res: NavigateToKfChatRes;
    };
    startMeeting: {
        params: StartMeetingParams;
        res: StartMeetingRes;
    };
    startLiving: {
        params: StartLivingParams;
        res: StartLivingRes;
    };
    replayLiving: {
        params: ReplayLivingParams;
        res: ReplayLivingRes;
    };
    downloadLivingReplay: {
        params: DownloadLivingReplayParams;
        res: DownloadLivingReplayRes;
    };
    createSchoolPayment: {
        params: CreateSchoolPaymentParams;
        res: CreateSchoolPaymentRes;
    };
    shareAppMessage: {
        params: ShareAppMessageParams;
        res: ShareAppMessageRes;
    };
    shareWechatMessage: {
        params: ShareWechatMessageParams;
        res: ShareWechatMessageRes;
    };
    openDefaultBrowser: {
        params: OpenDefaultBrowserParams;
        res: OpenDefaultBrowserRes;
    };
    chooseInvoice: {
        params: ChooseInvoiceParams;
        res: ChooseInvoiceRes;
    };
    enterpriseVerify: {
        params: EnterpriseVerifyParams;
        res: EnterpriseVerifyRes;
    };
    launchMiniprogram: {
        params: LaunchMiniprogramParams;
        res: LaunchMiniprogramRes;
    };
    startAutoLBS: {
        params: StartAutoLBSParams;
        res: startAutoLBSRes;
    };
    openThirdAppServiceChat: {
        params: {};
        res: {};
    };
    stopAutoLBS: {
        params: {};
        res: StopAutoLBSRes;
    };
}
