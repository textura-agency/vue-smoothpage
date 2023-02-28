var H = Object.defineProperty;
var $ = (e, t, s) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => ($(e, typeof t != "symbol" ? t + "" : t, s), s), g = (e, t, s) => {
  if (!t.has(e))
    throw TypeError("Cannot " + s);
};
var a = (e, t, s) => (g(e, t, "read from private field"), s ? s.call(e) : t.get(e)), P = (e, t, s) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, s);
}, W = (e, t, s, l) => (g(e, t, "write to private field"), l ? l.call(e, s) : t.set(e, s), s);
var v = (e, t, s) => (g(e, t, "access private method"), s);
import { ref as c, onMounted as q, onUnmounted as F, defineComponent as j, inject as K, reactive as V, watchEffect as O, computed as G, openBlock as J, createElementBlock as Q, normalizeClass as R, createElementVNode as X, normalizeStyle as Z, unref as ee, renderSlot as te } from "vue";
import { defineStore as A } from "pinia";
class oe {
  constructor(t, s, l) {
    r(this, "element");
    r(this, "cb");
    r(this, "settings");
    r(this, "listener", function(t) {
      typeof this.cb == "function" && t.deltaY && this.cb({
        dir: t.deltaY / Math.abs(t.deltaY),
        wheel: t.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = t, this.cb = s, this.settings = l, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var d, m, M, U, E, _, I, B, Y, x;
class se {
  constructor(t, s, l) {
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
    this.cb = s, W(this, m, t), v(this, M, U).call(this), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    a(this, m).removeEventListener("touchstart", v(this, E, _), !1), a(this, m).removeEventListener("touchmove", v(this, I, B), !1), a(this, m).removeEventListener("touchend", v(this, Y, x), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
d = new WeakMap(), m = new WeakMap(), M = new WeakSet(), U = function() {
  a(this, m).addEventListener("touchstart", v(this, E, _).bind(this), !1), a(this, m).addEventListener("touchmove", v(this, I, B).bind(this), !1), a(this, m).addEventListener("touchend", v(this, Y, x).bind(this), !1);
}, E = new WeakSet(), _ = function(t) {
  const s = t.touches[0];
  a(this, d).sY = s.screenY, this.prevY = a(this, d).sY, a(this, d).eY = a(this, d).sY;
}, I = new WeakSet(), B = function(t) {
  const s = t.touches[0];
  this.prevY = a(this, d).eY, a(this, d).eY = s.screenY, this.deltaY = a(this, d).sY - a(this, d).eY;
  const l = a(this, d).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (a(this, d).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, Y = new WeakSet(), x = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class ne {
  constructor(t, s, l) {
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
    this.callback = s || (() => {
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
  const s = c(!0), l = c(performance.now());
  q(() => n(0)), F(() => s.value = !1);
  function n(o) {
    s.value && (o - l.value > t && (e(), l.value = performance.now()), requestAnimationFrame(n));
  }
}, le = (e, t, s = 0.2) => t === 0 && e < 0.1 ? 0 : e + (t - e) * s, z = A("privateSmoothPage", () => {
  const e = c(0), t = c(0), s = c(!1), l = c(!1), n = c(!1), o = c(!1), f = c("desktop"), S = c(!1), N = c(!1), C = c(0), p = (i) => {
    e.value = i;
  }, T = (i) => {
    l.value = i;
  }, w = (i) => {
    t.value = i;
  }, h = (i) => {
    s.value = i;
  }, u = (i) => {
    n.value = i;
  }, b = (i) => {
    o.value = i;
  }, y = (i) => {
    f.value = i;
  }, D = (i) => {
    N.value = i;
  }, L = (i) => {
    S.value = i;
  }, k = (i) => {
    C.value = i;
  };
  return {
    currentScrollPosition: e,
    isEnabled: l,
    nextScrollPosition: t,
    isTriggeringScrollPosition: s,
    isMounted: n,
    isInited: o,
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
      L(!0), i && (p(0), w(0), k(0));
    },
    init: (i = !1) => {
      L(!1), i && (p(0), w(0), k(0));
    }
  };
});
function ae() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "mobile" : "desktop";
}
const re = (e) => {
  var t, s, l, n, o, f;
  return {
    smoothness: (e == null ? void 0 : e.smoothness) || 0.075,
    wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || 4,
    touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || 4,
    minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || 40,
    minWidth: (e == null ? void 0 : e.minWidth) || 0,
    renderDelay: (e == null ? void 0 : e.renderDelay) || 0,
    enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || !0,
    resetScrollPositionOnStateChanging: (e == null ? void 0 : e.resetScrollPositionOnStateChanging) || !1,
    defaultClassNames: {
      smoothPage: ((t = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : t.smoothPage) || "t-smoothpage",
      smoothPageBody: ((s = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : s.smoothPageBody) || "t-smoothpage--body",
      smoothPageEnabled: ((l = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : l.smoothPageEnabled) || "t-smoothpage--enabled"
    },
    additionalClassNames: {
      smoothPage: ((n = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : n.smoothPage) || "",
      smoothPageBody: ((o = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : o.smoothPageBody) || "",
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
    const t = e, s = K("smoothPageSettings"), l = re(s), n = V({
      ...l,
      ...(t == null ? void 0 : t.settings) || {}
      //mb should de removed?
    }), o = z(), f = c(null), S = c(null);
    q(() => {
      o.setDeviceType(ae()), o.setIsEnabled(T()), o.setIsMounted(!0);
    }), F(() => {
      o.setIsMounted(!1);
    }), O(() => {
      if (o.isEnabled && !o.isInited) {
        N();
        return;
      }
      !o.isEnabled && o.isInited && C();
    });
    function N() {
      var h, u, b, y;
      n.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.add(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((y = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || y.add(n.additionalClassNames.smoothPageEnabled)), f.value = new ne(document, p, {
        wheelIntensity: n.wheelIntensity,
        touchmoveIntensity: n.touchmoveIntensity,
        minTouchmoveDistance: n.minTouchmoveDistance
      }), n.resetScrollPositionOnStateChanging && (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)), o.setIsInited(!0), o.setNeedReload(!1);
    }
    function C() {
      var h, u, b, y, D;
      n.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.remove(n.defaultClassNames.smoothPageEnabled)), n.additionalClassNames.smoothPageEnabled && ((y = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || y.remove(n.additionalClassNames.smoothPageEnabled)), (D = f.value) == null || D.destroy(), n.resetScrollPositionOnStateChanging ? (o.setCurrentScrollPosition(0), o.setNextScrollPosition(0), window.scroll(0, 0)) : window.scroll(0, o.savedCurrentScrollPositionForDestroy), o.setIsInited(!1);
    }
    O(() => {
      o.needReload && C();
    });
    function p(h) {
      if (t.preventScroll || !S.value)
        return;
      const u = S.value.getBoundingClientRect().height - window.innerHeight;
      o.setNextScrollPosition(Math.max(0, Math.min(o.currentScrollPosition + h.wheel, u)));
    }
    ie(() => {
      t.preventScroll || o.isMounted && (o.isTriggeringScrollPosition || (o.setIsEnabled(T()), o.isEnabled ? (o.setCurrentScrollPosition(le(o.currentScrollPosition, o.nextScrollPosition, n.smoothness)), o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)) : (o.setCurrentScrollPosition(window.scrollY), o.setNextScrollPosition(window.scrollY))));
    }, n.renderDelay);
    function T() {
      return o.isDestroyedByUser ? !1 : (n.enableOnTouchDevices || o.deviceType === "desktop") && window.innerWidth >= n.minWidth;
    }
    const w = G(() => o.isEnabled ? {
      transform: `translate3d(0, ${-o.currentScrollPosition}px, 0)`
    } : {});
    return (h, u) => (J(), Q("div", {
      class: R([n.defaultClassNames.smoothPage, n.additionalClassNames.smoothPage])
    }, [
      X("div", {
        ref_key: "contentRef",
        ref: S,
        style: Z(ee(w)),
        class: R([n.defaultClassNames.smoothPageBody, n.additionalClassNames.smoothPageBody])
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
