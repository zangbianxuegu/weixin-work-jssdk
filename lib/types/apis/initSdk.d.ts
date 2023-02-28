import { Config, GetConfigSignature, GetAgentConfigSignature } from '../types/common';
import { WxFnCallbackRes } from '../types/wx/common';
/**
 * 根据 userAgent 检查当前企业微信版本号是否 < 3.0.24
 */
export declare const checkDeprecated: () => boolean;
/**
 * 初始化企业微信 SDK 库
 * config: 基础信息配置
 * getConfigSignatures: 获取 wx.config - signature 的函数
 * getAgentConfigSignature: 获取 wx.agentConfig - signature 的函数
 */
declare const initSdk: (config: Config, getConfigSignature: GetConfigSignature, getAgentConfigSignature: GetAgentConfigSignature) => Promise<WxFnCallbackRes>;
export default initSdk;
