type WatchIsEnabledOnType = 'load' | 'load-resize';
type ModeType = 'horizontal' | 'vertical';
type PreventScrollKeyType = {
    code: number[];
};
type PreventScrollKeysType = Array<PreventScrollKeyType>;
type ScrollKeyType = {
    code: number;
    distance: number;
};
type ScrollKeysType = Array<ScrollKeyType>;
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
    enableScrollOnKeyboard?: boolean;
    scrollDownOnKeys?: ScrollKeysType;
    scrollUpOnKeys?: ScrollKeysType;
    scrollRightOnKeys?: ScrollKeysType;
    scrollLeftOnKeys?: ScrollKeysType;
    preventScrollOnHoldKeys?: PreventScrollKeysType;
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
export type { SmoothPageSettings, WatchIsEnabledOnType, ModeType, ScrollKeysType, ScrollKeyType, PreventScrollKeyType, PreventScrollKeysType };
//# sourceMappingURL=settings.interface.d.ts.map