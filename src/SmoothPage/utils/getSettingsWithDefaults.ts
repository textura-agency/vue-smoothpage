import type { SmoothPageSettings, WatchIsEnabledOnType, ModeType, ScrollKeysType, PreventScrollKeysType } from "../interfaces/settings.interface"

export const getSettingsWithDefaults = (settings: SmoothPageSettings | undefined) => {
    return {
        mode: settings?.mode || dfs.mode as ModeType,
        smoothness: settings?.smoothness || dfs.smoothness,
        wheelIntensity: settings?.wheelIntensity || dfs.wheelIntensity,
        touchmoveIntensity: settings?.touchmoveIntensity || dfs.touchmoveIntensity,

        // experimental features
        safariWheelIntensity: settings?.safariWheelIntensity || settings?.wheelIntensity || dfs.wheelIntensity,
        safariTouchmoveIntensity: settings?.safariTouchmoveIntensity || settings?.touchmoveIntensity || dfs.wheelIntensity,
        chromeWheelIntensity: settings?.chromeWheelIntensity || settings?.wheelIntensity || dfs.wheelIntensity,
        chromeTouchmoveIntensity: settings?.chromeTouchmoveIntensity || settings?.touchmoveIntensity || dfs.wheelIntensity,
        operaWheelIntensity: settings?.operaWheelIntensity || settings?.wheelIntensity || dfs.wheelIntensity,
        operaTouchmoveIntensity: settings?.operaTouchmoveIntensity || settings?.touchmoveIntensity || dfs.wheelIntensity,
        edgeWheelIntensity: settings?.edgeWheelIntensity || settings?.wheelIntensity || dfs.wheelIntensity,
        edgeTouchmoveIntensity: settings?.edgeTouchmoveIntensity || settings?.touchmoveIntensity || dfs.wheelIntensity,
        mozillaWheelIntensity: settings?.mozillaWheelIntensity || settings?.wheelIntensity || dfs.wheelIntensity,
        mozillaTouchmoveIntensity: settings?.mozillaTouchmoveIntensity || settings?.touchmoveIntensity || dfs.wheelIntensity,
        // 

        watchIsEnabledOn: settings?.watchIsEnabledOn || dfs.watchIsEnabledOn as WatchIsEnabledOnType,
        minTouchmoveDistance: settings?.minTouchmoveDistance || dfs.minTouchmoveDistance,
        minWidth: settings?.minWidth || dfs.minWidth,
        renderDelay: settings?.renderDelay || dfs.renderDelay,
        enableOnTouchDevices: settings?.enableOnTouchDevices || dfs.enableOnTouchDevices,
        resetScrollPositionOnStateChanging: settings?.resetScrollPositionOnStateChanging || dfs.resetScrollPositionOnStateChanging,
        reloadPageOnStateChanging: settings?.reloadPageOnStateChanging || dfs.reloadPageOnStateChanging,

        enableScrollOnKeyboard: settings?.enableScrollOnKeyboard || dfs.enableScrollOnKeyboard, 
        scrollDownOnKeys: settings?.scrollDownOnKeys || dfs.scrollDownOnKeys as ScrollKeysType,
        scrollUpOnKeys: settings?.scrollUpOnKeys || dfs.scrollUpOnKeys as ScrollKeysType,
        scrollRightOnKeys: settings?.scrollRightOnKeys || dfs.scrollRightOnKeys as ScrollKeysType,
        scrollLeftOnKeys: settings?.scrollLeftOnKeys || dfs.scrollLeftOnKeys as ScrollKeysType,
        preventScrollOnHoldKeys: settings?.preventScrollOnHoldKeys || dfs.preventScrollOnHoldKeys as PreventScrollKeysType,

        defaultClassNames: {
            smoothPage: settings?.defaultClassNames?.smoothPage || dfs.defaultClassNames.smoothPage,
            smoothPageBody: settings?.defaultClassNames?.smoothPageBody || dfs.defaultClassNames.smoothPageBody,
            smoothPageEnabled: settings?.defaultClassNames?.smoothPageEnabled || dfs.defaultClassNames.smoothPageEnabled,
            smoothPageVertical: settings?.defaultClassNames?.smoothPageVertical || dfs.defaultClassNames.smoothPageVertical,
            smoothPageHorizontal: settings?.defaultClassNames?.smoothPageHorizontal || dfs.defaultClassNames.smoothPageHorizontal,
        },
        additionalClassNames: {
            smoothPage: settings?.additionalClassNames?.smoothPage || dfs.additionalClassNames.smoothPage,
            smoothPageBody: settings?.additionalClassNames?.smoothPageBody || dfs.additionalClassNames.smoothPageBody,
            smoothPageEnabled: settings?.additionalClassNames?.smoothPageEnabled || dfs.additionalClassNames.smoothPageEnabled,
            smoothPageVertical: settings?.additionalClassNames?.smoothPageVertical || dfs.additionalClassNames.smoothPageVertical,
            smoothPageHorizontal: settings?.additionalClassNames?.smoothPageHorizontal || dfs.additionalClassNames.smoothPageHorizontal,
        }
    }
}

const dfs = {
    mode: 'vertical',
    smoothness: 0.075,
    wheelIntensity: 4,
    touchmoveIntensity: 4,
    minTouchmoveDistance: 40,
    watchIsEnabledOn: 'load-resize',
    minWidth: 0,
    renderDelay: 0,
    enableOnTouchDevices: true,
    resetScrollPositionOnStateChanging: false,
    reloadPageOnStateChanging: false,
    enableScrollOnKeyboard: true,
    scrollUpOnKeys: [ { code: 38, distance: 100 } ],
    scrollDownOnKeys: [ { code: 40, distance: 100 }, { code: 32, distance: 200 } ],
    scrollLeftOnKeys: [ { code: 38, distance: 100 }, { code: 37, distance: 100 } ],
    scrollRightOnKeys: [ { code: 40, distance: 100 }, { code: 39, distance: 100 }, { code: 32, distance: 200 } ],
    preventScrollOnHoldKeys: [ { code: [ 16 ] } ],
    defaultClassNames: {
        smoothPage: 't-smoothpage',
        smoothPageBody: 't-smoothpage--body',
        smoothPageEnabled: 't-smoothpage--enabled',
        smoothPageVertical: 't-smoothpage--vertical',
        smoothPageHorizontal: 't-smoothpage--horizontal',
    },
    additionalClassNames: {
        smoothPage: '',
        smoothPageBody: '',
        smoothPageEnabled: '',
        smoothPageVertical: '',
        smoothPageHorizontal: '',
    }
}