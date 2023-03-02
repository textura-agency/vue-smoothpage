import { defineStore } from "pinia"
import { useSmoothPageStore } from "./private"
import { computed } from "vue"

// todo: fix reactivity public store problem
export const useSmoothPage = defineStore('publicSmoothPage', () => {
    const store = useSmoothPageStore()

    const settings = computed(() => store.settings)

    const currentScrollPosition = computed(() => store.currentScrollPosition)
    const isEnabled = computed(() => store.isEnabled)
    const isTriggeringScrollPosition = computed(() => store.isTriggeringScrollPosition)
    const isMounted = computed(() => store.isMounted)
    const isInited = computed(() => store.isInited)
    const deviceType = computed(() => store.deviceType)
    const browser = computed(() => store.browser)
    const isPreventScroll = computed(() => store.isPreventScroll)
    
    const preventScroll = (value: boolean): void => store.preventScroll(value)

    const reload = (resetPosition: boolean = false) => store.reload(resetPosition)
    const destroy = (resetPosition: boolean = false) => store.destroy(resetPosition)
    const init = (resetPosition: boolean = false) => store.init(resetPosition)


    return {
        settings,
        currentScrollPosition,
        isEnabled,
        isTriggeringScrollPosition,
        isMounted,
        isInited,
        deviceType,
        browser,
        isPreventScroll,
        preventScroll,
        reload,
        destroy,
        init
    }
})