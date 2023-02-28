<template>
    <smooth-page :settings="{ minWidth: 1000 }">
        <div class="container">
            <div @click="reload()"  class="button">Reload</div>
            <div @click="destroy()"  class="button">Destroy</div>
            <div @click="init()"  class="button">Init</div>
        </div>
    </smooth-page>
</template>

<script lang="ts" setup>
import { SmoothPage, useSmoothPage } from '../dist/index.js';
const { reload, destroy, init, currentScrollPosition } = useSmoothPage()
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
}

.button {
    color: white;
    transform: translate(50vh, 100vh);
}
</style>