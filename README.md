# Smooth Page Library

Ease to use, light, adaptive & configurable smooth page scroll for Vue 3. **no gsap**

SmoothPage provide you a full control of scroll behavior. When it disabled (may be you want disable it on mobile devices for optimization porpose) it uses built-in browser html/css solutions to reach the same effectm(for example horizontal scroll) as during the SmoothPage scroll enabled

## *SmoothPage library now in development*

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

#### npm

For module bundlers such as Webpack or Browserify.

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
        smoothness?: number; // 0.075 by default
        wheelIntensity?: number; // 4 by default
        minWidth?: number; // 0 by default
        renderDelay?: number; // 0 by default
        enableOnTouchDevices?: boolean; // true by default
        touchmoveIntensity?: number; // 4 by default
        minTouchmoveDistance?: number; // 40 (px) by default
        defaultClassNames?: {
            smoothPage?: string; // 't-smoothpage' by default
            smoothPageBody?: string; // 't-smoothpage--body' by default
            smoothPageEnabled?: string; // 't-smoothpage--enabled' by default
        },
        additionalClassNames?: {
            smoothPage?: string; // '' by default
            smoothPageBody?: string; // '' by default
            smoothPageEnabled?: string; // '' by default
        }
    }

**2. Then use component in layout or smth like that**

    <!-- layout.ts -->
    <template>
        <header/>
        <smooth-page :prevent-scroll="isPageLoaded">
            <slot/>
        </smooth-page>
    </template>

preventScroll is a dynamic prop

**If you dont want to set up SmoothPage via app.use(), you can directly import it**

You still can set settings to SmoothPage using "settings" prop. 
Most of them can work dynamicaly, for example "minWidth".

    <template>
        <header/>
        <smooth-page :prevent-scroll="isPageLoaded" :settings={...}>
            <slot/>
        </smooth-page>
    </template>
    <script lang="ts" setup>
        import { SmoothPage } from 'vue-smoothpage'
    </script> 

#### Hook "useSmoothPage"

    import { useSmoothPage } from 'vue-smoothpage'

That hook provide you opportunity to read almost all states of the SmoothPage (for example current smooth scroll position) & some methods.

    const {
        currentScrollPosition, // readonly current scroll position
        isEnabled,  // readonly if scroll is enabled (depends on props "minWidth" & "enableOnTouchDevices")
        isTriggeringScrollPosition, // readonly (used by AnchorLink component)
        isMounted, // readonly
        isInited, // readonly
        deviceType, // readonly (could be "desktop", "laptop", "mobile")

        reload // method, reload SmoothScroll
    } = useSmoothPage()









