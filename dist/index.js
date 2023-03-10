var te = Object.defineProperty;
var ne = (e, t, o) => t in e ? te(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var d = (e, t, o) => (ne(e, typeof t != "symbol" ? t + "" : t, o), o), A = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var c = (e, t, o) => (A(e, t, "read from private field"), o ? o.call(e) : t.get(e)), T = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, G = (e, t, o, a) => (A(e, t, "write to private field"), a ? a.call(e, o) : t.set(e, o), o);
var E = (e, t, o) => (A(e, t, "access private method"), o);
import { ref as s, onMounted as $, onUnmounted as q, defineComponent as ae, inject as le, reactive as re, watchEffect as L, computed as S, openBlock as ie, createElementBlock as se, normalizeClass as U, createElementVNode as ce, normalizeStyle as he, unref as de, renderSlot as ue } from "vue";
import { defineStore as K } from "pinia";
class me {
  constructor(t, o, a) {
    d(this, "element");
    d(this, "cb");
    d(this, "settings");
    d(this, "listener", function(t) {
      typeof this.cb == "function" && t.deltaY && this.cb({
        dir: t.deltaY / Math.abs(t.deltaY),
        wheel: t.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = t, this.cb = o, this.settings = a, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var I, P, Y, X, N, B, _, x, W, F;
class ye {
  constructor(t, o, a) {
    T(this, Y);
    T(this, N);
    T(this, _);
    T(this, W);
    T(this, I, {
      sY: 0,
      eY: 0
    });
    d(this, "prevY", 0);
    T(this, P, void 0);
    d(this, "cb");
    d(this, "deltaY");
    d(this, "minDelta");
    d(this, "settings");
    this.cb = o, G(this, P, t), E(this, Y, X).call(this), this.settings = a, this.minDelta = a.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    c(this, P).removeEventListener("touchstart", E(this, N, B), !1), c(this, P).removeEventListener("touchmove", E(this, _, x), !1), c(this, P).removeEventListener("touchend", E(this, W, F), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
I = new WeakMap(), P = new WeakMap(), Y = new WeakSet(), X = function() {
  c(this, P).addEventListener("touchstart", E(this, N, B).bind(this), !1), c(this, P).addEventListener("touchmove", E(this, _, x).bind(this), !1), c(this, P).addEventListener("touchend", E(this, W, F).bind(this), !1);
}, N = new WeakSet(), B = function(t) {
  const o = t.touches[0];
  c(this, I).sY = o.screenY, this.prevY = c(this, I).sY, c(this, I).eY = c(this, I).sY;
}, _ = new WeakSet(), x = function(t) {
  const o = t.touches[0];
  this.prevY = c(this, I).eY, c(this, I).eY = o.screenY, this.deltaY = c(this, I).sY - c(this, I).eY;
  const a = c(this, I).sY - this.prevY;
  Math.abs(a) > Math.abs(this.deltaY) && (c(this, I).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, W = new WeakSet(), F = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
var b = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(b || {});
const Ie = () => {
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
class fe {
  constructor(t, o, a, h) {
    d(this, "swipe");
    d(this, "scroll");
    d(this, "keyboard");
    d(this, "callback");
    if (!t) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const n = {
      wheelIntensity: a.wheelIntensity,
      touchmoveIntensity: a.touchmoveIntensity,
      minTouchmoveDistance: a.minTouchmoveDistance,
      safariWheelIntensity: a.safariWheelIntensity,
      safariTouchmoveIntensity: a.safariTouchmoveIntensity,
      chromeWheelIntensity: a.chromeWheelIntensity,
      chromeTouchmoveIntensity: a.chromeTouchmoveIntensity,
      operaWheelIntensity: a.operaWheelIntensity,
      operaTouchmoveIntensity: a.operaTouchmoveIntensity,
      edgeWheelIntensity: a.edgeWheelIntensity,
      edgeTouchmoveIntensity: a.edgeTouchmoveIntensity,
      mozillaWheelIntensity: a.mozillaWheelIntensity,
      mozillaTouchmoveIntensity: a.mozillaTouchmoveIntensity
    }, u = {
      wheelIntensity: f("WheelIntensity"),
      touchmoveIntensity: f("TouchmoveIntensity"),
      minTouchmoveDistance: n.minTouchmoveDistance
    };
    function f(m) {
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
    }), this.scroll = new me(t, this.controlScroll.bind(this), u), this.swipe = new ye(t, this.controlScroll.bind(this), u), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const ve = (e, t = 0) => {
  const o = s(!0), a = s(performance.now());
  $(() => h(0)), q(() => o.value = !1);
  function h(n) {
    o.value && (n - a.value > t && (e(), a.value = performance.now()), requestAnimationFrame(h));
  }
}, Se = (e, t, o) => t === 0 && e < 0.1 ? 0 : e + (t - e) * o;
var k = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(k || {});
function Pe() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const Z = K("privateSmoothPage", () => {
  const e = s(null), t = s(0), o = s(0), a = s(!1), h = s(!1), n = s(!1), u = s(!1), f = s(!1), m = s(k.DESKTOP), w = s(b.OTHER), M = s(!1), D = s(!1), p = s(!1), y = s(0), i = (l) => {
    e.value = l;
  }, v = (l) => {
    t.value = l;
  }, C = (l) => {
    h.value = l;
  }, O = (l) => {
    o.value = l;
  }, V = (l) => {
    a.value = l;
  }, j = (l) => {
    n.value = l;
  }, J = (l) => {
    f.value = l;
  }, Q = (l) => {
    u.value = l;
  }, g = (l) => {
    m.value = l;
  }, ee = (l) => {
    w.value = l;
  }, H = (l) => {
    D.value = l;
  }, z = (l) => {
    M.value = l;
  }, oe = (l) => {
    p.value = l;
  }, R = (l) => {
    y.value = l;
  };
  return {
    settings: e,
    currentScrollPosition: t,
    isEnabled: h,
    nextScrollPosition: o,
    isTriggeringScrollPosition: a,
    isMounted: n,
    isInited: f,
    isEarlierMounted: u,
    deviceType: m,
    needReload: D,
    isDestroyedByUser: M,
    browser: w,
    isPreventScroll: p,
    savedCurrentScrollPositionForDestroy: y,
    setSettings: i,
    setCurrentScrollPosition: v,
    setIsEnabled: C,
    setNextScrollPosition: O,
    setIsTriggeringScrollPosition: V,
    setIsMounted: j,
    setIsInited: J,
    setIsEarlierMounted: Q,
    setDeviceType: g,
    setNeedReload: H,
    setBrowser: ee,
    preventScroll: oe,
    setSavedCurrentScrollPositionForDestroy: R,
    reload: (l = !1) => {
      H(!0), l && (v(0), O(0), R(0));
    },
    destroy: (l = !1) => {
      z(!0), l && (v(0), O(0), R(0));
    },
    init: (l = !1) => {
      z(!1), l && (v(0), O(0), R(0));
    }
  };
}), Ee = (e) => {
  var t, o, a, h, n, u;
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
    watchIsEnabledOn: (e == null ? void 0 : e.watchIsEnabledOn) || r.watchIsEnabledOn,
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || r.minTouchmoveDistance,
    minWidth: (e == null ? void 0 : e.minWidth) || r.minWidth,
    renderDelay: (e == null ? void 0 : e.renderDelay) || r.renderDelay,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || r.enableOnTouchDevices,
    resetScrollPositionOnStateChanging: (e == null ? void 0 : e.resetScrollPositionOnStateChanging) || r.resetScrollPositionOnStateChanging,
    reloadPageOnStateChanging: (e == null ? void 0 : e.reloadPageOnStateChanging) || r.reloadPageOnStateChanging,
    defaultClassNames: {
      smoothPage: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPage) || r.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || r.defaultClassNames.smoothPageBody,
      smoothPageEnabled: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPageEnabled) || r.defaultClassNames.smoothPageEnabled
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
  watchIsEnabledOn: "load-resize",
  minWidth: 0,
  renderDelay: 0,
  enableOnTouchDevices: !0,
  resetScrollPositionOnStateChanging: !1,
  reloadPageOnStateChanging: !1,
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
}, be = /* @__PURE__ */ ae({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const t = e, o = Z(), a = le("smoothPageSettings", void 0), h = Ee(a), n = re({
      ...h,
      ...(t == null ? void 0 : t.settings) || {}
      //mb should de removed?
    });
    L(() => {
      o.setSettings(n);
    });
    const u = s(null), f = s(null);
    $(() => {
      o.setSettings(n), o.setDeviceType(Pe()), o.setIsEnabled(D()), o.setBrowser(Ie()), o.setIsMounted(!0), setTimeout(() => o.setIsEarlierMounted(!0), 100);
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
      var y, i, v, C;
      n.defaultClassNames.smoothPageEnabled && ((i = (y = document.querySelector("html")) == null ? void 0 : y.classList) == null || i.add(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((C = (v = document.querySelector("html")) == null ? void 0 : v.classList) == null || C.add(n.additionalClassNames.smoothPageEnabled)), u.value = new fe(document, M, n, o.browser), n.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), o.setIsInited(!0), o.setNeedReload(!1), n.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function w() {
      var y, i, v, C, O;
      n.defaultClassNames.smoothPageEnabled && ((i = (y = document.querySelector("html")) == null ? void 0 : y.classList) == null || i.remove(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((C = (v = document.querySelector("html")) == null ? void 0 : v.classList) == null || C.remove(n.additionalClassNames.smoothPageEnabled)), (O = u.value) == null || O.destroy(), n.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), o.setIsInited(!1), n.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    L(() => {
      o.needReload && w();
    });
    function M(y) {
      if (o.isPreventScroll || !f.value)
        return;
      const i = f.value.getBoundingClientRect().height - window.innerHeight;
      o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + y.wheel, i)));
    }
    ve(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (n.watchIsEnabledOn === "load-resize" && o.setIsEnabled(D()), o.isEnabled ? (o.setCurrentScrollPosition(Se(o.currentScrollPosition, o.nextScrollPosition, n.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, n.renderDelay);
    function D() {
      return o.isDestroyedByUser ? !1 : (n.enableOnTouchDevices || o.deviceType === k.DESKTOP) && window.innerWidth >= n.minWidth;
    }
    const p = S(() => o.isEnabled ? {
      transform: `translate3d(0, ${-o.currentScrollPosition}px, 0)`
    } : {});
    return (y, i) => (ie(), se("div", {
      class: U([n.defaultClassNames.smoothPage, n.additionalClassNames.smoothPage])
    }, [
      ce("div", {
        ref_key: "contentRef",
        ref: f,
        style: he(de(p)),
        class: U([n.defaultClassNames.smoothPageBody, n.additionalClassNames.smoothPageBody])
      }, [
        ue(y.$slots, "default")
      ], 6)
    ], 2));
  }
});
const pe = K("publicSmoothPage", () => {
  const e = Z(), t = S(() => e.settings), o = S(() => e.currentScrollPosition), a = S(() => e.isEnabled), h = S(() => e.isTriggeringScrollPosition), n = S(() => e.isMounted), u = S(() => e.isInited), f = S(() => e.deviceType), m = S(() => e.browser), w = S(() => e.isPreventScroll);
  return {
    settings: t,
    currentScrollPosition: o,
    isEnabled: a,
    isTriggeringScrollPosition: h,
    isMounted: n,
    isInited: u,
    deviceType: f,
    browser: m,
    isPreventScroll: w,
    preventScroll: (i) => e.preventScroll(i),
    reload: (i = !1) => e.reload(i),
    destroy: (i = !1) => e.destroy(i),
    init: (i = !1) => e.init(i)
  };
}), Ne = {
  install(e, t) {
    e.component("SmoothPage", be), e.provide("smoothPageSettings", t || {});
  }
};
export {
  be as SmoothPage,
  Ne as default,
  pe as useSmoothPage
};
