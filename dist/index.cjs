"use strict";var U=Object.defineProperty;var A=(e,t,s)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var c=(e,t,s)=>(A(e,typeof t!="symbol"?t+"":t,s),s),k=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),S=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},O=(e,t,s,a)=>(k(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var v=(e,t,s)=>(k(e,t,"access private method"),s);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("vue"),W=require("pinia");class z{constructor(t,s,a){c(this,"element");c(this,"cb");c(this,"settings");c(this,"listener",function(t){typeof this.cb=="function"&&t.deltaY&&this.cb({dir:t.deltaY/Math.abs(t.deltaY),wheel:t.deltaY*this.settings.wheelIntensity})}.bind(this));this.element=t,this.cb=s,this.settings=a,this.subscribe()}subscribe(){this.element.addEventListener("wheel",this.listener)}unsubscribe(){this.element.removeEventListener("wheel",this.listener)}}var d,m,g,q,D,_,I,B,Y,L;class j{constructor(t,s,a){S(this,g);S(this,D);S(this,I);S(this,Y);S(this,d,{sY:0,eY:0});c(this,"prevY",0);S(this,m,void 0);c(this,"cb");c(this,"deltaY");c(this,"minDelta");c(this,"settings");this.cb=s,O(this,m,t),v(this,g,q).call(this),this.settings=a,this.minDelta=a.minTouchmoveDistance,this.useCallback=this.useCallback.bind(this),this.destroy=this.destroy.bind(this)}destroy(){r(this,m).removeEventListener("touchstart",v(this,D,_),!1),r(this,m).removeEventListener("touchmove",v(this,I,B),!1),r(this,m).removeEventListener("touchend",v(this,Y,L),!1)}useCallback(t){typeof this.cb=="function"&&t&&this.cb({dir:t/Math.abs(t),wheel:t*this.settings.touchmoveIntensity})}}d=new WeakMap,m=new WeakMap,g=new WeakSet,q=function(){r(this,m).addEventListener("touchstart",v(this,D,_).bind(this),!1),r(this,m).addEventListener("touchmove",v(this,I,B).bind(this),!1),r(this,m).addEventListener("touchend",v(this,Y,L).bind(this),!1)},D=new WeakSet,_=function(t){const s=t.touches[0];r(this,d).sY=s.screenY,this.prevY=r(this,d).sY,r(this,d).eY=r(this,d).sY},I=new WeakSet,B=function(t){const s=t.touches[0];this.prevY=r(this,d).eY,r(this,d).eY=s.screenY,this.deltaY=r(this,d).sY-r(this,d).eY;const a=r(this,d).sY-this.prevY;Math.abs(a)>Math.abs(this.deltaY)&&(r(this,d).sY=this.prevY),Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)},Y=new WeakSet,L=function(t){Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)};class H{constructor(t,s,a){c(this,"swipe");c(this,"scroll");c(this,"keyboard");c(this,"callback");if(!t){console.error("[Detector]: dom element is required");return}const n={wheelIntensity:a.wheelIntensity||1,touchmoveIntensity:a.touchmoveIntensity||1,minTouchmoveDistance:a.minTouchmoveDistance||40};this.callback=s||(()=>{}),this.scroll=new z(t,this.controlScroll.bind(this),n),this.swipe=new j(t,this.controlScroll.bind(this),n),this.destroy=this.destroy.bind(this)}controlScroll(t){this.callback(t)}destroy(){this.scroll.unsubscribe(),this.swipe.destroy()}}const $=(e,t=0)=>{const s=i.ref(!0),a=i.ref(performance.now());i.onMounted(()=>n(0)),i.onUnmounted(()=>s.value=!1);function n(o){s.value&&(o-a.value>t&&(e(),a.value=performance.now()),requestAnimationFrame(n))}},K=(e,t,s=.2)=>e+(t-e)*s,R=W.defineStore("privateSmoothPage",()=>{const e=i.ref(0),t=i.ref(0),s=i.ref(!1),a=i.ref(!1),n=i.ref(!1),o=i.ref(!1),f=i.ref("desktop"),P=i.ref(!1),N=i.ref(!1),C=i.ref(0),p=l=>{e.value=l},T=l=>{a.value=l},w=l=>{t.value=l},h=l=>{s.value=l},u=l=>{n.value=l},b=l=>{o.value=l},y=l=>{f.value=l},E=l=>{N.value=l},x=l=>{P.value=l},M=l=>{C.value=l};return{currentScrollPosition:e,isEnabled:a,nextScrollPosition:t,isTriggeringScrollPosition:s,isMounted:n,isInited:o,deviceType:f,needReload:N,isDestroyedByUser:P,savedCurrentScrollPositionForDestroy:C,setCurrentScrollPosition:p,setIsEnabled:T,setNextScrollPosition:w,setIsTriggeringScrollPosition:h,setIsMounted:u,setIsInited:b,setDeviceType:y,setNeedReload:E,setSavedCurrentScrollPositionForDestroy:M,reload:(l=!1)=>{E(!0),l&&(p(0),w(0),M(0))},destroy:(l=!1)=>{x(!0),l&&(p(0),w(0),M(0))},init:(l=!1)=>{x(!1),l&&(p(0),w(0),M(0))}}});function V(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"}const G=e=>{var t,s,a,n,o,f;return{smoothness:(e==null?void 0:e.smoothness)||.075,wheelIntensity:(e==null?void 0:e.wheelIntensity)||4,touchmoveIntensity:(e==null?void 0:e.touchmoveIntensity)||4,minTouchmoveDistance:(e==null?void 0:e.minTouchmoveDistance)||40,minWidth:(e==null?void 0:e.minWidth)||0,renderDelay:(e==null?void 0:e.renderDelay)||0,enableOnTouchDevices:(e==null?void 0:e.enableOnTouchDevices)||!0,resetScrollPositionOnStateChanging:(e==null?void 0:e.resetScrollPositionOnStateChanging)||!1,defaultClassNames:{smoothPage:((t=e==null?void 0:e.defaultClassNames)==null?void 0:t.smoothPage)||"t-smoothpage",smoothPageBody:((s=e==null?void 0:e.defaultClassNames)==null?void 0:s.smoothPageBody)||"t-smoothpage--body",smoothPageEnabled:((a=e==null?void 0:e.defaultClassNames)==null?void 0:a.smoothPageEnabled)||"t-smoothpage--enabled"},additionalClassNames:{smoothPage:((n=e==null?void 0:e.additionalClassNames)==null?void 0:n.smoothPage)||"",smoothPageBody:((o=e==null?void 0:e.additionalClassNames)==null?void 0:o.smoothPageBody)||"",smoothPageEnabled:((f=e==null?void 0:e.additionalClassNames)==null?void 0:f.smoothPageEnabled)||""}}},F=i.defineComponent({__name:"index",props:{preventScroll:{type:Boolean,default:!1},settings:null},setup(e){const t=e,s=i.inject("smoothPageSettings"),a=G(s),n=i.reactive({...a,...(t==null?void 0:t.settings)||{}}),o=R(),f=i.ref(null),P=i.ref(null);i.onMounted(()=>{o.setDeviceType(V()),o.setIsEnabled(T()),o.setIsMounted(!0)}),i.onUnmounted(()=>{o.setIsMounted(!1)}),i.watchEffect(()=>{if(o.isEnabled&&!o.isInited){N();return}!o.isEnabled&&o.isInited&&C()});function N(){var h,u,b,y;n.defaultClassNames.smoothPageEnabled&&((u=(h=document.querySelector("html"))==null?void 0:h.classList)==null||u.add(n.defaultClassNames.smoothPageEnabled)),n.additionalClassNames.smoothPageEnabled&&((y=(b=document.querySelector("html"))==null?void 0:b.classList)==null||y.add(n.additionalClassNames.smoothPageEnabled)),f.value=new H(document,p,{wheelIntensity:n.wheelIntensity,touchmoveIntensity:n.touchmoveIntensity,minTouchmoveDistance:n.minTouchmoveDistance}),n.resetScrollPositionOnStateChanging&&(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)),o.setIsInited(!0),o.setNeedReload(!1)}function C(){var h,u,b,y,E;n.defaultClassNames.smoothPageEnabled&&((u=(h=document.querySelector("html"))==null?void 0:h.classList)==null||u.remove(n.defaultClassNames.smoothPageEnabled)),n.additionalClassNames.smoothPageEnabled&&((y=(b=document.querySelector("html"))==null?void 0:b.classList)==null||y.remove(n.additionalClassNames.smoothPageEnabled)),(E=f.value)==null||E.destroy(),n.resetScrollPositionOnStateChanging?(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)):window.scroll(0,o.savedCurrentScrollPositionForDestroy),o.setIsInited(!1)}i.watchEffect(()=>{o.needReload&&C()});function p(h){if(t.preventScroll||!P.value)return;const u=P.value.getBoundingClientRect().height-window.innerHeight;o.setNextScrollPosition(Math.max(0,Math.min(o.currentScrollPosition+h.wheel,u)))}$(()=>{t.preventScroll||o.isMounted&&(o.isTriggeringScrollPosition||(o.setIsEnabled(T()),o.isEnabled?(o.setCurrentScrollPosition(K(o.currentScrollPosition,o.nextScrollPosition,n.smoothness)),o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)):(o.setCurrentScrollPosition(window.scrollY),o.setNextScrollPosition(window.scrollY))))},n.renderDelay);function T(){return o.isDestroyedByUser?!1:(n.enableOnTouchDevices||o.deviceType==="desktop")&&window.innerWidth>=n.minWidth}const w=i.computed(()=>o.isEnabled?{transform:`translate3d(0, ${-o.currentScrollPosition}px, 0)`}:{});return(h,u)=>(i.openBlock(),i.createElementBlock("div",{class:i.normalizeClass([n.defaultClassNames.smoothPage,n.additionalClassNames.smoothPage])},[i.createElementVNode("div",{ref_key:"contentRef",ref:P,style:i.normalizeStyle(i.unref(w)),class:i.normalizeClass([n.defaultClassNames.smoothPageBody,n.additionalClassNames.smoothPageBody])},[i.renderSlot(h.$slots,"default")],6)],2))}});const J=W.defineStore("publicSmoothPage",()=>{const e=R();return{currentScrollPosition:e.currentScrollPosition,isEnabled:e.isEnabled,isTriggeringScrollPosition:e.isTriggeringScrollPosition,isMounted:e.isMounted,isInited:e.isInited,deviceType:e.deviceType,reload:e.reload,destroy:e.destroy,init:e.init}}),Q={install(e,t){e.component("SmoothPage",F),e.provide("smoothPageSettings",t||{})}};exports.SmoothPage=F;exports.default=Q;exports.useSmoothPage=J;
