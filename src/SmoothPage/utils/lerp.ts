const lerp = (start: number, end: number, t: number = 0.2) => {
    if (end === 0 && start < 0.1) return 0
    return start + (end - start) * t
}

export { lerp }