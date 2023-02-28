import { InvokeMap } from "../types/apis/InvokeMap";
declare const invoke: <K extends keyof InvokeMap>(apiName: K, params?: InvokeMap[K]["params"]) => Promise<InvokeMap[K]["res"]>;
export default invoke;
