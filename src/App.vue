<template>
    <smooth-page :settings="{ 
        minWidth: 1000, 
        smoothness: 0.2, 
        chromeWheelIntensity: 10, 
        safariWheelIntensity: 7,
        reloadPageOnStateChanging: false,
        watchIsEnabledOn: 'load-resize',
        mode: 'vertical-reverse',
        preventScrollOnHoldKeys: [ { code: [ 16, 91 ] } ]
    }">
        <div class="container">
            <div @click="store.reload()"  class="button">Reload</div>
            <div @click="store.destroy()"  class="button">Destroy</div>
            <div @click="store.init()"  class="button">Init</div>
            <div @click="store.preventScroll(!store.isPreventScroll)"  class="button">Prevent</div>
        </div>
    </smooth-page>
</template>

<script lang="ts" setup>
import { onMounted, watchEffect } from 'vue';
import { SmoothPage, useSmoothPage } from '../dist/index.js';
const store = useSmoothPage()
console.log(store.browser)
onMounted(() => {
    console.log(store.browser)
})
watchEffect(() => {
    // console.log(store.currentScrollPosition)
})
</script>

<style>
* {
    box-sizing: border-box;
}
html, body {
    margin: 0;
    padding: 0;
}

.container {
    height: 300vh;
    width: 100vw;
    background: linear-gradient(0deg, #ff0000 0%, #00ff00 33%, #0000ff 66%, #000000 100%);

    /* for horizontal */
    /* height: 100vh;
    width: 300vw;
    background: linear-gradient(90deg, #ff0000 0%, #00ff00 33%, #0000ff 66%, #000000 100%); */
}

.button {
    color: white;
    transform: translate(50vh, 100vh);
    /* transform: translate(120vw, 50vh); */

}
</style>