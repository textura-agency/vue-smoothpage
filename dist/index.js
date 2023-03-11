var ae = Object.defineProperty;
var te = (e, a, o) => a in e ? ae(e, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[a] = o;
var f = (e, a, o) => (te(e, typeof a != "symbol" ? a + "" : a, o), o), z = (e, a, o) => {
  if (!a.has(e))
    throw TypeError("Cannot " + o);
};
var h = (e, a, o) => (z(e, a, "read from private field"), o ? o.call(e) : a.get(e)), w = (e, a, o) => {
  if (a.has(e))
    throw TypeError("Cannot add the same private member more than once");
  a instanceof WeakSet ? a.add(e) : a.set(e, o);
}, k = (e, a, o, l) => (z(e, a, "write to private field"), l ? l.call(e, o) : a.set(e, o), o);
var b = (e, a, o) => (z(e, a, "access private method"), o);
import { ref as c, onMounted as U, onUnmounted as $, defineComponent as le, inject as ne, reactive as re, watchEffect as H, computed as I, openBlock as ie, createElementBlock as se, normalizeClass as G, createElementVNode as ce, normalizeStyle as he, unref as de, renderSlot as me } from "vue";
import { defineStore as K } from "pinia";
class ue {
  constructor(a, o, l) {
    f(this, "element");
    f(this, "cb");
    f(this, "settings");
    f(this, "listener", function(a) {
      typeof this.cb == "function" && a.deltaY && this.cb({
        dir: a.deltaY / Math.abs(a.deltaY),
        wheel: a.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = a, this.cb = o, this.settings = l, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var P, S, _, X, M, Y, p, A, L, B;
class fe {
  constructor(a, o, l) {
    w(this, _);
    w(this, M);
    w(this, p);
    w(this, L);
    w(this, P, {
      sY: 0,
      eY: 0
    });
    f(this, "prevY", 0);
    w(this, S, void 0);
    f(this, "cb");
    f(this, "deltaY");
    f(this, "minDelta");
    f(this, "settings");
    this.cb = o, k(this, S, a), b(this, _, X).call(this), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    h(this, S).removeEventListener("touchstart", b(this, M, Y), !1), h(this, S).removeEventListener("touchmove", b(this, p, A), !1), h(this, S).removeEventListener("touchend", b(this, L, B), !1);
  }
  useCallback(a) {
    typeof this.cb == "function" && a && this.cb({
      dir: a / Math.abs(a),
      wheel: a * this.settings.touchmoveIntensity
    });
  }
}
P = new WeakMap(), S = new WeakMap(), _ = new WeakSet(), X = function() {
  h(this, S).addEventListener("touchstart", b(this, M, Y).bind(this), !1), h(this, S).addEventListener("touchmove", b(this, p, A).bind(this), !1), h(this, S).addEventListener("touchend", b(this, L, B).bind(this), !1);
}, M = new WeakSet(), Y = function(a) {
  const o = a.touches[0];
  h(this, P).sY = o.screenY, this.prevY = h(this, P).sY, h(this, P).eY = h(this, P).sY;
}, p = new WeakSet(), A = function(a) {
  const o = a.touches[0];
  this.prevY = h(this, P).eY, h(this, P).eY = o.screenY, this.deltaY = h(this, P).sY - h(this, P).eY;
  const l = h(this, P).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (h(this, P).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, L = new WeakSet(), B = function(a) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
var C = /* @__PURE__ */ ((e) => (e.MS_EDGE = "MS_EDGE", e.EDGE_CHROMIUM_BASED = "EDGE_CHROMIUM_BASED", e.OPERA = "OPERA", e.CHROME = "CHROME", e.MS_IE = "MS_IE", e.MOZILLA_FIREFOX = "MOZILLA_FIREFOX", e.SAFARI = "SAFARI", e.OTHER = "OTHER", e))(C || {});
const ve = () => {
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
class Pe {
  constructor(a, o, l, u) {
    f(this, "swipe");
    f(this, "scroll");
    f(this, "keyboard");
    f(this, "callback");
    if (!a) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const t = {
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
    }, v = {
      wheelIntensity: m("WheelIntensity"),
      touchmoveIntensity: m("TouchmoveIntensity"),
      minTouchmoveDistance: t.minTouchmoveDistance
    };
    function m(d) {
      switch (u) {
        case C.SAFARI:
          return t[`safari${d}`];
        case C.CHROME:
          return t[`chrome${d}`];
        case C.OPERA:
          return t[`opera${d}`];
        case (C.MS_EDGE || C.EDGE_CHROMIUM_BASED):
          return t[`edge${d}`];
        case C.MOZILLA_FIREFOX:
          return t[`mozilla${d}`];
        default:
          return d === "WheelIntensity" ? t.wheelIntensity : t.touchmoveIntensity;
      }
    }
    this.callback = o || (() => {
    }), this.scroll = new ue(a, this.controlScroll.bind(this), v), this.swipe = new fe(a, this.controlScroll.bind(this), v), this.destroy = this.destroy.bind(this);
  }
  controlScroll(a) {
    this.callback(a);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const ye = (e, a = 0) => {
  const o = c(!0), l = c(performance.now());
  U(() => u(0)), $(() => o.value = !1);
  function u(t) {
    o.value && (t - l.value > a && (e(), l.value = performance.now()), requestAnimationFrame(u));
  }
}, Ie = (e, a, o) => a === 0 && e < 0.1 ? 0 : e + (a - e) * o;
var x = /* @__PURE__ */ ((e) => (e.DESKTOP = "DESKTOP", e.TABLET = "TABLET", e.MOBILE = "MOBILE", e))(x || {});
function Se() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "TABLET" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "MOBILE" : "DESKTOP";
}
const Z = K("privateSmoothPage", () => {
  const e = c(null), a = c(0), o = c(0), l = c(!1), u = c(!1), t = c(!1), v = c(!1), m = c(!1), d = c(x.DESKTOP), y = c(C.OTHER), E = c(!1), T = c(!1), O = c(!1), D = c(0), s = (n) => {
    e.value = n;
  }, i = (n) => {
    a.value = n;
  }, R = (n) => {
    u.value = n;
  }, N = (n) => {
    o.value = n;
  }, q = (n) => {
    l.value = n;
  }, j = (n) => {
    t.value = n;
  }, J = (n) => {
    m.value = n;
  }, Q = (n) => {
    v.value = n;
  }, g = (n) => {
    d.value = n;
  }, ee = (n) => {
    y.value = n;
  }, V = (n) => {
    T.value = n;
  }, F = (n) => {
    E.value = n;
  }, oe = (n) => {
    O.value = n;
  }, W = (n) => {
    D.value = n;
  };
  return {
    settings: e,
    currentScrollPosition: a,
    isEnabled: u,
    nextScrollPosition: o,
    isTriggeringScrollPosition: l,
    isMounted: t,
    isInited: m,
    isEarlierMounted: v,
    deviceType: d,
    needReload: T,
    isDestroyedByUser: E,
    browser: y,
    isPreventScroll: O,
    savedCurrentScrollPositionForDestroy: D,
    setSettings: s,
    setCurrentScrollPosition: i,
    setIsEnabled: R,
    setNextScrollPosition: N,
    setIsTriggeringScrollPosition: q,
    setIsMounted: j,
    setIsInited: J,
    setIsEarlierMounted: Q,
    setDeviceType: g,
    setNeedReload: V,
    setBrowser: ee,
    preventScroll: oe,
    setSavedCurrentScrollPositionForDestroy: W,
    reload: (n = !1) => {
      V(!0), n && (i(0), N(0), W(0));
    },
    destroy: (n = !1) => {
      F(!0), n && (i(0), N(0), W(0));
    },
    init: (n = !1) => {
      F(!1), n && (i(0), N(0), W(0));
    }
  };
}), Ee = (e) => {
  var a, o, l, u, t, v, m, d, y, E;
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
    defaultClassNames: {
      smoothPage: ((a = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : a.smoothPage) || r.defaultClassNames.smoothPage,
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || r.defaultClassNames.smoothPageBody,
      smoothPageEnabled: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageEnabled) || r.defaultClassNames.smoothPageEnabled,
      smoothPageVertical: ((u = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : u.smoothPageVertical) || r.defaultClassNames.smoothPageVertical,
      smoothPageHorizontal: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPageHorizontal) || r.defaultClassNames.smoothPageHorizontal
    },
    additionalClassNames: {
      smoothPage: ((v = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : v.smoothPage) || r.additionalClassNames.smoothPage,
      smoothPageBody: ((m = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : m.smoothPageBody) || r.additionalClassNames.smoothPageBody,
      smoothPageEnabled: ((d = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : d.smoothPageEnabled) || r.additionalClassNames.smoothPageEnabled,
      smoothPageVertical: ((y = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : y.smoothPageVertical) || r.additionalClassNames.smoothPageVertical,
      smoothPageHorizontal: ((E = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : E.smoothPageHorizontal) || r.additionalClassNames.smoothPageHorizontal
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
}, be = /* @__PURE__ */ le({
  __name: "index",
  props: {
    settings: null
  },
  setup(e) {
    const a = e, o = Z(), l = ne("smoothPageSettings", void 0), u = Ee(l), t = re({
      ...u,
      ...(a == null ? void 0 : a.settings) || {}
      //mb should de removed?
    });
    H(() => {
      o.setSettings(t);
    });
    const v = c(null), m = c(null);
    U(() => {
      o.setSettings(t), o.setDeviceType(Se()), o.setIsEnabled(O()), o.setBrowser(ve()), o.setIsMounted(!0), setTimeout(() => o.setIsEarlierMounted(!0), 100);
    }), $(() => {
      o.setIsMounted(!1);
    }), H(() => {
      o.isEnabled && !o.isInited ? d() : !o.isEnabled && o.isInited && y();
    });
    function d() {
      v.value = new Pe(document, T, t, o.browser), t.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), t.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!0), o.setNeedReload(!1), E(!0);
    }
    function y() {
      var s;
      (s = v.value) == null || s.destroy(), t.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), t.reloadPageOnStateChanging && o.isEarlierMounted && setTimeout(() => location.reload(), 100), o.setIsInited(!1), E(!1);
    }
    function E(s) {
      const i = document.querySelector("html");
      if (i) {
        if (s) {
          t.defaultClassNames.smoothPageEnabled && i.classList.add(t.defaultClassNames.smoothPageEnabled), t.additionalClassNames.smoothPageEnabled && i.classList.add(t.additionalClassNames.smoothPageEnabled), t.mode === "vertical" ? (t.defaultClassNames.smoothPageVertical && i.classList.add(t.defaultClassNames.smoothPageVertical), t.additionalClassNames.smoothPageVertical && i.classList.add(t.additionalClassNames.smoothPageVertical)) : (t.defaultClassNames.smoothPageHorizontal && i.classList.add(t.defaultClassNames.smoothPageHorizontal), t.additionalClassNames.smoothPageHorizontal && i.classList.add(t.additionalClassNames.smoothPageHorizontal));
          return;
        }
        t.defaultClassNames.smoothPageEnabled && i.classList.remove(t.defaultClassNames.smoothPageEnabled), t.additionalClassNames.smoothPageEnabled && i.classList.remove(t.additionalClassNames.smoothPageEnabled), t.mode === "vertical" ? (t.defaultClassNames.smoothPageVertical && i.classList.remove(t.defaultClassNames.smoothPageVertical), t.additionalClassNames.smoothPageVertical && i.classList.remove(t.additionalClassNames.smoothPageVertical)) : (t.defaultClassNames.smoothPageHorizontal && i.classList.remove(t.defaultClassNames.smoothPageHorizontal), t.additionalClassNames.smoothPageHorizontal && i.classList.remove(t.additionalClassNames.smoothPageHorizontal));
      }
    }
    H(() => {
      o.needReload && y();
    });
    function T(s) {
      if (o.isPreventScroll || !m.value)
        return;
      const i = m.value.getBoundingClientRect().height - window.innerHeight, R = m.value.getBoundingClientRect().width - window.innerWidth, N = t.mode === "vertical" ? i : R;
      o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + s.wheel, N)));
    }
    ye(() => {
      o.isPreventScroll || o.isMounted && (o.isTriggeringScrollPosition || (t.watchIsEnabledOn === "load-resize" && o.setIsEnabled(O()), o.isEnabled ? (o.setCurrentScrollPosition(Ie(o.currentScrollPosition, o.nextScrollPosition, t.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, t.renderDelay);
    function O() {
      return o.isDestroyedByUser ? !1 : (t.enableOnTouchDevices || o.deviceType === x.DESKTOP) && window.innerWidth >= t.minWidth;
    }
    const D = I(() => {
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
    return (s, i) => (ie(), se("div", {
      class: G([t.defaultClassNames.smoothPage, t.additionalClassNames.smoothPage])
    }, [
      ce("div", {
        ref_key: "contentRef",
        ref: m,
        style: he(de(D)),
        class: G([t.defaultClassNames.smoothPageBody, t.additionalClassNames.smoothPageBody])
      }, [
        me(s.$slots, "default")
      ], 6)
    ], 2));
  }
});
const Me = K("publicSmoothPage", () => {
  const e = Z(), a = I(() => e.settings), o = I(() => e.currentScrollPosition), l = I(() => e.isEnabled), u = I(() => e.isTriggeringScrollPosition), t = I(() => e.isMounted), v = I(() => e.isInited), m = I(() => e.deviceType), d = I(() => e.browser), y = I(() => e.isPreventScroll);
  return {
    settings: a,
    currentScrollPosition: o,
    isEnabled: l,
    isTriggeringScrollPosition: u,
    isMounted: t,
    isInited: v,
    deviceType: m,
    browser: d,
    isPreventScroll: y,
    preventScroll: (s) => e.preventScroll(s),
    reload: (s = !1) => e.reload(s),
    destroy: (s = !1) => e.destroy(s),
    init: (s = !1) => e.init(s)
  };
}), pe = {
  install(e, a) {
    e.component("SmoothPage", be), e.provide("smoothPageSettings", a || {});
  }
};
export {
  be as SmoothPage,
  pe as default,
  Me as useSmoothPage
};
