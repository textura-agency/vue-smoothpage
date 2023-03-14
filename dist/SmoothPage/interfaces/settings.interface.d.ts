import type { Component } from "vue";
type WatchIsEnabledOnType = 'load' | 'load-resize';
type ModeType = 'horizontal' | 'horizontal-reverse' | 'vertical' | 'vertical-reverse';
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
    enableScrollbar?: boolean;
    enableScrollbarWhileSmoothpageDisabled?: boolean;
    scrollbarComponent?: Component;
    scrollbarSettings?: {
        trackWidth?: string;
        thumbHeight?: string;
        thumbWidth?: string;
    };
    defaultClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageBodyPosition?: string;
        smoothPageEnabled?: string;
        smoothPageVertical?: string;
        smoothPageVerticalReverse?: string;
        smoothPageHorizontal?: string;
        smoothPageHorizontalReverse?: string;
        scrollbarEnabled?: string;
    };
    additionalClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageBodyPosition?: string;
        smoothPageEnabled?: string;
        smoothPageVertical?: string;
        smoothPageVerticalReverse?: string;
        smoothPageHorizontal?: string;
        smoothPageHorizontalReverse?: string;
        scrollbarEnabled?: string;
    };
}
export type { SmoothPageSettings, WatchIsEnabledOnType, ModeType, ScrollKeysType, ScrollKeyType, PreventScrollKeyType, PreventScrollKeysType, };
//# sourceMappingURL=settings.interface.d.ts.map