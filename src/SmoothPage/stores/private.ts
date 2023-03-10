import { defineStore } from "pinia"
import { ref, watch } from "vue"
import type { DeviceType } from '../utils/getDeviceType'
import type { BrowserType } from "../utils/getBrowser"
import { BrowserTypes } from "../utils/getBrowser"
import { DeviceTypes } from "../utils/getDeviceType"
import type { SmoothPageSettings } from "../interfaces/settings.interface"

export const useSmoothPageStore = defineStore('privateSmoothPage', () => {

    const settings = ref<SmoothPageSettings | null>(null)

    const currentScrollPosition = ref<number>(0)
    const nextScrollPosition = ref<number>(0)
    const isTriggeringScrollPosition = ref<boolean>(false)
    const isEnabled = ref<boolean>(false)

    const isMounted = ref<boolean>(false)
    const isEarlierMounted = ref<boolean>(false)
    const isInited = ref<boolean>(false)
    const deviceType = ref<DeviceType>(DeviceTypes.DESKTOP)
    const browser = ref<BrowserType>(BrowserTypes.OTHER)

    const isDestroyedByUser = ref<boolean>(false)
    const needReload = ref<boolean>(false)

    const isPreventScroll = ref<boolean>(false)

    const savedCurrentScrollPositionForDestroy = ref<number>(0)

    const setSettings = (value: SmoothPageSettings): void => { settings.value = value }

    const setCurrentScrollPosition = (value: number): void => { currentScrollPosition.value = value }
    const setIsEnabled = (value: boolean): void => { isEnabled.value = value }
    const setNextScrollPosition = (value: number): void => { nextScrollPosition.value = value }
    const setIsTriggeringScrollPosition = (value: boolean): void => { isTriggeringScrollPosition.value = value }
    
    const setIsMounted = (value: boolean): void => { isMounted.value = value }
    const setIsInited = (value: boolean): void => { isInited.value = value }
    const setIsEarlierMounted = (value: boolean): void => { isEarlierMounted.value = value }
    const setDeviceType = (value: DeviceType): void => { deviceType.value = value }
    const setBrowser = (value: BrowserType): void => { browser.value = value }

    const setNeedReload = (value: boolean): void => { needReload.value = value }
    const setIsDestroyedByUser = (value: boolean): void => { isDestroyedByUser.value = value }

    const preventScroll = (value: boolean): void => { isPreventScroll.value = value }

    const setSavedCurrentScrollPositionForDestroy = (value: number): void => { savedCurrentScrollPositionForDestroy.value = value }

    const destroy = ( resetPosition: boolean = false ): void => {
        setIsDestroyedByUser(true)
        if (resetPosition) {
            setCurrentScrollPosition(0)
            setNextScrollPosition(0)
            setSavedCurrentScrollPositionForDestroy(0)
        }
    }
    const init = ( resetPosition: boolean = false ): void => {
        setIsDestroyedByUser(false)
        if (resetPosition) {
            setCurrentScrollPosition(0)
            setNextScrollPosition(0)
            setSavedCurrentScrollPositionForDestroy(0)
        }
    }

    const reload = ( resetPosition: boolean = false ): void => {
        setNeedReload(true)
        if (resetPosition) {
            setCurrentScrollPosition(0)
            setNextScrollPosition(0)
            setSavedCurrentScrollPositionForDestroy(0)
        }
    }

    return { 
        settings,

        currentScrollPosition,
        isEnabled,
        nextScrollPosition,
        isTriggeringScrollPosition,
        isMounted,
        isInited,
        isEarlierMounted,
        deviceType,
        needReload,
        isDestroyedByUser,
        browser,
        isPreventScroll,

        savedCurrentScrollPositionForDestroy,

        setSettings,

        setCurrentScrollPosition,
        setIsEnabled,
        setNextScrollPosition,
        setIsTriggeringScrollPosition,
        setIsMounted,
        setIsInited,
        setIsEarlierMounted,
        setDeviceType,
        setNeedReload,
        setBrowser,
        preventScroll,

        setSavedCurrentScrollPositionForDestroy,

        reload,
        destroy,
        init
    }
})