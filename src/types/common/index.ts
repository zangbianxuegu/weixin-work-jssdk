// 获取 userId 的回调
export type GetUserId = (code: string) => Promise<string>

// 侧边栏配置信息
export interface Config {
  corpId: string
  agentId: number
}

// wx.config - signature
export interface configSignatureRes {
  code: number
  data: {
    appId: string
    nonceStr: string
    signature: string
    timestamp: string
  }
  message: string
}

// agentConfigSignature
export interface AgentConfigSignatureRes {
  code: number
  data: {
    agentid: number
    corpid: string
    nonceStr: string
    signature: string
    timestamp: string
  }
  message: string
}

// 获取 wx.config - signature 的函数
export type GetConfigSignature = () => Promise<configSignatureRes>

// 获取 wx.agentConfig - signature 的函数
export type GetAgentConfigSignature = () => Promise<AgentConfigSignatureRes>
