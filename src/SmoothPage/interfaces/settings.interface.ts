interface SmoothPageSettings {
    smoothness?: number; 
    wheelIntensity?: number; 
    touchmoveIntensity?: number;

    // experimental features
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
    // 

    minWidth?: number; 
    renderDelay?: number;
    enableOnTouchDevices?: boolean;
    minTouchmoveDistance?: number;
    resetScrollPositionOnStateChanging?: boolean;
    defaultClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageEnabled?: string;
    },
    additionalClassNames?: {
        smoothPage?: string;
        smoothPageBody?: string;
        smoothPageEnabled?: string;
    }
}

export type { SmoothPageSettings }