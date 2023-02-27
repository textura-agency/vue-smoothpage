import { onMounted, onUnmounted, ref } from "vue"
const useLoop = (callback: () => void, delay: number = 0) => {
    const isRendering = ref(true)
    const startTime = ref(performance.now())
    onMounted(() => render(0))
    onUnmounted(() => isRendering.value = false)
    function render(time: number) {
        if (!isRendering.value) { return }
        if (time - startTime.value > delay) {
            callback()
            startTime.value = performance.now()
        }
        requestAnimationFrame(render)
    }
}

export { useLoop }