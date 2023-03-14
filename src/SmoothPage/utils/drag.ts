import type { Ref } from "vue";
import type { OnScrollProps } from "../components/SmoothPage/extensions/detector.interface";
// TODO: дописать движение скроллбара, сейчас немного неправильно
export class Drag {
    track: HTMLElement | null
    thumb: HTMLElement | null
    onScroll: (props: OnScrollProps) => void
    dragStart: number = 0

    constructor(track: Ref<HTMLElement | null>, thumb: Ref<HTMLElement | null>, onScroll: (props: OnScrollProps) => void) {
        this.track = track.value
        this.thumb = thumb.value
        this.onScroll = onScroll
        if (!this.thumb || !this.track) { return }
        this.thumb.addEventListener('mousedown', this.mouseDownHandler)
    }

    mouseDownHandler = function(this: Drag, e: MouseEvent): void {
        if (!this.thumb || !this.track) { return }
        const html = document.querySelector('html')
        if (!html) { return }

        html.style.userSelect = 'none'
        html.style.pointerEvents = 'none'
        html.style.cursor = 'grabbing'

        const thumbOffsetY = this.thumb.getBoundingClientRect().top
        const trackOffsetY = this.track.getBoundingClientRect().top
        // const delta = e.clientY - thumbOffsetY
        this.dragStart = e.clientY - trackOffsetY

        document.addEventListener('mousemove', this.mouseMoveHandler)
        document.addEventListener('mouseup', this.mouseUpHandler, { once: true })
    }.bind(this)

    mouseUpHandler = function(this: Drag): void {
        if (!this.thumb) { return }
        const html = document.querySelector('html')
        if (!html) { return }
        html.style.removeProperty('user-select')
        html.style.removeProperty('pointer-events')
        html.style.removeProperty('cursor')

        document.removeEventListener('mousemove', this.mouseMoveHandler)
    }.bind(this)

    mouseMoveHandler = function(this: Drag, e: MouseEvent): void {
        if (!this.thumb || !this.track) { return }
        if (typeof this.onScroll !== 'function') { return }

        const delta = e.clientY - this.track.getBoundingClientRect().top
        const wheel = (delta - this.dragStart) * 100 / this.thumb.getBoundingClientRect().height
        const dir = Math.abs(wheel) / wheel
        console.log(wheel, dir)
        this.onScroll({ dir, wheel })

        const thumbOffsetY = this.thumb.getBoundingClientRect().top
        const self = this
        setTimeout(() => {
            const trackOffsetY = self.track!.getBoundingClientRect().top
            this.dragStart = e.clientY - trackOffsetY
        }, 95)

    }.bind(this)

    destroy(): void {
        if (!this.thumb) { return }
        this.thumb.removeEventListener('mousedown', this.mouseDownHandler)
    }
}
