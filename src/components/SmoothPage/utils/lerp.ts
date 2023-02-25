const lerp = (start: number, end: number, t: number = 0.2) => {
    return start + (end - start) * t
}

export { lerp }