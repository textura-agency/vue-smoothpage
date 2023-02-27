import { defineStore } from "pinia"
import { ref } from "vue"
import type { DeviceType } from '../utils/getDeviceType'

export const useSmoothPageStore = defineStore('privateSmoothPage', () => {
    const currentScrollPosition = ref<number>(0)
    const nextScrollPosition = ref<number>(0)
    const isTriggeringScrollPosition = ref<boolean>(false)
    const isEnabled = ref<boolean>(false)

    const isMounted = ref(false)
    const isInited = ref(false)
    const deviceType = ref<DeviceType>('desktop')

    const needReload = ref(false)

    const setCurrentScrollPosition = (value: number): void => { currentScrollPosition.value = value }
    const setIsEnabled = (value: boolean): void => { isEnabled.value = value }
    const setNextScrollPosition = (value: number): void => { nextScrollPosition.value = value }
    const setIsTriggeringScrollPosition = (value: boolean): void => { isTriggeringScrollPosition.value = value }
    
    const setIsMounted = (value: boolean): void => { isMounted.value = value }
    const setIsInited = (value: boolean): void => { isInited.value = value }
    const setDeviceType = (value: DeviceType): void => { deviceType.value = value }

    const setNeedReload = (value: boolean): void => { needReload.value = value }

    // todo: may be in next versions
    // const destroy = ( resetPosition: boolean = true ): void => {
    // }

    // todo: check warn about recurcion state
    const reload = ( resetPosition: boolean = false ): void => {
        setNeedReload(true)
        if (resetPosition) {
            setCurrentScrollPosition(0)
            setNextScrollPosition(0)
        }
    }

    // todo: may be in next versions
    // const init = (): void => {
    // }

    return { 
        currentScrollPosition,
        isEnabled,
        nextScrollPosition,
        isTriggeringScrollPosition,
        isMounted,
        isInited,
        deviceType,
        needReload,

        setCurrentScrollPosition,
        setIsEnabled,
        setNextScrollPosition,
        setIsTriggeringScrollPosition,
        setIsMounted,
        setIsInited,
        setDeviceType,
        setNeedReload,

        reload,
    }
})