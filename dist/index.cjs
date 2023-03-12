"use strict";var j=Object.defineProperty;var J=(e,l,o)=>l in e?j(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o;var n=(e,l,o)=>(J(e,typeof l!="symbol"?l+"":l,o),o),L=(e,l,o)=>{if(!l.has(e))throw TypeError("Cannot "+o)};var u=(e,l,o)=>(L(e,l,"read from private field"),o?o.call(e):l.get(e)),p=(e,l,o)=>{if(l.has(e))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(e):l.set(e,o)},_=(e,l,o,t)=>(L(e,l,"write to private field"),t?t.call(e,o):l.set(e,o),o);var N=(e,l,o)=>(L(e,l,"access private method"),o);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("vue"),Y=require("pinia");class Q{constructor(l,o,t){n(this,"element");n(this,"cb");n(this,"settings");n(this,"subscribe",function(){this.element.addEventListener("wheel",this.listener)}.bind(this));n(this,"unsubscribe",function(){this.element.removeEventListener("wheel",this.listener)}.bind(this));n(this,"listener",function(l){typeof this.cb=="function"&&l.deltaY&&this.cb({dir:l.deltaY/Math.abs(l.deltaY),wheel:l.deltaY*this.settings.wheelIntensity})}.bind(this));this.element=l,this.cb=o,this.settings=t,this.subscribe()}}var b,S,R,K,D,M,z,k;class g{constructor(l,o,t){p(this,R);p(this,D);p(this,z);p(this,b,{sY:0,eY:0});n(this,"prevY",0);p(this,S,void 0);n(this,"cb");n(this,"deltaY");n(this,"minDelta");n(this,"settings");n(this,"subscribe",function(){u(this,S).addEventListener("touchstart",N(this,R,K).bind(this),!1),u(this,S).addEventListener("touchmove",N(this,D,M).bind(this),!1),u(this,S).addEventListener("touchend",N(this,z,k).bind(this),!1)}.bind(this));n(this,"unsubscribe",function(){u(this,S).removeEventListener("touchstart",N(this,R,K),!1),u(this,S).removeEventListener("touchmove",N(this,D,M),!1),u(this,S).removeEventListener("touchend",N(this,z,k),!1)}.bind(this));this.cb=o,_(this,S,l),this.subscribe(),this.settings=t,this.minDelta=t.minTouchmoveDistance,this.useCallback=this.useCallback.bind(this),this.unsubscribe=this.unsubscribe.bind(this)}useCallback(l){typeof this.cb=="function"&&l&&this.cb({dir:l/Math.abs(l),wheel:l*this.settings.touchmoveIntensity})}}b=new WeakMap,S=new WeakMap,R=new WeakSet,K=function(l){const o=l.touches[0];u(this,b).sY=o.screenY,this.prevY=u(this,b).sY,u(this,b).eY=u(this,b).sY},D=new WeakSet,M=function(l){const o=l.touches[0];this.prevY=u(this,b).eY,u(this,b).eY=o.screenY,this.deltaY=u(this,b).sY-u(this,b).eY;const t=u(this,b).sY-this.prevY;Math.abs(t)>Math.abs(this.deltaY)&&(u(this,b).sY=this.prevY),Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)},z=new WeakSet,k=function(l){Math.abs(this.deltaY)>this.minDelta&&this.useCallback(this.deltaY)};class ee{constructor(l,o,t){n(this,"element");n(this,"callback");n(this,"settings");n(this,"subscribe",function(){this.element.addEventListener("keydown",this.listener)}.bind(this));n(this,"unsubscribe",function(){this.element.removeEventListener("keydown",this.listener)}.bind(this));n(this,"listener",function(l){if(!this.settings.enableScrollOnKeyboard||typeof this.callback!="function")return;const o=l.keyCode;this.settings.mode==="vertical"||this.settings.mode==="vertical-reverse"?(this.settings.scrollDownOnKeys.forEach(t=>{t.code===o&&this.callback({dir:1,wheel:t.distance})}),this.settings.scrollUpOnKeys.forEach(t=>{t.code===o&&this.callback({dir:-1,wheel:t.distance*-1})})):(this.settings.mode==="horizontal"||this.settings.mode==="horizontal-reverse")&&(this.settings.scrollRightOnKeys.forEach(t=>{t.code===o&&this.callback({dir:1,wheel:t.distance})}),this.settings.scrollLeftOnKeys.forEach(t=>{t.code===o&&this.callback({dir:-1,wheel:t.distance*-1})}))}.bind(this));this.element=l,this.callback=o,this.settings=t,this.subscribe()}}class oe{constructor(l,o){n(this,"element");n(this,"pressed",{});n(this,"onKeys");n(this,"subscribe",function(){this.element.addEventListener("keydown",this.keydown),this.element.addEventListener("keyup",this.keyup)}.bind(this));n(this,"unsubscribe",function(){this.element.removeEventListener("keydown",this.keydown),this.element.removeEventListener("keyup",this.keyup)}.bind(this));n(this,"isHold",function(l){return!!this.pressed[l]}.bind(this));n(this,"keydown",function(l){const o=l.keyCode;this.pressed[o]||(this.pressed[o]=!0),this.onKeys()}.bind(this));n(this,"keyup",function(l){const o=l.keyCode;this.pressed[o]&&(this.pressed[o]=!1),this.onKeys()}.bind(this));this.element=l,this.onKeys=o,this.subscribe()}isHolding(){}}var w=(e=>(e.MS_EDGE="MS_EDGE",e.EDGE_CHROMIUM_BASED="EDGE_CHROMIUM_BASED",e.OPERA="OPERA",e.CHROME="CHROME",e.MS_IE="MS_IE",e.MOZILLA_FIREFOX="MOZILLA_FIREFOX",e.SAFARI="SAFARI",e.OTHER="OTHER",e))(w||{});const ae=()=>{const e=window.navigator.userAgent.toLowerCase();switch(!0){case e.indexOf("edge")>-1:return"MS_EDGE";case e.indexOf("edg/")>-1:return"EDGE_CHROMIUM_BASED";case(e.indexOf("opr")>-1&&!!window.opr):return"OPERA";case(e.indexOf("chrome")>-1&&!!window.chrome):return"CHROME";case e.indexOf("trident")>-1:return"MS_IE";case e.indexOf("firefox")>-1:return"MOZILLA_FIREFOX";case e.indexOf("safari")>-1:return"SAFARI";default:return"OTHER"}};class le{constructor(l,o,t,h){n(this,"swipe");n(this,"scroll");n(this,"keyboard");n(this,"shotcuts");n(this,"isSubscribed",!1);n(this,"settings");n(this,"callback");n(this,"subscribe",function(){this.isSubscribed=!0,this.scroll.subscribe(),this.swipe.subscribe(),this.keyboard.subscribe()}.bind(this));n(this,"unsubscribe",function(){this.isSubscribed=!1,this.scroll.unsubscribe(),this.swipe.unsubscribe(),this.keyboard.unsubscribe()}.bind(this));n(this,"destroy",function(){this.scroll.unsubscribe(),this.swipe.unsubscribe(),this.keyboard.unsubscribe(),this.shotcuts.unsubscribe()}.bind(this));const a={wheelIntensity:t.wheelIntensity,touchmoveIntensity:t.touchmoveIntensity,minTouchmoveDistance:t.minTouchmoveDistance,safariWheelIntensity:t.safariWheelIntensity,safariTouchmoveIntensity:t.safariTouchmoveIntensity,chromeWheelIntensity:t.chromeWheelIntensity,chromeTouchmoveIntensity:t.chromeTouchmoveIntensity,operaWheelIntensity:t.operaWheelIntensity,operaTouchmoveIntensity:t.operaTouchmoveIntensity,edgeWheelIntensity:t.edgeWheelIntensity,edgeTouchmoveIntensity:t.edgeTouchmoveIntensity,mozillaWheelIntensity:t.mozillaWheelIntensity,mozillaTouchmoveIntensity:t.mozillaTouchmoveIntensity},v={wheelIntensity:f("WheelIntensity"),touchmoveIntensity:f("TouchmoveIntensity"),minTouchmoveDistance:a.minTouchmoveDistance};function f(m){switch(h){case w.SAFARI:return a[`safari${m}`];case w.CHROME:return a[`chrome${m}`];case w.OPERA:return a[`opera${m}`];case(w.MS_EDGE||w.EDGE_CHROMIUM_BASED):return a[`edge${m}`];case w.MOZILLA_FIREFOX:return a[`mozilla${m}`];default:return m==="WheelIntensity"?a.wheelIntensity:a.touchmoveIntensity}}const P={mode:t.mode,enableScrollOnKeyboard:t.enableScrollOnKeyboard,scrollDownOnKeys:t.scrollDownOnKeys,scrollUpOnKeys:t.scrollUpOnKeys,scrollLeftOnKeys:t.scrollLeftOnKeys,scrollRightOnKeys:t.scrollRightOnKeys};this.callback=o,this.settings=t,this.scroll=new Q(l,this.controlScroll.bind(this),v),this.swipe=new g(l,this.controlScroll.bind(this),v),this.keyboard=new ee(l,this.controlScroll.bind(this),P),this.shotcuts=new oe(l,this.onKeysHold.bind(this))}controlScroll(l){this.callback&&this.callback(l)}onKeysHold(){var o;let l=!1;(o=this.settings.preventScrollOnHoldKeys)==null||o.forEach(t=>{let h=0;t.code.forEach(a=>{this.shotcuts.isHold(a)&&h++}),h===t.code.length&&(this.unsubscribe(),l=!0)}),!l&&!this.isSubscribed&&this.subscribe()}}const te=(e,l=0)=>{const o=s.ref(!0),t=s.ref(performance.now());s.onMounted(()=>h(0)),s.onUnmounted(()=>o.value=!1);function h(a){o.value&&(a-t.value>l&&(e(),t.value=performance.now()),requestAnimationFrame(h))}},se=(e,l,o)=>l===0&&e<.1?0:e+(l-e)*o;var B=(e=>(e.DESKTOP="DESKTOP",e.TABLET="TABLET",e.MOBILE="MOBILE",e))(B||{});function re(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"TABLET":/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"MOBILE":"DESKTOP"}const A=Y.defineStore("privateSmoothPage",()=>{const e=s.ref(null),l=s.ref(0),o=s.ref(0),t=s.ref(!1),h=s.ref(!1),a=s.ref(!1),v=s.ref(!1),f=s.ref(!1),P=s.ref(B.DESKTOP),m=s.ref(w.OTHER),I=s.ref(!1),E=s.ref(!1),O=s.ref(!1),C=s.ref(0),y=i=>{e.value=i},d=i=>{l.value=i},c=i=>{h.value=i},T=i=>{o.value=i},F=i=>{t.value=i},U=i=>{a.value=i},$=i=>{f.value=i},G=i=>{v.value=i},q=i=>{P.value=i},X=i=>{m.value=i},W=i=>{E.value=i},V=i=>{I.value=i},Z=i=>{O.value=i},H=i=>{C.value=i};return{settings:e,currentScrollPosition:l,isEnabled:h,nextScrollPosition:o,isTriggeringScrollPosition:t,isMounted:a,isInited:f,isEarlierMounted:v,deviceType:P,needReload:E,isDestroyedByUser:I,browser:m,isPreventScroll:O,savedCurrentScrollPositionForDestroy:C,setSettings:y,setCurrentScrollPosition:d,setIsEnabled:c,setNextScrollPosition:T,setIsTriggeringScrollPosition:F,setIsMounted:U,setIsInited:$,setIsEarlierMounted:G,setDeviceType:q,setNeedReload:W,setBrowser:X,preventScroll:Z,setSavedCurrentScrollPositionForDestroy:H,reload:(i=!1)=>{W(!0),i&&(d(0),T(0),H(0))},destroy:(i=!1)=>{V(!0),i&&(d(0),T(0),H(0))},init:(i=!1)=>{V(!1),i&&(d(0),T(0),H(0))}}}),ne=e=>{var l,o,t,h,a,v,f,P,m,I,E,O,C,y,d,c;return{mode:(e==null?void 0:e.mode)||r.mode,smoothness:(e==null?void 0:e.smoothness)||r.smoothness,wheelIntensity:(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,touchmoveIntensity:(e==null?void 0:e.touchmoveIntensity)||r.touchmoveIntensity,safariWheelIntensity:(e==null?void 0:e.safariWheelIntensity)||(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,safariTouchmoveIntensity:(e==null?void 0:e.safariTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||r.wheelIntensity,chromeWheelIntensity:(e==null?void 0:e.chromeWheelIntensity)||(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,chromeTouchmoveIntensity:(e==null?void 0:e.chromeTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||r.wheelIntensity,operaWheelIntensity:(e==null?void 0:e.operaWheelIntensity)||(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,operaTouchmoveIntensity:(e==null?void 0:e.operaTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||r.wheelIntensity,edgeWheelIntensity:(e==null?void 0:e.edgeWheelIntensity)||(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,edgeTouchmoveIntensity:(e==null?void 0:e.edgeTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||r.wheelIntensity,mozillaWheelIntensity:(e==null?void 0:e.mozillaWheelIntensity)||(e==null?void 0:e.wheelIntensity)||r.wheelIntensity,mozillaTouchmoveIntensity:(e==null?void 0:e.mozillaTouchmoveIntensity)||(e==null?void 0:e.touchmoveIntensity)||r.wheelIntensity,watchIsEnabledOn:(e==null?void 0:e.watchIsEnabledOn)||r.watchIsEnabledOn,minTouchmoveDistance:(e==null?void 0:e.minTouchmoveDistance)||r.minTouchmoveDistance,minWidth:(e==null?void 0:e.minWidth)||r.minWidth,renderDelay:(e==null?void 0:e.renderDelay)||r.renderDelay,enableOnTouchDevices:(e==null?void 0:e.enableOnTouchDevices)||r.enableOnTouchDevices,resetScrollPositionOnStateChanging:(e==null?void 0:e.resetScrollPositionOnStateChanging)||r.resetScrollPositionOnStateChanging,reloadPageOnStateChanging:(e==null?void 0:e.reloadPageOnStateChanging)||r.reloadPageOnStateChanging,enableScrollOnKeyboard:(e==null?void 0:e.enableScrollOnKeyboard)||r.enableScrollOnKeyboard,scrollDownOnKeys:(e==null?void 0:e.scrollDownOnKeys)||r.scrollDownOnKeys,scrollUpOnKeys:(e==null?void 0:e.scrollUpOnKeys)||r.scrollUpOnKeys,scrollRightOnKeys:(e==null?void 0:e.scrollRightOnKeys)||r.scrollRightOnKeys,scrollLeftOnKeys:(e==null?void 0:e.scrollLeftOnKeys)||r.scrollLeftOnKeys,preventScrollOnHoldKeys:(e==null?void 0:e.preventScrollOnHoldKeys)||r.preventScrollOnHoldKeys,defaultClassNames:{smoothPage:((l=e==null?void 0:e.defaultClassNames)==null?void 0:l.smoothPage)||r.defaultClassNames.smoothPage,smoothPageBody:((o=e==null?void 0:e.defaultClassNames)==null?void 0:o.smoothPageBody)||r.defaultClassNames.smoothPageBody,smoothPageBodyPosition:((t=e==null?void 0:e.defaultClassNames)==null?void 0:t.smoothPageBodyPosition)||r.defaultClassNames.smoothPageBodyPosition,smoothPageEnabled:((h=e==null?void 0:e.defaultClassNames)==null?void 0:h.smoothPageEnabled)||r.defaultClassNames.smoothPageEnabled,smoothPageVertical:((a=e==null?void 0:e.defaultClassNames)==null?void 0:a.smoothPageVertical)||r.defaultClassNames.smoothPageVertical,smoothPageVerticalReverse:((v=e==null?void 0:e.defaultClassNames)==null?void 0:v.smoothPageVerticalReverse)||r.defaultClassNames.smoothPageVerticalReverse,smoothPageHorizontal:((f=e==null?void 0:e.defaultClassNames)==null?void 0:f.smoothPageHorizontal)||r.defaultClassNames.smoothPageHorizontal,smoothPageHorizontalReverse:((P=e==null?void 0:e.defaultClassNames)==null?void 0:P.smoothPageHorizontalReverse)||r.defaultClassNames.smoothPageHorizontalReverse},additionalClassNames:{smoothPage:((m=e==null?void 0:e.additionalClassNames)==null?void 0:m.smoothPage)||r.additionalClassNames.smoothPage,smoothPageBody:((I=e==null?void 0:e.additionalClassNames)==null?void 0:I.smoothPageBody)||r.additionalClassNames.smoothPageBody,smoothPageBodyPosition:((E=e==null?void 0:e.additionalClassNames)==null?void 0:E.smoothPageBodyPosition)||r.additionalClassNames.smoothPageBodyPosition,smoothPageEnabled:((O=e==null?void 0:e.additionalClassNames)==null?void 0:O.smoothPageEnabled)||r.additionalClassNames.smoothPageEnabled,smoothPageVertical:((C=e==null?void 0:e.additionalClassNames)==null?void 0:C.smoothPageVertical)||r.additionalClassNames.smoothPageVertical,smoothPageVerticalReverse:((y=e==null?void 0:e.additionalClassNames)==null?void 0:y.smoothPageVerticalReverse)||r.additionalClassNames.smoothPageVerticalReverse,smoothPageHorizontal:((d=e==null?void 0:e.additionalClassNames)==null?void 0:d.smoothPageHorizontal)||r.additionalClassNames.smoothPageHorizontal,smoothPageHorizontalReverse:((c=e==null?void 0:e.additionalClassNames)==null?void 0:c.smoothPageHorizontalReverse)||r.additionalClassNames.smoothPageHorizontalReverse}}},r={mode:"vertical",smoothness:.075,wheelIntensity:4,touchmoveIntensity:4,minTouchmoveDistance:40,watchIsEnabledOn:"load-resize",minWidth:0,renderDelay:0,enableOnTouchDevices:!0,resetScrollPositionOnStateChanging:!1,reloadPageOnStateChanging:!1,enableScrollOnKeyboard:!0,scrollUpOnKeys:[{code:38,distance:100}],scrollDownOnKeys:[{code:40,distance:100},{code:32,distance:200}],scrollLeftOnKeys:[{code:38,distance:100},{code:37,distance:100}],scrollRightOnKeys:[{code:40,distance:100},{code:39,distance:100},{code:32,distance:200}],preventScrollOnHoldKeys:[{code:[16]}],defaultClassNames:{smoothPage:"t-smoothpage",smoothPageBody:"t-smoothpage--body",smoothPageBodyPosition:"t-smoothpage--body-position",smoothPageEnabled:"t-smoothpage--enabled",smoothPageVertical:"t-smoothpage--vertical",smoothPageVerticalReverse:"t-smoothpage--vertical-reverse",smoothPageHorizontal:"t-smoothpage--horizontal",smoothPageHorizontalReverse:"t-smoothpage--horizontal-reverse"},additionalClassNames:{smoothPage:"",smoothPageBody:"",smoothPageBodyPosition:"",smoothPageEnabled:"",smoothPageVertical:"",smoothPageVerticalReverse:"",smoothPageHorizontal:"",smoothPageHorizontalReverse:""}},x=s.defineComponent({__name:"index",props:{settings:null},setup(e){const l=e,o=A(),t=s.inject("smoothPageSettings",void 0),h=ne(t),a=s.reactive({...h,...(l==null?void 0:l.settings)||{}});s.watchEffect(()=>{o.setSettings(a)});const v=s.ref(null),f=s.ref(null);s.onMounted(()=>{o.setSettings(a),o.setDeviceType(re()),o.setIsEnabled(C()),o.setBrowser(ae()),o.setIsMounted(!0),setTimeout(()=>o.setIsEarlierMounted(!0),100)}),s.onUnmounted(()=>{o.setIsMounted(!1)}),s.watchEffect(()=>{o.isEnabled&&!o.isInited?P():!o.isEnabled&&o.isInited&&m()});function P(){v.value=new le(document,E,a,o.browser),a.resetScrollPositionOnStateChanging&&(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)),a.reloadPageOnStateChanging&&o.isEarlierMounted&&setTimeout(()=>location.reload(),100),o.setIsInited(!0),o.setNeedReload(!1),I(!0)}function m(){var d;(d=v.value)==null||d.destroy(),a.resetScrollPositionOnStateChanging?(o.setCurrentScrollPosition(0),o.setNextScrollPosition(0),window.scroll(0,0)):window.scroll(0,o.savedCurrentScrollPositionForDestroy),a.reloadPageOnStateChanging&&o.isEarlierMounted&&setTimeout(()=>location.reload(),100),o.setIsInited(!1),I(!1)}function I(d){const c=document.querySelector("html");if(c){if(d){a.defaultClassNames.smoothPageEnabled&&c.classList.add(a.defaultClassNames.smoothPageEnabled),a.additionalClassNames.smoothPageEnabled&&c.classList.add(a.additionalClassNames.smoothPageEnabled),a.mode==="vertical"?(a.defaultClassNames.smoothPageVertical&&c.classList.add(a.defaultClassNames.smoothPageVertical),a.additionalClassNames.smoothPageVertical&&c.classList.add(a.additionalClassNames.smoothPageVertical)):a.mode==="vertical-reverse"?(a.defaultClassNames.smoothPageVerticalReverse&&c.classList.add(a.defaultClassNames.smoothPageVerticalReverse),a.additionalClassNames.smoothPageVerticalReverse&&c.classList.add(a.additionalClassNames.smoothPageVerticalReverse)):a.mode==="horizontal"?(a.defaultClassNames.smoothPageHorizontal&&c.classList.add(a.defaultClassNames.smoothPageHorizontal),a.additionalClassNames.smoothPageHorizontal&&c.classList.add(a.additionalClassNames.smoothPageHorizontal)):a.mode==="horizontal-reverse"&&(a.defaultClassNames.smoothPageHorizontalReverse&&c.classList.add(a.defaultClassNames.smoothPageHorizontalReverse),a.additionalClassNames.smoothPageHorizontalReverse&&c.classList.add(a.additionalClassNames.smoothPageHorizontalReverse));return}a.defaultClassNames.smoothPageEnabled&&c.classList.remove(a.defaultClassNames.smoothPageEnabled),a.additionalClassNames.smoothPageEnabled&&c.classList.remove(a.additionalClassNames.smoothPageEnabled),a.mode==="vertical"?(a.defaultClassNames.smoothPageVertical&&c.classList.remove(a.defaultClassNames.smoothPageVertical),a.additionalClassNames.smoothPageVertical&&c.classList.remove(a.additionalClassNames.smoothPageVertical)):a.mode==="vertical-reverse"?(a.defaultClassNames.smoothPageVerticalReverse&&c.classList.remove(a.defaultClassNames.smoothPageVerticalReverse),a.additionalClassNames.smoothPageVerticalReverse&&c.classList.remove(a.additionalClassNames.smoothPageVerticalReverse)):a.mode==="horizontal"?(a.defaultClassNames.smoothPageHorizontal&&c.classList.remove(a.defaultClassNames.smoothPageHorizontal),a.additionalClassNames.smoothPageHorizontal&&c.classList.remove(a.additionalClassNames.smoothPageHorizontal)):a.mode==="horizontal-reverse"&&(a.defaultClassNames.smoothPageHorizontalReverse&&c.classList.remove(a.defaultClassNames.smoothPageHorizontalReverse),a.additionalClassNames.smoothPageHorizontalReverse&&c.classList.remove(a.additionalClassNames.smoothPageHorizontalReverse))}}s.watchEffect(()=>{o.needReload&&m()});function E(d){if(o.isPreventScroll)return;const c=O();c&&o.setNextScrollPosition(Math.max(0,Math.min(o.currentScrollPosition+d.wheel,c)))}function O(){if(!f.value)return 0;const d=f.value.getBoundingClientRect().height-window.innerHeight,c=f.value.getBoundingClientRect().width-window.innerWidth;return a.mode==="vertical"||a.mode==="vertical-reverse"?d:a.mode==="horizontal"||a.mode==="horizontal-reverse"?c:0}te(()=>{o.isPreventScroll||o.isMounted&&(o.isTriggeringScrollPosition||(a.watchIsEnabledOn==="load-resize"&&o.setIsEnabled(C()),o.isEnabled?(o.setCurrentScrollPosition(se(o.currentScrollPosition,o.nextScrollPosition,a.smoothness)),o.setSavedCurrentScrollPositionForDestroy(o.currentScrollPosition)):(o.setCurrentScrollPosition(window.scrollY),o.setNextScrollPosition(window.scrollY))))},a.renderDelay);function C(){return o.isDestroyedByUser?!1:(a.enableOnTouchDevices||o.deviceType===B.DESKTOP)&&window.innerWidth>=a.minWidth}const y=s.computed(()=>{if(o.isEnabled){if(a.mode==="vertical")return{transform:`translate3d(0, ${-o.currentScrollPosition}px, 0)`};if(a.mode==="vertical-reverse")return{transform:`translate3d(0, ${o.currentScrollPosition}px, 0)`};if(a.mode==="horizontal")return{transform:`translate3d(${-o.currentScrollPosition}px, 0, 0)`};if(a.mode==="horizontal-reverse")return{transform:`translate3d(${o.currentScrollPosition}px, 0, 0)`}}return{}});return(d,c)=>(s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass([a.defaultClassNames.smoothPage,a.additionalClassNames.smoothPage])},[s.createElementVNode("div",{ref_key:"contentRef",ref:f,style:s.normalizeStyle(s.unref(y)),class:s.normalizeClass([a.defaultClassNames.smoothPageBody,a.additionalClassNames.smoothPageBody])},[s.createElementVNode("div",{class:s.normalizeClass([a.defaultClassNames.smoothPageBodyPosition,a.additionalClassNames.smoothPageBodyPosition])},[s.renderSlot(d.$slots,"default")],2)],6)],2))}});const ie=Y.defineStore("publicSmoothPage",()=>{const e=A(),l=s.computed(()=>e.settings),o=s.computed(()=>e.currentScrollPosition),t=s.computed(()=>e.isEnabled),h=s.computed(()=>e.isTriggeringScrollPosition),a=s.computed(()=>e.isMounted),v=s.computed(()=>e.isInited),f=s.computed(()=>e.deviceType),P=s.computed(()=>e.browser),m=s.computed(()=>e.isPreventScroll);return{settings:l,currentScrollPosition:o,isEnabled:t,isTriggeringScrollPosition:h,isMounted:a,isInited:v,deviceType:f,browser:P,isPreventScroll:m,preventScroll:y=>e.preventScroll(y),reload:(y=!1)=>e.reload(y),destroy:(y=!1)=>e.destroy(y),init:(y=!1)=>e.init(y)}}),ce={install(e,l){e.component("SmoothPage",x),e.provide("smoothPageSettings",l||{})}};exports.SmoothPage=x;exports.default=ce;exports.useSmoothPage=ie;
