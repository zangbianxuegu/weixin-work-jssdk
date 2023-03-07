import { Config, GetUserByCode } from '../types/common';
/**
 * 判断当前网页是否需要重定向
 */
declare const checkRedirect: (config: Config, getUserByCode: GetUserByCode) => Promise<void>;
export default checkRedirect;
