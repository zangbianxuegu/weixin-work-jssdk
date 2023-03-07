export type GetUserId = (code: string) => Promise<string>;
export interface UserInfoRes {
    code: number;
    data: {
        department: string[];
        errcode: number;
        errmsg: string;
        isleader: number;
        name: string;
        position: string;
        status: number;
        telephone: string;
        userid: string;
    };
    message: string;
}
export type GetUserByCode = (code: string) => Promise<UserInfoRes>;
export interface Config {
    corpId: string;
    agentId: number;
}
export interface configSignatureRes {
    code: number;
    data: {
        appId: string;
        nonceStr: string;
        signature: string;
        timestamp: string;
    };
    message: string;
}
export interface AgentConfigSignatureRes {
    code: number;
    data: {
        agentid: number;
        corpid: string;
        nonceStr: string;
        signature: string;
        timestamp: string;
    };
    message: string;
}
export type GetConfigSignature = () => Promise<configSignatureRes>;
export type GetAgentConfigSignature = () => Promise<AgentConfigSignatureRes>;
