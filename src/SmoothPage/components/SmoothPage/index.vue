<template>
    <div :class="[mergedSettings.defaultClassNames.smoothPage , mergedSettings.additionalClassNames.smoothPage]">
        <div id="smoothpageBody" ref="smoothpageBodyRef" :style="style" :class="[mergedSettings.defaultClassNames.smoothPageBody, mergedSettings.additionalClassNames.smoothPageBody]">
            <div :class="[mergedSettings.defaultClassNames.smoothPageBodyPosition, mergedSettings.additionalClassNames.smoothPageBodyPosition]">
                <slot></slot>
            </div>
        </div>
        <mergedSettings.scrollbarComponent v-if="(mergedSettings.enableScrollbarWhileSmoothpageDisabled || store.isEnabled) && mergedSettings.enableScrollbar && mergedSettings.scrollbarComponent" :settings="mergedSettings" :store="store" :onScroll="onScroll" />
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
import { getBrowser } from '../../utils/getBrowser'
import { DeviceTypes } from '../../utils/getDeviceType'

interface SmoothScrollProps {
    // preventScroll?: boolean;
    settings?: SmoothPageSettings;
}

const props = withDefaults(defineProps<SmoothScrollProps>(), {
    // preventScroll: false,
})

const detector = ref(null as any)
const smoothpageBodyRef = ref<HTMLElement | null>(null)

const store = useSmoothPageStore()

const settings: SmoothPageSettings | undefined = inject('smoothPageSettings', undefined)
const settingsWithDefaults = getSettingsWithDefaults(settings)
// todo: fix reload issue, when u change "settings" prop in component directly
// todo: update defaults, to extend wheels from props.settings
const mergedSettings = {
    ...settingsWithDefaults,
    ...(props?.settings || {}), //mb should de removed?
}

watchEffect(() => {
    store.setSettings(mergedSettings)
})

