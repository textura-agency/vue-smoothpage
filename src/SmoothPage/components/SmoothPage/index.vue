<template>
    <div :class="[mergedSettings.defaultClassNames.smoothPage , mergedSettings.additionalClassNames.smoothPage]">
        <div ref="contentRef" :style="style" :class="[mergedSettings.defaultClassNames.smoothPageBody, mergedSettings.additionalClassNames.smoothPageBody]">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, watchEffect, reactive, computed, ref, withDefaults, inject } from 'vue'
import Detector from './extensions/detector'
import type { OnScrollProps } from './extensions/detector.interface'
import { useLoop } from '../../hooks/useLoop'
import { lerp } from '../../utils/lerp'
import { useSmoothPageStore } from '../../stores/private'
import { getDeviceType } from '../../utils/getDeviceType'
import type { SmoothPageSettings } from '../../interfaces/settings.interface'
import { getSettingsWithDefaults } from '../../utils/getSettingsWithDefaults'

interface SmoothScrollProps {
    preventScroll?: boolean;
    settings?: SmoothPageSettings;
}

const props = withDefaults(defineProps<SmoothScrollProps>(), {
    preventScroll: false,
})

const settings: SmoothPageSettings | undefined = inject('smoothPageSettings')
const settingsWithDefaults = getSettingsWithDefaults(settings)
// todo: fix reload issue, when u change "settings" prop in component directly
const mergedSettings = reactive({
    ...settingsWithDefaults,
    ...(props?.settings || {}) //mb should de removed?
})

const store = useSmoothPageStore()
const detector = ref(null as any)
const contentRef = ref(null as any)

onMounted(() => {
    store.setDeviceType(getDeviceType())
    store.setIsEnabled(getIsEnabled())
    store.setIsMounted(true)
})
onUnmounted(() => {
    store.setIsMounted(false)
})
watchEffect(() => {
    if (store.isEnabled && !store.isInited) {
        init()
        return
    }
    if (!store.isEnabled && store.isInited) {
        destroy()
    }
})
function init() {
    mergedSettings.defaultClassNames.smoothPageEnabled && document.querySelector('html')?.classList?.add(mergedSettings.defaultClassNames.smoothPageEnabled)
    mergedSettings.additionalClassNames.smoothPageEnabled && document.querySelector('html')?.classList?.add(mergedSettings.additionalClassNames.smoothPageEnabled)
    detector.value = new Detector(document, onScroll, { 
        wheelIntensity: mergedSettings.wheelIntensity,
        touchmoveIntensity: mergedSettings.touchmoveIntensity,
        minTouchmoveDistance: mergedSettings.minTouchmoveDistance
    })
    store.setIsInited(true)
    store.setNeedReload(false)
}
function destroy() {
    mergedSettings.defaultClassNames.smoothPageEnabled && document.querySelector('html')?.classList?.remove(mergedSettings.defaultClassNames.smoothPageEnabled)
    mergedSettings.additionalClassNames.smoothPageEnabled && document.querySelector('html')?.classList?.remove(mergedSettings.additionalClassNames.smoothPageEnabled)
    detector.value?.destroy()
    window.scroll(0, store.savedCurrentScrollPositionForDestroy)
    store.setIsInited(false)
}
watchEffect(() => {
    if (store.needReload) {
        destroy()
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
    if (!store.isMounted) { return }
    if (store.isTriggeringScrollPosition) { return }
    store.setIsEnabled(getIsEnabled())
    if (store.isEnabled) {
        store.setCurrentScrollPosition(lerp(store.currentScrollPosition, store.nextScrollPosition, mergedSettings.smoothness))
        store.setSavedCurrentScrollPositionForDestroy(store.currentScrollPosition) 
    } else {
        store.setCurrentScrollPosition(window.scrollY)
        store.setNextScrollPosition(window.scrollY)
    }
}, mergedSettings.renderDelay)
function getIsEnabled() {
    if (store.isDestroyedByUser) {
        return false
    }

    if (mergedSettings.enableOnTouchDevices) { 
        return  window.innerWidth >= mergedSettings.minWidth
    }

    return store.deviceType === 'desktop' && window.innerWidth >= mergedSettings.minWidth
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

<style src="./index.css"></style>