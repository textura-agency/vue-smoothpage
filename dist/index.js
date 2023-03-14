var re = Object.defineProperty;
var ne = (e, a, t) => a in e ? re(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t;
var i = (e, a, t) => (ne(e, typeof a != "symbol" ? a + "" : a, t), t), W = (e, a, t) => {
  if (!a.has(e))
    throw TypeError("Cannot " + t);
};
var b = (e, a, t) => (W(e, a, "read from private field"), t ? t.call(e) : a.get(e)), D = (e, a, t) => {
  if (a.has(e))
    throw TypeError("Cannot add the same private member more than once");
  a instanceof WeakSet ? a.add(e) : a.set(e, t);
}, G = (e, a, t, s) => (W(e, a, "write to private field"), s ? s.call(e, t) : a.set(e, t), t);
var R = (e, a, t) => (W(e, a, "access private method"), t);
import { ref as u, onMounted as X, onUnmounted as Z, defineComponent as j, watchEffect as K, openBlock as V, createElementBlock as J, normalizeStyle as x, createElementVNode as M, inject as ie, computed as E, normalizeClass as B, unref as _, renderSlot as ce, createBlock as de, createCommentVNode as he } from "vue";
import { defineStore as Q } from "pinia";
class me {
  constructor(a, t, s) {
    i(this, "element");
    i(this, "cb");
    i(this, "settings");
    i(this, "subscribe", function() {
      this.element.addEventListener("wheel", this.listener);
    }.bind(this));
    i(this, "unsubscribe", function() {
      this.element.removeEventListener("wheel", this.listener);
    }.bind(this));
    i(this, "listener", function(a) {
      typeof this.cb == "function" && a.deltaY && this.cb({
        dir: a.deltaY / Math.abs(a.deltaY),
        wheel: a.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = a, this.cb = t, this.settings = s, this.subscribe();
  }
}
var P, I, L, Y, H, A, k, F;
class ue {
  constructor(a, t, s) {
    D(this, L);
    D(this, H);
    D(this, k);
    D(this, P, {
      sY: 0,
      eY: 0
    });
    i(this, "prevY", 0);
    D(this, I, void 0);
    i(this, "cb");
    i(this, "deltaY");
    i(this, "minDelta");
    i(this, "settings");
    i(this, "subscribe", function() {
      b(this, I).addEventListener("touchstart", R(this, L, Y).bind(this), !1), b(this, I).addEventListener("touchmove", R(this, H, A).bind(this), !1), b(this, I).addEventListener("touchend", R(this, k, F).bind(this), !1);
    }.bind(this));
    i(this, "unsubscribe", function() {
      b(this, I).removeEventListener("touchstart", R(this, L, Y), !1), b(this, I).removeEventListener("touchmove", R(this, H, A), !1), b(this, I).removeEventListener("touchend", R(this, k, F), !1);
    }.bind(this));
    this.cb = t, G(this, I, a), this.subscribe(), this.settings = s, this.minDelta = s.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.unsubscribe = this.unsubscribe.bind(this);
  }
  useCallback(a) {
    typeof this.cb == "function" && a && this.cb({
      dir: a / Math.abs(a),
      wheel: a * this.settings.touchmoveIntensity
    });
  }
}
P = new WeakMap(), I = new WeakMap(), L = new WeakSet(), Y = function(a) {
  const t = a.touches[0];
  b(this, P).sY = t.screenY, this.prevY = b(this, P).sY, b(this, P).eY = b(this, P).sY;
}, H = new WeakSet(), A = function(a) {
  const t = a.touches[0];
  this.prevY = b(this, P).eY, b(this, P).eY = t.screenY, this.deltaY = b(this, P).sY - b(this, P).eY;
  const s = b(this, P).sY - this.prevY;
  Math.abs(s) > Math.abs(this.deltaY) && (b(this, P).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, k = new WeakSet(), F = function(a) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class be {
  constructor(a, t, s) {
    i(this, "element");
    i(this, "callback");
    i(this, "settings");
    i(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.listener);
    }.bind(this));
    i(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.listener);
    }.bind(this));
    i(this, "listener", function(a) {
      if (!this.settings.enableScrollOnKeyboard || typeof this.callback != "function")
        return;
      const t = a.keyCode;
      this.settings.mode === "vertical" || this.settings.mode === "vertical-reverse" ? (this.settings.scrollDownOnKeys.forEach((s) => {
        s.code === t && this.callback({ dir: 1, wheel: s.distance });
      }), this.settings.scrollUpOnKeys.forEach((s) => {
        s.code === t && this.callback({ dir: -1, wheel: s.distance * -1 });
      })) : (this.settings.mode === "horizontal" || this.settings.mode === "horizontal-reverse") && (this.settings.scrollRightOnKeys.forEach((s) => {
        s.code === t && this.callback({ dir: 1, wheel: s.distance });
      }), this.settings.scrollLeftOnKeys.forEach((s) => {
        s.code === t && this.callback({ dir: -1, wheel: s.distance * -1 });
      }));
    }.bind(this));
    this.element = a, this.callback = t, this.settings = s, this.subscribe();
  }
}
class fe {
  constructor(a, t) {
    i(this, "element");
    i(this, "pressed", {});
    i(this, "onKeys");
    i(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.keydown), this.element.addEventListener("keyup", this.keyup);
    }.bind(this));
    i(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.keydown), this.element.removeEventListener("keyup", this.keyup);
    }.bind(this));
    i(this, "isHold", function(a) {
      return !!this.pressed[a];
    }.bind(this));
    i(this, "keydown", function(a) {
      const t = a.keyCode;
      this.pressed[t] || (this.pressed[t] = !0), this.onKeys();
    }.bind(this));
    i(this, "keyup", function(a) {
      const t = a.keyCode;
      this.pressed[t] && (this.pressed[t] = !1), this.onKeys();
    }.bind(this));
    this.element = a, this.onKeys = t, this.subscribe();
  }
  isHolding() {
  }
}
var p = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(p || {});
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
  constructor(a, t, s, l) {
    i(this, "swipe");
    i(this, "scroll");
    i(this, "keyboard");
    i(this, "shotcuts");
    i(this, "isSubscribed", !1);
    i(this, "settings");
    i(this, "callback");
    i(this, "subscribe", function() {
      this.isSubscribed = !0, this.scroll.subscribe(), this.swipe.subscribe(), this.keyboard.subscribe();
    }.bind(this));
    i(this, "unsubscribe", function() {
      this.isSubscribed = !1, this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe();
    }.bind(this));
    i(this, "destroy", function() {
      this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe(), this.shotcuts.unsubscribe();
    }.bind(this));
    const d = {
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
      wheelIntensity: o("WheelIntensity"),
      touchmoveIntensity: o("TouchmoveIntensity"),
      minTouchmoveDistance: d.minTouchmoveDistance
    };
    function o(m) {
      switch (l) {
        case p.SAFARI:
          return d[`safari${m}`];
        case p.CHROME:
          return d[`chrome${m}`];
        case p.OPERA:
          return d[`opera${m}`];
        case (p.MS_EDGE || p.EDGE_CHROMIUM_BASED):
          return d[`edge${m}`];
        case p.MOZILLA_FIREFOX:
          return d[`mozilla${m}`];
        default:
          return m === "WheelIntensity" ? d.wheelIntensity : d.touchmoveIntensity;
      }
    }
    const f = {
      mode: s.mode,
      enableScrollOnKeyboard: s.enableScrollOnKeyboard,
      scrollDownOnKeys: s.scrollDownOnKeys,
      scrollUpOnKeys: s.scrollUpOnKeys,
      scrollLeftOnKeys: s.scrollLeftOnKeys,
      scrollRightOnKeys: s.scrollRightOnKeys
    };
    this.callback = t, this.settings = s, this.scroll = new me(a, this.controlScroll.bind(this), y), this.swipe = new ue(a, this.controlScroll.bind(this), y), this.keyboard = new be(a, this.controlScroll.bind(this), f), this.shotcuts = new fe(a, this.onKeysHold.bind(this));
  }
  controlScroll(a) {
    this.callback && this.callback(a);
  }
  onKeysHold() {
    var t;
    let a = !1;
    (t = this.settings.preventScrollOnHoldKeys) == null || t.forEach((s) => {
      let l = 0;
      s.code.forEach((d) => {
        this.shotcuts.isHold(d) && l++;
      }), l === s.code.length && (this.unsubscribe(), a = !0);
    }), !a && !this.isSubscribed && this.subscribe();
  }
}
const Pe = (e, a = 0) => {
  const t = u(!0), s = u(performance.now());
  X(() => l(0)), Z(() => t.value = !1);
  function l(d) {
    t.value && (d - s.value > a && (e(), s.value = performance.now()), requestAnimationFrame(l));
  }
}, Se = (e, a, t) => a === 0 && e < 0.1 ? 0 : e + (a - e) * t;
var U = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(U || {});
function Ce() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const g = Q("privateSmoothPage", () => {
  const e = u(null), a = u(0), t = u(0), s = u(!1), l = u(!1), d = u(!1), y = u(!1), o = u(!1), f = u(U.DESKTOP), m = u(p.OTHER), S = u(!1), O = u(!1), w = u(!1), N = u(0), v = (c) => {
    e.value = c;
  }, h = (c) => {
    a.value = c;
  }, n = (c) => {
    l.value = c;
  }, C = (c) => {
    t.value = c;
  }, z = (c) => {
    s.value = c;
  }, ee = (c) => {
    d.value = c;
  }, oe = (c) => {
    o.value = c;
  }, ae = (c) => {
    y.value = c;
  }, le = (c) => {
    f.value = c;
  }, se = (c) => {
    m.value = c;
  }, $ = (c) => {
    O.value = c;
  }, q = (c) => {
    S.value = c;
  }, te = (c) => {
    w.value = c;
  }, T = (c) => {
    N.value = c;
  };
  return {
    settings: e,
    currentScrollPosition: a,
    isEnabled: l,
    nextScrollPosition: t,
    isTriggeringScrollPosition: s,
    isMounted: d,
    isInited: o,
    isEarlierMounted: y,
    deviceType: f,
    needReload: O,
    isDestroyedByUser: S,
    browser: m,
    isPreventScroll: w,
    savedCurrentScrollPositionForDestroy: N,
    setSettings: v,
    setCurrentScrollPosition: h,
    setIsEnabled: n,
    setNextScrollPosition: C,
    setIsTriggeringScrollPosition: z,
    setIsMounted: ee,
    setIsInited: oe,
    setIsEarlierMounted: ae,
    setDeviceType: le,
    setNeedReload: $,
    setBrowser: se,
    preventScroll: te,
    setSavedCurrentScrollPositionForDestroy: T,
    reload: (c = !1) => {
      $(!0), c && (h(0), C(0), T(0));
    },
    destroy: (c = !1) => {
      q(!0), c && (h(0), C(0), T(0));
    },
    init: (c = !1) => {
      q(!1), c && (h(0), C(0), T(0));
    }
  };
}), Ee = /* @__PURE__ */ j({
  __name: "index",
  props: {
    settings: null,
    store: null
  },
  setup(e) {
    const { settings: a, store: t } = e, s = u(), l = u(), d = u(0);
    return K(() => {
      var m;
      if (!s.value || !l.value || !t.isEnabled && !a.enableScrollbarWhileSmoothpageDisabled)
        return;
      const y = (m = document.getElementById("smoothpageBody")) == null ? void 0 : m.getBoundingClientRect().height;
      if (!y)
        return;
      const o = l.value.getBoundingClientRect().height, f = s.value.getBoundingClientRect().height;
      d.value = Number(t.currentScrollPosition) / (y - o) * (o - f);
    }), (y, o) => {
      var f, m, S;
      return V(), J("div", {
        style: x({ width: `${(f = e.settings.scrollbarSettings) == null ? void 0 : f.trackWidth}` }),
        class: "t-smoothscrollbar"
      }, [
        M("div", {
          ref_key: "track",
          ref: l,
          class: "t-smoothscrollbar--track"
        }, [
          M("div", {
            ref_key: "thumb",
            ref: s,
            style: x({
              width: (m = e.settings.scrollbarSettings) == null ? void 0 : m.thumbWidth,
              height: (S = e.settings.scrollbarSettings) == null ? void 0 : S.thumbHeight,
              transform: `translateY(${d.value}px)`
            }),
            class: "t-smoothscrollbar--thumb"
          }, null, 4)
        ], 512)
      ], 4);
    };
  }
});
const Ie = (e) => {
  var a, t, s, l, d, y, o, f, m, S, O, w, N, v, h, n, C, z;
  return {
    mode: (e == null ? void 0 : e.mode) || r.mode,
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
    enableScrollOnKeyboard: (e == null ? void 0 : e.enableScrollOnKeyboard) || r.enableScrollOnKeyboard,
    scrollDownOnKeys: (e == null ? void 0 : e.scrollDownOnKeys) || r.scrollDownOnKeys,
    scrollUpOnKeys: (e == null ? void 0 : e.scrollUpOnKeys) || r.scrollUpOnKeys,
    scrollRightOnKeys: (e == null ? void 0 : e.scrollRightOnKeys) || r.scrollRightOnKeys,
    scrollLeftOnKeys: (e == null ? void 0 : e.scrollLeftOnKeys) || r.scrollLeftOnKeys,
    preventScrollOnHoldKeys: (e == null ? void 0 : e.preventScrollOnHoldKeys) || r.preventScrollOnHoldKeys,
    enableScrollbar: (e == null ? void 0 : e.enableScrollbar) || r.enableScrollbar,
    enableScrollbarWhileSmoothpageDisabled: (e == null ? void 0 : e.enableScrollbarWhileSmoothpageDisabled) || r.enableScrollbarWhileSmoothpageDisabled,
    scrollbarComponent: (e == null ? void 0 : e.scrollbarComponent) || r.scrollbarComponent,
    scrollbarSettings: (e == null ? void 0 : e.scrollbarSettings) || r.scrollbarSettings,
    defaultClassNames: {
      smoothPage: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPage) || r.defaultClassNames.smoothPage,
      smoothPageBody: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPageBody) || r.defaultClassNames.smoothPageBody,
      smoothPageBodyPosition: ((s = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : s.smoothPageBodyPosition) || r.defaultClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageEnabled) || r.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((d = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : d.smoothPageVertical) || r.defaultClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((y = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : y.smoothPageVerticalReverse) || r.defaultClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageHorizontal) || r.defaultClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((f = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : f.smoothPageHorizontalReverse) || r.defaultClassNames.smoothPageHorizontalReverse,
      scrollbarEnabled: ((m = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : m.scrollbarEnabled) || r.defaultClassNames.scrollbarEnabled
    },
    additionalClassNames: {
      smoothPage: ((S = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : S.smoothPage) || r.additionalClassNames.smoothPage,
      smoothPageBody: ((O = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : O.smoothPageBody) || r.additionalClassNames.smoothPageBody,
      smoothPageBodyPosition: ((w = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : w.smoothPageBodyPosition) || r.additionalClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((N = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : N.smoothPageEnabled) || r.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((v = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : v.smoothPageVertical) || r.additionalClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((h = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : h.smoothPageVerticalReverse) || r.additionalClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((n = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : n.smoothPageHorizontal) || r.additionalClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((C = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : C.smoothPageHorizontalReverse) || r.additionalClassNames.smoothPageHorizontalReverse,
      scrollbarEnabled: ((z = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : z.scrollbarEnabled) || r.additionalClassNames.scrollbarEnabled
    }
  };
}, r = {
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
  enableScrollbarWhileSmoothpageDisabled: !0,
  scrollbarComponent: Ee,
  scrollbarSettings: {
    trackWidth: "12px",
    thumbHeight: "100px",
    thumbWidth: "12px"
  },
  defaultClassNames: {
    smoothPage: "t-smoothpage",
    smoothPageBody: "t-smoothpage--body",
    smoothPageBodyPosition: "t-smoothpage--body-position",
    smoothPageEnabled: "t-smoothpage--enabled",
    smoothPageVertical: "t-smoothpage--vertical",
    smoothPageVerticalReverse: "t-smoothpage--vertical-reverse",
    smoothPageHorizontal: "t-smoothpage--horizontal",
    smoothPageHorizontalReverse: "t-smoothpage--horizontal-reverse",
    scrollbarEnabled: "t-smoothscrollbar--enabled"
  },
  additionalClassNames: {
    smoothPage: "",
    smoothPageBody: "",
    smoothPageBodyPosition: "",
    smoothPageEnabled: "",
    smoothPageVertical: "",
    smoothPageVerticalReverse: "",
    smoothPageHorizontal: "",
    smoothPageHorizontalReverse: "",
    scrollbarEnabled: ""
  }
}, Ne = /* @__PURE__ */ j({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const a = e, t = u(null), s = u(null), l = g(), d = ie("smoothPageSettings", void 0), o = {
      ...Ie(d),
      ...(a == null ? void 0 : a.settings) || {}
      //mb should de removed?
    };
    K(() => {
      l.setSettings(o);
    }), X(() => {
      var h, n;
      l.setSettings(o), l.setDeviceType(Ce()), l.setIsEnabled(N()), l.setBrowser(ye()), l.setIsMounted(!0), setTimeout(() => l.setIsEarlierMounted(!0), 100), o.enableScrollbar && o.enableScrollbarWhileSmoothpageDisabled && (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.add(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((n = document.querySelector("html")) == null || n.classList.add(o.additionalClassNames.scrollbarEnabled)));
    }), Z(() => {
      l.setIsMounted(!1);
    }), K(() => {
      l.isEnabled && !l.isInited ? f() : !l.isEnabled && l.isInited && m();
    });
    function f() {
      var h, n;
      l.setIsInited(!0), l.setNeedReload(!1), S(!0), o.enableScrollbar && (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.add(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((n = document.querySelector("html")) == null || n.classList.add(o.additionalClassNames.scrollbarEnabled))), t.value = new ve(document, O, o, l.browser), o.resetScrollPositionOnStateChanging && (l.setCurrentScrollPosition(0), l.setNextScrollPosition(0), window.scroll(0, 0)), o.reloadPageOnStateChanging && l.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function m() {
      var h, n, C;
      l.setIsInited(!1), S(!1), o.enableScrollbarWhileSmoothpageDisabled || (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.remove(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((n = document.querySelector("html")) == null || n.classList.remove(o.additionalClassNames.scrollbarEnabled))), (C = t.value) == null || C.destroy(), console.log(o.resetScrollPositionOnStateChanging), o.resetScrollPositionOnStateChanging ? (l.setCurrentScrollPosition(0), l.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, l.savedCurrentScrollPositionForDestroy), o.reloadPageOnStateChanging && l.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function S(h) {
      const n = document.querySelector("html");
      if (n) {
        if (h) {
          o.defaultClassNames.smoothPageEnabled && n.classList.add(o.defaultClassNames.smoothPageEnabled), o.additionalClassNames.smoothPageEnabled && n.classList.add(o.additionalClassNames.smoothPageEnabled), o.mode === "vertical" ? (o.defaultClassNames.smoothPageVertical && n.classList.add(o.defaultClassNames.smoothPageVertical), o.additionalClassNames.smoothPageVertical && n.classList.add(o.additionalClassNames.smoothPageVertical)) : o.mode === "vertical-reverse" ? (o.defaultClassNames.smoothPageVerticalReverse && n.classList.add(o.defaultClassNames.smoothPageVerticalReverse), o.additionalClassNames.smoothPageVerticalReverse && n.classList.add(o.additionalClassNames.smoothPageVerticalReverse)) : o.mode === "horizontal" ? (o.defaultClassNames.smoothPageHorizontal && n.classList.add(o.defaultClassNames.smoothPageHorizontal), o.additionalClassNames.smoothPageHorizontal && n.classList.add(o.additionalClassNames.smoothPageHorizontal)) : o.mode === "horizontal-reverse" && (o.defaultClassNames.smoothPageHorizontalReverse && n.classList.add(o.defaultClassNames.smoothPageHorizontalReverse), o.additionalClassNames.smoothPageHorizontalReverse && n.classList.add(o.additionalClassNames.smoothPageHorizontalReverse));
          return;
        }
        o.defaultClassNames.smoothPageEnabled && n.classList.remove(o.defaultClassNames.smoothPageEnabled), o.additionalClassNames.smoothPageEnabled && n.classList.remove(o.additionalClassNames.smoothPageEnabled), o.mode === "vertical" ? (o.defaultClassNames.smoothPageVertical && n.classList.remove(o.defaultClassNames.smoothPageVertical), o.additionalClassNames.smoothPageVertical && n.classList.remove(o.additionalClassNames.smoothPageVertical)) : o.mode === "vertical-reverse" ? (o.defaultClassNames.smoothPageVerticalReverse && n.classList.remove(o.defaultClassNames.smoothPageVerticalReverse), o.additionalClassNames.smoothPageVerticalReverse && n.classList.remove(o.additionalClassNames.smoothPageVerticalReverse)) : o.mode === "horizontal" ? (o.defaultClassNames.smoothPageHorizontal && n.classList.remove(o.defaultClassNames.smoothPageHorizontal), o.additionalClassNames.smoothPageHorizontal && n.classList.remove(o.additionalClassNames.smoothPageHorizontal)) : o.mode === "horizontal-reverse" && (o.defaultClassNames.smoothPageHorizontalReverse && n.classList.remove(o.defaultClassNames.smoothPageHorizontalReverse), o.additionalClassNames.smoothPageHorizontalReverse && n.classList.remove(o.additionalClassNames.smoothPageHorizontalReverse));
      }
    }
    K(() => {
      l.needReload && m();
    });
    function O(h) {
      if (l.isPreventScroll)
        return;
      const n = w();
      n && l.setNextScrollPosition(Math.max(0, Math.min(l.currentScrollPosition + h.wheel, n)));
    }
    function w() {
      if (!s.value)
        return 0;
      const h = s.value.getBoundingClientRect().height - window.innerHeight, n = s.value.getBoundingClientRect().width - window.innerWidth;
      return o.mode === "vertical" || o.mode === "vertical-reverse" ? h : o.mode === "horizontal" || o.mode === "horizontal-reverse" ? n : 0;
    }
    Pe(() => {
      l.isPreventScroll || l.isMounted && (l.isTriggeringScrollPosition || (o.watchIsEnabledOn === "load-resize" && l.setIsEnabled(N()), l.isEnabled ? (l.setCurrentScrollPosition(Se(l.currentScrollPosition, l.nextScrollPosition, o.smoothness)), l.setSavedCurrentScrollPositionForDestroy(l.currentScrollPosition)) : (l.setCurrentScrollPosition(window.scrollY), l.setNextScrollPosition(window.scrollY))));
    }, o.renderDelay);
    function N() {
      return l.isDestroyedByUser ? !1 : (o.enableOnTouchDevices || l.deviceType === U.DESKTOP) && window.innerWidth >= o.minWidth;
    }
    const v = E(() => {
      if (l.isEnabled) {
        if (o.mode === "vertical")
          return {
            transform: `translate3d(0, ${-l.currentScrollPosition}px, 0)`
          };
        if (o.mode === "vertical-reverse")
          return {
            transform: `translate3d(0, ${l.currentScrollPosition}px, 0)`
          };
        if (o.mode === "horizontal")
          return {
            transform: `translate3d(${-l.currentScrollPosition}px, 0, 0)`
          };
        if (o.mode === "horizontal-reverse")
          return {
            transform: `translate3d(${l.currentScrollPosition}px, 0, 0)`
          };
      }
      return {};
    });
    return (h, n) => (V(), J("div", {
      class: B([o.defaultClassNames.smoothPage, o.additionalClassNames.smoothPage])
    }, [
      M("div", {
        id: "smoothpageBody",
        ref_key: "smoothpageBodyRef",
        ref: s,
        style: x(_(v)),
        class: B([o.defaultClassNames.smoothPageBody, o.additionalClassNames.smoothPageBody])
      }, [
        M("div", {
          class: B([o.defaultClassNames.smoothPageBodyPosition, o.additionalClassNames.smoothPageBodyPosition])
        }, [
          ce(h.$slots, "default")
        ], 2)
      ], 6),
      (o.enableScrollbarWhileSmoothpageDisabled || _(l).isEnabled) && o.enableScrollbar && o.scrollbarComponent ? (V(), de(o.scrollbarComponent, {
        key: 0,
        settings: o,
        store: _(l)
      }, null, 8, ["store"])) : he("", !0)
    ], 2));
  }
});
const He = Q("publicSmoothPage", () => {
  const e = g(), a = E(() => e.settings), t = E(() => e.currentScrollPosition), s = E(() => e.isEnabled), l = E(() => e.isTriggeringScrollPosition), d = E(() => e.isMounted), y = E(() => e.isInited), o = E(() => e.deviceType), f = E(() => e.browser), m = E(() => e.isPreventScroll);
  return {
    settings: a,
    currentScrollPosition: t,
    isEnabled: s,
    isTriggeringScrollPosition: l,
    isMounted: d,
    isInited: y,
    deviceType: o,
    browser: f,
    isPreventScroll: m,
    preventScroll: (v) => e.preventScroll(v),
    reload: (v = !1) => e.reload(v),
    destroy: (v = !1) => e.destroy(v),
    init: (v = !1) => e.init(v)
  };
}), ke = {
  install(e, a) {
    e.component("SmoothPage", Ne), e.provide("smoothPageSettings", a || {});
  }
};
export {
  Ne as SmoothPage,
  ke as default,
  He as useSmoothPage
};
