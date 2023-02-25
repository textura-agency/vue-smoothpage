var W = Object.defineProperty;
var N = (s, t, e) => t in s ? W(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => (N(s, typeof t != "symbol" ? t + "" : t, e), e), g = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var n = (s, t, e) => (g(s, t, "read from private field"), e ? e.call(s) : t.get(s)), d = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, D = (s, t, e, i) => (g(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var u = (s, t, e) => (g(s, t, "access private method"), e);
import { ref as c, onMounted as L, onUnmounted as M, defineComponent as T, watchEffect as q, computed as B, openBlock as R, createElementBlock as $, createElementVNode as H, normalizeStyle as z, unref as A, renderSlot as F } from "vue";
import { defineStore as U } from "pinia";
class V {
  constructor(t, e, i) {
    o(this, "element");
    o(this, "cb");
    o(this, "settings");
    o(this, "listener", function(t) {
      typeof this.cb == "function" && t.deltaY && this.cb({
        dir: t.deltaY / Math.abs(t.deltaY),
        wheel: t.deltaY * this.settings.wheelIntensity
      }), document.dispatchEvent(new CustomEvent("scroll", {
        bubbles: !0,
        detail: {
          direction: t.deltaY / Math.abs(t.deltaY)
        }
      }));
    }.bind(this));
    this.element = t, this.cb = e, this.settings = i, this.subscribe();
  }
  subscribe() {
    this.element.addEventListener("wheel", this.listener);
  }
  unsubscribe() {
    this.element.removeEventListener("wheel", this.listener);
  }
}
var l, r, Y, _, p, y, S, E, w, P;
class j {
  constructor(t, e, i) {
    d(this, Y);
    d(this, p);
    d(this, S);
    d(this, w);
    d(this, l, {
      sY: 0,
      eY: 0
    });
    o(this, "prevY", 0);
    d(this, r, void 0);
    o(this, "cb");
    o(this, "deltaY");
    o(this, "minDelta", 30);
    o(this, "settings");
    this.cb = e, D(this, r, t), u(this, Y, _).call(this), this.settings = i, this.useCallback = this.useCallback.bind(this), this.destroy = this.destroy.bind(this);
  }
  destroy() {
    n(this, r).removeEventListener("touchstart", u(this, p, y), !1), n(this, r).removeEventListener("touchmove", u(this, S, E), !1), n(this, r).removeEventListener("touchend", u(this, w, P), !1);
  }
  useCallback(t) {
    typeof this.cb == "function" && t && this.cb({
      dir: t / Math.abs(t),
      wheel: t
    });
  }
  lerp(t, e, i = 0.075) {
    return t + (e - t) * i;
  }
}
l = new WeakMap(), r = new WeakMap(), Y = new WeakSet(), _ = function() {
  n(this, r).addEventListener("touchstart", u(this, p, y).bind(this), !1), n(this, r).addEventListener("touchmove", u(this, S, E).bind(this), !1), n(this, r).addEventListener("touchend", u(this, w, P).bind(this), !1);
}, p = new WeakSet(), y = function(t) {
  const e = t.touches[0];
  n(this, l).sY = e.screenY, this.prevY = n(this, l).sY, n(this, l).eY = n(this, l).sY;
}, S = new WeakSet(), E = function(t) {
  const e = t.touches[0];
  this.prevY = n(this, l).eY, n(this, l).eY = e.screenY, this.deltaY = n(this, l).sY - n(this, l).eY;
  const i = n(this, l).sY - this.prevY;
  Math.abs(i) > Math.abs(this.deltaY) && (n(this, l).sY = this.prevY), Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
}, w = new WeakSet(), P = function(t) {
  Math.abs(this.deltaY) > this.minDelta && this.useCallback(this.deltaY);
};
class G {
  constructor(t, e, i) {
    o(this, "swipe");
    o(this, "scroll");
    o(this, "keyboard");
    o(this, "callback");
    if (!t) {
      console.error("[Detector]: dom element is required");
      return;
    }
    const a = {
      wheelIntensity: i.wheelIntensity || 1
    };
    this.callback = e || (() => {
    }), this.scroll = new V(t, this.controlScroll.bind(this), a), this.swipe = new j(t, this.controlScroll.bind(this), a), this.destroy = this.destroy.bind(this);
  }
  controlScroll(t) {
    this.callback(t);
  }
  destroy() {
    this.scroll.unsubscribe(), this.swipe.destroy();
  }
}
const J = (s, t = 0) => {
  const e = c(!0), i = c(performance.now());
  L(() => a(0)), M(() => e.value = !1);
  function a(f) {
    e.value && (f - i.value > t && (s(), i.value = performance.now()), requestAnimationFrame(a));
  }
}, K = (s, t, e = 0.2) => s + (t - s) * e, O = U("smoothScroll", () => {
  const s = c(0), t = c(0), e = c(!1), i = c(!1);
  return {
    currentScrollPosition: s,
    isEnabled: i,
    nextScrollPosition: t,
    isTriggeringScrollPosition: e,
    setCurrentScrollPosition: (h) => {
      s.value = h;
    },
    setIsEnabled: (h) => {
      i.value = h;
    },
    setNextScrollPosition: (h) => {
      t.value = h;
    },
    setIsTriggeringScrollPosition: (h) => {
      e.value = h;
    }
  };
}), Q = { class: "t-smoothpage" }, X = /* @__PURE__ */ T({
  __name: "index",
  props: {
    smooth: { default: 0.2 },
    wheelIntensity: { default: 2 },
    minWidth: { default: 0 },
    preventScroll: { type: Boolean, default: !1 },
    renderDelay: { default: 0 }
  },
  setup(s) {
    const t = s, e = O(), i = c(!1), a = c(null), f = c(null), m = c(!1);
    L(() => {
      e.setIsEnabled(window.innerWidth >= t.minWidth), i.value = !0;
    }), M(() => {
      i.value = !1;
    }), q(() => {
      var b, v, k, x, C;
      if (e.isEnabled && !m.value) {
        (v = (b = document.querySelector("html")) == null ? void 0 : b.classList) == null || v.add("t-smoothscroll--enabled"), a.value = new G(document, I, { wheelIntensity: t.wheelIntensity }), m.value = !0;
        return;
      }
      !e.isEnabled && m.value && ((x = (k = document.querySelector("html")) == null ? void 0 : k.classList) == null || x.remove("t-smoothscroll--enabled"), (C = a.value) == null || C.destroy(), m.value = !1);
    });
    function I(b) {
      if (t.preventScroll || !f.value)
        return;
      const v = f.value.getBoundingClientRect().height - window.innerHeight;
      e.setNextScrollPosition(Math.max(0, Math.min(e.currentScrollPosition + b.wheel, v)));
    }
    J(() => {
      t.preventScroll || i.value && (e.isTriggeringScrollPosition || (e.setIsEnabled(window.innerWidth >= t.minWidth), e.isEnabled ? e.setCurrentScrollPosition(K(e.currentScrollPosition, e.nextScrollPosition, t.smooth)) : (e.setCurrentScrollPosition(window.scrollY), e.setNextScrollPosition(window.scrollY))));
    }, t.renderDelay);
    const h = B(() => e.isEnabled ? {
      transform: `translate3d(0, ${-e.currentScrollPosition}px, 0)`
    } : {});
    return (b, v) => (R(), $("div", Q, [
      H("div", {
        ref_key: "contentRef",
        ref: f,
        style: z(A(h)),
        class: "t-smoothpage--body"
      }, [
        F(b.$slots, "default")
      ], 4)
    ]));
  }
});
const st = {
  install(s, t) {
    s.component("SmoothPage", X);
  }
};
export {
  st as default
};
