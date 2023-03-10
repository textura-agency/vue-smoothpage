type WatchIsEnabledOnType = 'load' | 'load-resize';
interface SmoothPageSettings {
    smoothness?: number;
    wheelIntensity?: number;
    touchmoveIntensity?: number;
    safariWheelIntensity?: number;
    safariTouchmoveIntensity?: number;
    chromeWheelIntensity?: number;
    chromeTouchmoveIntensity?: number;
    operaWheelIntensity?: number;
    operaTouchmoveIntensity?: number;
    edgeWheelIntensity?: number;
    edgeTouchmoveIntensity?: number;
    mozillaWheelIntensity?: number;
    mozillaTouchmoveIntensity?: number;
    watchIsEnabledOn?: WatchIsEnabledOnType;
    minWidth?: number;
    renderDelay?: number;
    enableOnTouchDevices?: boolean;
    minTouchmoveDistance?: number;
    resetScrollPositionOnStateChanging?: boolean;
    reloadPageOnStateChanging?: boolean;
    defaultClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageEnabled?: string;
    };
    additionalClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageEnabled?: string;
    };
}
export type { SmoothPageSettings, WatchIsEnabledOnType };
//# sourceMappingURL=settings.interface.d.ts.map