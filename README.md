# Smooth Page Library

Ease to use, light, adaptive & configurable smooth page scroll for Vue 3. **no gsap**

SmoothPage provide you a full control of scroll behavior. When it disabled (may be you want disable it on mobile devices for optimization porpose) it uses built-in browser html/css solutions to reach the same effectm(for example horizontal scroll) as during the SmoothPage scroll enabled

## *SmoothPage library is in development*

### Features at release:
Library contains such configurable components for convinient work with smooth scroll:
- **SmoothPage component**
- **HorizontalScrollBlock component** (work when SmoothPage enabled & disabled)
- **AnchorLink component** (work when SmoothPage enabled & disabled)
- **StickyBlock component** (work when SmoothPage enabled & disabled)

### Next updates:
- Different directions for SmoothPage (in current version only from top to bottom)
- wheelSafariIntensity, touchmoveSafariIntensity props for SmoothPage (in current version you still can control wheel & touchmove intensity, but in all browsers together)
- AnchorLink with element id prop which controls where to scroll (in current version you have to provide number of pixels to scroll)
- Hash mode for AnchorLink (set the hash to location url)
- Scroll to hash on load (opportunity to set scroll or not to hash on document load)
- Different directions for HorizontalScrollBlock (in current version only from left to right)
- Vertical state for HorizontalScrollBlock (in current version even if SmoothPage disabled horizontal scroll works, but if you want to make it vertical on mobile devices - this option would be for you)
- Different directions for StickyBlock (in current version only from top to bottom)
- Configurable custom scroll bar for smoothPage, when it is enabled 

### Examples of Websites using SmoothPage Library
- https://chat-liker.vercel.app/

## Quick start

### Installation

```shell
npm i vue-smoothpage
```

```shell
yarn add vue-smoothpage
```

**1. First install package in main file**

    <!-- main.ts -->
    import { createApp } from "vue";
    import App from "./App.vue";
    import SmoothPage from "vue-smoothpage";
    import { createPinia } from "pinia"; // pinia is required (may be would be deleted in future)
    import 'vue-smoothpage/styles.css' // styles is required for correct displaying

    const app = createApp(App)
    const pinia = createPinia()

    app.use(pinia)
    app.use(SmoothPage, {}: SmoothPageSettings)
    app.mount('#app')

Available settings

    interface SmoothPageSettings {
        mode?: 'vertical' | 'vertical-reverse' | 'horizontal' | 'horizontal-reverse'; // 'vertical' by default
        smoothness?: number; // 0.075 by default
        wheelIntensity?: number; // 4 by default
        touchmoveIntensity?: number; // 4 by default

        // experimental features
        safariWheelIntensity?: number; // equals wheelIntensity by default
        safariTouchmoveIntensity?: number; // equals touchmoveIntensity by default
        chromeWheelIntensity?: number; // equals wheelIntensity by default
        chromeTouchmoveIntensity?: number; // equals touchmoveIntensity by default
        operaWheelIntensity?: number; // equals wheelIntensity by default
        operaTouchmoveIntensity?: number; // equals touchmoveIntensity by default
        edgeWheelIntensity?: number; // equals wheelIntensity by default
        edgeTouchmoveIntensity?: number; // equals touchmoveIntensity by default
        mozillaWheelIntensity?: number; // equals wheelIntensity by default
        mozillaTouchmoveIntensity?: number; // equals touchmoveIntensity by default
        // 

        watchIsEnabledOn?: 'load-resize' | 'load'; // 'load-resize' by default
        minWidth?: number; // 0 by default
        renderDelay?: number; // 0 by default
        enableOnTouchDevices?: boolean; // true by default
        minTouchmoveDistance?: number; // 40 (px) by default
        resetScrollPositionOnStateChanging?: boolean; // false by default (make sense only in vertical mode)
        reloadPageOnStateChanging?: boolean; // false by default

        enableScrollOnKeyboard?: boolean; // true by default
        scrollDownOnKeys?: Array<{ code: number; distance: number; }>; // [ { code: 40, distance: 100 }, { code: 32, distance: 200 } ] by default
        scrollUpOnKeys?: Array<{ code: number; distance: number; }>; // [ { code: 38, distance: 100 } ] by default
        scrollRightOnKeys?: Array<{ code: number; distance: number; }>; // [ { code: 40, distance: 100 }, { code: 39, distance: 100 }, { code: 32, distance: 200 } ] by default
        scrollLeftOnKeys?: Array<{ code: number; distance: number; }>; // [ { code: 38, distance: 100 }, { code: 37, distance: 100 } ] by default
        preventScrollOnHoldKeys?: Array<{ code: number[] }> // [ { code: [ 16 ] } ] by default

        enableScrollbar?: boolean; // true by default
        enableScrollbarWhileSmoothpageDisabled?: boolean; // false by default (if "true" it will replace native scrollbar even when Smoothpage disabled)
        scrollbarComponent?: Component; // SmoothScrollbar by default (can be used custom component)
        scrollbarSettings?: {
            trackWidth?: string; // 12px by default
            thumbHeight?: string; // 100px by default
            thumbWidth?: string; // 12px by default
        }; // (can be replaced by custom scrollbarSettings for custom component)

        defaultClassNames?: {
            smoothPage?: string; // 't-smoothpage' by default
            smoothPageBody?: string; // 't-smoothpage--body' by default
            smoothPageBodyPosition?: string; // 't-smoothpage--body-position' by default
            smoothPageEnabled?: string; // 't-smoothpage--enabled' by default
            smoothPageVertical?: string; // 't-smoothpage--vertical' by default
            smoothPageVerticalReverse?: string; // 't-smoothpage--vertical-reverse' by default
            smoothPageHorizontal?: string; // 't-smoothpage--horizontal' by default
            smoothPageHorizontalReverse?: string; // 't-smoothpage--horizontal-reverse' by default
            scrollbarEnabled?: string; // 't-smoothscrollbar--enabled' by default
        },
        additionalClassNames?: {
            smoothPage?: string; // '' by default
            smoothPageBody?: string; // '' by default
            smoothPageBodyPosition?: string; // '' by default
            smoothPageEnabled?: string; // '' by default
            smoothPageVertical?: string; // '' by default
            smoothPageVerticalReverse?: string; // '' by default
            smoothPageHorizontal?: string; // '' by default
            smoothPageHorizontalReverse?: string; // '' by default
            scrollbarEnabled?: string; // '' by default
        }
    }

