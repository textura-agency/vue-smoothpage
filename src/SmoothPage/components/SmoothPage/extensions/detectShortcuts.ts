
class DetectShotcuts {
    element
    pressed: any = {}

    constructor(element: any) {
        this.element = element
        this.subscribe()
    }

    subscribe = function(this: DetectShotcuts) {
        this.element.addEventListener('keydown', this.keydown)
        this.element.addEventListener('keyup', this.keyup)
    }.bind(this)

    unsubscribe = function(this: DetectShotcuts) {
        this.element.removeEventListener('keydown', this.keydown)
        this.element.removeEventListener('keyup', this.keyup)
    }.bind(this)

    isHold = function(this: DetectShotcuts, key: number): boolean {
        return !!this.pressed[key]
    }.bind(this)

    keydown = function(this: DetectShotcuts, e: any) {
        const key = e.keyCode
        if ( !this.pressed[key] ) { this.pressed[key] = true }
    }.bind(this)

    keyup = function(this: DetectShotcuts, e: any) {
        const key = e.keyCode
        if ( this.pressed[key] ) { this.pressed[key] = false }
    }.bind(this)

    isHolding() {}
}

export default DetectShotcuts