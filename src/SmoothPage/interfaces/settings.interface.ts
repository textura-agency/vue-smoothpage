interface SmoothPageSettings {
    smoothness?: number; 
    wheelIntensity?: number; 
    minWidth?: number; 
    renderDelay?: number;
    enableOnTouchDevices?: boolean;
    touchmoveIntensity?: number;
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