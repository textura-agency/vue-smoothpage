import type { SmoothPageSettings } from "../interfaces/settings.interface"

export const getSettingsWithDefaults = (settings: SmoothPageSettings | undefined) => {
    return {
        smoothness: settings?.smoothness || 0.075,
        wheelIntensity: settings?.wheelIntensity || 4,
        touchmoveIntensity: settings?.touchmoveIntensity || 4,
        minTouchmoveDistance: settings?.minTouchmoveDistance || 40,
        minWidth: settings?.minWidth || 0,
        renderDelay: settings?.renderDelay || 0,
        enableOnTouchDevices: settings?.enableOnTouchDevices || true,
        defaultClassNames: {
            smoothPage: settings?.defaultClassNames?.smoothPage || 't-smoothpage',
            smoothPageBody: settings?.defaultClassNames?.smoothPageBody || 't-smoothpage--body',
            smoothPageEnabled: settings?.defaultClassNames?.smoothPageEnabled || 't-smoothpage--enabled',
        },
        additionalClassNames: {
            smoothPage: settings?.additionalClassNames?.smoothPage || '',
            smoothPageBody: settings?.additionalClassNames?.smoothPageBody || '',
            smoothPageEnabled: settings?.additionalClassNames?.smoothPageEnabled || '',
        }
    }
}