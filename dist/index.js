var $ = Object.defineProperty;
var j = (e, t, o) => t in e ? $(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var r = (e, t, o) => (j(e, typeof t != "symbol" ? t + "" : t, o), o), M = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var i = (e, t, o) => (M(e, t, "read from private field"), o ? o.call(e) : t.get(e)), y = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, B = (e, t, o, l) => (M(e, t, "write to private field"), l ? l.call(e, o) : t.set(e, o), o);
var b = (e, t, o) => (M(e, t, "access private method"), o);
import { ref as d, onMounted as q, onUnmounted as O, defineComponent as F, inject as K, computed as x, watchEffect as W, openBlock as U, createElementBlock as V, normalizeClass as R, unref as w, createElementVNode as G, normalizeStyle as J, renderSlot as Q } from "vue";
import { defineStore as A } from "pinia";
class X {
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
var c, m, T, z, E, _, I, g, C, L;
class Z {
  constructor(t, o, l) {
    y(this, T);
    y(this, E);
    y(this, I);
    y(this, C);
    y(this, c, {
      sY: 0,
      eY: 0
    });
    r(this, "prevY", 0);
    y(this, m, void 0);
    r(this, "cb");
    r(this, "deltaY");
    r(this, "minDelta");
    r(this, "settings");
    this.cb = o, B(this, m, t), b(this, T, z).call(this), this.settings = l, this.minDelta = l.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    i(this, m).removeEventListener("touchstart", b(this, E, _), !1), i(this, m).removeEventListener("touchmove", b(this, I, g), !1), i(this, m).removeEventListener("touchend", b(this, C, L), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
c = new WeakMap(), m = new WeakMap(), T = new WeakSet(), z = function() {
  i(this, m).addEventListener("touchstart", b(this, E, _).bind(this), !1), i(this, m).addEventListener("touchmove", b(this, I, g).bind(this), !1), i(this, m).addEventListener("touchend", b(this, C, L).bind(this), !1);
}, E = new WeakSet(), _ = function(t) {
  const o = t.touches[0];
  i(this, c).sY = o.screenY, this.prevY = i(this, c).sY, i(this, c).eY = i(this, c).sY;
}, I = new WeakSet(), g = function(t) {
  const o = t.touches[0];
  this.prevY = i(this, c).eY, i(this, c).eY = o.screenY, this.deltaY = i(this, c).sY - i(this, c).eY;
  const l = i(this, c).sY - this.prevY;
  Math.abs(l) > Math.abs(this.deltaY) && (i(this, c).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, C = new WeakSet(), L = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class ee {
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
    }), this.scroll = new X(t, this.controlScroll.bind(this), n), this.swipe = new Z(t, this.controlScroll.bind(this), n), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const te = (e, t = 0) => {
  const o = d(!0), l = d(performance.now());
  q(() => n(0)), O(() => o.value = !1);
  function n(s) {
    o.value && (s - l.value > t && (e(), l.value = performance.now()), requestAnimationFrame(n));
  }
}, oe = (e, t, o = 0.2) => e + (t - e) * o, H = A("privateSmoothPage", () => {
  const e = d(0), t = d(0), o = d(!1), l = d(!1), n = d(!1), s = d(!1), v = d("desktop"), P = d(!1), S = (a) => {
    e.value = a;
  }, Y = (a) => {
    l.value = a;
  }, D = (a) => {
    t.value = a;
  }, N = (a) => {
    o.value = a;
  }, k = (a) => {
    n.value = a;
  }, h = (a) => {
    s.value = a;
  }, u = (a) => {
    v.value = a;
  }, f = (a) => {
    P.value = a;
  };
  return {
    currentScrollPosition: e,
    isEnabled: l,
    nextScrollPosition: t,
    isTriggeringScrollPosition: o,
    isMounted: n,
    isInited: s,
    deviceType: v,
    needReload: P,
    setCurrentScrollPosition: S,
    setIsEnabled: Y,
    setNextScrollPosition: D,
    setIsTriggeringScrollPosition: N,
    setIsMounted: k,
    setIsInited: h,
    setDeviceType: u,
    setNeedReload: f,
    reload: (a = !1) => {
      f(!0), a && (S(0), D(0));
    }
  };
});
function se() {
  const e = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "mobile" : "desktop";
}
const ne = (e) => {
  var t, o, l, n, s, v;
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
      smoothPageEnabled: ((v = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : v.smoothPageEnabled) || ""
    }
  };
}, le = /* @__PURE__ */ F({
  __name: "index",
  props: {
    preventScroll: { type: Boolean, default: !1 },
    settings: null
  },
  setup(e) {
    const t = e, o = K("smoothPageSettings"), l = ne(o), n = x(() => ({
      ...l,
      ...t == null ? void 0 : t.settings
    })), s = H(), v = d(null), P = d(null);
    q(() => {
      s.setDeviceType(se()), s.setIsEnabled(N()), s.setIsMounted(!0);
    }), O(() => {
      s.setIsMounted(!1);
    }), W(() => {
      if (s.isEnabled && !s.isInited) {
        S();
        return;
      }
      !s.isEnabled && s.isInited && Y();
    });
    function S() {
      var h, u, f, p;
      n.value.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.add(n.value.defaultClassNames.smoothPageEnabled)), n.value.additionalClassNames.smoothPageEnabled && ((p = (f = document.querySelector("html")) == null ? void 0 : f.classList) == null || p.add(n.value.additionalClassNames.smoothPageEnabled)), v.value = new ee(document, D, {
        wheelIntensity: n.value.wheelIntensity,
        touchmoveIntensity: n.value.touchmoveIntensity,
        minTouchmoveDistance: n.value.minTouchmoveDistance
      }), s.setIsInited(!0);
    }
    function Y() {
      var h, u, f, p, a;
      n.value.defaultClassNames.smoothPageEnabled && ((u = (h = document.querySelector("html")) == null ? void 0 : h.classList) == null || u.remove(n.value.defaultClassNames.smoothPageEnabled)), n.value.additionalClassNames.smoothPageEnabled && ((p = (f = document.querySelector("html")) == null ? void 0 : f.classList) == null || p.remove(n.value.additionalClassNames.smoothPageEnabled)), (a = v.value) == null || a.destroy(), s.setIsInited(!1);
    }
    W(() => {
      s.needReload && (Y(), setTimeout(() => {
        S(), s.setNeedReload(!1);
      }, 0));
    });
    function D(h) {
      if (t.preventScroll || !P.value)
        return;
      const u = P.value.getBoundingClientRect().height - window.innerHeight;
      s.setNextScrollPosition(Math.max(0, Math.min(s.currentScrollPosition + h.wheel, u)));
    }
    te(() => {
      t.preventScroll || s.isMounted && (s.isTriggeringScrollPosition || (s.setIsEnabled(N()), s.isEnabled ? s.setCurrentScrollPosition(oe(s.currentScrollPosition, s.nextScrollPosition, n.value.smoothness)) : (s.setCurrentScrollPosition(window.scrollY), s.setNextScrollPosition(window.scrollY))));
    }, n.value.renderDelay);
    function N() {
      return (n.value.enableOnTouchDevices || s.deviceType === "desktop") && window.innerWidth >= n.value.minWidth;
    }
    const k = x(() => s.isEnabled ? {
      transform: `translate3d(0, ${-s.currentScrollPosition}px, 0)`
    } : {});
    return (h, u) => (U(), V("div", {
      class: R([w(n).defaultClassNames.smoothPage, w(n).additionalClassNames.smoothPage])
    }, [
      G("div", {
        ref_key: "contentRef",
        ref: P,
        style: J(w(k)),
        class: R([w(n).defaultClassNames.smoothPageBody, w(n).additionalClassNames.smoothPageBody])
      }, [
        Q(h.$slots, "default")
      ], 6)
    ], 2));
  }
});
const ce = A("publicSmoothPage", () => {
  const e = H();
  return {
    currentScrollPosition: e.currentScrollPosition,
    isEnabled: e.isEnabled,
    isTriggeringScrollPosition: e.isTriggeringScrollPosition,
    isMounted: e.isMounted,
    isInited: e.isInited,
    deviceType: e.deviceType,
    reload: e.reload
  };
}), de = {
  install(e, t) {
    e.component("SmoothPage", le), e.provide("smoothPageSettings", t || {});
  }
};
export {
  le as SmoothPage,
  de as default,
  ce as useSmoothPage
};
