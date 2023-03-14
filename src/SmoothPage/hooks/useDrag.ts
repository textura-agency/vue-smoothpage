import { onMounted, onUnmounted, ref } from "vue"
import { Drag } from "../utils/drag"
import type { Ref } from "vue"
import type { OnScrollProps } from "../components/SmoothPage/extensions/detector.interface"

export const useDrag = (track: Ref<HTMLElement | null>, thumb: Ref<HTMLElement | null>, onScroll: (props: OnScrollProps) => void) => {
    const drag = ref<any>(null)

    onMounted(() => {
        drag.value = new Drag(track, thumb, onScroll)
    })
    onUnmounted(() => {
        drag.value?.destroy()
    })
}