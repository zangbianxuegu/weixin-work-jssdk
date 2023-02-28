import { CallMap } from "../types/apis/CallMap";
/**
 * wx.fn 的同步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
declare const call: <K extends keyof CallMap>(apiName: K, params?: CallMap[K]["params"]) => CallMap[K]["res"];
export default call;
