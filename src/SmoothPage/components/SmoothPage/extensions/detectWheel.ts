import type { OnScrollProps } from "./detector.interface"
import type { BrowserSettings } from "./detector.interface"
class DetectWheel {
    element
    cb
    settings: BrowserSettings

    constructor(element: any, cb: any, settings: BrowserSettings) {
        this.element = element
        this.cb = cb
        this.settings = settings
        this.subscribe()
    }

    subscribe = function(this: DetectWheel) {
        this.element.addEventListener('wheel', this.listener)
    }.bind(this)

    unsubscribe = function(this: DetectWheel) {
        this.element.removeEventListener('wheel', this.listener)
    }.bind(this)

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