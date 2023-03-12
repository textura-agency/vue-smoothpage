import DetectWheel from "./detectWheel";
import DetectSwipe from "./detectSwipe";
import DetectKeyboard from "./detectKeyboard";
import DetectShotcuts from "./detectShortcuts";
declare class Detector {
    swipe: DetectSwipe;
    scroll: DetectWheel;
    keyboard: DetectKeyboard;
    shotcuts: DetectShotcuts;
    isSubscribed: boolean;
    settings: any;
    callback: any;
    constructor(dom: any, callback: any, settings: any, browser: any);
    controlScroll(props: any): void;
    onKeysHold(): void;
    subscribe: () => void;
    unsubscribe: () => void;
    destroy: () => void;
}
export default Detector;
//# sourceMappingURL=detector.d.ts.map