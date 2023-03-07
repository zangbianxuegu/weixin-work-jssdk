import queryParse from '../utils/queryParse'
import { Session } from '../utils/storage'
import { Config, GetUserByCode } from '../types/common'

/**
 * 获取重定位的 OAuth 路径
 * @returns {string}
 */
const generateOAuthUrl = (config: Config) => {
  const [redirectUri] = window.location.href.split('#')

  const searchObj = {
    appid: config.corpId,
    redirect_uri: encodeURIComponent(redirectUri),
    response_type: 'code',
    scope: 'snsapi_base',
    agentid: config.agentId,
    state: 'A1',
  }

  const search = Object.entries(searchObj)
    .map(entry => {
      const [key, value] = entry
      return `${key}=${value}`
    })
    .join('&')

  return `https://open.weixin.qq.com/connect/oauth2/authorize?${search}#wechat_redirect`
}

/**
 * 判断当前网页是否需要重定向
 */
const checkRedirect = async (config: Config, getUserByCode: GetUserByCode) => {
  const user = Session.get('user')
  const unAuth = !user || user === 'undefined' || user === 'null' || !user.userid
  const codeExist = window.location.search.includes('code')

  // 判断是否需要重定向
  if (unAuth && !codeExist) {
    window.location.replace(generateOAuthUrl(config))
  }

  // 判断是否需要重新获取 userId
  if (unAuth) {
    const { code }: { code?: string } = queryParse(window.location.search.slice(1))
    const res = await getUserByCode(code || '')
    if (res.code === 0) {
      Session.set('user', res.data)
    }
  }
}

export default checkRedirect
