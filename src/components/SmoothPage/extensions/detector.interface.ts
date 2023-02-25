interface OnScrollProps {
    dir: number;
    wheel: number;
}

interface DetectorSettings {
    wheelIntensity: number;
    touchmoveIntensity: number;
    minTouchmoveDistance: number;
}

export type { OnScrollProps, DetectorSettings }