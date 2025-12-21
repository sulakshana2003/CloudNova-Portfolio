/* eslint-disable prefer-const */
import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;

  /** Pause rendering when false */
  active?: boolean;

  /** Cap pixel ratio (lower = faster) */
  dpr?: number;

  /** Cap FPS (24–40 recommended) */
  maxFps?: number;

  /** NEW: pause rendering while user is actively scrolling */
  pauseOnScroll?: boolean;

  /** NEW: ms to wait after last scroll event before resuming */
  scrollResumeDelayMs?: number;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

// Lower line count = less GPU work (was 40)
const int u_line_count = 24;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

function normalizeRgb(c: [number, number, number]) {
  // if you pass [153,0,0] treat as 0-255 and normalize
  const max = Math.max(c[0], c[1], c[2]);
  return max > 1 ? ([c[0] / 255, c[1] / 255, c[2] / 255] as const) : c;
}

const Threads: React.FC<ThreadsProps> = ({
  color = [160, 50, 50],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,

  active = true,
  dpr = 0.85, // default lower for smoother scroll
  maxFps = 30,
  pauseOnScroll = true,
  scrollResumeDelayMs = 140,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const animationFrameId = useRef<number | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh | null>(null);

  const activeRef = useRef<boolean>(active);
  activeRef.current = active;

  const lastRenderRef = useRef<number>(0);

  // scroll-pausing
  const scrollPauseTimer = useRef<number | null>(null);
  const pausedByScrollRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });

    rendererRef.current = renderer;

    // cap DPR (huge performance win)
    renderer.dpr = Math.min(window.devicePixelRatio || 1, dpr);

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const [r, g, b] = normalizeRgb(color);

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(r, g, b) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    programRef.current = program;

    const mesh = new Mesh(gl, { geometry, program });
    meshRef.current = mesh;

    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = clientWidth;
      program.uniforms.iResolution.value.g = clientHeight;
      program.uniforms.iResolution.value.b = clientWidth / clientHeight;
    }

    window.addEventListener("resize", resize, { passive: true });
    resize();

    let currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }

    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }

    if (enableMouseInteraction) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("blur", handleMouseLeave);
    }

    const minFrameMs = 1000 / Math.max(1, maxFps);

    function update(t: number) {
      // If inactive, stop scheduling frames
      if (!activeRef.current) {
        animationFrameId.current = null;
        return;
      }

      // Pause while scrolling
      if (pauseOnScroll && pausedByScrollRef.current) {
        animationFrameId.current = null;
        return;
      }

      // FPS cap
      if (t - lastRenderRef.current < minFrameMs) {
        animationFrameId.current = requestAnimationFrame(update);
        return;
      }
      lastRenderRef.current = t;

      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }

      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }

    function startLoop() {
      if (!animationFrameId.current && activeRef.current) {
        lastRenderRef.current = 0;
        animationFrameId.current = requestAnimationFrame(update);
      }
    }

    function stopLoop() {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }

    // Pause rendering during scroll and resume after
    function pauseDuringScroll() {
      if (!pauseOnScroll) return;

      pausedByScrollRef.current = true;
      stopLoop();

      if (scrollPauseTimer.current) window.clearTimeout(scrollPauseTimer.current);
      scrollPauseTimer.current = window.setTimeout(() => {
        pausedByScrollRef.current = false;
        startLoop();
      }, scrollResumeDelayMs);
    }

    if (pauseOnScroll) {
      window.addEventListener("scroll", pauseDuringScroll, { passive: true });
      window.addEventListener("wheel", pauseDuringScroll, { passive: true });
      window.addEventListener("touchmove", pauseDuringScroll, { passive: true });
    }

    // Start only if active
    if (activeRef.current) startLoop();

    // Pause when tab is hidden
    function onVisibility() {
      if (document.hidden) {
        stopLoop();
      } else if (activeRef.current && !(pauseOnScroll && pausedByScrollRef.current)) {
        startLoop();
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);

      stopLoop();

      window.removeEventListener("resize", resize);

      if (pauseOnScroll) {
        window.removeEventListener("scroll", pauseDuringScroll);
        window.removeEventListener("wheel", pauseDuringScroll);
        window.removeEventListener("touchmove", pauseDuringScroll);
      }
      if (scrollPauseTimer.current) window.clearTimeout(scrollPauseTimer.current);

      if (enableMouseInteraction) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("blur", handleMouseLeave);
      }

      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update uniforms when props change (no WebGL re-init)
  useEffect(() => {
  const program = programRef.current;
  const renderer = rendererRef.current;
  if (!program || !renderer) return;

  const [r, g, b] = normalizeRgb(color);
  (program.uniforms.uColor.value as Color).set(r, g, b);

  program.uniforms.uAmplitude.value = amplitude;
  program.uniforms.uDistance.value = distance;

  renderer.dpr = Math.min(window.devicePixelRatio || 1, dpr);
  }, [color, amplitude, distance, dpr]);


  // Start/stop loop when active changes
  useEffect(() => {
    activeRef.current = active;

    const stopLoop = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };

    const startLoop = () => {
      if (
        activeRef.current &&
        !animationFrameId.current &&
        rendererRef.current &&
        programRef.current &&
        meshRef.current &&
        !(pauseOnScroll && pausedByScrollRef.current)
      ) {
        lastRenderRef.current = 0;

        const renderer = rendererRef.current;
        const program = programRef.current;
        const mesh = meshRef.current;

        const minFrameMs = 1000 / Math.max(1, maxFps);

        const update = (t: number) => {
          if (!activeRef.current) {
            animationFrameId.current = null;
            return;
          }
          if (pauseOnScroll && pausedByScrollRef.current) {
            animationFrameId.current = null;
            return;
          }

          if (t - lastRenderRef.current < minFrameMs) {
            animationFrameId.current = requestAnimationFrame(update);
            return;
          }
          lastRenderRef.current = t;

          program.uniforms.iTime.value = t * 0.001;
          renderer.render({ scene: mesh });
          animationFrameId.current = requestAnimationFrame(update);
        };

        animationFrameId.current = requestAnimationFrame(update);
      }
    };

    if (!active) stopLoop();
    else startLoop();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, maxFps, pauseOnScroll]);

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />;
};

export default Threads;
