import DetectWheel from './detectWheel';
import DetectSwipe from './detectSwipe';
import type { DetectorSettings } from './detector.interface';

class Detector {
  swipe: any
  scroll: any
  keyboard: any

  callback

  constructor(dom: HTMLElement | Document, callback: any, settings: DetectorSettings) {
    if (!dom) { console.error('[Detector]: dom element is required'); return; }

    const settingsWithDefaults: DetectorSettings = {
      wheelIntensity: settings.wheelIntensity || 1,
      touchmoveIntensity: settings.touchmoveIntensity || 1,
      minTouchmoveDistance: settings.minTouchmoveDistance || 40
    }

    this.callback = callback || ( () => {} )
    this.scroll = new DetectWheel(dom, this.controlScroll.bind(this), settingsWithDefaults);
    this.swipe = new DetectSwipe(dom, this.controlScroll.bind(this), settingsWithDefaults);
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
