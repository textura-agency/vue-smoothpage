// experimental feature
export type BrowserType = "MS_EDGE" | "EDGE_CHROMIUM_BASED" | "OPERA" | "CHROME" | "MS_IE" | "MOZILLA_FIREFOX" | "SAFARI" | "OTHER"

export enum BrowserTypes {
    MS_EDGE = "MS_EDGE",
    EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED",
    OPERA = "OPERA",
    CHROME = "CHROME",
    MS_IE = "MS_IE",
    MOZILLA_FIREFOX = "MOZILLA_FIREFOX",
    SAFARI = "SAFARI",
    OTHER = "OTHER"
}

export const getBrowser = (): BrowserType => {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
        case agent.indexOf("edge") > -1: return BrowserTypes.MS_EDGE;
        case agent.indexOf("edg/") > -1: return BrowserTypes.EDGE_CHROMIUM_BASED;
        // @ts-ignore
        case agent.indexOf("opr") > -1 && !!window.opr: return BrowserTypes.OPERA;
        // @ts-ignore
        case agent.indexOf("chrome") > -1 && !!window.chrome: return BrowserTypes.CHROME;
        case agent.indexOf("trident") > -1: return BrowserTypes.MS_IE;
        case agent.indexOf("firefox") > -1: return BrowserTypes.MOZILLA_FIREFOX;
        case agent.indexOf("safari") > -1: return BrowserTypes.SAFARI;
        default: return BrowserTypes.OTHER;
    }
}