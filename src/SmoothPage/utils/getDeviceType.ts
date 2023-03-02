export type DeviceType = 'DESKTOP' | 'TABLET' | 'MOBILE'

export enum DeviceTypes {
    DESKTOP = 'DESKTOP',
    TABLET = 'TABLET',
    MOBILE = 'MOBILE'
}

export function getDeviceType(): DeviceType {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return DeviceTypes.TABLET;
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return DeviceTypes.MOBILE;
    }
    return DeviceTypes.DESKTOP
}