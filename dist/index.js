var re = Object.defineProperty;
var ne = (e, a, s) => a in e ? re(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[a] = s;
var n = (e, a, s) => (ne(e, typeof a != "symbol" ? a + "" : a, s), s), B = (e, a, s) => {
  if (!a.has(e))
    throw TypeError("Cannot " + s);
};
var b = (e, a, s) => (B(e, a, "read from private field"), s ? s.call(e) : a.get(e)), D = (e, a, s) => {
  if (a.has(e))
    throw TypeError("Cannot add the same private member more than once");
  a instanceof WeakSet ? a.add(e) : a.set(e, s);
}, X = (e, a, s, l) => (B(e, a, "write to private field"), l ? l.call(e, s) : a.set(e, s), s);
var R = (e, a, s) => (B(e, a, "access private method"), s);
import { ref as u, onMounted as U, onUnmounted as $, defineComponent as Z, watchEffect as M, openBlock as Y, createElementBlock as j, normalizeStyle as V, createElementVNode as K, inject as ie, computed as I, normalizeClass as W, unref as _, renderSlot as ce, createBlock as de, createCommentVNode as he } from "vue";
import { defineStore as J } from "pinia";
class me {
  constructor(a, s, l) {
    n(this, "element");
    n(this, "cb");
    n(this, "settings");
    n(this, "subscribe", function() {
      this.element.addEventListener("wheel", this.listener);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("wheel", this.listener);
    }.bind(this));
    n(this, "listener", function(a) {
      typeof this.cb == "function" && a.deltaY && this.cb({
        dir: a.deltaY / Math.abs(a.deltaY),
        wheel: a.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = a, this.cb = s, this.settings = l, this.subscribe();
  }
}
var S, w, H, x, L, A, k, F;
class ue {
  constructor(a, s, l) {
    D(this, H);
    D(this, L);
    D(this, k);
    D(this, S, {
      sY: 0,
      eY: 0
    });
    n(this, "prevY", 0);
    D(this, w, void 0);
    n(this, "cb");
    n(this, "deltaY");
    n(this, "minDelta");
    n(this, "settings");
    n(this, "subscribe", function() {
      b(this, w).addEventListener("touchstart", R(this, H, x).bind(this), !1), b(this, w).addEventListener("touchmove", R(this, L, A).bind(this), !1), b(this, w).addEventListener("touchend", R(this, k, F).bind(this), !1);
    }.bind(this));
    n(this, "unsubscribe", function() {
      b(this, w).removeEventListener("touchstart", R(this, H, x), !1), b(this, w).removeEventListener("touchmove", R(this, L, A), !1), b(this, w).removeEventListener("touchend", R(this, k, F), !1);
    }.bind(this));
    this.cb = s, X(this, w, a), this.subscribe(), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.unsubscribe = this.unsubscribe.bind(this);
  }
  useCallback(a) {
    typeof this.cb == "function" && a && this.cb({
      dir: a / Math.abs(a),
      wheel: a * this.settings.touchmoveIntensity
    });
  }
}
S = new WeakMap(), w = new WeakMap(), H = new WeakSet(), x = function(a) {
  const s = a.touches[0];
  b(this, S).sY = s.screenY, this.prevY = b(this, S).sY, b(this, S).eY = b(this, S).sY;
}, L = new WeakSet(), A = function(a) {
  const s = a.touches[0];
  this.prevY = b(this, S).eY, b(this, S).eY = s.screenY, this.deltaY = b(this, S).sY - b(this, S).eY;
  const l = b(this, S).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (b(this, S).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, k = new WeakSet(), F = function(a) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class be {
  constructor(a, s, l) {
    n(this, "element");
    n(this, "callback");
    n(this, "settings");
    n(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.listener);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.listener);
    }.bind(this));
    n(this, "listener", function(a) {
      if (!this.settings.enableScrollOnKeyboard || typeof this.callback != "function")
        return;
      const s = a.keyCode;
      this.settings.mode === "vertical" || this.settings.mode === "vertical-reverse" ? (this.settings.scrollDownOnKeys.forEach((l) => {
        l.code === s && this.callback({ dir: 1, wheel: l.distance });
      }), this.settings.scrollUpOnKeys.forEach((l) => {
        l.code === s && this.callback({ dir: -1, wheel: l.distance * -1 });
      })) : (this.settings.mode === "horizontal" || this.settings.mode === "horizontal-reverse") && (this.settings.scrollRightOnKeys.forEach((l) => {
        l.code === s && this.callback({ dir: 1, wheel: l.distance });
      }), this.settings.scrollLeftOnKeys.forEach((l) => {
        l.code === s && this.callback({ dir: -1, wheel: l.distance * -1 });
      }));
    }.bind(this));
    this.element = a, this.callback = s, this.settings = l, this.subscribe();
  }
}
class fe {
  constructor(a, s) {
    n(this, "element");
    n(this, "pressed", {});
    n(this, "onKeys");
    n(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.keydown), this.element.addEventListener("keyup", this.keyup);
    }.bind(this));
    n(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.keydown), this.element.removeEventListener("keyup", this.keyup);
    }.bind(this));
    n(this, "isHold", function(a) {
      return !!this.pressed[a];
    }.bind(this));
    n(this, "keydown", function(a) {
      const s = a.keyCode;
      this.pressed[s] || (this.pressed[s] = !0), this.onKeys();
    }.bind(this));
    n(this, "keyup", function(a) {
      const s = a.keyCode;
      this.pressed[s] && (this.pressed[s] = !1), this.onKeys();
    }.bind(this));
    this.element = a, this.onKeys = s, this.subscribe();
  }
  isHolding() {
  }
}
var O = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(O || {});
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
  constructor(a, s, l, t) {
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
    const d = {
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
    }, f = {
      wheelIntensity: o("WheelIntensity"),
      touchmoveIntensity: o("TouchmoveIntensity"),
      minTouchmoveDistance: d.minTouchmoveDistance
    };
    function o(m) {
      switch (t) {
        case O.SAFARI:
          return d[`safari${m}`];
        case O.CHROME:
          return d[`chrome${m}`];
        case O.OPERA:
          return d[`opera${m}`];
        case (O.MS_EDGE || O.EDGE_CHROMIUM_BASED):
          return d[`edge${m}`];
        case O.MOZILLA_FIREFOX:
          return d[`mozilla${m}`];
        default:
          return m === "WheelIntensity" ? d.wheelIntensity : d.touchmoveIntensity;
      }
    }
    const y = {
      mode: l.mode,
      enableScrollOnKeyboard: l.enableScrollOnKeyboard,
      scrollDownOnKeys: l.scrollDownOnKeys,
      scrollUpOnKeys: l.scrollUpOnKeys,
      scrollLeftOnKeys: l.scrollLeftOnKeys,
      scrollRightOnKeys: l.scrollRightOnKeys
    };
    this.callback = s, this.settings = l, this.scroll = new me(a, this.controlScroll.bind(this), f), this.swipe = new ue(a, this.controlScroll.bind(this), f), this.keyboard = new be(a, this.controlScroll.bind(this), y), this.shotcuts = new fe(a, this.onKeysHold.bind(this));
  }
  controlScroll(a) {
    this.callback && this.callback(a);
  }
  onKeysHold() {
    var s;
    let a = !1;
    (s = this.settings.preventScrollOnHoldKeys) == null || s.forEach((l) => {
      let t = 0;
      l.code.forEach((d) => {
        this.shotcuts.isHold(d) && t++;
      }), t === l.code.length && (this.unsubscribe(), a = !0);
    }), !a && !this.isSubscribed && this.subscribe();
  }
}
const Pe = (e, a = 0) => {
  const s = u(!0), l = u(performance.now());
  U(() => t(0)), $(() => s.value = !1);
  function t(d) {
    s.value && (d - l.value > a && (e(), l.value = performance.now()), requestAnimationFrame(t));
  }
}, Se = (e, a, s) => a === 0 && e < 0.1 ? 0 : e + (a - e) * s;
var g = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(g || {});
function Ce() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const Q = J("privateSmoothPage", () => {
  const e = u(null), a = u(0), s = u(0), l = u(!1), t = u(!1), d = u(!1), f = u(!1), o = u(!1), y = u(g.DESKTOP), m = u(O.OTHER), v = u(!1), C = u(!1), N = u(!1), p = u(0), P = (c) => {
    e.value = c;
  }, h = (c) => {
    a.value = c;
  }, i = (c) => {
    t.value = c;
  }, E = (c) => {
    s.value = c;
  }, T = (c) => {
    l.value = c;
  }, ee = (c) => {
    d.value = c;
  }, oe = (c) => {
    o.value = c;
  }, ae = (c) => {
    f.value = c;
  }, le = (c) => {
    y.value = c;
  }, te = (c) => {
    m.value = c;
  }, q = (c) => {
    C.value = c;
  }, G = (c) => {
    v.value = c;
  }, se = (c) => {
    N.value = c;
  }, z = (c) => {
    p.value = c;
  };
  return {
    settings: e,
    currentScrollPosition: a,
    isEnabled: t,
    nextScrollPosition: s,
    isTriggeringScrollPosition: l,
    isMounted: d,
    isInited: o,
    isEarlierMounted: f,
    deviceType: y,
    needReload: C,
    isDestroyedByUser: v,
    browser: m,
    isPreventScroll: N,
    savedCurrentScrollPositionForDestroy: p,
    setSettings: P,
    setCurrentScrollPosition: h,
    setIsEnabled: i,
    setNextScrollPosition: E,
    setIsTriggeringScrollPosition: T,
    setIsMounted: ee,
    setIsInited: oe,
    setIsEarlierMounted: ae,
    setDeviceType: le,
    setNeedReload: q,
    setBrowser: te,
    preventScroll: se,
    setSavedCurrentScrollPositionForDestroy: z,
    reload: (c = !1) => {
      q(!0), c && (h(0), E(0), z(0));
    },
    destroy: (c = !1) => {
      G(!0), c && (h(0), E(0), z(0));
    },
    init: (c = !1) => {
      G(!1), c && (h(0), E(0), z(0));
    }
  };
});
class Ee {
  constructor(a, s, l) {
    n(this, "track");
    n(this, "thumb");
    n(this, "onScroll");
    n(this, "dragStart", 0);
    n(this, "mouseDownHandler", function(a) {
      if (!this.thumb || !this.track)
        return;
      const s = document.querySelector("html");
      if (!s)
        return;
      s.style.userSelect = "none", s.style.pointerEvents = "none", s.style.cursor = "grabbing", this.thumb.getBoundingClientRect().top;
      const l = this.track.getBoundingClientRect().top;
      this.dragStart = a.clientY - l, document.addEventListener("mousemove", this.mouseMoveHandler), document.addEventListener("mouseup", this.mouseUpHandler, { once: !0 });
    }.bind(this));
    n(this, "mouseUpHandler", function() {
      if (!this.thumb)
        return;
      const a = document.querySelector("html");
      a && (a.style.removeProperty("user-select"), a.style.removeProperty("pointer-events"), a.style.removeProperty("cursor"), document.removeEventListener("mousemove", this.mouseMoveHandler));
    }.bind(this));
    n(this, "mouseMoveHandler", function(a) {
      if (!this.thumb || !this.track || typeof this.onScroll != "function")
        return;
      const l = (a.clientY - this.track.getBoundingClientRect().top - this.dragStart) * 100 / this.thumb.getBoundingClientRect().height, t = Math.abs(l) / l;
      console.log(l, t), this.onScroll({ dir: t, wheel: l }), this.thumb.getBoundingClientRect().top;
      const d = this;
      setTimeout(() => {
        const f = d.track.getBoundingClientRect().top;
        this.dragStart = a.clientY - f;
      }, 95);
    }.bind(this));
    this.track = a.value, this.thumb = s.value, this.onScroll = l, !(!this.thumb || !this.track) && this.thumb.addEventListener("mousedown", this.mouseDownHandler);
  }
  destroy() {
    this.thumb && this.thumb.removeEventListener("mousedown", this.mouseDownHandler);
  }
}
const Ie = (e, a, s) => {
  const l = u(null);
  U(() => {
    l.value = new Ee(e, a, s);
  }), $(() => {
    var t;
    (t = l.value) == null || t.destroy();
  });
}, we = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    settings: null,
    store: null,
    onScroll: { type: Function }
  },
  setup(e) {
    const { settings: a, store: s, onScroll: l } = e, t = u(null), d = u(null), f = u(0);
    return Ie(d, t, l), M(() => {
      var v;
      if (!t.value || !d.value || !s.isEnabled && !a.enableScrollbarWhileSmoothpageDisabled)
        return;
      const o = (v = document.getElementById("smoothpageBody")) == null ? void 0 : v.getBoundingClientRect().height;
      if (!o)
        return;
      const y = d.value.getBoundingClientRect().height, m = t.value.getBoundingClientRect().height;
      f.value = Number(s.currentScrollPosition) / (o - y) * (y - m);
    }), (o, y) => {
      var m, v, C;
      return Y(), j("div", {
        style: V({ width: `${(m = e.settings.scrollbarSettings) == null ? void 0 : m.trackWidth}` }),
        class: "t-smoothscrollbar"
      }, [
        K("div", {
          ref_key: "track",
          ref: d,
          class: "t-smoothscrollbar--track"
        }, [
          K("div", {
            ref_key: "thumb",
            ref: t,
            style: V({
              width: (v = e.settings.scrollbarSettings) == null ? void 0 : v.thumbWidth,
              height: (C = e.settings.scrollbarSettings) == null ? void 0 : C.thumbHeight,
              transform: `translateY(${f.value}px)`
            }),
            class: "t-smoothscrollbar--thumb"
          }, null, 4)
        ], 512)
      ], 4);
    };
  }
});
const pe = (e) => {
  var a, s, l, t, d, f, o, y, m, v, C, N, p, P, h, i, E, T;
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
      smoothPageBody: ((s = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : s.smoothPageBody) || r.defaultClassNames.smoothPageBody,
      smoothPageBodyPosition: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageBodyPosition) || r.defaultClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPageEnabled) || r.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((d = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : d.smoothPageVertical) || r.defaultClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((f = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : f.smoothPageVerticalReverse) || r.defaultClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageHorizontal) || r.defaultClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((y = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : y.smoothPageHorizontalReverse) || r.defaultClassNames.smoothPageHorizontalReverse,
      scrollbarEnabled: ((m = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : m.scrollbarEnabled) || r.defaultClassNames.scrollbarEnabled
    },
    additionalClassNames: {
      smoothPage: ((v = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : v.smoothPage) || r.additionalClassNames.smoothPage,
      smoothPageBody: ((C = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : C.smoothPageBody) || r.additionalClassNames.smoothPageBody,
      smoothPageBodyPosition: ((N = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : N.smoothPageBodyPosition) || r.additionalClassNames.smoothPageBodyPosition,
      smoothPageEnabled: ((p = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : p.smoothPageEnabled) || r.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((P = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : P.smoothPageVertical) || r.additionalClassNames.smoothPageVertical,
      smoothPageVerticalReverse: ((h = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : h.smoothPageVerticalReverse) || r.additionalClassNames.smoothPageVerticalReverse,
      smoothPageHorizontal: ((i = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : i.smoothPageHorizontal) || r.additionalClassNames.smoothPageHorizontal,
      smoothPageHorizontalReverse: ((E = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : E.smoothPageHorizontalReverse) || r.additionalClassNames.smoothPageHorizontalReverse,
      scrollbarEnabled: ((T = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : T.scrollbarEnabled) || r.additionalClassNames.scrollbarEnabled
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
  enableScrollbarWhileSmoothpageDisabled: !1,
  scrollbarComponent: we,
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
}, Ne = /* @__PURE__ */ Z({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const a = e, s = u(null), l = u(null), t = Q(), d = ie("smoothPageSettings", void 0), o = {
      ...pe(d),
      ...(a == null ? void 0 : a.settings) || {}
      //mb should de removed?
    };
    M(() => {
      t.setSettings(o);
    }), U(() => {
      var h, i;
      t.setSettings(o), t.setDeviceType(Ce()), t.setIsEnabled(p()), t.setBrowser(ye()), t.setIsMounted(!0), setTimeout(() => t.setIsEarlierMounted(!0), 100), o.enableScrollbar && o.enableScrollbarWhileSmoothpageDisabled && (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.add(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((i = document.querySelector("html")) == null || i.classList.add(o.additionalClassNames.scrollbarEnabled)));
    }), $(() => {
      t.setIsMounted(!1);
    }), M(() => {
      t.isEnabled && !t.isInited ? y() : !t.isEnabled && t.isInited && m();
    });
    function y() {
      var h, i;
      t.setIsInited(!0), t.setNeedReload(!1), v(!0), o.enableScrollbar && (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.add(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((i = document.querySelector("html")) == null || i.classList.add(o.additionalClassNames.scrollbarEnabled))), s.value = new ve(document, C, o, t.browser), o.resetScrollPositionOnStateChanging && (t.setCurrentScrollPosition(0), t.setNextScrollPosition(0), window.scroll(0, 0)), o.reloadPageOnStateChanging && t.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function m() {
      var h, i, E;
      t.setIsInited(!1), v(!1), o.enableScrollbarWhileSmoothpageDisabled || (o.defaultClassNames.scrollbarEnabled && ((h = document.querySelector("html")) == null || h.classList.remove(o.defaultClassNames.scrollbarEnabled)), o.additionalClassNames.scrollbarEnabled && ((i = document.querySelector("html")) == null || i.classList.remove(o.additionalClassNames.scrollbarEnabled))), (E = s.value) == null || E.destroy(), console.log(o.resetScrollPositionOnStateChanging), o.resetScrollPositionOnStateChanging ? (t.setCurrentScrollPosition(0), t.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, t.savedCurrentScrollPositionForDestroy), o.reloadPageOnStateChanging && t.isEarlierMounted && setTimeout(() => location.reload(), 100);
    }
    function v(h) {
      const i = document.querySelector("html");
      if (i) {
        if (h) {
          o.defaultClassNames.smoothPageEnabled && i.classList.add(o.defaultClassNames.smoothPageEnabled), o.additionalClassNames.smoothPageEnabled && i.classList.add(o.additionalClassNames.smoothPageEnabled), o.mode === "vertical" ? (o.defaultClassNames.smoothPageVertical && i.classList.add(o.defaultClassNames.smoothPageVertical), o.additionalClassNames.smoothPageVertical && i.classList.add(o.additionalClassNames.smoothPageVertical)) : o.mode === "vertical-reverse" ? (o.defaultClassNames.smoothPageVerticalReverse && i.classList.add(o.defaultClassNames.smoothPageVerticalReverse), o.additionalClassNames.smoothPageVerticalReverse && i.classList.add(o.additionalClassNames.smoothPageVerticalReverse)) : o.mode === "horizontal" ? (o.defaultClassNames.smoothPageHorizontal && i.classList.add(o.defaultClassNames.smoothPageHorizontal), o.additionalClassNames.smoothPageHorizontal && i.classList.add(o.additionalClassNames.smoothPageHorizontal)) : o.mode === "horizontal-reverse" && (o.defaultClassNames.smoothPageHorizontalReverse && i.classList.add(o.defaultClassNames.smoothPageHorizontalReverse), o.additionalClassNames.smoothPageHorizontalReverse && i.classList.add(o.additionalClassNames.smoothPageHorizontalReverse));
          return;
        }
        o.defaultClassNames.smoothPageEnabled && i.classList.remove(o.defaultClassNames.smoothPageEnabled), o.additionalClassNames.smoothPageEnabled && i.classList.remove(o.additionalClassNames.smoothPageEnabled), o.mode === "vertical" ? (o.defaultClassNames.smoothPageVertical && i.classList.remove(o.defaultClassNames.smoothPageVertical), o.additionalClassNames.smoothPageVertical && i.classList.remove(o.additionalClassNames.smoothPageVertical)) : o.mode === "vertical-reverse" ? (o.defaultClassNames.smoothPageVerticalReverse && i.classList.remove(o.defaultClassNames.smoothPageVerticalReverse), o.additionalClassNames.smoothPageVerticalReverse && i.classList.remove(o.additionalClassNames.smoothPageVerticalReverse)) : o.mode === "horizontal" ? (o.defaultClassNames.smoothPageHorizontal && i.classList.remove(o.defaultClassNames.smoothPageHorizontal), o.additionalClassNames.smoothPageHorizontal && i.classList.remove(o.additionalClassNames.smoothPageHorizontal)) : o.mode === "horizontal-reverse" && (o.defaultClassNames.smoothPageHorizontalReverse && i.classList.remove(o.defaultClassNames.smoothPageHorizontalReverse), o.additionalClassNames.smoothPageHorizontalReverse && i.classList.remove(o.additionalClassNames.smoothPageHorizontalReverse));
      }
    }
    M(() => {
      t.needReload && m();
    });
    function C(h) {
      if (t.isPreventScroll)
        return;
      const i = N();
      i && (t.isEnabled ? t.setNextScrollPosition(Math.max(0, Math.min(t.currentScrollPosition + h.wheel, i))) : window.scrollTo({ top: window.scrollY + h.wheel }));
    }
    function N() {
      if (!l.value)
        return 0;
      const h = l.value.getBoundingClientRect().height - window.innerHeight, i = l.value.getBoundingClientRect().width - window.innerWidth;
      return o.mode === "vertical" || o.mode === "vertical-reverse" ? h : o.mode === "horizontal" || o.mode === "horizontal-reverse" ? i : 0;
    }
    Pe(() => {
      t.isPreventScroll || t.isMounted && (t.isTriggeringScrollPosition || (o.watchIsEnabledOn === "load-resize" && t.setIsEnabled(p()), t.isEnabled ? (t.setCurrentScrollPosition(Se(t.currentScrollPosition, t.nextScrollPosition, o.smoothness)), t.setSavedCurrentScrollPositionForDestroy(t.currentScrollPosition)) : (t.setCurrentScrollPosition(window.scrollY), t.setNextScrollPosition(window.scrollY))));
    }, o.renderDelay);
    function p() {
      return t.isDestroyedByUser ? !1 : (o.enableOnTouchDevices || t.deviceType === g.DESKTOP) && window.innerWidth >= o.minWidth;
    }
    const P = I(() => {
      if (t.isEnabled) {
        if (o.mode === "vertical")
          return {
            transform: `translate3d(0, ${-t.currentScrollPosition}px, 0)`
          };
        if (o.mode === "vertical-reverse")
          return {
            transform: `translate3d(0, ${t.currentScrollPosition}px, 0)`
          };
        if (o.mode === "horizontal")
          return {
            transform: `translate3d(${-t.currentScrollPosition}px, 0, 0)`
          };
        if (o.mode === "horizontal-reverse")
          return {
            transform: `translate3d(${t.currentScrollPosition}px, 0, 0)`
          };
      }
      return {};
    });
    return (h, i) => (Y(), j("div", {
      class: W([o.defaultClassNames.smoothPage, o.additionalClassNames.smoothPage])
    }, [
      K("div", {
        id: "smoothpageBody",
        ref_key: "smoothpageBodyRef",
        ref: l,
        style: V(_(P)),
        class: W([o.defaultClassNames.smoothPageBody, o.additionalClassNames.smoothPageBody])
      }, [
        K("div", {
          class: W([o.defaultClassNames.smoothPageBodyPosition, o.additionalClassNames.smoothPageBodyPosition])
        }, [
          ce(h.$slots, "default")
        ], 2)
      ], 6),
      (o.enableScrollbarWhileSmoothpageDisabled || _(t).isEnabled) && o.enableScrollbar && o.scrollbarComponent ? (Y(), de(o.scrollbarComponent, {
        key: 0,
        settings: o,
        store: _(t),
        onScroll: C
      }, null, 8, ["store"])) : he("", !0)
    ], 2));
  }
});
const Te = J("publicSmoothPage", () => {
  const e = Q(), a = I(() => e.settings), s = I(() => e.currentScrollPosition), l = I(() => e.isEnabled), t = I(() => e.isTriggeringScrollPosition), d = I(() => e.isMounted), f = I(() => e.isInited), o = I(() => e.deviceType), y = I(() => e.browser), m = I(() => e.isPreventScroll);
  return {
    settings: a,
    currentScrollPosition: s,
    isEnabled: l,
    isTriggeringScrollPosition: t,
    isMounted: d,
    isInited: f,
    deviceType: o,
    browser: y,
    isPreventScroll: m,
    preventScroll: (P) => e.preventScroll(P),
    reload: (P = !1) => e.reload(P),
    destroy: (P = !1) => e.destroy(P),
    init: (P = !1) => e.init(P)
  };
}), ze = {
  install(e, a) {
    e.component("SmoothPage", Ne), e.provide("smoothPageSettings", a || {});
  }
};
export {
  Ne as SmoothPage,
  ze as default,
  Te as useSmoothPage
};
