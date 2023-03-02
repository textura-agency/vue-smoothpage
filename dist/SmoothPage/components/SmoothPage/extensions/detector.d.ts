import DetectWheel from "./detectWheel";
import DetectSwipe from "./detectSwipe";
declare class Detector {
    swipe: DetectSwipe | undefined;
    scroll: DetectWheel | undefined;
    keyboard: any;
    callback: any;
    constructor(dom: any, callback: any, settings: any, browser: any);
    controlScroll(props: any): void;
    destroy(): void;
}
export default Detector;
//# sourceMappingURL=detector.d.ts.map