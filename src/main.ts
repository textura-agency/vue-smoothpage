import { createApp } from "vue";
import App from "./App.vue";
import SmoothPage from "../dist/index.js";
// import SmoothPage from "./SmoothPage";
import { createPinia } from "pinia";
import '../dist/style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(SmoothPage, { 
    enableOnTouchDevices: true,
})
app.mount('#app')