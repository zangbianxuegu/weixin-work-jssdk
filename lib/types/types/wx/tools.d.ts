import { WxInvokeCallbackRes } from "./common";
export type StartMeetingParams = {
    meetingId?: string;
    meetingType?: 0 | 1;
    theme?: string;
    attendees?: string[];
    externalAttendees?: string[];
    deviceSns?: string[];
};
export type StartMeetingRes = WxInvokeCallbackRes & {
    meetingId: string;
};
export type StartLivingParams = {
    livingId?: string;
    liveType?: 0 | 1 | 2 | 3;
    theme?: string;
};
export type StartLivingRes = {
    livingId: string;
};
export type ReplayLivingParams = {
    livingId: string;
};
export type ReplayLivingRes = WxInvokeCallbackRes;
export type DownloadLivingReplayParams = ReplayLivingParams;
export type DownloadLivingReplayRes = WxInvokeCallbackRes;
