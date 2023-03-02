interface OnScrollProps {
    dir: number;
    wheel: number;
}
interface DetectorSettings {
    wheelIntensity: number;
    touchmoveIntensity: number;
    minTouchmoveDistance: number;
    safariWheelIntensity: number;
    safariTouchmoveIntensity: number;
    chromeWheelIntensity: number;
    chromeTouchmoveIntensity: number;
    operaWheelIntensity: number;
    operaTouchmoveIntensity: number;
    edgeWheelIntensity: number;
    edgeTouchmoveIntensity: number;
    mozillaWheelIntensity: number;
    mozillaTouchmoveIntensity: number;
}
interface BrowserSettings {
    wheelIntensity: number;
    touchmoveIntensity: number;
    minTouchmoveDistance: number;
}
export type { OnScrollProps, DetectorSettings, BrowserSettings };
//# sourceMappingURL=detector.interface.d.ts.map