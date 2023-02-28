import { WxInvokeCallbackRes } from "./common";
export type SelectEnterpriseContactParams = {
    fromDepartmentId: -1 | 0;
    mode: "single" | "multi";
    type: string[];
    selectedDepartmentIds?: string[];
    selectedUserIds?: string[];
};
export type SelectEnterpriseContactRes = WxInvokeCallbackRes & {
    result: string | {
        departmentList: {
            id: string;
            name: string;
        }[];
        userList: {
            id: string;
            name: string;
            avatar: string;
        }[];
    };
};
export type OpenUserProfileParams = {
    type: 1 | 2;
    userid: string;
};
export type OpenUserProfileRes = WxInvokeCallbackRes;
export type SelectCorpGroupContactParams = {
    fromDepartmentId: -1 | 0;
    mode: "single" | "multi";
    type: string[];
    selectedDepartmentIds?: string[];
    selectedUserIds?: string[];
    selectedOpenUserIds?: string[];
    selectedChainDepartmentIds?: {
        corpId: string;
        departmentId: string;
    }[];
    selectedChainUserIds?: {
        corpId: string;
        userId: string;
        openUserId: string;
    }[];
    selectedCorpGroupDepartmentIds?: {
        corpId: string;
        departmentId: string;
    }[];
    selectedCorpGroupUserIds?: {
        corpId: string;
        userId: string;
        openUserId: string;
    }[];
};
export type SelectCorpGroupContactRes = WxInvokeCallbackRes & {
    result: string | {
        departmentList?: {
            id: string;
        }[];
        userList?: {
            id: string;
            openUserId: string;
        }[];
        corpGroupDepartmentList?: {
            corpId: string;
            id: string;
        }[];
        corpGroupUserList?: {
            corpId: string;
            id: string;
            openUserId: string;
        }[];
        chainDepartmentList?: {
            corpId: string;
            id: string;
        }[];
        chainUserList?: {
            corpId: string;
            id: string;
            openUserId: string;
        }[];
    };
};
export type SelectPrivilegedContactParams = {
    fromDepartmentId: -1 | 0;
    mode: "multi" | "single";
    selectedContextContact?: 1 | 0;
    selectedOpenUserIds?: string[];
    selectedTickets?: string[];
};
export type SelectPrivilegedContactRes = {
    userList?: {
        openUserId: string;
    }[];
    selectedTicket: string;
    expiresIn: number;
    selectedUserCount: number;
};
export type ClaimClassAdminRes = WxInvokeCallbackRes & {
    departmentIds: string[];
};
