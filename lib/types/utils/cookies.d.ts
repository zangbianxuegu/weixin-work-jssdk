declare const cookies: {
    set: (key: string, value: string) => void;
    get: (key: string) => string | null;
};
export default cookies;
