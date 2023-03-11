import type { KeyboardSettings, OnScrollProps } from "./detector.interface"
import type { ScrollKeyType } from "../../../interfaces/settings.interface"

class DetectKeyboard {
    element
    callback
    settings: KeyboardSettings
    constructor(element: any, callback: (props: OnScrollProps) => void, settings: KeyboardSettings) {
        this.element = element
        this.callback = callback
        this.settings = settings
        this.subscribe()
    }

    subscribe = function(this: DetectKeyboard) {
        this.element.addEventListener('keydown', this.listener)
    }.bind(this)

    unsubscribe = function(this: DetectKeyboard) {
        this.element.removeEventListener('keydown', this.listener)
    }.bind(this)

    listener = function(this: DetectKeyboard, e: any) {
        if (!this.settings.enableScrollOnKeyboard) { return }
        if (typeof this.callback !== 'function') { return }
        const key = e.keyCode
        console.log(key)

        if (this.settings.mode === 'vertical') {
            this.settings.scrollDownOnKeys.forEach((_: ScrollKeyType) => {
                _.code === key && this.callback({ dir: 1, wheel: _.distance })
            })
            this.settings.scrollUpOnKeys.forEach((_: ScrollKeyType) => {
                _.code === key && this.callback({ dir: -1, wheel: _.distance * -1 })
            })
        } else
        if (this.settings.mode === 'horizontal') {
            this.settings.scrollRightOnKeys.forEach((_: ScrollKeyType) => {
                _.code === key && this.callback({ dir: 1, wheel: _.distance })
            })
            this.settings.scrollLeftOnKeys.forEach((_: ScrollKeyType) => {
                _.code === key && this.callback({ dir: -1, wheel: _.distance * -1 })
            })
        }
    }.bind(this)
} 

export default DetectKeyboard