onMounted(() => {
    store.setSettings(mergedSettings)
    store.setDeviceType(getDeviceType())
    store.setIsEnabled(getIsEnabled())
    store.setBrowser(getBrowser())
    store.setIsMounted(true)
    setTimeout(() => store.setIsEarlierMounted(true), 100) 
    // TODO: move to toggleClassNames, rewrite toggle classnames
    if (mergedSettings.enableScrollbar && mergedSettings.enableScrollbarWhileSmoothpageDisabled) {
        mergedSettings.defaultClassNames.scrollbarEnabled && document.querySelector('html')?.classList.add(mergedSettings.defaultClassNames.scrollbarEnabled)
        mergedSettings.additionalClassNames.scrollbarEnabled && document.querySelector('html')?.classList.add(mergedSettings.additionalClassNames.scrollbarEnabled)
    }
    // 
})
onUnmounted(() => {
    store.setIsMounted(false)
})
watchEffect(() => {
    if (store.isEnabled && !store.isInited) {
        init()
    }
    else if (!store.isEnabled && store.isInited) {
        destroy()
    }
})
function init() {
    store.setIsInited(true)
    store.setNeedReload(false)
    toggleClassNames(true)
    // TODO: move to toggleClassNames, rewrite toggle classnames
    if (mergedSettings.enableScrollbar) {
        mergedSettings.defaultClassNames.scrollbarEnabled && document.querySelector('html')?.classList.add(mergedSettings.defaultClassNames.scrollbarEnabled)
        mergedSettings.additionalClassNames.scrollbarEnabled && document.querySelector('html')?.classList.add(mergedSettings.additionalClassNames.scrollbarEnabled)
    }
    // 

    detector.value = new Detector(document, onScroll, mergedSettings, store.browser)
    if (mergedSettings.resetScrollPositionOnStateChanging) {
        store.setCurrentScrollPosition(0)
        store.setNextScrollPosition(0)
        window.scroll(0, 0)
    }

    if (mergedSettings.reloadPageOnStateChanging && store.isEarlierMounted) {
        setTimeout(() => location.reload(), 100)
    }
}
function destroy() {
    // !dont change order, bc of scroll position reset!
    store.setIsInited(false)
    toggleClassNames(false)
    // TODO: move to toggleClassNames, rewrite toggle classnames
    if (!mergedSettings.enableScrollbarWhileSmoothpageDisabled) {
        mergedSettings.defaultClassNames.scrollbarEnabled && document.querySelector('html')?.classList.remove(mergedSettings.defaultClassNames.scrollbarEnabled)
        mergedSettings.additionalClassNames.scrollbarEnabled && document.querySelector('html')?.classList.remove(mergedSettings.additionalClassNames.scrollbarEnabled)
    }
    // 

    detector.value?.destroy()
    console.log(mergedSettings.resetScrollPositionOnStateChanging)
    if (mergedSettings.resetScrollPositionOnStateChanging) {
        store.setCurrentScrollPosition(0)
        store.setNextScrollPosition(0)
        window.scroll(0, 0)
    } else {
        window.scroll(0, store.savedCurrentScrollPositionForDestroy)
    }
    
    if (mergedSettings.reloadPageOnStateChanging && store.isEarlierMounted) {
        setTimeout(() => location.reload(), 100)
    }
}
function toggleClassNames(add: boolean) {
    const html = document.querySelector('html')
    if (!html) { return }

    if (add) {
        mergedSettings.defaultClassNames.smoothPageEnabled && html.classList.add(mergedSettings.defaultClassNames.smoothPageEnabled)
        mergedSettings.additionalClassNames.smoothPageEnabled && html.classList.add(mergedSettings.additionalClassNames.smoothPageEnabled)
        if (mergedSettings.mode === 'vertical') {
            mergedSettings.defaultClassNames.smoothPageVertical && html.classList.add(mergedSettings.defaultClassNames.smoothPageVertical)
            mergedSettings.additionalClassNames.smoothPageVertical && html.classList.add(mergedSettings.additionalClassNames.smoothPageVertical)
        } else
        if (mergedSettings.mode === 'vertical-reverse') {
            mergedSettings.defaultClassNames.smoothPageVerticalReverse && html.classList.add(mergedSettings.defaultClassNames.smoothPageVerticalReverse)
            mergedSettings.additionalClassNames.smoothPageVerticalReverse && html.classList.add(mergedSettings.additionalClassNames.smoothPageVerticalReverse)
        } else
        if (mergedSettings.mode === 'horizontal') {
            mergedSettings.defaultClassNames.smoothPageHorizontal && html.classList.add(mergedSettings.defaultClassNames.smoothPageHorizontal)
            mergedSettings.additionalClassNames.smoothPageHorizontal && html.classList.add(mergedSettings.additionalClassNames.smoothPageHorizontal)
        } else 
        if (mergedSettings.mode === 'horizontal-reverse') {
            mergedSettings.defaultClassNames.smoothPageHorizontalReverse && html.classList.add(mergedSettings.defaultClassNames.smoothPageHorizontalReverse)
            mergedSettings.additionalClassNames.smoothPageHorizontalReverse && html.classList.add(mergedSettings.additionalClassNames.smoothPageHorizontalReverse)
        }
        return
    }

    mergedSettings.defaultClassNames.smoothPageEnabled && html.classList.remove(mergedSettings.defaultClassNames.smoothPageEnabled)
    mergedSettings.additionalClassNames.smoothPageEnabled && html.classList.remove(mergedSettings.additionalClassNames.smoothPageEnabled)
    if (mergedSettings.mode === 'vertical') {
        mergedSettings.defaultClassNames.smoothPageVertical && html.classList.remove(mergedSettings.defaultClassNames.smoothPageVertical)
        mergedSettings.additionalClassNames.smoothPageVertical && html.classList.remove(mergedSettings.additionalClassNames.smoothPageVertical)
    } else
    if (mergedSettings.mode === 'vertical-reverse') {
        mergedSettings.defaultClassNames.smoothPageVerticalReverse && html.classList.remove(mergedSettings.defaultClassNames.smoothPageVerticalReverse)
        mergedSettings.additionalClassNames.smoothPageVerticalReverse && html.classList.remove(mergedSettings.additionalClassNames.smoothPageVerticalReverse)
    } else
    if (mergedSettings.mode === 'horizontal') {
        mergedSettings.defaultClassNames.smoothPageHorizontal && html.classList.remove(mergedSettings.defaultClassNames.smoothPageHorizontal)
        mergedSettings.additionalClassNames.smoothPageHorizontal && html.classList.remove(mergedSettings.additionalClassNames.smoothPageHorizontal)
    } else 
    if (mergedSettings.mode === 'horizontal-reverse') {
        mergedSettings.defaultClassNames.smoothPageHorizontalReverse && html.classList.remove(mergedSettings.defaultClassNames.smoothPageHorizontalReverse)
        mergedSettings.additionalClassNames.smoothPageHorizontalReverse && html.classList.remove(mergedSettings.additionalClassNames.smoothPageHorizontalReverse)
    }
}
watchEffect(() => {
    if (store.needReload) {
        destroy()
    }
})
function onScroll(scrollProps: OnScrollProps) {
    if (store.isPreventScroll) { return }
    const maxScroll = getMaxScroll()
    if ( !maxScroll ) { return }
    if ( store.isEnabled ) {
        store.setNextScrollPosition(Math.max(0, Math.min(store.currentScrollPosition + scrollProps.wheel, maxScroll)))
    } else {
        // requires for smoothscrollbar when smoothpage disabled
        window.scrollTo({ top: window.scrollY + scrollProps.wheel })
        // 
    }
}
function getMaxScroll(): number {
    if (!smoothpageBodyRef.value) { return 0 }
    const contentHeight = smoothpageBodyRef.value.getBoundingClientRect().height - window.innerHeight
    const contentWidth = smoothpageBodyRef.value.getBoundingClientRect().width - window.innerWidth
    if ( mergedSettings.mode === 'vertical' || mergedSettings.mode === 'vertical-reverse' ) {
        return contentHeight
    }
    if ( mergedSettings.mode === 'horizontal' || mergedSettings.mode === 'horizontal-reverse' ) {
        return contentWidth
    }
    return 0
}
useLoop(() => {
    if (store.isPreventScroll) { return }
    if (!store.isMounted) { return }
    if (store.isTriggeringScrollPosition) { return }
    if (mergedSettings.watchIsEnabledOn === 'load-resize') {
        store.setIsEnabled(getIsEnabled())
    }
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
        return window.innerWidth >= mergedSettings.minWidth
    }

    return store.deviceType === DeviceTypes.DESKTOP && window.innerWidth >= mergedSettings.minWidth
}
const style = computed(() => {
    if (store.isEnabled) {
        if (mergedSettings.mode === 'vertical') {
            return {
                transform: `translate3d(0, ${-store.currentScrollPosition}px, 0)`
            }
        }
        if (mergedSettings.mode === 'vertical-reverse') {
            return {
                transform: `translate3d(0, ${store.currentScrollPosition}px, 0)`
            }
        }
        if (mergedSettings.mode === 'horizontal') {
            return {
                transform: `translate3d(${-store.currentScrollPosition}px, 0, 0)`
            }
        }
        if (mergedSettings.mode === 'horizontal-reverse') {
            return {
                transform: `translate3d(${store.currentScrollPosition}px, 0, 0)`
            }
        }
    }
    return {}
})
</script>

<style src="./index.css"></style>