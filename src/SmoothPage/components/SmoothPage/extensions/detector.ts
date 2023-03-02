import DetectWheel from './detectWheel';
import DetectSwipe from './detectSwipe';
import type { DetectorSettings, BrowserSettings } from './detector.interface';
import type { SmoothPageSettings } from '../../../interfaces/settings.interface';
import type { BrowserType } from '../../../utils/getBrowser';
import { BrowserTypes } from '../../../utils/getBrowser';

class Detector {
  swipe: any
  scroll: any
  keyboard: any

  callback

  constructor(dom: HTMLElement | Document, callback: any, settings: SmoothPageSettings, browser: BrowserType) {
    if (!dom) { console.error('[Detector]: dom element is required'); return; }

    const settingsWithDefaults: DetectorSettings = {
      wheelIntensity: settings.wheelIntensity as number,
      touchmoveIntensity: settings.touchmoveIntensity as number,
      minTouchmoveDistance: settings.minTouchmoveDistance as number,
      safariWheelIntensity: settings.safariWheelIntensity as number,
      safariTouchmoveIntensity: settings.safariTouchmoveIntensity as number,
      chromeWheelIntensity: settings.chromeWheelIntensity as number,
      chromeTouchmoveIntensity: settings.chromeTouchmoveIntensity as number,
      operaWheelIntensity: settings.operaWheelIntensity as number,
      operaTouchmoveIntensity: settings.operaTouchmoveIntensity as number,
      edgeWheelIntensity: settings.edgeWheelIntensity as number,
      edgeTouchmoveIntensity: settings.edgeTouchmoveIntensity as number,
      mozillaWheelIntensity: settings.mozillaWheelIntensity as number,
      mozillaTouchmoveIntensity: settings.mozillaTouchmoveIntensity as number,
    }

    // experimental features
    const browserSettings: BrowserSettings = {
      wheelIntensity: getBrowserValue('WheelIntensity'),
      touchmoveIntensity: getBrowserValue('TouchmoveIntensity'),
      minTouchmoveDistance: settingsWithDefaults.minTouchmoveDistance,
    }
    function getBrowserValue(prop: 'WheelIntensity' | 'TouchmoveIntensity') {
      switch (browser) {
        case BrowserTypes.SAFARI:
          return settingsWithDefaults[`safari${prop}`]
        case BrowserTypes.CHROME:
          return settingsWithDefaults[`chrome${prop}`]
        case BrowserTypes.OPERA:
          return settingsWithDefaults[`opera${prop}`]
        case BrowserTypes.MS_EDGE || BrowserTypes.EDGE_CHROMIUM_BASED:
          return settingsWithDefaults[`edge${prop}`]
        case BrowserTypes.MOZILLA_FIREFOX:
          return settingsWithDefaults[`mozilla${prop}`]
        default:
          if (prop === 'WheelIntensity') {
            return settingsWithDefaults.wheelIntensity
          }
          return settingsWithDefaults.touchmoveIntensity
      }
    }
    // 

    this.callback = callback || ( () => {} )
    this.scroll = new DetectWheel(dom, this.controlScroll.bind(this), browserSettings);
    this.swipe = new DetectSwipe(dom, this.controlScroll.bind(this), browserSettings);
    this.destroy = this.destroy.bind(this)
  }

  controlScroll(props: any) {
    this.callback(props)
  }

  destroy() {
    this.scroll.unsubscribe()
    this.swipe.destroy()
  }
}

export default Detector
