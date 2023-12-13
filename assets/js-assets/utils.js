
export function lerp(min, max, alpha) {
    return min + (max - min) * alpha;
}

export function inverseLerp(min, max, value) {
    return (value - min) / (max - min);
}

export function map(minIn, maxIn, minOut, maxOut, value) {
    const alpha = inverseLerp(minIn, maxIn, value);
    return lerp(minOut, maxOut, alpha);
}
