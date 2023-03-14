<template>
    <div :style="{ width: `${settings.scrollbarSettings?.trackWidth}` }" class="t-smoothscrollbar">
        <div ref="track" class="t-smoothscrollbar--track">
            <div 
                ref="thumb" 
                :style="{ 
                    width: settings.scrollbarSettings?.thumbWidth, 
                    height: settings.scrollbarSettings?.thumbHeight,
                    transform: `translateY(${thumbPosition}px)`,
                }" 
                class="t-smoothscrollbar--thumb">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import type { SmoothPageSettings } from '../../interfaces/settings.interface'
import type { PrivateStore } from '../../interfaces/store.interface';

const { settings, store } = defineProps<{
    settings: SmoothPageSettings,
    store: PrivateStore
}>()

const thumb = ref<HTMLElement>()
const track = ref<HTMLElement>()

const thumbPosition = ref<number>(0)
watchEffect(() => {
    if (!thumb.value || !track.value) { return }
    if (!store.isEnabled && !settings.enableScrollbarWhileSmoothpageDisabled) { return }
    const pageHeight = document.getElementById('smoothpageBody')?.getBoundingClientRect().height
    if (!pageHeight) { return }
    const trackHeight = track.value!.getBoundingClientRect().height
    const thumbHeight = thumb.value!.getBoundingClientRect().height
    thumbPosition.value = Number(store.currentScrollPosition) / (pageHeight - trackHeight) * (trackHeight - thumbHeight)
})
</script>

<style src="./index.css"></style>