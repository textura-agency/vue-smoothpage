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