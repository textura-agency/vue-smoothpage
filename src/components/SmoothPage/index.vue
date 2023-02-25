<template>
    <div class="t-smoothpage">
        <div ref="contentRef" :style="style" class="t-smoothpage--body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, watchEffect, computed, ref, withDefaults, inject } from 'vue'
import Detector from './extensions/detector'
import { OnScrollProps } from './extensions/detector.interface'
import { useLoop } from './hooks/useLoop'
import { lerp } from './utils/lerp'
import { useSmoothPageStore } from './store'
import { getDeviceType } from './utils/getDeviceType'
import { DeviceType } from './utils/getDeviceType'
import type { SmoothPageSettings } from './interfaces/settings.interface'

interface SmoothScrollProps {
    preventScroll?: boolean;
}
const settings: SmoothPageSettings | undefined = inject('settings')
const settingsWithDefaults = {
    smooth: settings?.smooth ||  0.2,
    wheelIntensity: settings?.wheelIntensity || 2,
    touchmoveIntensity: settings?.touchmoveIntensity || 2,
    minTouchmoveDistance: settings?.minTouchmoveDistance || 40,
    minWidth: settings?.minWidth || 0,
    renderDelay: settings?.renderDelay || 0,
    enableOnTouchDevices: settings?.enableOnTouchDevices || false
}

const props = withDefaults(defineProps<SmoothScrollProps>(), {
    preventScroll: false,
})
const store = useSmoothPageStore()
const isMounted = ref(false)
const detector = ref(null as any)
const contentRef = ref(null as any)
const isInited = ref(false)
const deviceType = ref<DeviceType>('desktop')
onMounted(() => {
    deviceType.value = getDeviceType()
    store.setIsEnabled(getIsEnabled())
    isMounted.value = true
})
onUnmounted(() => {
    isMounted.value = false
})
watchEffect(() => {
    if (store.isEnabled && !isInited.value) {
        document.querySelector('html')?.classList?.add('t-smoothscroll--enabled')
        detector.value = new Detector(document, onScroll, { 
            wheelIntensity: settingsWithDefaults.wheelIntensity,
            touchmoveIntensity: settingsWithDefaults.touchmoveIntensity,
            minTouchmoveDistance: settingsWithDefaults.minTouchmoveDistance
        })
        isInited.value = true
        return
    }
    if (!store.isEnabled && isInited.value) {
        document.querySelector('html')?.classList?.remove('t-smoothscroll--enabled')
        detector.value?.destroy()
        isInited.value = false
    }
})
function onScroll(scrollProps: OnScrollProps) {
    if (props.preventScroll) { return }
    if (!contentRef.value) { return }
    const contentHeight = contentRef.value.getBoundingClientRect().height - window.innerHeight
    store.setNextScrollPosition(Math.max(0, Math.min(store.currentScrollPosition + scrollProps.wheel, contentHeight)))
}
useLoop(() => {
    if (props.preventScroll) { return }
    if (!isMounted.value) { return }
    if (store.isTriggeringScrollPosition) { return }
    store.setIsEnabled(getIsEnabled())
    if (store.isEnabled) {
        store.setCurrentScrollPosition(lerp(store.currentScrollPosition, store.nextScrollPosition, settingsWithDefaults.smooth))
    } else {
        store.setCurrentScrollPosition(window.scrollY)
        store.setNextScrollPosition(window.scrollY)
    }
}, settingsWithDefaults.renderDelay)
function getIsEnabled() {
    if (settingsWithDefaults.enableOnTouchDevices) { 
        return window.innerWidth >= settingsWithDefaults.minWidth
    }
    return deviceType.value === 'desktop' && window.innerWidth >= settingsWithDefaults.minWidth
}
const style = computed(() => {
    if (store.isEnabled) {
        return {
            transform: `translate3d(0, ${-store.currentScrollPosition}px, 0)`
        }
    }
    return {}
})
</script>