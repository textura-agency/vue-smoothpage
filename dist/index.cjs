"use strict";var j=Object.defineProperty;var F=(s,t,e)=>t in s?j(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>(F(s,typeof t!="symbol"?t+"":t,e),e),w=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var l=(s,t,e)=>(w(s,t,"read from private field"),e?e.call(s):t.get(s)),u=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},z=(s,t,e,o)=>(w(s,t,"write to private field"),o?o.call(s,e):t.set(s,e),e);var d=(s,t,e)=>(w(s,t,"access private method"),e);const n=require("vue"),K=require("pinia");class V{constructor(t,e,o){a(this,"element");a(this,"cb");a(this,"settings");a(this,"listener",function(t){typeof this.cb=="function"&&t.deltaY&&this.cb({dir:t.deltaY/Math.abs(t.deltaY),wheel:t.deltaY*this.settings.wheelIntensity})}.bind(this));this.element=t,this.cb=e,this.settings=o,this.subscribe()}subscribe(){this.element.addEventListener("wheel",this.listener)}unsubscribe(){this.element.removeEventListener("wheel",this.listener)}}var r,h,S,H,v,E,y,C,P,Y;class G{constructor(t,e,o){u(this,S);u(this,v);u(this,y);u(this,P);u(this,r,{sY:0,eY:0});a(this,"prevY",0);u(this,h,void 0);a(this,"cb");a(this,"deltaY");a(this,"minDelta");a(this,"settings");this.cb=e,z(this,h,t),d(this,S,H).call(this),this.settings=o,this.minDelta=o.minTouchmoveDistance,this.useCallback=this.useCallback.bind(this),this.destroy=this.destroy.bind(this)}destroy(){l(this,h).removeEventListener("touchstart",d(this,v,E),!1),l(this,h).removeEventListener("touchmove",d(this,y,C),!1),l(this,h).removeEventListener("touchend",d(this,P,Y),!1)}useCallback(t){typeof this.cb=="function"&&t&&this.cb({dir:t/Math.abs(t),wheel:t*this.settings.touchmoveIntensity})}}r=new WeakMap,h=new WeakMap,S=new WeakSet,H=function(){l(this,h).addEventListener("touchstart",d(this,v,E).bind(this),!1),l(this,h).addEventListener("touchmove",d(this,y,C).bind(this),!1),l(this,h).addEventListener("touchend",d(this,P,Y).bind(this),!1)},v=new WeakSet,E=function(t){const e=t.touches[0];l(this,r).sY=e.screenY,this.prevY=l(this,r).sY,l(this,r).eY=l(this,r).sY},y=new WeakSet,C=function(t){const e=t.touches[0];this.prevY=l(this,r).eY,l(this,r).eY=e.screenY,this.deltaY=l(this,r).sY-l(this,r).eY;const o=l(this,r).sY-this.prevY;Math.abs(o)>Math.abs(this.deltaY)&&(l(this,r).sY=this.prevY),Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)},P=new WeakSet,Y=function(t){Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)};class J{constructor(t,e,o){a(this,"swipe");a(this,"scroll");a(this,"keyboard");a(this,"callback");if(!t){console.error("[Detector]: dom element is required");return}const i={wheelIntensity:o.wheelIntensity||1,touchmoveIntensity:o.touchmoveIntensity||1,minTouchmoveDistance:o.minTouchmoveDistance||40};this.callback=e||(()=>{}),this.scroll=new V(t,this.controlScroll.bind(this),i),this.swipe=new G(t,this.controlScroll.bind(this),i),this.destroy=this.destroy.bind(this)}controlScroll(t){this.callback(t)}destroy(){this.scroll.unsubscribe(),this.swipe.destroy()}}const Q=(s,t=0)=>{const e=n.ref(!0),o=n.ref(performance.now());n.onMounted(()=>i(0)),n.onUnmounted(()=>e.value=!1);function i(m){e.value&&(m-o.value>t&&(s(),o.value=performance.now()),requestAnimationFrame(i))}},X=(s,t,e=.2)=>s+(t-s)*e,Z=K.defineStore("smoothPage",()=>{const s=n.ref(0),t=n.ref(0),e=n.ref(!1),o=n.ref(!1);return{currentScrollPosition:s,isEnabled:o,nextScrollPosition:t,isTriggeringScrollPosition:e,setCurrentScrollPosition:c=>{s.value=c},setIsEnabled:c=>{o.value=c},setNextScrollPosition:c=>{t.value=c},setIsTriggeringScrollPosition:c=>{e.value=c}}});function ee(){const s=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(s)?"tablet":/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(s)?"mobile":"desktop"}const te=n.defineComponent({__name:"index",props:{preventScroll:{type:Boolean,default:!1}},setup(s){var I,k,T,_,M,L;const t=s,e=n.inject("smoothPageSettings"),o={smoothness:(e==null?void 0:e.smoothness)||.075,wheelIntensity:(e==null?void 0:e.wheelIntensity)||4,touchmoveIntensity:(e==null?void 0:e.touchmoveIntensity)||4,minTouchmoveDistance:(e==null?void 0:e.minTouchmoveDistance)||40,minWidth:(e==null?void 0:e.minWidth)||0,renderDelay:(e==null?void 0:e.renderDelay)||0,enableOnTouchDevices:(e==null?void 0:e.enableOnTouchDevices)||!0,defaultClassNames:{smoothPage:((I=e==null?void 0:e.defaultClassNames)==null?void 0:I.smoothPage)||"t-smoothpage",smoothPageBody:((k=e==null?void 0:e.defaultClassNames)==null?void 0:k.smoothPageBody)||"t-smoothpage--body",smoothPageEnabled:((T=e==null?void 0:e.defaultClassNames)==null?void 0:T.smoothPageEnabled)||"t-smoothpage--enabled"},additionalClassNames:{smoothPage:((_=e==null?void 0:e.additionalClassNames)==null?void 0:_.smoothPage)||"",smoothPageBody:((M=e==null?void 0:e.additionalClassNames)==null?void 0:M.smoothPageBody)||"",smoothPageEnabled:((L=e==null?void 0:e.additionalClassNames)==null?void 0:L.smoothPageEnabled)||""}},i=Z(),m=n.ref(!1),g=n.ref(null),p=n.ref(null),c=n.ref(!1),D=n.ref("desktop");n.onMounted(()=>{D.value=ee(),i.setIsEnabled(N()),m.value=!0}),n.onUnmounted(()=>{m.value=!1}),n.watchEffect(()=>{var f,b,x,B,W,q,O,A,R;if(i.isEnabled&&!c.value){o.defaultClassNames.smoothPageEnabled&&((b=(f=document.querySelector("html"))==null?void 0:f.classList)==null||b.add(o.defaultClassNames.smoothPageEnabled)),o.additionalClassNames.smoothPageEnabled&&((B=(x=document.querySelector("html"))==null?void 0:x.classList)==null||B.add(o.additionalClassNames.smoothPageEnabled)),g.value=new J(document,U,{wheelIntensity:o.wheelIntensity,touchmoveIntensity:o.touchmoveIntensity,minTouchmoveDistance:o.minTouchmoveDistance}),c.value=!0;return}!i.isEnabled&&c.value&&(o.defaultClassNames.smoothPageEnabled&&((q=(W=document.querySelector("html"))==null?void 0:W.classList)==null||q.remove(o.defaultClassNames.smoothPageEnabled)),o.additionalClassNames.smoothPageEnabled&&((A=(O=document.querySelector("html"))==null?void 0:O.classList)==null||A.remove(o.additionalClassNames.smoothPageEnabled)),(R=g.value)==null||R.destroy(),c.value=!1)});function U(f){if(t.preventScroll||!p.value)return;const b=p.value.getBoundingClientRect().height-window.innerHeight;i.setNextScrollPosition(Math.max(0,Math.min(i.currentScrollPosition+f.wheel,b)))}Q(()=>{t.preventScroll||m.value&&(i.isTriggeringScrollPosition||(i.setIsEnabled(N()),i.isEnabled?i.setCurrentScrollPosition(X(i.currentScrollPosition,i.nextScrollPosition,o.smoothness)):(i.setCurrentScrollPosition(window.scrollY),i.setNextScrollPosition(window.scrollY))))},o.renderDelay);function N(){return(o.enableOnTouchDevices||D.value==="desktop")&&window.innerWidth>=o.minWidth}const $=n.computed(()=>i.isEnabled?{transform:`translate3d(0, ${-i.currentScrollPosition}px, 0)`}:{});return(f,b)=>(n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass([o.defaultClassNames.smoothPage,o.additionalClassNames.smoothPage])},[n.createElementVNode("div",{ref_key:"contentRef",ref:p,style:n.normalizeStyle(n.unref($)),class:n.normalizeClass([o.defaultClassNames.smoothPageBody,o.additionalClassNames.smoothPageBody])},[n.renderSlot(f.$slots,"default")],6)],2))}});const se={install(s,t){s.component("SmoothPage",te),s.provide("smoothPageSettings",t||{})}};module.exports=se;