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
import type { OnScrollProps } from '../SmoothPage/extensions/detector.interface';
import { useDrag } from '../../hooks/useDrag'

const { settings, store, onScroll } = defineProps<{
    settings: SmoothPageSettings,
    store: PrivateStore
    onScroll: (props: OnScrollProps) => void
}>()

const thumb = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

const thumbPosition = ref<number>(0)
useDrag(track, thumb, onScroll)
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