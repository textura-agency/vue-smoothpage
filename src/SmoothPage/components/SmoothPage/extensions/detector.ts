import DetectWheel from './detectWheel';
import DetectSwipe from './detectSwipe';
import DetectKeyboard from './detectKeyboard';
import DetectShotcuts from './detectShortcuts';
import type { DetectorSettings, BrowserSettings, KeyboardSettings } from './detector.interface';
import type { SmoothPageSettings, ScrollKeysType, ModeType } from '../../../interfaces/settings.interface';
import type { BrowserType } from '../../../utils/getBrowser';
import { BrowserTypes } from '../../../utils/getBrowser';
import type { OnScrollProps } from './detector.interface';

class Detector {
  swipe: any
  scroll: any
  keyboard: any
  shotcuts: any

  isSubscribed: boolean = false
  settings: SmoothPageSettings
  callback

  constructor(dom: HTMLElement | Document, callback: (props: OnScrollProps) => void, settings: SmoothPageSettings, browser: BrowserType) {    

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

    const keyboardSettings: KeyboardSettings = {
      mode: settings.mode as ModeType,
      enableScrollOnKeyboard: settings.enableScrollOnKeyboard as boolean,
      scrollDownOnKeys: settings.scrollDownOnKeys as ScrollKeysType,
      scrollUpOnKeys: settings.scrollUpOnKeys as ScrollKeysType,
      scrollLeftOnKeys: settings.scrollLeftOnKeys as ScrollKeysType,
      scrollRightOnKeys: settings.scrollRightOnKeys as ScrollKeysType,
    }

    this.callback = callback
    this.settings = settings
    this.scroll = new DetectWheel(dom, this.controlScroll.bind(this), browserSettings);
    this.swipe = new DetectSwipe(dom, this.controlScroll.bind(this), browserSettings);
    this.keyboard = new DetectKeyboard(dom, this.controlScroll.bind(this), keyboardSettings);
    this.shotcuts = new DetectShotcuts(dom);
  }

  controlScroll(props: OnScrollProps) {
    if (!this.callback) { return }

    // detect hold keys
    // TODO: допилить эту логику через событие кейапа и дауна, чтобы избежать резкой промотки при отпускании клавиши
    let isAnyHolders = false
    this.settings.preventScrollOnHoldKeys?.forEach(_ => {
      let holdingKeysCount = 0
      _.code.forEach(key => {
        if (this.shotcuts.isHold(key)) { holdingKeysCount++ }
      })
      if (holdingKeysCount === _.code.length) { this.unsubscribe(); isAnyHolders = true }
    })
    console.log(isAnyHolders, this.isSubscribed)
    if (!isAnyHolders && !this.isSubscribed) { this.subscribe() }
    // 

    this.callback(props)
  }

  subscribe = function(this: Detector) {
    this.isSubscribed = true
    this.scroll.subscribe()
    this.swipe.subscribe()
    this.keyboard.subscribe()
  }.bind(this)
  unsubscribe = function(this: Detector) {
    this.isSubscribed = false
    this.scroll.unsubscribe()
    this.swipe.unsubscribe()
    this.keyboard.unsubscribe()
  }.bind(this)

  destroy = function(this: Detector) {
    this.scroll.unsubscribe()
    this.swipe.unsubscribe()
    this.keyboard.unsubscribe()
    this.shotcuts.unsubscribe()
  }.bind(this)
}

export default Detector
