var V = Object.defineProperty;
var G = (s, t, e) => t in s ? V(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => (G(s, typeof t != "symbol" ? t + "" : t, e), e), w = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var i = (s, t, e) => (w(s, t, "read from private field"), e ? e.call(s) : t.get(s)), u = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, z = (s, t, e, o) => (w(s, t, "write to private field"), o ? o.call(s, e) : t.set(s, e), e);
var d = (s, t, e) => (w(s, t, "access private method"), e);
import { ref as c, onMounted as $, onUnmounted as j, defineComponent as J, inject as Q, watchEffect as X, computed as Z, openBlock as ee, createElementBlock as te, normalizeClass as H, createElementVNode as se, normalizeStyle as oe, unref as ne, renderSlot as ie } from "vue";
import { defineStore as le } from "pinia";
class ae {
  constructor(t, e, o) {
    l(this, "element");
    l(this, "cb");
    l(this, "settings");
    l(this, "listener", function(t) {
      typeof this.cb == "function" && t.deltaY && this.cb({
        dir: t.deltaY / Math.abs(t.deltaY),
        wheel: t.deltaY * this.settings.wheelIntensity
      });
    }.bind(this));
    this.element = t, this.cb = e, this.settings = o, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var a, h, S, F, v, E, y, C, P, Y;
class re {
  constructor(t, e, o) {
    u(this, S);
    u(this, v);
    u(this, y);
    u(this, P);
    u(this, a, {
      sY: 0,
      eY: 0
    });
    l(this, "prevY", 0);
    u(this, h, void 0);
    l(this, "cb");
    l(this, "deltaY");
    l(this, "minDelta");
    l(this, "settings");
    this.cb = e, z(this, h, t), d(this, S, F).call(this), this.settings = o, this.minDelta = o.minTouchmoveDistance, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    i(this, h).removeEventListener("touchstart", d(this, v, E), !1), i(this, h).removeEventListener("touchmove", d(this, y, C), !1), i(this, h).removeEventListener("touchend", d(this, P, Y), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t * this.settings.touchmoveIntensity
    });
  }
}
a = new WeakMap(), h = new WeakMap(), S = new WeakSet(), F = function() {
  i(this, h).addEventListener("touchstart", d(this, v, E).bind(this), !1), i(this, h).addEventListener("touchmove", d(this, y, C).bind(this), !1), i(this, h).addEventListener("touchend", d(this, P, Y).bind(this), !1);
}, v = new WeakSet(), E = function(t) {
  const e = t.touches[0];
  i(this, a).sY = e.screenY, this.prevY = i(this, a).sY, i(this, a).eY = i(this, a).sY;
}, y = new WeakSet(), C = function(t) {
  const e = t.touches[0];
  this.prevY = i(this, a).eY, i(this, a).eY = e.screenY, this.deltaY = i(this, a).sY - i(this, a).eY;
  const o = i(this, a).sY - this.prevY;
  Math.abs(o) > Math.abs(this.deltaY) && (i(this, a).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, P = new WeakSet(), Y = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class ce {
  constructor(t, e, o) {
    l(this, "swipe");
    l(this, "scroll");
    l(this, "keyboard");
    l(this, "callback");
    if (!t) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const n = {
      wheelIntensity: o.wheelIntensity || 1,
      touchmoveIntensity: o.touchmoveIntensity || 1,
      minTouchmoveDistance: o.minTouchmoveDistance || 40
    };
    this.callback = e || (() => {
    }), this.scroll = new ae(t, this.controlScroll.bind(this), n), this.swipe = new re(t, this.controlScroll.bind(this), n), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const he = (s, t = 0) => {
  const e = c(!0), o = c(performance.now());
  $(() => n(0)), j(() => e.value = !1);
  function n(m) {
    e.value && (m - o.value > t && (s(), o.value = performance.now()), requestAnimationFrame(n));
  }
}, de = (s, t, e = 0.2) => s + (t - s) * e, ue = le("smoothPage", () => {
  const s = c(0), t = c(0), e = c(!1), o = c(!1);
  return {
    currentScrollPosition: s,
    isEnabled: o,
    nextScrollPosition: t,
    isTriggeringScrollPosition: e,
    setCurrentScrollPosition: (r) => {
      s.value = r;
    },
    setIsEnabled: (r) => {
      o.value = r;
    },
    setNextScrollPosition: (r) => {
      t.value = r;
    },
    setIsTriggeringScrollPosition: (r) => {
      e.value = r;
    }
  };
});
function me() {
  const s = navigator.userAgent;
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(s) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(s) ? "mobile" : "desktop";
}
const be = /* @__PURE__ */ J({
  __name: "index",
  props: {
    preventScroll: { type: Boolean, default: !1 }
  },
  setup(s) {
    var I, k, T, _, L, M;
    const t = s, e = Q("smoothPageSettings"), o = {
      smoothness: (e == null ? void 0 : e.smoothness) || 0.075,
      wheelIntensity: (e == null ? void 0 : e.wheelIntensity) || 4,
      touchmoveIntensity: (e == null ? void 0 : e.touchmoveIntensity) || 4,
      minTouchmoveDistance: (e == null ? void 0 : e.minTouchmoveDistance) || 40,
      minWidth: (e == null ? void 0 : e.minWidth) || 0,
      renderDelay: (e == null ? void 0 : e.renderDelay) || 0,
      enableOnTouchDevices: (e == null ? void 0 : e.enableOnTouchDevices) || !0,
      defaultClassNames: {
        smoothPage: ((I = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : I.smoothPage) || "t-smoothpage",
        smoothPageBody: ((k = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : k.smoothPageBody) || "t-smoothpage--body",
        smoothPageEnabled: ((T = e == null ? void 0 : e.defaultClassNames) == null ? void 0 : T.smoothPageEnabled) || "t-smoothpage--enabled"
      },
      additionalClassNames: {
        smoothPage: ((_ = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : _.smoothPage) || "",
        smoothPageBody: ((L = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : L.smoothPageBody) || "",
        smoothPageEnabled: ((M = e == null ? void 0 : e.additionalClassNames) == null ? void 0 : M.smoothPageEnabled) || ""
      }
    }, n = ue(), m = c(!1), g = c(null), p = c(null), r = c(!1), D = c("desktop");
    $(() => {
      D.value = me(), n.setIsEnabled(N()), m.value = !0;
    }), j(() => {
      m.value = !1;
    }), X(() => {
      var b, f, x, B, W, q, O, A, R;
      if (n.isEnabled && !r.value) {
        o.defaultClassNames.smoothPageEnabled && ((f = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || f.add(o.defaultClassNames.smoothPageEnabled)), o.additionalClassNames.smoothPageEnabled && ((B = (x = document.querySelector("html")) == null ? void 0 : x.classList) == null || B.add(o.additionalClassNames.smoothPageEnabled)), g.value = new ce(document, K, {
          wheelIntensity: o.wheelIntensity,
          touchmoveIntensity: o.touchmoveIntensity,
          minTouchmoveDistance: o.minTouchmoveDistance
        }), r.value = !0;
        return;
      }
      !n.isEnabled && r.value && (o.defaultClassNames.smoothPageEnabled && ((q = (W = document.querySelector("html")) == null ? void 0 : W.classList) == null || q.remove(o.defaultClassNames.smoothPageEnabled)), o.additionalClassNames.smoothPageEnabled && ((A = (O = document.querySelector("html")) == null ? void 0 : O.classList) == null || A.remove(o.additionalClassNames.smoothPageEnabled)), (R = g.value) == null || R.destroy(), r.value = !1);
    });
    function K(b) {
      if (t.preventScroll || !p.value)
        return;
      const f = p.value.getBoundingClientRect().height - window.innerHeight;
      n.setNextScrollPosition(Math.max(0, Math.min(n.currentScrollPosition + b.wheel, f)));
    }
    he(() => {
      t.preventScroll || m.value && (n.isTriggeringScrollPosition || (n.setIsEnabled(N()), n.isEnabled ? n.setCurrentScrollPosition(de(n.currentScrollPosition, n.nextScrollPosition, o.smoothness)) : (n.setCurrentScrollPosition(window.scrollY), n.setNextScrollPosition(window.scrollY))));
    }, o.renderDelay);
    function N() {
      return (o.enableOnTouchDevices || D.value === "desktop") && window.innerWidth >= o.minWidth;
    }
    const U = Z(() => n.isEnabled ? {
      transform: `translate3d(0, ${-n.currentScrollPosition}px, 0)`
    } : {});
    return (b, f) => (ee(), te("div", {
      class: H([o.defaultClassNames.smoothPage, o.additionalClassNames.smoothPage])
    }, [
      se("div", {
        ref_key: "contentRef",
        ref: p,
        style: oe(ne(U)),
        class: H([o.defaultClassNames.smoothPageBody, o.additionalClassNames.smoothPageBody])
      }, [
        ie(b.$slots, "default")
      ], 6)
    ], 2));
  }
});
const Pe = {
  install(s, t) {
    s.component("SmoothPage", be), s.provide("smoothPageSettings", t || {});
  }
};
export {
  Pe as default
};