**2. Then use component in layout or smth like that**

    <!-- layout.ts -->
    <template>
        <header/>
        <smooth-page>
            <slot/>
        </smooth-page>
    </template>

**If you dont want to set up SmoothPage via app.use(), you can directly import it**

You still can set settings to SmoothPage using "settings" prop. 
Most of them can work dynamicaly, for example "minWidth".

    <template>
        <header/>
        <smooth-page :settings={...}>
            <slot/>
        </smooth-page>
    </template>
    <script lang="ts" setup>
        import { SmoothPage } from 'vue-smoothpage'
    </script> 

## Hook "useSmoothPage"

    import { useSmoothPage } from 'vue-smoothpage'

That hook provide you opportunity to read almost all states of the SmoothPage (for example current smooth scroll position) & some methods.

    const {
        settings, // readonly (SmoothPageSettings type)

        currentScrollPosition, // readonly current scroll position
        isEnabled,  // readonly if scroll is enabled (depends on props "minWidth" & "enableOnTouchDevices")
        isTriggeringScrollPosition, // readonly (will be used by AnchorLink component)
        isMounted, // readonly
        isInited, // readonly
        deviceType, // readonly ( "DESKTOP" | "LAPTOP" | "MOBILE" )
        browser, // readonly ( "MS_EDGE" | "EDGE_CHROMIUM_BASED" | "OPERA" | "CHROME" | "MS_IE" | "MOZILLA_FIREFOX" | "SAFARI" | "OTHER" )

        isPreventScroll, // readonly (true | false)
        preventScroll, // method set preventScroll

        reload // method reloads SmoothPage
        destroy // method destroys SmoothPage
        init // method init SmoothPage (to get effect SmoothPage has to be destroyed before)
    } = useSmoothPage()

Methods "reload( resetPosition?: boolean )", "destroy( resetPosition?: boolean )", "init( resetPosition?: boolean )" accept prop "resetPosition" (by default is false), which reset scroll position (set position to 0 instantly)

Method "preventScroll( value: boolean )" accept "true" or "false" parameteries

**if "resetScrollPositionOnStateChanging" set to "true" the scroll position will reset anyway**

## Custom Scrollbar

By default Smoothpage uses inner custom component for scrollbar. Which u can easily customise via provided settings and styles.

**Scrollbar bar works like a plugin. If u need to create ur own custom scrollbar u can make ur own component and replace it via "scrollbarComponent" key in settings**

Example for custom scrollbar component:

    <!-- MyCustomScrollBar.ts -->
    <template>
        <div :style="{ width: `${settings.scrollbarSettings?.trackWidth}` }" class="t-smoothscrollbar">
            <div ref="track" class="t-smoothscrollbar--track">
                <div 
                    ref="thumb" 
                    :style="{ 
                        width: settings.scrollbarSettings?.thumbWidth, 
                        height: settings.scrollbarSettings?.thumbHeight,
                        transform: `translateY(${thumbPosition}px)`,
                    }" 
                    class="t-smoothscrollbar--thumb">
                </div>
            </div>
        </div>
    </template>

    <script lang="ts" setup>
    import { ref, watchEffect } from 'vue';
    import type { SmoothPageSettings } from '../../interfaces/settings.interface'
    import type { PrivateStore } from '../../interfaces/store.interface';

    const { settings, store } = defineProps<{
        settings: SmoothPageSettings,
        store: PrivateStore
    }>()

    const thumb = ref<HTMLElement>()
    const track = ref<HTMLElement>()

    const thumbPosition = ref<number>(0)
    watchEffect(() => {
        if (!thumb.value || !track.value) { return }
        if (!store.isEnabled && !settings.enableScrollbarWhileSmoothpageDisabled) { return }
        const pageHeight = document.getElementById('smoothpageBody')?.getBoundingClientRect().height
        if (!pageHeight) { return }
        const trackHeight = track.value!.getBoundingClientRect().height
        const thumbHeight = thumb.value!.getBoundingClientRect().height
        thumbPosition.value = Number(store.currentScrollPosition) / (pageHeight - trackHeight) * (trackHeight - thumbHeight)
    })
    </script>

**In props u have access to "settings" and "store"**

- "settings" - all settings which smoothpage uses for working
- "store" - private store, which stores all states and methods of smoothPage, this store Smoothpage uses under the hood

**Then simply provide this component to Smoothpage**

    <!-- main.ts -->
    import MyCustomScrollBar from '../MyCustomScrollBar.vue'
    app.use(SmoothPage, {
        scrollbarComponent: MyCustomScrollBar
    })

or directly

    <!-- layout.ts -->
    <template>
        <header/>
        <smooth-page :settings="{ scrollbarComponent: MyCustomScrollBar }" >
            <slot/>
        </smooth-page>
    </template>











