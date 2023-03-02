var ee = Object.defineProperty;
var oe = (e, t, o) => t in e ? ee(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var d = (e, t, o) => (oe(e, typeof t != "symbol" ? t + "" : t, o), o), A = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var s = (e, t, o) => (A(e, t, "read from private field"), o ? o.call(e) : t.get(e)), D = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, G = (e, t, o, l) => (A(e, t, "write to private field"), l ? l.call(e, o) : t.set(e, o), o);
var E = (e, t, o) => (A(e, t, "access private method"), o);
import { ref as c, onMounted as $, onUnmounted as q, defineComponent as te, inject as ne, reactive as le, watchEffect as L, computed as S, openBlock as ae, createElementBlock as re, normalizeClass as U, createElementVNode as ie, normalizeStyle as se, unref as ce, renderSlot as he } from "vue";
import { defineStore as K } from "pinia";
class de {
  constructor(t, o, l) {
    d(this, "element");
    d(this, "cb");
    d(this, "settings");
    d(this, "listener", function(t) {
      typeof this.cb == "function" && t.deltaY && this.cb({
        dir: t.deltaY / Math.abs(t.deltaY),
        wheel: t.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = t, this.cb = o, this.settings = l, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var y, P, Y, X, p, B, N, x, _, F;
class ue {
  constructor(t, o, l) {
    D(this, Y);
    D(this, p);
    D(this, N);
    D(this, _);
    D(this, y, {
      sY: 0,
      eY: 0
    });
    d(this, "prevY", 0);
    D(this, P, void 0);
    d(this, "cb");
    d(this, "deltaY");
    d(this, "minDelta");
    d(this, "settings");
    this.cb = o, G(this, P, t), E(this, Y, X).call(this), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    s(this, P).removeEventListener("touchstart", E(this, p, B), !1), s(this, P).removeEventListener("touchmove", E(this, N, x), !1), s(this, P).removeEventListener("touchend", E(this, _, F), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
y = new WeakMap(), P = new WeakMap(), Y = new WeakSet(), X = function() {
  s(this, P).addEventListener("touchstart", E(this, p, B).bind(this), !1), s(this, P).addEventListener("touchmove", E(this, N, x).bind(this), !1), s(this, P).addEventListener("touchend", E(this, _, F).bind(this), !1);
}, p = new WeakSet(), B = function(t) {
  const o = t.touches[0];
  s(this, y).sY = o.screenY, this.prevY = s(this, y).sY, s(this, y).eY = s(this, y).sY;
}, N = new WeakSet(), x = function(t) {
  const o = t.touches[0];
  this.prevY = s(this, y).eY, s(this, y).eY = o.screenY, this.deltaY = s(this, y).sY - s(this, y).eY;
  const l = s(this, y).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (s(this, y).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, _ = new WeakSet(), F = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
var b = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(b || {});
const me = () => {
  const e = window.navigator.userAgent.toLowerCase();
  switch (!0) {
    case e.indexOf("edge") > -1:
      return "MS_EDGE";
    case e.indexOf("edg/") > -1:
      return "EDGE_CHROMIUM_BASED";
    case (e.indexOf("opr") > -1 && !!window.opr):
      return "OPERA";
    case (e.indexOf("chrome") > -1 && !!window.chrome):
      return "CHROME";
    case e.indexOf("trident") > -1:
      return "MS_IE";
    case e.indexOf("firefox") > -1:
      return "MOZILLA_FIREFOX";
    case e.indexOf("safari") > -1:
      return "SAFARI";
    default:
      return "OTHER";
  }
};
class ye {
  constructor(t, o, l, h) {
    d(this, "swipe");
    d(this, "scroll");
    d(this, "keyboard");
    d(this, "callback");
    if (!t) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const n = {
      wheelIntensity: l.wheelIntensity,
      touchmoveIntensity: l.touchmoveIntensity,
      minTouchmoveDistance: l.minTouchmoveDistance,
      safariWheelIntensity: l.safariWheelIntensity,
      safariTouchmoveIntensity: l.safariTouchmoveIntensity,
      chromeWheelIntensity: l.chromeWheelIntensity,
      chromeTouchmoveIntensity: l.chromeTouchmoveIntensity,
      operaWheelIntensity: l.operaWheelIntensity,
      operaTouchmoveIntensity: l.operaTouchmoveIntensity,
      edgeWheelIntensity: l.edgeWheelIntensity,
      edgeTouchmoveIntensity: l.edgeTouchmoveIntensity,
      mozillaWheelIntensity: l.mozillaWheelIntensity,
      mozillaTouchmoveIntensity: l.mozillaTouchmoveIntensity
    }, u = {
      wheelIntensity: I("WheelIntensity"),
      touchmoveIntensity: I("TouchmoveIntensity"),
      minTouchmoveDistance: n.minTouchmoveDistance
    };
    function I(m) {
      switch (h) {
        case b.SAFARI:
          return n[`safari${m}`];
        case b.CHROME:
          return n[`chrome${m}`];
        case b.OPERA:
          return n[`opera${m}`];
        case (b.MS_EDGE || b.EDGE_CHROMIUM_BASED):
          return n[`edge${m}`];
        case b.MOZILLA_FIREFOX:
          return n[`mozilla${m}`];
        default:
          return m === "WheelIntensity" ? n.wheelIntensity : n.touchmoveIntensity;
      }
    }
    this.callback = o || (() => {
    }), this.scroll = new de(t, this.controlScroll.bind(this), u), this.swipe = new ue(t, this.controlScroll.bind(this), u), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const fe = (e, t = 0) => {
  const o = c(!0), l = c(performance.now());
  $(() => h(0)), q(() => o.value = !1);
  function h(n) {
    o.value && (n - l.value > t && (e(), l.value = performance.now()), requestAnimationFrame(h));
  }
}, Ie = (e, t, o) => t === 0 && e < 0.1 ? 0 : e + (t - e) * o;
var k = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(k || {});
function ve() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const Z = K("privateSmoothPage", () => {
  const e = c(null), t = c(0), o = c(0), l = c(!1), h = c(!1), n = c(!1), u = c(!1), I = c(k.DESKTOP), m = c(b.OTHER), w = c(!1), O = c(!1), T = c(!1), M = c(0), f = (a) => {
    e.value = a;
  }, i = (a) => {
    t.value = a;
  }, C = (a) => {
    h.value = a;
  }, v = (a) => {
    o.value = a;
  }, W = (a) => {
    l.value = a;
  }, V = (a) => {
    n.value = a;
  }, j = (a) => {
    u.value = a;
  }, J = (a) => {
    I.value = a;
  }, Q = (a) => {
    m.value = a;
  }, H = (a) => {
    O.value = a;
  }, z = (a) => {
    w.value = a;
  }, g = (a) => {
    T.value = a;
  }, R = (a) => {
    M.value = a;
  };
  return {
    settings: e,
    currentScrollPosition: t,
    isEnabled: h,
    nextScrollPosition: o,
    isTriggeringScrollPosition: l,
    isMounted: n,
    isInited: u,
    deviceType: I,
    needReload: O,
    isDestroyedByUser: w,
    browser: m,
    isPreventScroll: T,
    savedCurrentScrollPositionForDestroy: M,
    setSettings: f,
    setCurrentScrollPosition: i,
    setIsEnabled: C,
    setNextScrollPosition: v,
    setIsTriggeringScrollPosition: W,
    setIsMounted: V,
    setIsInited: j,
    setDeviceType: J,
    setNeedReload: H,
    setBrowser: Q,
    preventScroll: g,
    setSavedCurrentScrollPositionForDestroy: R,
    reload: (a = !1) => {
      H(!0), a && (i(0), v(0), R(0));
    },
    destroy: (a = !1) => {
      z(!0), a && (i(0), v(0), R(0));
    },
    init: (a = !1) => {
      z(!1), a && (i(0), v(0), R(0));
    }
  };
}), Se = (e) => {
  var t, o, l, h, n, u;
  return {
    smoothness: (e == null ? void 0 : e.smoothness) || r.smoothness,
    wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || r.touchmoveIntensity,
    // experimental features
    safariWheelIntensity: (e == null ? void 0 : e.safariWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    safariTouchmoveIntensity: (e == null ? void 0 : e.safariTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || r.wheelIntensity,
    chromeWheelIntensity: (e == null ? void 0 : e.chromeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    chromeTouchmoveIntensity: (e == null ? void 0 : e.chromeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || r.wheelIntensity,
    operaWheelIntensity: (e == null ? void 0 : e.operaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    operaTouchmoveIntensity: (e == null ? void 0 : e.operaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || r.wheelIntensity,
    edgeWheelIntensity: (e == null ? void 0 : e.edgeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    edgeTouchmoveIntensity: (e == null ? void 0 : e.edgeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || r.wheelIntensity,
    mozillaWheelIntensity: (e == null ? void 0 : e.mozillaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || r.wheelIntensity,
    mozillaTouchmoveIntensity: (e == null ? void 0 : e.mozillaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || r.wheelIntensity,
    // 
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || r.minTouchmoveDistance,
    minWidth: (e == null ? void 0 : e.minWidth) || r.minWidth,
    renderDelay: (e == null ? void 0 : e.renderDelay) || r.renderDelay,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || r.enableOnTouchDevices,
    resetScrollPositionOnStateChanging: (e == null ? void 0 : e.resetScrollPositionOnStateChanging) || r.resetScrollPositionOnStateChanging,
    defaultClassNames: {
      smoothPage: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPage) || r.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || r.defaultClassNames.smoothPageBody,
      smoothPageEnabled: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageEnabled) || r.defaultClassNames.smoothPageEnabled
    },
    additionalClassNames: {
      smoothPage: ((h = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : h.smoothPage) || r.additionalClassNames.smoothPage,
      smoothPageBody: ((n = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : n.smoothPageBody) || r.additionalClassNames.smoothPageBody,
      smoothPageEnabled: ((u = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : u.smoothPageEnabled) || r.additionalClassNames.smoothPageEnabled
    }
  };
}, r = {
  smoothness: 0.075,
  wheelIntensity: 4,
  touchmoveIntensity: 4,
  minTouchmoveDistance: 40,
  minWidth: 0,
  renderDelay: 0,
  enableOnTouchDevices: !0,
  resetScrollPositionOnStateChanging: !1,
  defaultClassNames: {
    smoothPage: "t-smoothpage",
    smoothPageBody: "t-smoothpage--body",
    smoothPageEnabled: "t-smoothpage--enabled"
  },
  additionalClassNames: {
    smoothPage: "",
    smoothPageBody: "",
    smoothPageEnabled: ""
  }
}, Pe = /* @__PURE__ */ te({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const t = e, o = Z(), l = ne("smoothPageSettings"), h = Se(l), n = le({
      ...h,
      ...(t == null ? void 0 : t.settings) || {}
      //mb should de removed?
    });
    L(() => {
      o.setSettings(n);
    });
    const u = c(null), I = c(null);
    $(() => {
      o.setSettings(n), o.setDeviceType(ve()), o.setIsEnabled(T()), o.setBrowser(me()), o.setIsMounted(!0);
    }), q(() => {
      o.setIsMounted(!1);
    }), L(() => {
      if (o.isEnabled && !o.isInited) {
        m();
        return;
      }
      !o.isEnabled && o.isInited && w();
    });
    function m() {
      var f, i, C, v;
      n.defaultClassNames.smoothPageEnabled && ((i = (f = document.querySelector("html")) == null ? void 0 : f.classList) == null || i.add(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((v = (C = document.querySelector("html")) == null ? void 0 : C.classList) == null || v.add(n.additionalClassNames.smoothPageEnabled)), u.value = new ye(document, O, n, o.browser), n.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), o.setIsInited(!0), o.setNeedReload(!1);
    }
    function w() {
      var f, i, C, v, W;
      n.defaultClassNames.smoothPageEnabled && ((i = (f = document.querySelector("html")) == null ? void 0 : f.classList) == null || i.remove(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((v = (C = document.querySelector("html")) == null ? void 0 : C.classList) == null || v.remove(n.additionalClassNames.smoothPageEnabled)), (W = u.value) == null || W.destroy(), n.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), o.setIsInited(!1);
    }
    L(() => {
      o.needReload && w();
    });
    function O(f) {
      if (o.isPreventScroll || !I.value)
        return;
      const i = I.value.getBoundingClientRect().height - window.innerHeight;
      o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + f.wheel, i)));
    }
    fe(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (o.setIsEnabled(T()), o.isEnabled ? (o.setCurrentScrollPosition(Ie(o.currentScrollPosition, o.nextScrollPosition, n.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, n.renderDelay);
    function T() {
      return o.isDestroyedByUser ? !1 : (n.enableOnTouchDevices || o.deviceType === k.DESKTOP) && window.innerWidth >= n.minWidth;
    }
    const M = S(() => o.isEnabled ? {
      transform: `translate3d(0, ${-o.currentScrollPosition}px, 0)`
    } : {});
    return (f, i) => (ae(), re("div", {
      class: U([n.defaultClassNames.smoothPage, n.additionalClassNames.smoothPage])
    }, [
      ie("div", {
        ref_key: "contentRef",
        ref: I,
        style: se(ce(M)),
        class: U([n.defaultClassNames.smoothPageBody, n.additionalClassNames.smoothPageBody])
      }, [
        he(f.$slots, "default")
      ], 6)
    ], 2));
  }
});
const Oe = K("publicSmoothPage", () => {
  const e = Z(), t = S(() => e.settings), o = S(() => e.currentScrollPosition), l = S(() => e.isEnabled), h = S(() => e.isTriggeringScrollPosition), n = S(() => e.isMounted), u = S(() => e.isInited), I = S(() => e.deviceType), m = S(() => e.browser), w = S(() => e.isPreventScroll);
  return {
    settings: t,
    currentScrollPosition: o,
    isEnabled: l,
    isTriggeringScrollPosition: h,
    isMounted: n,
    isInited: u,
    deviceType: I,
    browser: m,
    isPreventScroll: w,
    preventScroll: (i) => e.preventScroll(i),
    reload: (i = !1) => e.reload(i),
    destroy: (i = !1) => e.destroy(i),
    init: (i = !1) => e.init(i)
  };
}), Me = {
  install(e, t) {
    e.component("SmoothPage", Pe), e.provide("smoothPageSettings", t || {});
  }
};
export {
  Pe as SmoothPage,
  Me as default,
  Oe as useSmoothPage
};
