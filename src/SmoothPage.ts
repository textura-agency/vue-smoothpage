import type { App } from 'vue'
import { SmoothPage } from './components'
import type { SmoothPageSettings } from './components/SmoothPage/interfaces/settings.interface'

export default {
    install(app: App, settings?: SmoothPageSettings) {
        app.component('SmoothPage', SmoothPage)
        app.provide('smoothPageSettings', settings || {})
    }
}