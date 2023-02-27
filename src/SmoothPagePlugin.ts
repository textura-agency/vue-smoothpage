import type { App } from 'vue'
import { SmoothPage, useSmoothPage } from './SmoothPage'
import type { SmoothPageSettings } from './SmoothPage'

export default {
    install(app: App, settings?: SmoothPageSettings) {
        app.component('SmoothPage', SmoothPage)
        app.provide('smoothPageSettings', settings || {})
    }
}

export { SmoothPage, useSmoothPage }
export type { SmoothPageSettings }