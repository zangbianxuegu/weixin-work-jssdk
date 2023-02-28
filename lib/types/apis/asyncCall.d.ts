import { AsyncCallMap } from "../types/apis/AsyncCallMap";
declare const asyncCall: <K extends keyof AsyncCallMap>(apiName: K, params?: AsyncCallMap[K]["params"]) => Promise<AsyncCallMap[K]["res"]>;
export default asyncCall;
