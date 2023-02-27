import { defineStore } from "pinia"
import { useSmoothPageStore } from "./private"

export const useSmoothPage = defineStore('publicSmoothPage', () => {
    const store = useSmoothPageStore()
    return { 
        currentScrollPosition: store.currentScrollPosition,
        isEnabled: store.isEnabled,
        isTriggeringScrollPosition: store.isTriggeringScrollPosition,
        isMounted: store.isMounted,
        isInited: store.isInited,
        deviceType: store.deviceType,
        
        reload: store.reload
    }
})