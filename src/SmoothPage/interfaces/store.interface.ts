import type { Ref } from "vue"
import type { SmoothPageSettings } from "./settings.interface"
import type { DeviceType } from "../utils/getDeviceType"
import type { BrowserType } from "../utils/getBrowser"

interface PrivateStore {
    settings: Ref<SmoothPageSettings | null>;
    currentScrollPosition: Ref<number>;
    isEnabled: Ref<boolean>;
    nextScrollPosition: Ref<number>;
    isTriggeringScrollPosition: Ref<boolean>;
    isMounted: Ref<boolean>;
    isInited: Ref<boolean>;
    isEarlierMounted: Ref<boolean>;
    deviceType: Ref<DeviceType>;
    needReload: Ref<boolean>;
    isDestroyedByUser: Ref<boolean>;
    browser: Ref<BrowserType>;
    isPreventScroll: Ref<boolean>;
    savedCurrentScrollPositionForDestroy: Ref<number>;
    setSettings: (value: SmoothPageSettings) => void;
    setCurrentScrollPosition: (value: number) => void;
    setIsEnabled: (value: boolean) => void;
    setNextScrollPosition: (value: number) => void;
    setIsTriggeringScrollPosition: (value: boolean) => void;
    setIsMounted: (value: boolean) => void;
    setIsInited: (value: boolean) => void;
    setIsEarlierMounted: (value: boolean) => void;
    setDeviceType: (value: DeviceType) => void;
    setNeedReload: (value: boolean) => void;
    setBrowser: (value: BrowserType) => void;
    preventScroll: (value: boolean) => void;
    setSavedCurrentScrollPositionForDestroy: (value: number) => void;
    reload: (resetPosition?: boolean) => void;
    destroy: (resetPosition?: boolean) => void;
    init: (resetPosition?: boolean) => void;
}

interface PublicStore {
    settings: Ref<SmoothPageSettings | null>;
    currentScrollPosition: Ref<number>;
    isEnabled: Ref<boolean>;
    isTriggeringScrollPosition: Ref<boolean>;
    isMounted: Ref<boolean>;
    isInited: Ref<boolean>;
    deviceType: Ref<DeviceType>;
    browser: Ref<BrowserType>;
    isPreventScroll: Ref<boolean>;
    preventScroll: (value: boolean) => void;
    reload: (resetPosition?: boolean) => void;
    destroy: (resetPosition?: boolean) => void;
    init: (resetPosition?: boolean) => void;
}

export type {
    PublicStore,
    PrivateStore
}