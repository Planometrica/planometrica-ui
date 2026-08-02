precision mediump float;

/** @resolution */
uniform vec2 u_resolution;

/**
 * @label Top Color
 * @color
 * @default #041D30
 */
uniform vec3 u_top;

/**
 * @label Bottom Color
 * @color
 * @default #0A4C76
 */
uniform vec3 u_bottom;

/**
 * @label Grain
 * @range 0.0, 0.08
 * @default 0.028
 */
uniform float u_grain;

/**
 * @label Vignette
 * @range 0.0, 1.0
 * @default 0.32
 */
uniform float u_vignette;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  float t = smoothstep(0.0, 1.0, uv.y);
  vec3 col = mix(u_bottom, u_top, t);

  vec2 d = uv - vec2(0.5, 0.42);
  d.x *= u_resolution.x / max(u_resolution.y, 1.0);
  float vig = smoothstep(0.55, 1.35, length(d));
  col *= 1.0 - u_vignette * vig;

  col += (hash(gl_FragCoord.xy) - 0.5) * u_grain;

  gl_FragColor = vec4(col, 1.0);
}
