declare class DetectShotcuts {
    element: any;
    pressed: {};
    constructor(element: any);
    subscribe: () => void;
    unsubscribe: () => void;
    isHold: (key: any) => boolean;
    keydown: (e: any) => void;
    keyup: (e: any) => void;
}
export default DetectShotcuts;
//# sourceMappingURL=detectShortcuts.d.ts.map