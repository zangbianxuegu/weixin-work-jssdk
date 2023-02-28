import compareVersions from '../utils/compareVersions'
import { Config, GetConfigSignature, GetAgentConfigSignature } from '../types/common'
import { ConfigParams } from '../types/wx/basic'
import { WxFnCallbackRes } from '../types/wx/common'
import wxApis from '../consts/wxApis'
import asyncCall from './asyncCall'

/**
 * 根据 userAgent 检查当前企业微信版本号是否 < 3.0.24
 */
export const checkDeprecated = (): boolean => {
  const DEPRECATED_VERSION = '3.0.24'

  const versionRegexp = /wxwork\/([\d.]+)/
  const versionResult = navigator.userAgent.match(versionRegexp)

  if (!versionResult || versionResult.length < 2) {
    return true
  }

  const [, version] = versionResult

  // version < DEPRECATED_VERSION ?
  return compareVersions(version, DEPRECATED_VERSION) === -1
}

/**
 * jssdk 的 config 函数的封装
 * @param setting
 */
const configAndReady = (setting: ConfigParams): Promise<WxFnCallbackRes | null> => {
  return new Promise(resolve => {
    window.wx.config({ ...setting })
    window.wx.ready(() => resolve(null))
  })
}

/**
 * 初始化企业微信 SDK 库
 * config: 基础信息配置
 * getConfigSignatures: 获取 wx.config - signature 的函数
 * getAgentConfigSignature: 获取 wx.agentConfig - signature 的函数
 */
const initSdk = async (
  config: Config,
  getConfigSignature: GetConfigSignature,
  getAgentConfigSignature: GetAgentConfigSignature,
) => {
  const { corpId, agentId } = config

  // 获取 wx.config - signature
  const { data: configSignatureData } = await getConfigSignature()

  // wx.config & wx.ready
  await configAndReady({
    beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: corpId, // 必填，企业微信的corpID
    timestamp: configSignatureData.timestamp, // 必填，生成签名的时间戳
    nonceStr: configSignatureData.nonceStr, // 必填，生成签名的随机串
    signature: configSignatureData.signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
    jsApiList: wxApis, // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
  })

  // 获取 wx.agentConfig - signature
  const { data: agentConfigSignatureData } = await getAgentConfigSignature()

  // wx.agentConfig
  return asyncCall('agentConfig', {
    corpid: corpId,
    agentid: agentId,
    timestamp: agentConfigSignatureData.timestamp,
    nonceStr: agentConfigSignatureData.nonceStr,
    signature: agentConfigSignatureData.signature,
    jsApiList: wxApis,
  })
}

export default initSdk
