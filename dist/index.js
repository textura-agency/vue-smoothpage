var H = Object.defineProperty;
var $ = (e, t, o) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => ($(e, typeof t != "symbol" ? t + "" : t, o), o), _ = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var a = (e, t, o) => (_(e, t, "read from private field"), o ? o.call(e) : t.get(e)), P = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, W = (e, t, o, l) => (_(e, t, "write to private field"), l ? l.call(e, o) : t.set(e, o), o);
var v = (e, t, o) => (_(e, t, "access private method"), o);
import { ref as c, onMounted as F, onUnmounted as O, defineComponent as j, inject as K, reactive as V, watchEffect as R, computed as G, openBlock as J, createElementBlock as Q, normalizeClass as q, createElementVNode as X, normalizeStyle as Z, unref as ee, renderSlot as te } from "vue";
import { defineStore as A } from "pinia";
class oe {
  constructor(t, o, l) {
    r(this, "element");
    r(this, "cb");
    r(this, "settings");
    r(this, "listener", function(t) {
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
var d, m, M, U, E, B, I, g, Y, L;
class se {
  constructor(t, o, l) {
    P(this, M);
    P(this, E);
    P(this, I);
    P(this, Y);
    P(this, d, {
      sY: 0,
      eY: 0
    });
    r(this, "prevY", 0);
    P(this, m, void 0);
    r(this, "cb");
    r(this, "deltaY");
    r(this, "minDelta");
    r(this, "settings");
    this.cb = o, W(this, m, t), v(this, M, U).call(this), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    a(this, m).removeEventListener("touchstart", v(this, E, B), !1), a(this, m).removeEventListener("touchmove", v(this, I, g), !1), a(this, m).removeEventListener("touchend", v(this, Y, L), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
d = new WeakMap(), m = new WeakMap(), M = new WeakSet(), U = function() {
  a(this, m).addEventListener("touchstart", v(this, E, B).bind(this), !1), a(this, m).addEventListener("touchmove", v(this, I, g).bind(this), !1), a(this, m).addEventListener("touchend", v(this, Y, L).bind(this), !1);
}, E = new WeakSet(), B = function(t) {
  const o = t.touches[0];
  a(this, d).sY = o.screenY, this.prevY = a(this, d).sY, a(this, d).eY = a(this, d).sY;
}, I = new WeakSet(), g = function(t) {
  const o = t.touches[0];
  this.prevY = a(this, d).eY, a(this, d).eY = o.screenY, this.deltaY = a(this, d).sY - a(this, d).eY;
  const l = a(this, d).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (a(this, d).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, Y = new WeakSet(), L = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class ne {
  constructor(t, o, l) {
    r(this, "swipe");
    r(this, "scroll");
    r(this, "keyboard");
    r(this, "callback");
    if (!t) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const n = {
      wheelIntensity: l.wheelIntensity || 1,
      touchmoveIntensity: l.touchmoveIntensity || 1,
      minTouchmoveDistance: l.minTouchmoveDistance || 40
    };
    this.callback = o || (() => {
    }), this.scroll = new oe(t, this.controlScroll.bind(this), n), this.swipe = new se(t, this.controlScroll.bind(this), n), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const ie = (e, t = 0) => {
  const o = c(!0), l = c(performance.now());
  F(() => n(0)), O(() => o.value = !1);
  function n(s) {
    o.value && (s - l.value > t && (e(), l.value = performance.now()), requestAnimationFrame(n));
  }
}, le = (e, t, o = 0.2) => e + (t - e) * o, z = A("privateSmoothPage", () => {
  const e = c(0), t = c(0), o = c(!1), l = c(!1), n = c(!1), s = c(!1), f = c("desktop"), S = c(!1), N = c(!1), C = c(0), p = (i) => {
    e.value = i;
  }, T = (i) => {
    l.value = i;
  }, w = (i) => {
    t.value = i;
  }, h = (i) => {
    o.value = i;
  }, u = (i) => {
    n.value = i;
  }, b = (i) => {
    s.value = i;
  }, y = (i) => {
    f.value = i;
  }, D = (i) => {
    N.value = i;
  }, x = (i) => {
    S.value = i;
  }, k = (i) => {
    C.value = i;
  };
  return {
    currentScrollPosition: e,
    isEnabled: l,
    nextScrollPosition: t,
    isTriggeringScrollPosition: o,
    isMounted: n,
    isInited: s,
    deviceType: f,
    needReload: N,
    isDestroyedByUser: S,
    savedCurrentScrollPositionForDestroy: C,
    setCurrentScrollPosition: p,
    setIsEnabled: T,
    setNextScrollPosition: w,
    setIsTriggeringScrollPosition: h,
    setIsMounted: u,
    setIsInited: b,
    setDeviceType: y,
    setNeedReload: D,
    setSavedCurrentScrollPositionForDestroy: k,
    reload: (i = !1) => {
      D(!0), i && (p(0), w(0), k(0));
    },
    destroy: (i = !1) => {
      x(!0), i && (p(0), w(0), k(0));
    },
    init: (i = !1) => {
      x(!1), i && (p(0), w(0), k(0));
    }
  };
});
function ae() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "mobile" : "desktop";
}
const re = (e) => {
  var t, o, l, n, s, f;
  return {
    smoothness: (e == null ? void 0 : e.smoothness) || 0.075,
    wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || 4,
    touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || 4,
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || 40,
    minWidth: (e == null ? void 0 : e.minWidth) || 0,
    renderDelay: (e == null ? void 0 : e.renderDelay) || 0,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || !0,
    defaultClassNames: {
      smoothPage: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPage) || "t-smoothpage",
      smoothPageBody: ((o = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : o.smoothPageBody) || "t-smoothpage--body",
      smoothPageEnabled: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageEnabled) || "t-smoothpage--enabled"
    },
    additionalClassNames: {
      smoothPage: ((n = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : n.smoothPage) || "",
      smoothPageBody: ((s = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : s.smoothPageBody) || "",
      smoothPageEnabled: ((f = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : f.smoothPageEnabled) || ""
    }
  };
}, ce = /* @__PURE__ */ j({
  __name: "index",
  props: {
    preventScroll: { type: Boolean, default: !1 },
    settings: null
  },
  setup(e) {
    const t = e, o = K("smoothPageSettings"), l = re(o), n = V({
      ...l,
      ...(t == null ? void 0 : t.settings) || {}
      //mb should de removed?
    }), s = z(), f = c(null), S = c(null);
    F(() => {
      s.setDeviceType(ae()), s.setIsEnabled(T()), s.setIsMounted(!0);
    }), O(() => {
      s.setIsMounted(!1);
    }), R(() => {
      if (s.isEnabled && !s.isInited) {
        N();
        return;
      }
      !s.isEnabled && s.isInited && C();
    });
    function N() {
      var h, u, b, y;
      n.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.add(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((y = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || y.add(n.additionalClassNames.smoothPageEnabled)), f.value = new ne(document, p, {
        wheelIntensity: n.wheelIntensity,
        touchmoveIntensity: n.touchmoveIntensity,
        minTouchmoveDistance: n.minTouchmoveDistance
      }), s.setIsInited(!0), s.setNeedReload(!1);
    }
    function C() {
      var h, u, b, y, D;
      n.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.remove(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((y = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || y.remove(n.additionalClassNames.smoothPageEnabled)), (D = f.value) == null || D.destroy(), window.scroll(0, s.savedCurrentScrollPositionForDestroy), s.setIsInited(!1);
    }
    R(() => {
      s.needReload && C();
    });
    function p(h) {
      if (t.preventScroll || !S.value)
        return;
      const u = S.value.getBoundingClientRect().height - window.innerHeight;
      s.setNextScrollPosition(Math.max(0, Math.min(s.currentScrollPosition + h.wheel, u)));
    }
    ie(() => {
      t.preventScroll || s.isMounted && (s.isTriggeringScrollPosition || (s.setIsEnabled(T()), s.isEnabled ? (s.setCurrentScrollPosition(le(s.currentScrollPosition, s.nextScrollPosition, n.smoothness)), s.setSavedCurrentScrollPositionForDestroy(s.currentScrollPosition)) : (s.setCurrentScrollPosition(window.scrollY), s.setNextScrollPosition(window.scrollY))));
    }, n.renderDelay);
    function T() {
      return s.isDestroyedByUser ? !1 : (n.enableOnTouchDevices || s.deviceType === "desktop") && window.innerWidth >= n.minWidth;
    }
    const w = G(() => s.isEnabled ? {
      transform: `translate3d(0, ${-s.currentScrollPosition}px, 0)`
    } : {});
    return (h, u) => (J(), Q("div", {
      class: q([n.defaultClassNames.smoothPage, n.additionalClassNames.smoothPage])
    }, [
      X("div", {
        ref_key: "contentRef",
        ref: S,
        style: Z(ee(w)),
        class: q([n.defaultClassNames.smoothPageBody, n.additionalClassNames.smoothPageBody])
      }, [
        te(h.$slots, "default")
      ], 6)
    ], 2));
  }
});
const be = A("publicSmoothPage", () => {
  const e = z();
  return {
    currentScrollPosition: e.currentScrollPosition,
    isEnabled: e.isEnabled,
    isTriggeringScrollPosition: e.isTriggeringScrollPosition,
    isMounted: e.isMounted,
    isInited: e.isInited,
    deviceType: e.deviceType,
    reload: e.reload,
    destroy: e.destroy,
    init: e.init
  };
}), ye = {
  install(e, t) {
    e.component("SmoothPage", ce), e.provide("smoothPageSettings", t || {});
  }
};
export {
  ce as SmoothPage,
  ye as default,
  be as useSmoothPage
};
