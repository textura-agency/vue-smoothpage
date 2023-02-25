import { defineStore } from "pinia"
import { ref } from "vue"

export const useSmoothPageStore = defineStore('smoothPage', () => {
    const currentScrollPosition = ref<number>(0)
    const nextScrollPosition = ref<number>(0)
    const isTriggeringScrollPosition = ref<boolean>(false)
    const isEnabled = ref<boolean>(false)
    const setCurrentScrollPosition = (value: number): void => { currentScrollPosition.value = value }
    const setIsEnabled = (value: boolean): void => { isEnabled.value = value }
    const setNextScrollPosition = (value: number): void => { nextScrollPosition.value = value }
    const setIsTriggeringScrollPosition = (value: boolean): void => { isTriggeringScrollPosition.value = value }
    return { 
        currentScrollPosition,
        isEnabled,
        nextScrollPosition,
        isTriggeringScrollPosition,
        setCurrentScrollPosition,
        setIsEnabled,
        setNextScrollPosition,
        setIsTriggeringScrollPosition
    }
})