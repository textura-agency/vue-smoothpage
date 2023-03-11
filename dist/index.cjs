"use strict";var j=Object.defineProperty;var J=(e,t,o)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>(J(e,typeof t!="symbol"?t+"":t,o),o),k=(e,t,o)=>{if(!t.has(e))throw TypeError("Cannot "+o)};var m=(e,t,o)=>(k(e,t,"read from private field"),o?o.call(e):t.get(e)),C=(e,t,o)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,o)},A=(e,t,o,a)=>(k(e,t,"write to private field"),a?a.call(e,o):t.set(e,o),o);var E=(e,t,o)=>(k(e,t,"access private method"),o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),B=require("pinia");class Q{constructor(t,o,a){i(this,"element");i(this,"cb");i(this,"settings");i(this,"subscribe",function(){this.element.addEventListener("wheel",this.listener)}.bind(this));i(this,"unsubscribe",function(){this.element.removeEventListener("wheel",this.listener)}.bind(this));i(this,"listener",function(t){typeof this.cb=="function"&&t.deltaY&&this.cb({dir:t.deltaY/Math.abs(t.deltaY),wheel:t.deltaY*this.settings.wheelIntensity})}.bind(this));this.element=t,this.cb=o,this.settings=a,this.subscribe()}}var y,P,N,R,T,H,M,W;class g{constructor(t,o,a){C(this,N);C(this,T);C(this,M);C(this,y,{sY:0,eY:0});i(this,"prevY",0);C(this,P,void 0);i(this,"cb");i(this,"deltaY");i(this,"minDelta");i(this,"settings");i(this,"subscribe",function(){m(this,P).addEventListener("touchstart",E(this,N,R).bind(this),!1),m(this,P).addEventListener("touchmove",E(this,T,H).bind(this),!1),m(this,P).addEventListener("touchend",E(this,M,W).bind(this),!1)}.bind(this));i(this,"unsubscribe",function(){m(this,P).removeEventListener("touchstart",E(this,N,R),!1),m(this,P).removeEventListener("touchmove",E(this,T,H),!1),m(this,P).removeEventListener("touchend",E(this,M,W),!1)}.bind(this));this.cb=o,A(this,P,t),this.subscribe(),this.settings=a,this.minDelta=a.minTouchmoveDistance,this.useCallback=this.useCallback.bind(this),this.unsubscribe=this.unsubscribe.bind(this)}useCallback(t){typeof this.cb=="function"&&t&&this.cb({dir:t/Math.abs(t),wheel:t*this.settings.touchmoveIntensity})}}y=new WeakMap,P=new WeakMap,N=new WeakSet,R=function(t){const o=t.touches[0];m(this,y).sY=o.screenY,this.prevY=m(this,y).sY,m(this,y).eY=m(this,y).sY},T=new WeakSet,H=function(t){const o=t.touches[0];this.prevY=m(this,y).eY,m(this,y).eY=o.screenY,this.deltaY=m(this,y).sY-m(this,y).eY;const a=m(this,y).sY-this.prevY;Math.abs(a)>Math.abs(this.deltaY)&&(m(this,y).sY=this.prevY),Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)},M=new WeakSet,W=function(t){Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)};class ee{constructor(t,o,a){i(this,"element");i(this,"callback");i(this,"settings");i(this,"subscribe",function(){this.element.addEventListener("keydown",this.listener)}.bind(this));i(this,"unsubscribe",function(){this.element.removeEventListener("keydown",this.listener)}.bind(this));i(this,"listener",function(t){if(!this.settings.enableScrollOnKeyboard||typeof this.callback!="function")return;const o=t.keyCode;console.log(o),this.settings.mode==="vertical"?(this.settings.scrollDownOnKeys.forEach(a=>{a.code===o&&this.callback({dir:1,wheel:a.distance})}),this.settings.scrollUpOnKeys.forEach(a=>{a.code===o&&this.callback({dir:-1,wheel:a.distance*-1})})):this.settings.mode==="horizontal"&&(this.settings.scrollRightOnKeys.forEach(a=>{a.code===o&&this.callback({dir:1,wheel:a.distance})}),this.settings.scrollLeftOnKeys.forEach(a=>{a.code===o&&this.callback({dir:-1,wheel:a.distance*-1})}))}.bind(this));this.element=t,this.callback=o,this.settings=a,this.subscribe()}}class oe{constructor(t){i(this,"element");i(this,"pressed",{});i(this,"subscribe",function(){this.element.addEventListener("keydown",this.keydown),this.element.addEventListener("keyup",this.keyup)}.bind(this));i(this,"unsubscribe",function(){this.element.removeEventListener("keydown",this.keydown),this.element.removeEventListener("keyup",this.keyup)}.bind(this));i(this,"isHold",function(t){return!!this.pressed[t]}.bind(this));i(this,"keydown",function(t){const o=t.keyCode;this.pressed[o]||(this.pressed[o]=!0)}.bind(this));i(this,"keyup",function(t){const o=t.keyCode;this.pressed[o]&&(this.pressed[o]=!1)}.bind(this));this.element=t,this.subscribe()}}var S=(e=>(e.MS_EDGE="MS_EDGE",e.EDGE_CHROMIUM_BASED="EDGE_CHROMIUM_BASED",e.OPERA="OPERA",e.CHROME="CHROME",e.MS_IE="MS_IE",e.MOZILLA_FIREFOX="MOZILLA_FIREFOX",e.SAFARI="SAFARI",e.OTHER="OTHER",e))(S||{});const te=()=>{const e=window.navigator.userAgent.toLowerCase();switch(!0){case e.indexOf("edge")>-1:return"MS_EDGE";case e.indexOf("edg/")>-1:return"EDGE_CHROMIUM_BASED";case(e.indexOf("opr")>-1&&!!window.opr):return"OPERA";case(e.indexOf("chrome")>-1&&!!window.chrome):return"CHROME";case e.indexOf("trident")>-1:return"MS_IE";case e.indexOf("firefox")>-1:return"MOZILLA_FIREFOX";case e.indexOf("safari")>-1:return"SAFARI";default:return"OTHER"}};class le{constructor(t,o,a,d){i(this,"swipe");i(this,"scroll");i(this,"keyboard");i(this,"shotcuts");i(this,"settings");i(this,"callback");i(this,"isSubscribed",!1);i(this,"subscribe",function(){this.isSubscribed=!0,this.scroll.subscribe(),this.swipe.subscribe(),this.keyboard.subscribe()}.bind(this));i(this,"unsubscribe",function(){this.isSubscribed=!1,this.scroll.unsubscribe(),this.swipe.unsubscribe(),this.keyboard.unsubscribe()}.bind(this));const l={wheelIntensity:a.wheelIntensity,touchmoveIntensity:a.touchmoveIntensity,minTouchmoveDistance:a.minTouchmoveDistance,safariWheelIntensity:a.safariWheelIntensity,safariTouchmoveIntensity:a.safariTouchmoveIntensity,chromeWheelIntensity:a.chromeWheelIntensity,chromeTouchmoveIntensity:a.chromeTouchmoveIntensity,operaWheelIntensity:a.operaWheelIntensity,operaTouchmoveIntensity:a.operaTouchmoveIntensity,edgeWheelIntensity:a.edgeWheelIntensity,edgeTouchmoveIntensity:a.edgeTouchmoveIntensity,mozillaWheelIntensity:a.mozillaWheelIntensity,mozillaTouchmoveIntensity:a.mozillaTouchmoveIntensity},f={wheelIntensity:b("WheelIntensity"),touchmoveIntensity:b("TouchmoveIntensity"),minTouchmoveDistance:l.minTouchmoveDistance};function b(u){switch(d){case S.SAFARI:return l[`safari${u}`];case S.CHROME:return l[`chrome${u}`];case S.OPERA:return l[`opera${u}`];case(S.MS_EDGE||S.EDGE_CHROMIUM_BASED):return l[`edge${u}`];case S.MOZILLA_FIREFOX:return l[`mozilla${u}`];default:return u==="WheelIntensity"?l.wheelIntensity:l.touchmoveIntensity}}const v={mode:a.mode,enableScrollOnKeyboard:a.enableScrollOnKeyboard,scrollDownOnKeys:a.scrollDownOnKeys,scrollUpOnKeys:a.scrollUpOnKeys,scrollLeftOnKeys:a.scrollLeftOnKeys,scrollRightOnKeys:a.scrollRightOnKeys};this.callback=o,this.settings=a,this.scroll=new Q(t,this.controlScroll.bind(this),f),this.swipe=new g(t,this.controlScroll.bind(this),f),this.keyboard=new ee(t,this.controlScroll.bind(this),v),this.shotcuts=new oe(t),this.destroy=this.destroy.bind(this),this.isSubscribed=!0}controlScroll(t){var a;if(!this.callback)return;let o=!1;(a=this.settings.preventScrollOnHoldKeys)==null||a.forEach(d=>{let l=0;d.code.forEach(f=>{this.shotcuts.isHold(f)&&l++}),l===d.code.length&&(this.unsubscribe(),o=!0)}),console.log(o,this.isSubscribed),!o&&!this.isSubscribed&&this.subscribe(),this.callback(t)}destroy(){this.scroll.unsubscribe(),this.swipe.unsubscribe(),this.keyboard.unsubscribe(),this.shotcuts.unsubscribe()}}const ae=(e,t=0)=>{const o=n.ref(!0),a=n.ref(performance.now());n.onMounted(()=>d(0)),n.onUnmounted(()=>o.value=!1);function d(l){o.value&&(l-a.value>t&&(e(),a.value=performance.now()),requestAnimationFrame(d))}},ne=(e,t,o)=>t===0&&e<.1?0:e+(t-e)*o;var z=(e=>(e.DESKTOP="DESKTOP",e.TABLET="TABLET",e.MOBILE="MOBILE",e))(z||{});function se(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"TABLET":/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"MOBILE":"DESKTOP"}const x=B.defineStore("privateSmoothPage",()=>{const e=n.ref(null),t=n.ref(0),o=n.ref(0),a=n.ref(!1),d=n.ref(!1),l=n.ref(!1),f=n.ref(!1),b=n.ref(!1),v=n.ref(z.DESKTOP),u=n.ref(S.OTHER),I=n.ref(!1),p=n.ref(!1),O=n.ref(!1),D=n.ref(0),h=r=>{e.value=r},c=r=>{t.value=r},K=r=>{d.value=r},w=r=>{o.value=r},F=r=>{a.value=r},U=r=>{l.value=r},G=r=>{b.value=r},$=r=>{f.value=r},q=r=>{v.value=r},X=r=>{u.value=r},_=r=>{p.value=r},Y=r=>{I.value=r},Z=r=>{O.value=r},L=r=>{D.value=r};return{settings:e,currentScrollPosition:t,isEnabled:d,nextScrollPosition:o,isTriggeringScrollPosition:a,isMounted:l,isInited:b,isEarlierMounted:f,deviceType:v,needReload:p,isDestroyedByUser:I,browser:u,isPreventScroll:O,savedCurrentScrollPositionForDestroy:D,setSettings:h,setCurrentScrollPosition:c,setIsEnabled:K,setNextScrollPosition:w,setIsTriggeringScrollPosition:F,setIsMounted:U,setIsInited:G,setIsEarlierMounted:$,setDeviceType:q,setNeedReload:_,setBrowser:X,preventScroll:Z,setSavedCurrentScrollPositionForDestroy:L,reload:(r=!1)=>{_(!0),r&&(c(0),w(0),L(0))},destroy:(r=!1)=>{Y(!0),r&&(c(0),w(0),L(0))},init:(r=!1)=>{Y(!1),r&&(c(0),w(0),L(0))}}}),ie=e=>{var t,o,a,d,l,f,b,v,u,I;return{mode:(e==null?void 0:e.mode)||s.mode,smoothness:(e==null?void 0:e.smoothness)||s.smoothness,wheelIntensity:(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,touchmoveIntensity:(e==null?void 0:e.touchmoveIntensity)||s.touchmoveIntensity,safariWheelIntensity:(e==null?void 0:e.safariWheelIntensity)||(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,safariTouchmoveIntensity:(e==null?void 0:e.safariTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||s.wheelIntensity,chromeWheelIntensity:(e==null?void 0:e.chromeWheelIntensity)||(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,chromeTouchmoveIntensity:(e==null?void 0:e.chromeTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||s.wheelIntensity,operaWheelIntensity:(e==null?void 0:e.operaWheelIntensity)||(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,operaTouchmoveIntensity:(e==null?void 0:e.operaTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||s.wheelIntensity,edgeWheelIntensity:(e==null?void 0:e.edgeWheelIntensity)||(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,edgeTouchmoveIntensity:(e==null?void 0:e.edgeTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||s.wheelIntensity,mozillaWheelIntensity:(e==null?void 0:e.mozillaWheelIntensity)||(e==null?void 0:e.wheelIntensity)||s.wheelIntensity,mozillaTouchmoveIntensity:(e==null?void 0:e.mozillaTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||s.wheelIntensity,watchIsEnabledOn:(e==null?void 0:e.watchIsEnabledOn)||s.watchIsEnabledOn,minTouchmoveDistance:(e==null?void 0:e.minTouchmoveDistance)||s.minTouchmoveDistance,minWidth:(e==null?void 0:e.minWidth)||s.minWidth,renderDelay:(e==null?void 0:e.renderDelay)||s.renderDelay,enableOnTouchDevices:(e==null?void 0:e.enableOnTouchDevices)||s.enableOnTouchDevices,resetScrollPositionOnStateChanging:(e==null?void 0:e.resetScrollPositionOnStateChanging)||s.resetScrollPositionOnStateChanging,reloadPageOnStateChanging:(e==null?void 0:e.reloadPageOnStateChanging)||s.reloadPageOnStateChanging,enableScrollOnKeyboard:(e==null?void 0:e.enableScrollOnKeyboard)||s.enableScrollOnKeyboard,scrollDownOnKeys:(e==null?void 0:e.scrollDownOnKeys)||s.scrollDownOnKeys,scrollUpOnKeys:(e==null?void 0:e.scrollUpOnKeys)||s.scrollUpOnKeys,scrollRightOnKeys:(e==null?void 0:e.scrollRightOnKeys)||s.scrollRightOnKeys,scrollLeftOnKeys:(e==null?void 0:e.scrollLeftOnKeys)||s.scrollLeftOnKeys,preventScrollOnHoldKeys:(e==null?void 0:e.preventScrollOnHoldKeys)||s.preventScrollOnHoldKeys,defaultClassNames:{smoothPage:((t=e==null?void 0:e.defaultClassNames)==null?void 0:t.smoothPage)||s.defaultClassNames.smoothPage,smoothPageBody:((o=e==null?void 0:e.defaultClassNames)==null?void 0:o.smoothPageBody)||s.defaultClassNames.smoothPageBody,smoothPageEnabled:((a=e==null?void 0:e.defaultClassNames)==null?void 0:a.smoothPageEnabled)||s.defaultClassNames.smoothPageEnabled,smoothPageVertical:((d=e==null?void 0:e.defaultClassNames)==null?void 0:d.smoothPageVertical)||s.defaultClassNames.smoothPageVertical,smoothPageHorizontal:((l=e==null?void 0:e.defaultClassNames)==null?void 0:l.smoothPageHorizontal)||s.defaultClassNames.smoothPageHorizontal},additionalClassNames:{smoothPage:((f=e==null?void 0:e.additionalClassNames)==null?void 0:f.smoothPage)||s.additionalClassNames.smoothPage,smoothPageBody:((b=e==null?void 0:e.additionalClassNames)==null?void 0:b.smoothPageBody)||s.additionalClassNames.smoothPageBody,smoothPageEnabled:((v=e==null?void 0:e.additionalClassNames)==null?void 0:v.smoothPageEnabled)||s.additionalClassNames.smoothPageEnabled,smoothPageVertical:((u=e==null?void 0:e.additionalClassNames)==null?void 0:u.smoothPageVertical)||s.additionalClassNames.smoothPageVertical,smoothPageHorizontal:((I=e==null?void 0:e.additionalClassNames)==null?void 0:I.smoothPageHorizontal)||s.additionalClassNames.smoothPageHorizontal}}},s={mode:"vertical",smoothness:.075,wheelIntensity:4,touchmoveIntensity:4,minTouchmoveDistance:40,watchIsEnabledOn:"load-resize",minWidth:0,renderDelay:0,enableOnTouchDevices:!0,resetScrollPositionOnStateChanging:!1,reloadPageOnStateChanging:!1,enableScrollOnKeyboard:!0,scrollUpOnKeys:[{code:38,distance:100}],scrollDownOnKeys:[{code:40,distance:100},{code:32,distance:200}],scrollLeftOnKeys:[{code:38,distance:100},{code:37,distance:100}],scrollRightOnKeys:[{code:40,distance:100},{code:39,distance:100},{code:32,distance:200}],preventScrollOnHoldKeys:[{code:[16]}],defaultClassNames:{smoothPage:"t-smoothpage",smoothPageBody:"t-smoothpage--body",smoothPageEnabled:"t-smoothpage--enabled",smoothPageVertical:"t-smoothpage--vertical",smoothPageHorizontal:"t-smoothpage--horizontal"},additionalClassNames:{smoothPage:"",smoothPageBody:"",smoothPageEnabled:"",smoothPageVertical:"",smoothPageHorizontal:""}},V=n.defineComponent({__name:"index",props:{settings:null},setup(e){const t=e,o=x(),a=n.inject("smoothPageSettings",void 0),d=ie(a),l=n.reactive({...d,...(t==null?void 0:t.settings)||{}});n.watchEffect(()=>{o.setSettings(l)});const f=n.ref(null),b=n.ref(null);n.onMounted(()=>{o.setSettings(l),o.setDeviceType(se()),o.setIsEnabled(O()),o.setBrowser(te()),o.setIsMounted(!0),setTimeout(()=>o.setIsEarlierMounted(!0),100)}),n.onUnmounted(()=>{o.setIsMounted(!1)}),n.watchEffect(()=>{o.isEnabled&&!o.isInited?v():!o.isEnabled&&o.isInited&&u()});function v(){f.value=new le(document,p,l,o.browser),l.resetScrollPositionOnStateChanging&&(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)),l.reloadPageOnStateChanging&&o.isEarlierMounted&&setTimeout(()=>location.reload(),100),o.setIsInited(!0),o.setNeedReload(!1),I(!0)}function u(){var h;(h=f.value)==null||h.destroy(),l.resetScrollPositionOnStateChanging?(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)):window.scroll(0,o.savedCurrentScrollPositionForDestroy),l.reloadPageOnStateChanging&&o.isEarlierMounted&&setTimeout(()=>location.reload(),100),o.setIsInited(!1),I(!1)}function I(h){const c=document.querySelector("html");if(c){if(h){l.defaultClassNames.smoothPageEnabled&&c.classList.add(l.defaultClassNames.smoothPageEnabled),l.additionalClassNames.smoothPageEnabled&&c.classList.add(l.additionalClassNames.smoothPageEnabled),l.mode==="vertical"?(l.defaultClassNames.smoothPageVertical&&c.classList.add(l.defaultClassNames.smoothPageVertical),l.additionalClassNames.smoothPageVertical&&c.classList.add(l.additionalClassNames.smoothPageVertical)):(l.defaultClassNames.smoothPageHorizontal&&c.classList.add(l.defaultClassNames.smoothPageHorizontal),l.additionalClassNames.smoothPageHorizontal&&c.classList.add(l.additionalClassNames.smoothPageHorizontal));return}l.defaultClassNames.smoothPageEnabled&&c.classList.remove(l.defaultClassNames.smoothPageEnabled),l.additionalClassNames.smoothPageEnabled&&c.classList.remove(l.additionalClassNames.smoothPageEnabled),l.mode==="vertical"?(l.defaultClassNames.smoothPageVertical&&c.classList.remove(l.defaultClassNames.smoothPageVertical),l.additionalClassNames.smoothPageVertical&&c.classList.remove(l.additionalClassNames.smoothPageVertical)):(l.defaultClassNames.smoothPageHorizontal&&c.classList.remove(l.defaultClassNames.smoothPageHorizontal),l.additionalClassNames.smoothPageHorizontal&&c.classList.remove(l.additionalClassNames.smoothPageHorizontal))}}n.watchEffect(()=>{o.needReload&&u()});function p(h){if(o.isPreventScroll||!b.value)return;const c=b.value.getBoundingClientRect().height-window.innerHeight,K=b.value.getBoundingClientRect().width-window.innerWidth,w=l.mode==="vertical"?c:K;o.setNextScrollPosition(Math.max(0,Math.min(o.currentScrollPosition+h.wheel,w)))}ae(()=>{o.isPreventScroll||o.isMounted&&(o.isTriggeringScrollPosition||(l.watchIsEnabledOn==="load-resize"&&o.setIsEnabled(O()),o.isEnabled?(o.setCurrentScrollPosition(ne(o.currentScrollPosition,o.nextScrollPosition,l.smoothness)),o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)):(o.setCurrentScrollPosition(window.scrollY),o.setNextScrollPosition(window.scrollY))))},l.renderDelay);function O(){return o.isDestroyedByUser?!1:(l.enableOnTouchDevices||o.deviceType===z.DESKTOP)&&window.innerWidth>=l.minWidth}const D=n.computed(()=>{if(o.isEnabled){if(l.mode==="vertical")return{transform:`translate3d(0, ${-o.currentScrollPosition}px, 0)`};if(l.mode==="horizontal")return{transform:`translate3d(${-o.currentScrollPosition}px, 0, 0)`}}return{}});return(h,c)=>(n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass([l.defaultClassNames.smoothPage,l.additionalClassNames.smoothPage])},[n.createElementVNode("div",{ref_key:"contentRef",ref:b,style:n.normalizeStyle(n.unref(D)),class:n.normalizeClass([l.defaultClassNames.smoothPageBody,l.additionalClassNames.smoothPageBody])},[n.renderSlot(h.$slots,"default")],6)],2))}});const re=B.defineStore("publicSmoothPage",()=>{const e=x(),t=n.computed(()=>e.settings),o=n.computed(()=>e.currentScrollPosition),a=n.computed(()=>e.isEnabled),d=n.computed(()=>e.isTriggeringScrollPosition),l=n.computed(()=>e.isMounted),f=n.computed(()=>e.isInited),b=n.computed(()=>e.deviceType),v=n.computed(()=>e.browser),u=n.computed(()=>e.isPreventScroll);return{settings:t,currentScrollPosition:o,isEnabled:a,isTriggeringScrollPosition:d,isMounted:l,isInited:f,deviceType:b,browser:v,isPreventScroll:u,preventScroll:h=>e.preventScroll(h),reload:(h=!1)=>e.reload(h),destroy:(h=!1)=>e.destroy(h),init:(h=!1)=>e.init(h)}}),ce={install(e,t){e.component("SmoothPage",V),e.provide("smoothPageSettings",t||{})}};exports.SmoothPage=V;exports.default=ce;exports.useSmoothPage=re;
