type WatchIsEnabledOnType = 'load' | 'load-resize';
type ModeType = 'horizontal' | 'vertical';
interface SmoothPageSettings {
    mode?: ModeType;
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
        smoothPageVertical?: string;
        smoothPageHorizontal?: string;
    };
    additionalClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageEnabled?: string;
        smoothPageVertical?: string;
        smoothPageHorizontal?: string;
    };
}
export type { SmoothPageSettings, WatchIsEnabledOnType, ModeType };
//# sourceMappingURL=settings.interface.d.ts.map