function clamp(min: number, input: number, max: number) {
  return Math.max(min, Math.min(input, max))
}

function mapRange(in_min: number, in_max: number, input: number, out_min: number, out_max: number) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function lerp(x: number, y: number, t: number) {
  return (1 - t) * x + t * y
}

function truncate(value: number, decimals: number) {
  return parseFloat(value.toFixed(decimals))
}

const Maths = { lerp, clamp, mapRange, truncate }

export { lerp, clamp, mapRange, truncate }
export default Maths
