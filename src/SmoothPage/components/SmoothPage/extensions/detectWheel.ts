import type { OnScrollProps } from "./detector.interface"
import type { DetectorSettings } from "./detector.interface"
class DetectWheel {
    element
    cb
    settings: DetectorSettings

    constructor(element: any, cb: any, settings: DetectorSettings) {
        this.element = element
        this.cb = cb
        this.settings = settings
        this.subscribe()
    }

    subscribe() {
        this.element.addEventListener('wheel', this.listener)
    }

    unsubscribe() {
        this.element.removeEventListener('wheel', this.listener)
    }

    listener = function(this: DetectWheel, e: any) {
        if (typeof this.cb === 'function') { 
            if (e.deltaY) {
                this.cb({
                    dir: e.deltaY / Math.abs(e.deltaY),
                    wheel: e.deltaY * this.settings.wheelIntensity
                } as OnScrollProps)
            }
        }
    }.bind(this)
}

export default DetectWheel