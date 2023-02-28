import { defineStore } from "pinia"
import { ref } from "vue"
import type { DeviceType } from '../utils/getDeviceType'

export const useSmoothPageStore = defineStore('privateSmoothPage', () => {
    const currentScrollPosition = ref<number>(0)
    const nextScrollPosition = ref<number>(0)
    const isTriggeringScrollPosition = ref<boolean>(false)
    const isEnabled = ref<boolean>(false)

    const isMounted = ref<boolean>(false)
    const isInited = ref<boolean>(false)
    const deviceType = ref<DeviceType>('desktop')

    const isDestroyedByUser = ref<boolean>(false)
    const needReload = ref<boolean>(false)

    const savedCurrentScrollPositionForDestroy = ref<number>(0)

    const setCurrentScrollPosition = (value: number): void => { currentScrollPosition.value = value }
    const setIsEnabled = (value: boolean): void => { isEnabled.value = value }
    const setNextScrollPosition = (value: number): void => { nextScrollPosition.value = value }
    const setIsTriggeringScrollPosition = (value: boolean): void => { isTriggeringScrollPosition.value = value }
    
    const setIsMounted = (value: boolean): void => { isMounted.value = value }
    const setIsInited = (value: boolean): void => { isInited.value = value }
    const setDeviceType = (value: DeviceType): void => { deviceType.value = value }

    const setNeedReload = (value: boolean): void => { needReload.value = value }
    const setIsDestroyedByUser = (value: boolean): void => { isDestroyedByUser.value = value }

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
        currentScrollPosition,
        isEnabled,
        nextScrollPosition,
        isTriggeringScrollPosition,
        isMounted,
        isInited,
        deviceType,
        needReload,
        isDestroyedByUser,

        savedCurrentScrollPositionForDestroy,

        setCurrentScrollPosition,
        setIsEnabled,
        setNextScrollPosition,
        setIsTriggeringScrollPosition,
        setIsMounted,
        setIsInited,
        setDeviceType,
        setNeedReload,

        setSavedCurrentScrollPositionForDestroy,

        reload,
        destroy,
        init
    }
})