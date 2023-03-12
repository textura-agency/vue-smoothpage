var te = Object.defineProperty;
var re = (e, l, o) => l in e ? te(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[l] = o;
var r = (e, l, o) => (re(e, typeof l != "symbol" ? l + "" : l, o), o), K = (e, l, o) => {
  if (!l.has(e))
    throw TypeError("Cannot " + o);
};
var m = (e, l, o) => (K(e, l, "read from private field"), o ? o.call(e) : l.get(e)), R = (e, l, o) => {
  if (l.has(e))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(e) : l.set(e, o);
}, F = (e, l, o, s) => (K(e, l, "write to private field"), s ? s.call(e, o) : l.set(e, o), o);
var p = (e, l, o) => (K(e, l, "access private method"), o);
import { ref as d, onMounted as G, onUnmounted as X, defineComponent as Z, openBlock as _, createElementBlock as q, inject as ne, watchEffect as M, computed as S, normalizeClass as k, createElementVNode as U, normalizeStyle as ie, unref as $, renderSlot as ce, createBlock as de, createCommentVNode as he } from "vue";
import { defineStore as j } from "pinia";
class me {
  constructor(l, o, s) {
    r(this, "element");
    r(this, "cb");
    r(this, "settings");
    r(this, "subscribe", function() {
      this.element.addEventListener("wheel", this.listener);
    }.bind(this));
    r(this, "unsubscribe", function() {
      this.element.removeEventListener("wheel", this.listener);
    }.bind(this));
    r(this, "listener", function(l) {
      typeof this.cb == "function" && l.deltaY && this.cb({
        dir: l.deltaY / Math.abs(l.deltaY),
        wheel: l.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = l, this.cb = o, this.settings = s, this.subscribe();
  }
}
var v, C, D, B, z, W, H, V;
class ue {
  constructor(l, o, s) {
    R(this, D);
    R(this, z);
    R(this, H);
    R(this, v, {
      sY: 0,
      eY: 0
    });
    r(this, "prevY", 0);
    R(this, C, void 0);
    r(this, "cb");
    r(this, "deltaY");
    r(this, "minDelta");
    r(this, "settings");
    r(this, "subscribe", function() {
      m(this, C).addEventListener("touchstart", p(this, D, B).bind(this), !1), m(this, C).addEventListener("touchmove", p(this, z, W).bind(this), !1), m(this, C).addEventListener("touchend", p(this, H, V).bind(this), !1);
    }.bind(this));
    r(this, "unsubscribe", function() {
      m(this, C).removeEventListener("touchstart", p(this, D, B), !1), m(this, C).removeEventListener("touchmove", p(this, z, W), !1), m(this, C).removeEventListener("touchend", p(this, H, V), !1);
    }.bind(this));
    this.cb = o, F(this, C, l), this.subscribe(), this.settings = s, this.minDelta = s.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.unsubscribe = this.unsubscribe.bind(this);
  }
  useCallback(l) {
    typeof this.cb == "function" && l && this.cb({
      dir: l / Math.abs(l),
      wheel: l * this.settings.touchmoveIntensity
    });
  }
}
v = new WeakMap(), C = new WeakMap(), D = new WeakSet(), B = function(l) {
  const o = l.touches[0];
  m(this, v).sY = o.screenY, this.prevY = m(this, v).sY, m(this, v).eY = m(this, v).sY;
}, z = new WeakSet(), W = function(l) {
  const o = l.touches[0];
  this.prevY = m(this, v).eY, m(this, v).eY = o.screenY, this.deltaY = m(this, v).sY - m(this, v).eY;
  const s = m(this, v).sY - this.prevY;
  Math.abs(s) > Math.abs(this.deltaY) && (m(this, v).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, H = new WeakSet(), V = function(l) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class fe {
  constructor(l, o, s) {
    r(this, "element");
    r(this, "callback");
    r(this, "settings");
    r(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.listener);
    }.bind(this));
    r(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.listener);
    }.bind(this));
    r(this, "listener", function(l) {
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
class be {
  constructor(l, o) {
    r(this, "element");
    r(this, "pressed", {});
    r(this, "onKeys");
    r(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.keydown), this.element.addEventListener("keyup", this.keyup);
    }.bind(this));
    r(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.keydown), this.element.removeEventListener("keyup", this.keyup);
    }.bind(this));
    r(this, "isHold", function(l) {
      return !!this.pressed[l];
    }.bind(this));
    r(this, "keydown", function(l) {
      const o = l.keyCode;
      this.pressed[o] || (this.pressed[o] = !0), this.onKeys();
    }.bind(this));
    r(this, "keyup", function(l) {
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
  constructor(l, o, s, u) {
    r(this, "swipe");
    r(this, "scroll");
    r(this, "keyboard");
    r(this, "shotcuts");
    r(this, "isSubscribed", !1);
    r(this, "settings");
    r(this, "callback");
    r(this, "subscribe", function() {
      this.isSubscribed = !0, this.scroll.subscribe(), this.swipe.subscribe(), this.keyboard.subscribe();
    }.bind(this));
    r(this, "unsubscribe", function() {
      this.isSubscribed = !1, this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe();
    }.bind(this));
    r(this, "destroy", function() {
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
    }, y = {
      wheelIntensity: f("WheelIntensity"),
      touchmoveIntensity: f("TouchmoveIntensity"),
      minTouchmoveDistance: a.minTouchmoveDistance
    };
    function f(h) {
      switch (u) {
        case N.SAFARI:
          return a[`safari${h}`];
        case N.CHROME:
          return a[`chrome${h}`];
        case N.OPERA:
          return a[`opera${h}`];
        case (N.MS_EDGE || N.EDGE_CHROMIUM_BASED):
          return a[`edge${h}`];
        case N.MOZILLA_FIREFOX:
          return a[`mozilla${h}`];
        default:
          return h === "WheelIntensity" ? a.wheelIntensity : a.touchmoveIntensity;
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
    this.callback = o, this.settings = s, this.scroll = new me(l, this.controlScroll.bind(this), y), this.swipe = new ue(l, this.controlScroll.bind(this), y), this.keyboard = new fe(l, this.controlScroll.bind(this), P), this.shotcuts = new be(l, this.onKeysHold.bind(this));
  }
  controlScroll(l) {
    this.callback && this.callback(l);
  }
  onKeysHold() {
    var o;
    let l = !1;
    (o = this.settings.preventScrollOnHoldKeys) == null || o.forEach((s) => {
      let u = 0;
      s.code.forEach((a) => {
        this.shotcuts.isHold(a) && u++;
      }), u === s.code.length && (this.unsubscribe(), l = !0);
    }), !l && !this.isSubscribed && this.subscribe();
  }
}
const Pe = (e, l = 0) => {
  const o = d(!0), s = d(performance.now());
  G(() => u(0)), X(() => o.value = !1);
  function u(a) {
    o.value && (a - s.value > l && (e(), s.value = performance.now()), requestAnimationFrame(u));
  }
}, Se = (e, l, o) => l === 0 && e < 0.1 ? 0 : e + (l - e) * o;
var x = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(x || {});
function Ce() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const J = j("privateSmoothPage", () => {
  const e = d(null), l = d(0), o = d(0), s = d(!1), u = d(!1), a = d(!1), y = d(!1), f = d(!1), P = d(x.DESKTOP), h = d(N.OTHER), I = d(!1), O = d(!1), w = d(!1), E = d(0), b = (n) => {
    e.value = n;
  }, c = (n) => {
    l.value = n;
  }, i = (n) => {
    u.value = n;
  }, L = (n) => {
    o.value = n;
  }, Q = (n) => {
    s.value = n;
  }, g = (n) => {
    a.value = n;
  }, ee = (n) => {
    f.value = n;
  }, oe = (n) => {
    y.value = n;
  }, ae = (n) => {
    P.value = n;
  }, le = (n) => {
    h.value = n;
  }, Y = (n) => {
    O.value = n;
  }, A = (n) => {
    I.value = n;
  }, se = (n) => {
    w.value = n;
  }, T = (n) => {
    E.value = n;
  };
  return {
    settings: e,
    currentScrollPosition: l,
    isEnabled: u,
    nextScrollPosition: o,
    isTriggeringScrollPosition: s,
    isMounted: a,
    isInited: f,
    isEarlierMounted: y,
    deviceType: P,
    needReload: O,
    isDestroyedByUser: I,
    browser: h,
    isPreventScroll: w,
    savedCurrentScrollPositionForDestroy: E,
    setSettings: b,
    setCurrentScrollPosition: c,
    setIsEnabled: i,
    setNextScrollPosition: L,
    setIsTriggeringScrollPosition: Q,
    setIsMounted: g,
    setIsInited: ee,
    setIsEarlierMounted: oe,
    setDeviceType: ae,
    setNeedReload: Y,
    setBrowser: le,
    preventScroll: se,
    setSavedCurrentScrollPositionForDestroy: T,
    reload: (n = !1) => {
      Y(!0), n && (c(0), L(0), T(0));
    },
    destroy: (n = !1) => {
      A(!0), n && (c(0), L(0), T(0));
    },
    init: (n = !1) => {
      A(!1), n && (c(0), L(0), T(0));
    }
  };
}), Ie = { class: "t-smoothpage--scrollbar" }, Ee = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    settings: null,
    store: null
  },
  setup(e) {
    return (l, o) => (_(), q("div", Ie));
  }
});
const Oe = (e) => {
  var l, o, s, u, a, y, f, P, h, I, O, w, E, b, c, i;
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
    enableScrollbar: (e == null ? void 0 : e.enableScrollbar) || t.enableScrollbar,
    scrollbarComponent: (e == null ? void 0 : e.scrollbarComponent) || t.scrollbarComponent,
    scrollbarProps: (e == null ? void 0 : e.scrollbarProps) || t.scrollbarProps,
    defaultClassNames: {
      smoothPage: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPage) || t.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || t.defaultClassNames.smoothPageBody,
      smoothPageBodyPosition: ((s = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : s.smoothPageBodyPosition) || t.defaultClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((u = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : u.smoothPageEnabled) || t.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPageVertical) || t.defaultClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((y = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : y.smoothPageVerticalReverse) || t.defaultClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((f = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : f.smoothPageHorizontal) || t.defaultClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((P = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : P.smoothPageHorizontalReverse) || t.defaultClassNames.smoothPageHorizontalReverse
    },
    additionalClassNames: {
      smoothPage: ((h = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : h.smoothPage) || t.additionalClassNames.smoothPage,
      smoothPageBody: ((I = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : I.smoothPageBody) || t.additionalClassNames.smoothPageBody,
      smoothPageBodyPosition: ((O = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : O.smoothPageBodyPosition) || t.additionalClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((w = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : w.smoothPageEnabled) || t.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((E = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : E.smoothPageVertical) || t.additionalClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((b = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : b.smoothPageVerticalReverse) || t.additionalClassNames.smoothPageVerticalReverse,
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
  enableScrollbar: !0,
  scrollbarComponent: Ee,
  scrollbarProps: {},
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
}, we = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const l = e, o = J(), s = ne("smoothPageSettings", void 0), a = {
      ...Oe(s),
      ...(l == null ? void 0 : l.settings) || {}
      //mb should de removed?
    };
    M(() => {
      o.setSettings(a);
    });
    const y = d(null), f = d(null);
    G(() => {
      o.setSettings(a), o.setDeviceType(Ce()), o.setIsEnabled(E()), o.setBrowser(ye()), o.setIsMounted(!0), setTimeout(() => o.setIsEarlierMounted(!0), 100);
    }), X(() => {
      o.setIsMounted(!1);
    }), M(() => {
      o.isEnabled && !o.isInited ? P() : !o.isEnabled && o.isInited && h();
    });
    function P() {
      o.setIsInited(!0), o.setNeedReload(!1), I(!0), y.value = new ve(document, O, a, o.browser), a.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), a.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function h() {
      var c;
      o.setIsInited(!1), I(!1), (c = y.value) == null || c.destroy(), console.log(a.resetScrollPositionOnStateChanging), a.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), a.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function I(c) {
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
      o.needReload && h();
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
    Pe(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (a.watchIsEnabledOn === "load-resize" && o.setIsEnabled(E()), o.isEnabled ? (o.setCurrentScrollPosition(Se(o.currentScrollPosition, o.nextScrollPosition, a.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, a.renderDelay);
    function E() {
      return o.isDestroyedByUser ? !1 : (a.enableOnTouchDevices || o.deviceType === x.DESKTOP) && window.innerWidth >= a.minWidth;
    }
    const b = S(() => {
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
    return (c, i) => (_(), q("div", {
      class: k([a.defaultClassNames.smoothPage, a.additionalClassNames.smoothPage])
    }, [
      U("div", {
        ref_key: "contentRef",
        ref: f,
        style: ie($(b)),
        class: k([a.defaultClassNames.smoothPageBody, a.additionalClassNames.smoothPageBody])
      }, [
        U("div", {
          class: k([a.defaultClassNames.smoothPageBodyPosition, a.additionalClassNames.smoothPageBodyPosition])
        }, [
          ce(c.$slots, "default")
        ], 2)
      ], 6),
      a.enableScrollbar && a.scrollbarComponent ? (_(), de(a.scrollbarComponent, {
        key: 0,
        settings: a,
        store: $(o)
      }, null, 8, ["store"])) : he("", !0)
    ], 2));
  }
});
const Le = j("publicSmoothPage", () => {
  const e = J(), l = S(() => e.settings), o = S(() => e.currentScrollPosition), s = S(() => e.isEnabled), u = S(() => e.isTriggeringScrollPosition), a = S(() => e.isMounted), y = S(() => e.isInited), f = S(() => e.deviceType), P = S(() => e.browser), h = S(() => e.isPreventScroll);
  return {
    settings: l,
    currentScrollPosition: o,
    isEnabled: s,
    isTriggeringScrollPosition: u,
    isMounted: a,
    isInited: y,
    deviceType: f,
    browser: P,
    isPreventScroll: h,
    preventScroll: (b) => e.preventScroll(b),
    reload: (b = !1) => e.reload(b),
    destroy: (b = !1) => e.destroy(b),
    init: (b = !1) => e.init(b)
  };
}), Te = {
  install(e, l) {
    e.component("SmoothPage", we), e.provide("smoothPageSettings", l || {});
  }
};
export {
  we as SmoothPage,
  Te as default,
  Le as useSmoothPage
};
