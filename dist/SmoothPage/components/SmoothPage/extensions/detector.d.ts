import DetectWheel from "./detectWheel";
import DetectSwipe from "./detectSwipe";
import DetectKeyboard from "./detectKeyboard";
import DetectShotcuts from "./detectShortcuts";
declare class Detector {
    swipe: DetectSwipe;
    scroll: DetectWheel;
    keyboard: DetectKeyboard;
    shotcuts: DetectShotcuts;
    settings: any;
    callback: any;
    isSubscribed: boolean;
    constructor(dom: any, callback: any, settings: any, browser: any);
    controlScroll(props: any): void;
    subscribe: () => void;
    unsubscribe: () => void;
    destroy(): void;
}
export default Detector;
//# sourceMappingURL=detector.d.ts.map