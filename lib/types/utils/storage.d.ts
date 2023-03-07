/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
export declare const Local: {
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
/**
 * window.sessionStorage 浏览器临时缓存
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
export declare const Session: {
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
