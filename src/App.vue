<template>
    <smooth-page>
        <div class="container">
            <div @click="reload()" :settings="{
                minWidth: 1080
            }" class="button">Reload</div>
        </div>
    </smooth-page>
</template>

<script lang="ts" setup>
import { SmoothPage, useSmoothPage } from '../dist/index.js';
const { reload } = useSmoothPage()
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