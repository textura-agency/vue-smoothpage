import type { OnScrollProps } from "./detector.interface"
import type { BrowserSettings } from "./detector.interface"
class DetectSwipe {
    #swipe_det = {
        sY: 0,
        eY: 0
    }
    prevY = 0
    #element: any
    cb
    deltaY: any
    minDelta
    settings: BrowserSettings

    constructor(element: any, callbalck: any, settings: BrowserSettings) {
        this.cb = callbalck
        this.#element = element
        this.#start()
        this.settings = settings
        this.minDelta = settings.minTouchmoveDistance
        this.useCallback = this.useCallback.bind(this)
        this.destroy = this.destroy.bind(this)
    }

    #start() {
        this.#element.addEventListener('touchstart', this.#touchstart.bind(this), false)
        this.#element.addEventListener('touchmove', this.#touchmove.bind(this), false)
        this.#element.addEventListener('touchend', this.#touchend.bind(this), false)
    }

    destroy() {
        this.#element.removeEventListener('touchstart', this.#touchstart, false)
        this.#element.removeEventListener('touchmove', this.#touchmove, false)
        this.#element.removeEventListener('touchend', this.#touchend, false)
    }

    #touchstart(e: any) {
        const t = e.touches[0]
        this.#swipe_det.sY = t.screenY
        this.prevY = this.#swipe_det.sY
        this.#swipe_det.eY = this.#swipe_det.sY
    }
    #touchmove(e: any) {
        const t = e.touches[0]
        this.prevY = this.#swipe_det.eY
        this.#swipe_det.eY = t.screenY


        this.deltaY = this.#swipe_det.sY - this.#swipe_det.eY
        const prevDeltaY = this.#swipe_det.sY - this.prevY

        if ( Math.abs(prevDeltaY) > Math.abs(this.deltaY) ) {
            this.#swipe_det.sY = this.prevY
        }

        Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY)
    }
    #touchend(e: any) {
        Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY)
    }

    useCallback(deltaY: any) {
        if (typeof this.cb === 'function') { 
            if (deltaY) {
                this.cb({
                    dir: deltaY / Math.abs(deltaY),
                    wheel: deltaY * this.settings.touchmoveIntensity
                } as OnScrollProps)
            }
        }
    }
  }

  export default DetectSwipe