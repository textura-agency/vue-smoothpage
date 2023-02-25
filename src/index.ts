import type { App } from 'vue'
import SmoothPage from './components'
import type { SmoothPageSettings } from './components/SmoothPage/interfaces/settings.interface'
import './components/SmoothPage/index.css'

export default {
    install(app: App, settings: SmoothPageSettings) {
        app.component('VueSmoothPage', SmoothPage)
        app.provide('settings', settings || {})
    }
}

