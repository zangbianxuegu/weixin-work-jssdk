import _wxApis from './consts/wxApis'
import _asyncCall from './apis/asyncCall'
import _call from './apis/call'
import _invoke from './apis/invoke'
import _initSdk from './apis/initSdk'
import {
  Config,
  GetConfigSignature,
  GetAgentConfigSignature,
  GetUserId,
  AsyncCallMap,
  CallMap,
  InvokeMap,
} from './types'
import { infoLog } from './utils/log'

// 所有 API 列表
export const wxApis = _wxApis

// 重要类型
export * from './types'

// 异步调用 wx.fn
export const asyncCall = async <K extends keyof AsyncCallMap>(
  apiName: K,
  params: AsyncCallMap[K]['params'] = {},
): Promise<AsyncCallMap[K]['res']> => {
  return _asyncCall<K>(apiName, params)
}

// 同步调用 wx.fn
export const call = <K extends keyof CallMap>(apiName: K, params: CallMap[K]['params'] = {}) => {
  return _call(apiName, params)
}

// 初始化 SDK
export const initSdk = async (
  config: Config,
  getConfigSignature: GetConfigSignature,
  getAgentConfigSignature: GetAgentConfigSignature,
) => {
  return _initSdk(config, getConfigSignature, getAgentConfigSignature)
}

// 调用 wx.invoke
export const invoke = async <K extends keyof InvokeMap>(
  apiName: K,
  params: InvokeMap[K]['params'] = {},
): Promise<InvokeMap[K]['res']> => {
  return _invoke<K>(apiName, params)
}
