declare class DetectShotcuts {
    element: any;
    pressed: {};
    onKeys: any;
    constructor(element: any, onKeys: any);
    subscribe: () => void;
    unsubscribe: () => void;
    isHold: (key: any) => boolean;
    keydown: (e: any) => void;
    keyup: (e: any) => void;
    isHolding(): void;
}
export default DetectShotcuts;
//# sourceMappingURL=detectShortcuts.d.ts.map