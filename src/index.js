import VueSmoothPage from './components/SmoothPage/index.vue'
import './components/SmoothPage/index.css'

export default {
    install(app, options) {
        app.component('VueSmoothPage', VueSmoothPage)
    }
}