declare class DetectSwipe {
    #private;
    prevY: number;
    cb: any;
    deltaY: any;
    minDelta: any;
    settings: any;
    constructor(element: any, callbalck: any, settings: any);
    subscribe: () => void;
    unsubscribe: () => void;
    useCallback(deltaY: any): void;
}
export default DetectSwipe;
//# sourceMappingURL=detectSwipe.d.ts.map