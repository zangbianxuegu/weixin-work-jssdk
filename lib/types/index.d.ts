import { Config, GetConfigSignature, GetAgentConfigSignature, AsyncCallMap, CallMap, InvokeMap } from './types';
export declare const wxApis: import("./types/wx/common").Api[];
export * from './types';
export declare const asyncCall: <K extends keyof AsyncCallMap>(apiName: K, params?: AsyncCallMap[K]["params"]) => Promise<AsyncCallMap[K]["res"]>;
export declare const call: <K extends keyof CallMap>(apiName: K, params?: CallMap[K]["params"]) => CallMap[K]["res"];
export declare const initSdk: (config: Config, getConfigSignature: GetConfigSignature, getAgentConfigSignature: GetAgentConfigSignature) => Promise<import("./types/wx/common").WxFnCallbackRes>;
export declare const invoke: <K extends keyof InvokeMap>(apiName: K, params?: InvokeMap[K]["params"]) => Promise<InvokeMap[K]["res"]>;
