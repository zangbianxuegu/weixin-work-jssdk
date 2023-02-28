import { Api, WxFnCommonParams, WxFnCallback, WxFnCallbackRes, WxInvokeCallbackRes } from './common';
export type CheckJsApiParams = WxFnCommonParams & {
    jsApiList: Api[];
    success?: WxFnCallback<CheckJsApiRes>;
};
export type CheckJsApiRes = WxFnCallbackRes & {
    checkResult: {
        [api in Api]: boolean;
    };
};
/**
 * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，
 * 对于变化url的SPA（single-page application）的web app可在每次url变化时进行调用）
 * 详见：https://work.weixin.qq.com/api/doc/90000/90136/90514
 */
export type ConfigParams = WxFnCommonParams & {
    beta: boolean;
    debug: boolean;
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
    jsApiList: Api[];
};
export type ConfigRes = WxFnCallbackRes;
/**
 * config注入的是企业的身份与权限，而agentConfig注入的是应用的身份与权限。
 * 尤其是当调用者为第三方服务商时，通过config无法准确区分出调用者是哪个第三方应用，
 * 而在部分场景下，又必须严谨区分出第三方应用的身份，此时即需要通过agentConfig来注入应用的身份信息。
 * 详见：https://work.weixin.qq.com/api/doc/90000/90136/90515
 */
export type AgentConfigParams = WxFnCommonParams & {
    corpid: string;
    agentid: number;
    timestamp: string;
    nonceStr: string;
    signature: string;
    jsApiList: Api[];
    success?: WxFnCallback<AgentConfigRes>;
};
export type AgentConfigRes = WxFnCallbackRes;
export type GetContextRes = WxInvokeCallbackRes & {
    /**
     * 返回进入H5页面的入口类型
     * contact_profile  从联系人详情进入  3.0.24
     * single_chat_tools  从单聊会话的工具栏进入  3.0.24
     * group_chat_tools  从群聊会话的工具栏进入  3.0.24
     * chat_attachment  从会话的聊天附件栏进入  3.1.6
     * normal  除以上场景之外进入，例如工作台，聊天会话等  3.0.24
     */
    entry: 'normal' | 'contact_profile' | 'single_chat_tools' | 'group_chat_tools' | 'chat_attachment';
    shareTicket?: string;
};
