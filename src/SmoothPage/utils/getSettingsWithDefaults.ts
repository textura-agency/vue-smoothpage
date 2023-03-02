import type { SmoothPageSettings } from "../interfaces/settings.interface"

export const getSettingsWithDefaults = (settings: SmoothPageSettings | undefined) => {
    return {
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

        minTouchmoveDistance: settings?.minTouchmoveDistance || dfs.minTouchmoveDistance,
        minWidth: settings?.minWidth || dfs.minWidth,
        renderDelay: settings?.renderDelay || dfs.renderDelay,
        enableOnTouchDevices: settings?.enableOnTouchDevices || dfs.enableOnTouchDevices,
        resetScrollPositionOnStateChanging: settings?.resetScrollPositionOnStateChanging || dfs.resetScrollPositionOnStateChanging,
        defaultClassNames: {
            smoothPage: settings?.defaultClassNames?.smoothPage || dfs.defaultClassNames.smoothPage,
            smoothPageBody: settings?.defaultClassNames?.smoothPageBody || dfs.defaultClassNames.smoothPageBody,
            smoothPageEnabled: settings?.defaultClassNames?.smoothPageEnabled || dfs.defaultClassNames.smoothPageEnabled,
        },
        additionalClassNames: {
            smoothPage: settings?.additionalClassNames?.smoothPage || dfs.additionalClassNames.smoothPage,
            smoothPageBody: settings?.additionalClassNames?.smoothPageBody || dfs.additionalClassNames.smoothPageBody,
            smoothPageEnabled: settings?.additionalClassNames?.smoothPageEnabled || dfs.additionalClassNames.smoothPageEnabled,
        }
    }
}

const dfs = {
    smoothness: 0.075,
    wheelIntensity: 4,
    touchmoveIntensity: 4,
    minTouchmoveDistance: 40,
    minWidth: 0,
    renderDelay: 0,
    enableOnTouchDevices: true,
    resetScrollPositionOnStateChanging: false,
    defaultClassNames: {
        smoothPage: 't-smoothpage',
        smoothPageBody: 't-smoothpage--body',
        smoothPageEnabled: 't-smoothpage--enabled',
    },
    additionalClassNames: {
        smoothPage: '',
        smoothPageBody: '',
        smoothPageEnabled: '',
    }
}