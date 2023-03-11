var ee = Object.defineProperty;
var oe = (e, l, o) => l in e ? ee(e, l, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[l] = o;
var s = (e, l, o) => (oe(e, typeof l != "symbol" ? l + "" : l, o), o), R = (e, l, o) => {
  if (!l.has(e))
    throw TypeError("Cannot " + o);
};
var m = (e, l, o) => (R(e, l, "read from private field"), o ? o.call(e) : l.get(e)), p = (e, l, o) => {
  if (l.has(e))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(e) : l.set(e, o);
}, x = (e, l, o, a) => (R(e, l, "write to private field"), a ? a.call(e, o) : l.set(e, o), o);
var O = (e, l, o) => (R(e, l, "access private method"), o);
import { ref as h, onMounted as F, onUnmounted as U, defineComponent as le, inject as te, reactive as ae, watchEffect as H, computed as P, openBlock as ne, createElementBlock as se, normalizeClass as V, createElementVNode as ie, normalizeStyle as re, unref as ce, renderSlot as he } from "vue";
import { defineStore as G } from "pinia";
class de {
  constructor(l, o, a) {
    s(this, "element");
    s(this, "cb");
    s(this, "settings");
    s(this, "subscribe", function() {
      this.element.addEventListener("wheel", this.listener);
    }.bind(this));
    s(this, "unsubscribe", function() {
      this.element.removeEventListener("wheel", this.listener);
    }.bind(this));
    s(this, "listener", function(l) {
      typeof this.cb == "function" && l.deltaY && this.cb({
        dir: l.deltaY / Math.abs(l.deltaY),
        wheel: l.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = l, this.cb = o, this.settings = a, this.subscribe();
  }
}
var f, I, T, W, M, z, L, Y;
class ue {
  constructor(l, o, a) {
    p(this, T);
    p(this, M);
    p(this, L);
    p(this, f, {
      sY: 0,
      eY: 0
    });
    s(this, "prevY", 0);
    p(this, I, void 0);
    s(this, "cb");
    s(this, "deltaY");
    s(this, "minDelta");
    s(this, "settings");
    s(this, "subscribe", function() {
      m(this, I).addEventListener("touchstart", O(this, T, W).bind(this), !1), m(this, I).addEventListener("touchmove", O(this, M, z).bind(this), !1), m(this, I).addEventListener("touchend", O(this, L, Y).bind(this), !1);
    }.bind(this));
    s(this, "unsubscribe", function() {
      m(this, I).removeEventListener("touchstart", O(this, T, W), !1), m(this, I).removeEventListener("touchmove", O(this, M, z), !1), m(this, I).removeEventListener("touchend", O(this, L, Y), !1);
    }.bind(this));
    this.cb = o, x(this, I, l), this.subscribe(), this.settings = a, this.minDelta = a.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.unsubscribe = this.unsubscribe.bind(this);
  }
  useCallback(l) {
    typeof this.cb == "function" && l && this.cb({
      dir: l / Math.abs(l),
      wheel: l * this.settings.touchmoveIntensity
    });
  }
}
f = new WeakMap(), I = new WeakMap(), T = new WeakSet(), W = function(l) {
  const o = l.touches[0];
  m(this, f).sY = o.screenY, this.prevY = m(this, f).sY, m(this, f).eY = m(this, f).sY;
}, M = new WeakSet(), z = function(l) {
  const o = l.touches[0];
  this.prevY = m(this, f).eY, m(this, f).eY = o.screenY, this.deltaY = m(this, f).sY - m(this, f).eY;
  const a = m(this, f).sY - this.prevY;
  Math.abs(a) > Math.abs(this.deltaY) && (m(this, f).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, L = new WeakSet(), Y = function(l) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class me {
  constructor(l, o, a) {
    s(this, "element");
    s(this, "callback");
    s(this, "settings");
    s(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.listener);
    }.bind(this));
    s(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.listener);
    }.bind(this));
    s(this, "listener", function(l) {
      if (!this.settings.enableScrollOnKeyboard || typeof this.callback != "function")
        return;
      const o = l.keyCode;
      console.log(o), this.settings.mode === "vertical" ? (this.settings.scrollDownOnKeys.forEach((a) => {
        a.code === o && this.callback({ dir: 1, wheel: a.distance });
      }), this.settings.scrollUpOnKeys.forEach((a) => {
        a.code === o && this.callback({ dir: -1, wheel: a.distance * -1 });
      })) : this.settings.mode === "horizontal" && (this.settings.scrollRightOnKeys.forEach((a) => {
        a.code === o && this.callback({ dir: 1, wheel: a.distance });
      }), this.settings.scrollLeftOnKeys.forEach((a) => {
        a.code === o && this.callback({ dir: -1, wheel: a.distance * -1 });
      }));
    }.bind(this));
    this.element = l, this.callback = o, this.settings = a, this.subscribe();
  }
}
class be {
  constructor(l) {
    s(this, "element");
    s(this, "pressed", {});
    s(this, "subscribe", function() {
      this.element.addEventListener("keydown", this.keydown), this.element.addEventListener("keyup", this.keyup);
    }.bind(this));
    s(this, "unsubscribe", function() {
      this.element.removeEventListener("keydown", this.keydown), this.element.removeEventListener("keyup", this.keyup);
    }.bind(this));
    s(this, "isHold", function(l) {
      return !!this.pressed[l];
    }.bind(this));
    s(this, "keydown", function(l) {
      const o = l.keyCode;
      this.pressed[o] || (this.pressed[o] = !0);
    }.bind(this));
    s(this, "keyup", function(l) {
      const o = l.keyCode;
      this.pressed[o] && (this.pressed[o] = !1);
    }.bind(this));
    this.element = l, this.subscribe();
  }
}
var E = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(E || {});
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
class fe {
  constructor(l, o, a, d) {
    s(this, "swipe");
    s(this, "scroll");
    s(this, "keyboard");
    s(this, "shotcuts");
    s(this, "settings");
    s(this, "callback");
    s(this, "isSubscribed", !1);
    s(this, "subscribe", function() {
      this.isSubscribed = !0, this.scroll.subscribe(), this.swipe.subscribe(), this.keyboard.subscribe();
    }.bind(this));
    s(this, "unsubscribe", function() {
      this.isSubscribed = !1, this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe();
    }.bind(this));
    const t = {
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
    }, b = {
      wheelIntensity: y("WheelIntensity"),
      touchmoveIntensity: y("TouchmoveIntensity"),
      minTouchmoveDistance: t.minTouchmoveDistance
    };
    function y(u) {
      switch (d) {
        case E.SAFARI:
          return t[`safari${u}`];
        case E.CHROME:
          return t[`chrome${u}`];
        case E.OPERA:
          return t[`opera${u}`];
        case (E.MS_EDGE || E.EDGE_CHROMIUM_BASED):
          return t[`edge${u}`];
        case E.MOZILLA_FIREFOX:
          return t[`mozilla${u}`];
        default:
          return u === "WheelIntensity" ? t.wheelIntensity : t.touchmoveIntensity;
      }
    }
    const v = {
      mode: a.mode,
      enableScrollOnKeyboard: a.enableScrollOnKeyboard,
      scrollDownOnKeys: a.scrollDownOnKeys,
      scrollUpOnKeys: a.scrollUpOnKeys,
      scrollLeftOnKeys: a.scrollLeftOnKeys,
      scrollRightOnKeys: a.scrollRightOnKeys
    };
    this.callback = o, this.settings = a, this.scroll = new de(l, this.controlScroll.bind(this), b), this.swipe = new ue(l, this.controlScroll.bind(this), b), this.keyboard = new me(l, this.controlScroll.bind(this), v), this.shotcuts = new be(l), this.destroy = this.destroy.bind(this), this.isSubscribed = !0;
  }
  controlScroll(l) {
    var a;
    if (!this.callback)
      return;
    let o = !1;
    (a = this.settings.preventScrollOnHoldKeys) == null || a.forEach((d) => {
      let t = 0;
      d.code.forEach((b) => {
        this.shotcuts.isHold(b) && t++;
      }), t === d.code.length && (this.unsubscribe(), o = !0);
    }), console.log(o, this.isSubscribed), !o && !this.isSubscribed && this.subscribe(), this.callback(l);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.unsubscribe(), this.keyboard.unsubscribe(), this.shotcuts.unsubscribe();
  }
}
const ve = (e, l = 0) => {
  const o = h(!0), a = h(performance.now());
  F(() => d(0)), U(() => o.value = !1);
  function d(t) {
    o.value && (t - a.value > l && (e(), a.value = performance.now()), requestAnimationFrame(d));
  }
}, Pe = (e, l, o) => l === 0 && e < 0.1 ? 0 : e + (l - e) * o;
var _ = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(_ || {});
function Ie() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const $ = G("privateSmoothPage", () => {
  const e = h(null), l = h(0), o = h(0), a = h(!1), d = h(!1), t = h(!1), b = h(!1), y = h(!1), v = h(_.DESKTOP), u = h(E.OTHER), S = h(!1), D = h(!1), w = h(!1), N = h(0), c = (i) => {
    e.value = i;
  }, r = (i) => {
    l.value = i;
  }, k = (i) => {
    d.value = i;
  }, C = (i) => {
    o.value = i;
  }, X = (i) => {
    a.value = i;
  }, Z = (i) => {
    t.value = i;
  }, q = (i) => {
    y.value = i;
  }, j = (i) => {
    b.value = i;
  }, J = (i) => {
    v.value = i;
  }, Q = (i) => {
    u.value = i;
  }, A = (i) => {
    D.value = i;
  }, B = (i) => {
    S.value = i;
  }, g = (i) => {
    w.value = i;
  }, K = (i) => {
    N.value = i;
  };
  return {
    settings: e,
    currentScrollPosition: l,
    isEnabled: d,
    nextScrollPosition: o,
    isTriggeringScrollPosition: a,
    isMounted: t,
    isInited: y,
    isEarlierMounted: b,
    deviceType: v,
    needReload: D,
    isDestroyedByUser: S,
    browser: u,
    isPreventScroll: w,
    savedCurrentScrollPositionForDestroy: N,
    setSettings: c,
    setCurrentScrollPosition: r,
    setIsEnabled: k,
    setNextScrollPosition: C,
    setIsTriggeringScrollPosition: X,
    setIsMounted: Z,
    setIsInited: q,
    setIsEarlierMounted: j,
    setDeviceType: J,
    setNeedReload: A,
    setBrowser: Q,
    preventScroll: g,
    setSavedCurrentScrollPositionForDestroy: K,
    reload: (i = !1) => {
      A(!0), i && (r(0), C(0), K(0));
    },
    destroy: (i = !1) => {
      B(!0), i && (r(0), C(0), K(0));
    },
    init: (i = !1) => {
      B(!1), i && (r(0), C(0), K(0));
    }
  };
}), Se = (e) => {
  var l, o, a, d, t, b, y, v, u, S;
  return {
    mode: (e == null ? void 0 : e.mode) || n.mode,
    smoothness: (e == null ? void 0 : e.smoothness) || n.smoothness,
    wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || n.touchmoveIntensity,
    // experimental features
    safariWheelIntensity: (e == null ? void 0 : e.safariWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    safariTouchmoveIntensity: (e == null ? void 0 : e.safariTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || n.wheelIntensity,
    chromeWheelIntensity: (e == null ? void 0 : e.chromeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    chromeTouchmoveIntensity: (e == null ? void 0 : e.chromeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || n.wheelIntensity,
    operaWheelIntensity: (e == null ? void 0 : e.operaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    operaTouchmoveIntensity: (e == null ? void 0 : e.operaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || n.wheelIntensity,
    edgeWheelIntensity: (e == null ? void 0 : e.edgeWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    edgeTouchmoveIntensity: (e == null ? void 0 : e.edgeTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || n.wheelIntensity,
    mozillaWheelIntensity: (e == null ? void 0 : e.mozillaWheelIntensity) || (e == null ? void 0 : e.wheelIntensity) || n.wheelIntensity,
    mozillaTouchmoveIntensity: (e == null ? void 0 : e.mozillaTouchmoveIntensity) || (e == null ? void 0 : e.touchmoveIntensity) || n.wheelIntensity,
    // 
    watchIsEnabledOn: (e == null ? void 0 : e.watchIsEnabledOn) || n.watchIsEnabledOn,
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || n.minTouchmoveDistance,
    minWidth: (e == null ? void 0 : e.minWidth) || n.minWidth,
    renderDelay: (e == null ? void 0 : e.renderDelay) || n.renderDelay,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || n.enableOnTouchDevices,
    resetScrollPositionOnStateChanging: (e == null ? void 0 : e.resetScrollPositionOnStateChanging) || n.resetScrollPositionOnStateChanging,
    reloadPageOnStateChanging: (e == null ? void 0 : e.reloadPageOnStateChanging) || n.reloadPageOnStateChanging,
    enableScrollOnKeyboard: (e == null ? void 0 : e.enableScrollOnKeyboard) || n.enableScrollOnKeyboard,
    scrollDownOnKeys: (e == null ? void 0 : e.scrollDownOnKeys) || n.scrollDownOnKeys,
    scrollUpOnKeys: (e == null ? void 0 : e.scrollUpOnKeys) || n.scrollUpOnKeys,
    scrollRightOnKeys: (e == null ? void 0 : e.scrollRightOnKeys) || n.scrollRightOnKeys,
    scrollLeftOnKeys: (e == null ? void 0 : e.scrollLeftOnKeys) || n.scrollLeftOnKeys,
    preventScrollOnHoldKeys: (e == null ? void 0 : e.preventScrollOnHoldKeys) || n.preventScrollOnHoldKeys,
    defaultClassNames: {
      smoothPage: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPage) || n.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || n.defaultClassNames.smoothPageBody,
      smoothPageEnabled: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPageEnabled) || n.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((d = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : d.smoothPageVertical) || n.defaultClassNames.smoothPageVertical,
      smoothPageHorizontal: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPageHorizontal) || n.defaultClassNames.smoothPageHorizontal
    },
    additionalClassNames: {
      smoothPage: ((b = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : b.smoothPage) || n.additionalClassNames.smoothPage,
      smoothPageBody: ((y = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : y.smoothPageBody) || n.additionalClassNames.smoothPageBody,
      smoothPageEnabled: ((v = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : v.smoothPageEnabled) || n.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((u = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : u.smoothPageVertical) || n.additionalClassNames.smoothPageVertical,
      smoothPageHorizontal: ((S = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : S.smoothPageHorizontal) || n.additionalClassNames.smoothPageHorizontal
    }
  };
}, n = {
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
    smoothPageEnabled: "t-smoothpage--enabled",
    smoothPageVertical: "t-smoothpage--vertical",
    smoothPageHorizontal: "t-smoothpage--horizontal"
  },
  additionalClassNames: {
    smoothPage: "",
    smoothPageBody: "",
    smoothPageEnabled: "",
    smoothPageVertical: "",
    smoothPageHorizontal: ""
  }
}, Ee = /* @__PURE__ */ le({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const l = e, o = $(), a = te("smoothPageSettings", void 0), d = Se(a), t = ae({
      ...d,
      ...(l == null ? void 0 : l.settings) || {}
      //mb should de removed?
    });
    H(() => {
      o.setSettings(t);
    });
    const b = h(null), y = h(null);
    F(() => {
      o.setSettings(t), o.setDeviceType(Ie()), o.setIsEnabled(w()), o.setBrowser(ye()), o.setIsMounted(!0), setTimeout(() => o.setIsEarlierMounted(!0), 100);
    }), U(() => {
      o.setIsMounted(!1);
    }), H(() => {
      o.isEnabled && !o.isInited ? v() : !o.isEnabled && o.isInited && u();
    });
    function v() {
      b.value = new fe(document, D, t, o.browser), t.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), t.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!0), o.setNeedReload(!1), S(!0);
    }
    function u() {
      var c;
      (c = b.value) == null || c.destroy(), t.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), t.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!1), S(!1);
    }
    function S(c) {
      const r = document.querySelector("html");
      if (r) {
        if (c) {
          t.defaultClassNames.smoothPageEnabled && r.classList.add(t.defaultClassNames.smoothPageEnabled), t.additionalClassNames.smoothPageEnabled && r.classList.add(t.additionalClassNames.smoothPageEnabled), t.mode === "vertical" ? (t.defaultClassNames.smoothPageVertical && r.classList.add(t.defaultClassNames.smoothPageVertical), t.additionalClassNames.smoothPageVertical && r.classList.add(t.additionalClassNames.smoothPageVertical)) : (t.defaultClassNames.smoothPageHorizontal && r.classList.add(t.defaultClassNames.smoothPageHorizontal), t.additionalClassNames.smoothPageHorizontal && r.classList.add(t.additionalClassNames.smoothPageHorizontal));
          return;
        }
        t.defaultClassNames.smoothPageEnabled && r.classList.remove(t.defaultClassNames.smoothPageEnabled), t.additionalClassNames.smoothPageEnabled && r.classList.remove(t.additionalClassNames.smoothPageEnabled), t.mode === "vertical" ? (t.defaultClassNames.smoothPageVertical && r.classList.remove(t.defaultClassNames.smoothPageVertical), t.additionalClassNames.smoothPageVertical && r.classList.remove(t.additionalClassNames.smoothPageVertical)) : (t.defaultClassNames.smoothPageHorizontal && r.classList.remove(t.defaultClassNames.smoothPageHorizontal), t.additionalClassNames.smoothPageHorizontal && r.classList.remove(t.additionalClassNames.smoothPageHorizontal));
      }
    }
    H(() => {
      o.needReload && u();
    });
    function D(c) {
      if (o.isPreventScroll || !y.value)
        return;
      const r = y.value.getBoundingClientRect().height - window.innerHeight, k = y.value.getBoundingClientRect().width - window.innerWidth, C = t.mode === "vertical" ? r : k;
      o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + c.wheel, C)));
    }
    ve(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (t.watchIsEnabledOn === "load-resize" && o.setIsEnabled(w()), o.isEnabled ? (o.setCurrentScrollPosition(Pe(o.currentScrollPosition, o.nextScrollPosition, t.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, t.renderDelay);
    function w() {
      return o.isDestroyedByUser ? !1 : (t.enableOnTouchDevices || o.deviceType === _.DESKTOP) && window.innerWidth >= t.minWidth;
    }
    const N = P(() => {
      if (o.isEnabled) {
        if (t.mode === "vertical")
          return {
            transform: `translate3d(0, ${-o.currentScrollPosition}px, 0)`
          };
        if (t.mode === "horizontal")
          return {
            transform: `translate3d(${-o.currentScrollPosition}px, 0, 0)`
          };
      }
      return {};
    });
    return (c, r) => (ne(), se("div", {
      class: V([t.defaultClassNames.smoothPage, t.additionalClassNames.smoothPage])
    }, [
      ie("div", {
        ref_key: "contentRef",
        ref: y,
        style: re(ce(N)),
        class: V([t.defaultClassNames.smoothPageBody, t.additionalClassNames.smoothPageBody])
      }, [
        he(c.$slots, "default")
      ], 6)
    ], 2));
  }
});
const Te = G("publicSmoothPage", () => {
  const e = $(), l = P(() => e.settings), o = P(() => e.currentScrollPosition), a = P(() => e.isEnabled), d = P(() => e.isTriggeringScrollPosition), t = P(() => e.isMounted), b = P(() => e.isInited), y = P(() => e.deviceType), v = P(() => e.browser), u = P(() => e.isPreventScroll);
  return {
    settings: l,
    currentScrollPosition: o,
    isEnabled: a,
    isTriggeringScrollPosition: d,
    isMounted: t,
    isInited: b,
    deviceType: y,
    browser: v,
    isPreventScroll: u,
    preventScroll: (c) => e.preventScroll(c),
    reload: (c = !1) => e.reload(c),
    destroy: (c = !1) => e.destroy(c),
    init: (c = !1) => e.init(c)
  };
}), Me = {
  install(e, l) {
    e.component("SmoothPage", Ee), e.provide("smoothPageSettings", l || {});
  }
};
export {
  Ee as SmoothPage,
  Me as default,
  Te as useSmoothPage
};
