var oe = Object.defineProperty;
var ae = (e, l, o) => l in e ? oe(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[l] = o;
var n = (e, l, o) => (ae(e, typeof l != "symbol" ? l + "" : l, o), o), K = (e, l, o) => {
  if (!l.has(e))
    throw TypeError("Cannot " + o);
};
var u = (e, l, o) => (K(e, l, "read from private field"), o ? o.call(e) : l.get(e)), R = (e, l, o) => {
  if (l.has(e))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(e) : l.set(e, o);
}, x = (e, l, o, s) => (K(e, l, "write to private field"), s ? s.call(e, o) : l.set(e, o), o);
var p = (e, l, o) => (K(e, l, "access private method"), o);
import { ref as d, onMounted as U, onUnmounted as $, defineComponent as le, inject as se, reactive as te, watchEffect as M, computed as I, openBlock as ne, createElementBlock as re, normalizeClass as k, createElementVNode as F, normalizeStyle as ie, unref as ce, renderSlot as de } from "vue";
import { defineStore as G } from "pinia";
class he {
  constructor(l, o, s) {
    n(this, "element");
    n(this, "cb");
    n(this, "settings");
    n(this, "subscribe", function() {
      this.element.addEventListener("wheel", this.listener);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("wheel", this.listener);
    }.bind(this));
    n(this, "listener", function(l) {
      typeof this.cb == "function" && l.deltaY && this.cb({
        dir: l.deltaY / Math.abs(l.deltaY),
        wheel: l.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = l, this.cb = o, this.settings = s, this.subscribe();
  }
}
var b, S, D, B, z, W, H, V;
class me {
  constructor(l, o, s) {
    R(this, D);
    R(this, z);
    R(this, H);
    R(this, b, {
      sY: 0,
      eY: 0
    });
    n(this, "prevY", 0);
    R(this, S, void 0);
    n(this, "cb");
    n(this, "deltaY");
    n(this, "minDelta");
    n(this, "settings");
    n(this, "subscribe", function() {
      u(this, S).addEventListener("touchstart", p(this, D, B).bind(this), !1), u(this, S).addEventListener("touchmove", p(this, z, W).bind(this), !1), u(this, S).addEventListener("touchend", p(this, H, V).bind(this), !1);
    }.bind(this));
    n(this, "unsubscribe", function() {
      u(this, S).removeEventListener("touchstart", p(this, D, B), !1), u(this, S).removeEventListener("touchmove", p(this, z, W), !1), u(this, S).removeEventListener("touchend", p(this, H, V), !1);
    }.bind(this));
    this.cb = o, x(this, S, l), this.subscribe(), this.settings = s, this.minDelta = s.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.unsubscribe = this.unsubscribe.bind(this);
  }
  useCallback(l) {
    typeof this.cb == "function" && l && this.cb({
      dir: l / Math.abs(l),
      wheel: l * this.settings.touchmoveIntensity
    });
  }
}
b = new WeakMap(), S = new WeakMap(), D = new WeakSet(), B = function(l) {
  const o = l.touches[0];
  u(this, b).sY = o.screenY, this.prevY = u(this, b).sY, u(this, b).eY = u(this, b).sY;
}, z = new WeakSet(), W = function(l) {
  const o = l.touches[0];
  this.prevY = u(this, b).eY, u(this, b).eY = o.screenY, this.deltaY = u(this, b).sY - u(this, b).eY;
  const s = u(this, b).sY - this.prevY;
  Math.abs(s) > Math.abs(this.deltaY) && (u(this, b).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, H = new WeakSet(), V = function(l) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class ue {
  constructor(l, o, s) {
    n(this, "element");
    n(this, "callback");
    n(this, "settings");
    n(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.listener);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.listener);
    }.bind(this));
    n(this, "listener", function(l) {
      if (!this.settings.enableScrollOnKeyboard || typeof this.callback != "function")
        return;
      const o = l.keyCode;
      this.settings.mode === "vertical" || this.settings.mode === "vertical-reverse" ? (this.settings.scrollDownOnKeys.forEach((s) => {
        s.code === o && this.callback({ dir: 1, wheel: s.distance });
      }), this.settings.scrollUpOnKeys.forEach((s) => {
        s.code === o && this.callback({ dir: -1, wheel: s.distance * -1 });
      })) : (this.settings.mode === "horizontal" || this.settings.mode === "horizontal-reverse") && (this.settings.scrollRightOnKeys.forEach((s) => {
        s.code === o && this.callback({ dir: 1, wheel: s.distance });
      }), this.settings.scrollLeftOnKeys.forEach((s) => {
        s.code === o && this.callback({ dir: -1, wheel: s.distance * -1 });
      }));
    }.bind(this));
    this.element = l, this.callback = o, this.settings = s, this.subscribe();
  }
}
class fe {
  constructor(l, o) {
    n(this, "element");
    n(this, "pressed", {});
    n(this, "onKeys");
    n(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.keydown), this.element.addEventListener("keyup", this.keyup);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.keydown), this.element.removeEventListener("keyup", this.keyup);
    }.bind(this));
    n(this, "isHold", function(l) {
      return !!this.pressed[l];
    }.bind(this));
    n(this, "keydown", function(l) {
      const o = l.keyCode;
      this.pressed[o] || (this.pressed[o] = !0), this.onKeys();
    }.bind(this));
    n(this, "keyup", function(l) {
      const o = l.keyCode;
      this.pressed[o] && (this.pressed[o] = !1), this.onKeys();
    }.bind(this));
    this.element = l, this.onKeys = o, this.subscribe();
  }
  isHolding() {
  }
}
var N = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(N || {});
const ye = () => {
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
class ve {
  constructor(l, o, s, h) {
    n(this, "swipe");
    n(this, "scroll");
    n(this, "keyboard");
    n(this, "shotcuts");
    n(this, "isSubscribed", !1);
    n(this, "settings");
    n(this, "callback");
    n(this, "subscribe", function() {
      this.isSubscribed = !0, this.scroll.subscribe(), this.swipe.subscribe(), this.keyboard.subscribe();
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.isSubscribed = !1, this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe();
    }.bind(this));
    n(this, "destroy", function() {
      this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe(), this.shotcuts.unsubscribe();
    }.bind(this));
    const a = {
      wheelIntensity: s.wheelIntensity,
      touchmoveIntensity: s.touchmoveIntensity,
      minTouchmoveDistance: s.minTouchmoveDistance,
      safariWheelIntensity: s.safariWheelIntensity,
      safariTouchmoveIntensity: s.safariTouchmoveIntensity,
      chromeWheelIntensity: s.chromeWheelIntensity,
      chromeTouchmoveIntensity: s.chromeTouchmoveIntensity,
      operaWheelIntensity: s.operaWheelIntensity,
      operaTouchmoveIntensity: s.operaTouchmoveIntensity,
      edgeWheelIntensity: s.edgeWheelIntensity,
      edgeTouchmoveIntensity: s.edgeTouchmoveIntensity,
      mozillaWheelIntensity: s.mozillaWheelIntensity,
      mozillaTouchmoveIntensity: s.mozillaTouchmoveIntensity
    }, v = {
      wheelIntensity: f("WheelIntensity"),
      touchmoveIntensity: f("TouchmoveIntensity"),
      minTouchmoveDistance: a.minTouchmoveDistance
    };
    function f(m) {
      switch (h) {
        case N.SAFARI:
          return a[`safari${m}`];
        case N.CHROME:
          return a[`chrome${m}`];
        case N.OPERA:
          return a[`opera${m}`];
        case (N.MS_EDGE || N.EDGE_CHROMIUM_BASED):
          return a[`edge${m}`];
        case N.MOZILLA_FIREFOX:
          return a[`mozilla${m}`];
        default:
          return m === "WheelIntensity" ? a.wheelIntensity : a.touchmoveIntensity;
      }
    }
    const P = {
      mode: s.mode,
      enableScrollOnKeyboard: s.enableScrollOnKeyboard,
      scrollDownOnKeys: s.scrollDownOnKeys,
      scrollUpOnKeys: s.scrollUpOnKeys,
      scrollLeftOnKeys: s.scrollLeftOnKeys,
      scrollRightOnKeys: s.scrollRightOnKeys
    };
    this.callback = o, this.settings = s, this.scroll = new he(l, this.controlScroll.bind(this), v), this.swipe = new me(l, this.controlScroll.bind(this), v), this.keyboard = new ue(l, this.controlScroll.bind(this), P), this.shotcuts = new fe(l, this.onKeysHold.bind(this));
  }
  controlScroll(l) {
    this.callback && this.callback(l);
  }
  onKeysHold() {
    var o;
    let l = !1;
    (o = this.settings.preventScrollOnHoldKeys) == null || o.forEach((s) => {
      let h = 0;
      s.code.forEach((a) => {
        this.shotcuts.isHold(a) && h++;
      }), h === s.code.length && (this.unsubscribe(), l = !0);
    }), !l && !this.isSubscribed && this.subscribe();
  }
}
const be = (e, l = 0) => {
  const o = d(!0), s = d(performance.now());
  U(() => h(0)), $(() => o.value = !1);
  function h(a) {
    o.value && (a - s.value > l && (e(), s.value = performance.now()), requestAnimationFrame(h));
  }
}, Pe = (e, l, o) => l === 0 && e < 0.1 ? 0 : e + (l - e) * o;
var Y = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(Y || {});
function Ie() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const X = G("privateSmoothPage", () => {
  const e = d(null), l = d(0), o = d(0), s = d(!1), h = d(!1), a = d(!1), v = d(!1), f = d(!1), P = d(Y.DESKTOP), m = d(N.OTHER), C = d(!1), O = d(!1), w = d(!1), E = d(0), y = (r) => {
    e.value = r;
  }, c = (r) => {
    l.value = r;
  }, i = (r) => {
    h.value = r;
  }, L = (r) => {
    o.value = r;
  }, Z = (r) => {
    s.value = r;
  }, q = (r) => {
    a.value = r;
  }, j = (r) => {
    f.value = r;
  }, J = (r) => {
    v.value = r;
  }, Q = (r) => {
    P.value = r;
  }, g = (r) => {
    m.value = r;
  }, _ = (r) => {
    O.value = r;
  }, A = (r) => {
    C.value = r;
  }, ee = (r) => {
    w.value = r;
  }, T = (r) => {
    E.value = r;
  };
  return {
    settings: e,
    currentScrollPosition: l,
    isEnabled: h,
    nextScrollPosition: o,
    isTriggeringScrollPosition: s,
    isMounted: a,
    isInited: f,
    isEarlierMounted: v,
    deviceType: P,
    needReload: O,
    isDestroyedByUser: C,
    browser: m,
    isPreventScroll: w,
    savedCurrentScrollPositionForDestroy: E,
    setSettings: y,
    setCurrentScrollPosition: c,
    setIsEnabled: i,
    setNextScrollPosition: L,
    setIsTriggeringScrollPosition: Z,
    setIsMounted: q,
    setIsInited: j,
    setIsEarlierMounted: J,
    setDeviceType: Q,
    setNeedReload: _,
    setBrowser: g,
    preventScroll: ee,
    setSavedCurrentScrollPositionForDestroy: T,
    reload: (r = !1) => {
      _(!0), r && (c(0), L(0), T(0));
    },
    destroy: (r = !1) => {
      A(!0), r && (c(0), L(0), T(0));
    },
    init: (r = !1) => {
      A(!1), r && (c(0), L(0), T(0));
    }
  };
}), Se = (e) => {
  var l, o, s, h, a, v, f, P, m, C, O, w, E, y, c, i;
  return {
    mode: (e == null ? void 0 : e.mode) || t.mode,
    smoothness: (e == null ? void 0 : e.smoothness) || t.smoothness,
    wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || t.touchmoveIntensity,
    // experimental features
    safariWheelIntensity: (e == null ? void 0 : e.safariWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    safariTouchmoveIntensity: (e == null ? void 0 : e.safariTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || t.wheelIntensity,
    chromeWheelIntensity: (e == null ? void 0 : e.chromeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    chromeTouchmoveIntensity: (e == null ? void 0 : e.chromeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || t.wheelIntensity,
    operaWheelIntensity: (e == null ? void 0 : e.operaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    operaTouchmoveIntensity: (e == null ? void 0 : e.operaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || t.wheelIntensity,
    edgeWheelIntensity: (e == null ? void 0 : e.edgeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    edgeTouchmoveIntensity: (e == null ? void 0 : e.edgeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || t.wheelIntensity,
    mozillaWheelIntensity: (e == null ? void 0 : e.mozillaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || t.wheelIntensity,
    mozillaTouchmoveIntensity: (e == null ? void 0 : e.mozillaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || t.wheelIntensity,
    // 
    watchIsEnabledOn: (e == null ? void 0 : e.watchIsEnabledOn) || t.watchIsEnabledOn,
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || t.minTouchmoveDistance,
    minWidth: (e == null ? void 0 : e.minWidth) || t.minWidth,
    renderDelay: (e == null ? void 0 : e.renderDelay) || t.renderDelay,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || t.enableOnTouchDevices,
    resetScrollPositionOnStateChanging: (e == null ? void 0 : e.resetScrollPositionOnStateChanging) || t.resetScrollPositionOnStateChanging,
    reloadPageOnStateChanging: (e == null ? void 0 : e.reloadPageOnStateChanging) || t.reloadPageOnStateChanging,
    enableScrollOnKeyboard: (e == null ? void 0 : e.enableScrollOnKeyboard) || t.enableScrollOnKeyboard,
    scrollDownOnKeys: (e == null ? void 0 : e.scrollDownOnKeys) || t.scrollDownOnKeys,
    scrollUpOnKeys: (e == null ? void 0 : e.scrollUpOnKeys) || t.scrollUpOnKeys,
    scrollRightOnKeys: (e == null ? void 0 : e.scrollRightOnKeys) || t.scrollRightOnKeys,
    scrollLeftOnKeys: (e == null ? void 0 : e.scrollLeftOnKeys) || t.scrollLeftOnKeys,
    preventScrollOnHoldKeys: (e == null ? void 0 : e.preventScrollOnHoldKeys) || t.preventScrollOnHoldKeys,
    defaultClassNames: {
      smoothPage: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPage) || t.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || t.defaultClassNames.smoothPageBody,
      smoothPageBodyPosition: ((s = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : s.smoothPageBodyPosition) || t.defaultClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((h = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : h.smoothPageEnabled) || t.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPageVertical) || t.defaultClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((v = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : v.smoothPageVerticalReverse) || t.defaultClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((f = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : f.smoothPageHorizontal) || t.defaultClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((P = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : P.smoothPageHorizontalReverse) || t.defaultClassNames.smoothPageHorizontalReverse
    },
    additionalClassNames: {
      smoothPage: ((m = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : m.smoothPage) || t.additionalClassNames.smoothPage,
      smoothPageBody: ((C = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : C.smoothPageBody) || t.additionalClassNames.smoothPageBody,
      smoothPageBodyPosition: ((O = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : O.smoothPageBodyPosition) || t.additionalClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((w = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : w.smoothPageEnabled) || t.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((E = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : E.smoothPageVertical) || t.additionalClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((y = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : y.smoothPageVerticalReverse) || t.additionalClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((c = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : c.smoothPageHorizontal) || t.additionalClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((i = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : i.smoothPageHorizontalReverse) || t.additionalClassNames.smoothPageHorizontalReverse
    }
  };
}, t = {
  mode: "vertical",
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
  enableScrollOnKeyboard: !0,
  scrollUpOnKeys: [{ code: 38, distance: 100 }],
  scrollDownOnKeys: [{ code: 40, distance: 100 }, { code: 32, distance: 200 }],
  scrollLeftOnKeys: [{ code: 38, distance: 100 }, { code: 37, distance: 100 }],
  scrollRightOnKeys: [{ code: 40, distance: 100 }, { code: 39, distance: 100 }, { code: 32, distance: 200 }],
  preventScrollOnHoldKeys: [{ code: [16] }],
  defaultClassNames: {
    smoothPage: "t-smoothpage",
    smoothPageBody: "t-smoothpage--body",
    smoothPageBodyPosition: "t-smoothpage--body-position",
    smoothPageEnabled: "t-smoothpage--enabled",
    smoothPageVertical: "t-smoothpage--vertical",
    smoothPageVerticalReverse: "t-smoothpage--vertical-reverse",
    smoothPageHorizontal: "t-smoothpage--horizontal",
    smoothPageHorizontalReverse: "t-smoothpage--horizontal-reverse"
  },
  additionalClassNames: {
    smoothPage: "",
    smoothPageBody: "",
    smoothPageBodyPosition: "",
    smoothPageEnabled: "",
    smoothPageVertical: "",
    smoothPageVerticalReverse: "",
    smoothPageHorizontal: "",
    smoothPageHorizontalReverse: ""
  }
}, Ce = /* @__PURE__ */ le({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const l = e, o = X(), s = se("smoothPageSettings", void 0), h = Se(s), a = te({
      ...h,
      ...(l == null ? void 0 : l.settings) || {}
      //mb should de removed?
    });
    M(() => {
      o.setSettings(a);
    });
    const v = d(null), f = d(null);
    U(() => {
      o.setSettings(a), o.setDeviceType(Ie()), o.setIsEnabled(E()), o.setBrowser(ye()), o.setIsMounted(!0), setTimeout(() => o.setIsEarlierMounted(!0), 100);
    }), $(() => {
      o.setIsMounted(!1);
    }), M(() => {
      o.isEnabled && !o.isInited ? P() : !o.isEnabled && o.isInited && m();
    });
    function P() {
      v.value = new ve(document, O, a, o.browser), a.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), a.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!0), o.setNeedReload(!1), C(!0);
    }
    function m() {
      var c;
      (c = v.value) == null || c.destroy(), a.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), a.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!1), C(!1);
    }
    function C(c) {
      const i = document.querySelector("html");
      if (i) {
        if (c) {
          a.defaultClassNames.smoothPageEnabled && i.classList.add(a.defaultClassNames.smoothPageEnabled), a.additionalClassNames.smoothPageEnabled && i.classList.add(a.additionalClassNames.smoothPageEnabled), a.mode === "vertical" ? (a.defaultClassNames.smoothPageVertical && i.classList.add(a.defaultClassNames.smoothPageVertical), a.additionalClassNames.smoothPageVertical && i.classList.add(a.additionalClassNames.smoothPageVertical)) : a.mode === "vertical-reverse" ? (a.defaultClassNames.smoothPageVerticalReverse && i.classList.add(a.defaultClassNames.smoothPageVerticalReverse), a.additionalClassNames.smoothPageVerticalReverse && i.classList.add(a.additionalClassNames.smoothPageVerticalReverse)) : a.mode === "horizontal" ? (a.defaultClassNames.smoothPageHorizontal && i.classList.add(a.defaultClassNames.smoothPageHorizontal), a.additionalClassNames.smoothPageHorizontal && i.classList.add(a.additionalClassNames.smoothPageHorizontal)) : a.mode === "horizontal-reverse" && (a.defaultClassNames.smoothPageHorizontalReverse && i.classList.add(a.defaultClassNames.smoothPageHorizontalReverse), a.additionalClassNames.smoothPageHorizontalReverse && i.classList.add(a.additionalClassNames.smoothPageHorizontalReverse));
          return;
        }
        a.defaultClassNames.smoothPageEnabled && i.classList.remove(a.defaultClassNames.smoothPageEnabled), a.additionalClassNames.smoothPageEnabled && i.classList.remove(a.additionalClassNames.smoothPageEnabled), a.mode === "vertical" ? (a.defaultClassNames.smoothPageVertical && i.classList.remove(a.defaultClassNames.smoothPageVertical), a.additionalClassNames.smoothPageVertical && i.classList.remove(a.additionalClassNames.smoothPageVertical)) : a.mode === "vertical-reverse" ? (a.defaultClassNames.smoothPageVerticalReverse && i.classList.remove(a.defaultClassNames.smoothPageVerticalReverse), a.additionalClassNames.smoothPageVerticalReverse && i.classList.remove(a.additionalClassNames.smoothPageVerticalReverse)) : a.mode === "horizontal" ? (a.defaultClassNames.smoothPageHorizontal && i.classList.remove(a.defaultClassNames.smoothPageHorizontal), a.additionalClassNames.smoothPageHorizontal && i.classList.remove(a.additionalClassNames.smoothPageHorizontal)) : a.mode === "horizontal-reverse" && (a.defaultClassNames.smoothPageHorizontalReverse && i.classList.remove(a.defaultClassNames.smoothPageHorizontalReverse), a.additionalClassNames.smoothPageHorizontalReverse && i.classList.remove(a.additionalClassNames.smoothPageHorizontalReverse));
      }
    }
    M(() => {
      o.needReload && m();
    });
    function O(c) {
      if (o.isPreventScroll)
        return;
      const i = w();
      i && o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + c.wheel, i)));
    }
    function w() {
      if (!f.value)
        return 0;
      const c = f.value.getBoundingClientRect().height - window.innerHeight, i = f.value.getBoundingClientRect().width - window.innerWidth;
      return a.mode === "vertical" || a.mode === "vertical-reverse" ? c : a.mode === "horizontal" || a.mode === "horizontal-reverse" ? i : 0;
    }
    be(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (a.watchIsEnabledOn === "load-resize" && o.setIsEnabled(E()), o.isEnabled ? (o.setCurrentScrollPosition(Pe(o.currentScrollPosition, o.nextScrollPosition, a.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, a.renderDelay);
    function E() {
      return o.isDestroyedByUser ? !1 : (a.enableOnTouchDevices || o.deviceType === Y.DESKTOP) && window.innerWidth >= a.minWidth;
    }
    const y = I(() => {
      if (o.isEnabled) {
        if (a.mode === "vertical")
          return {
            transform: `translate3d(0, ${-o.currentScrollPosition}px, 0)`
          };
        if (a.mode === "vertical-reverse")
          return {
            transform: `translate3d(0, ${o.currentScrollPosition}px, 0)`
          };
        if (a.mode === "horizontal")
          return {
            transform: `translate3d(${-o.currentScrollPosition}px, 0, 0)`
          };
        if (a.mode === "horizontal-reverse")
          return {
            transform: `translate3d(${o.currentScrollPosition}px, 0, 0)`
          };
      }
      return {};
    });
    return (c, i) => (ne(), re("div", {
      class: k([a.defaultClassNames.smoothPage, a.additionalClassNames.smoothPage])
    }, [
      F("div", {
        ref_key: "contentRef",
        ref: f,
        style: ie(ce(y)),
        class: k([a.defaultClassNames.smoothPageBody, a.additionalClassNames.smoothPageBody])
      }, [
        F("div", {
          class: k([a.defaultClassNames.smoothPageBodyPosition, a.additionalClassNames.smoothPageBodyPosition])
        }, [
          de(c.$slots, "default")
        ], 2)
      ], 6)
    ], 2));
  }
});
const De = G("publicSmoothPage", () => {
  const e = X(), l = I(() => e.settings), o = I(() => e.currentScrollPosition), s = I(() => e.isEnabled), h = I(() => e.isTriggeringScrollPosition), a = I(() => e.isMounted), v = I(() => e.isInited), f = I(() => e.deviceType), P = I(() => e.browser), m = I(() => e.isPreventScroll);
  return {
    settings: l,
    currentScrollPosition: o,
    isEnabled: s,
    isTriggeringScrollPosition: h,
    isMounted: a,
    isInited: v,
    deviceType: f,
    browser: P,
    isPreventScroll: m,
    preventScroll: (y) => e.preventScroll(y),
    reload: (y = !1) => e.reload(y),
    destroy: (y = !1) => e.destroy(y),
    init: (y = !1) => e.init(y)
  };
}), ze = {
  install(e, l) {
    e.component("SmoothPage", Ce), e.provide("smoothPageSettings", l || {});
  }
};
export {
  Ce as SmoothPage,
  ze as default,
  De as useSmoothPage
};
