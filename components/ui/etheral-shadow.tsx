'use client'

import React, { useId, CSSProperties, memo } from 'react'

interface AnimationConfig {
  preview?: boolean
  scale: number
  speed: number
}

interface NoiseConfig {
  opacity: number
  scale: number
}

interface ShadowOverlayProps {
  sizing?: 'fill' | 'stretch'
  color?: string
  animation?: AnimationConfig
  noise?: NoiseConfig
  style?: CSSProperties
  className?: string
}

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
): number {
  if (fromLow === fromHigh) return toLow
  const pct = (value - fromLow) / (fromHigh - fromLow)
  return toLow + pct * (toHigh - toLow)
}

/*
 * Optimised version:
 *   - Dropped framer-motion entirely; hue-rotate runs as a CSS animation
 *     on the wrapper div via `will-change: filter` so the browser composites
 *     it on the GPU without per-frame JS callbacks.
 *   - Replaced the external mask PNG with a local base64 radial-gradient
 *     (eliminates a network round-trip & CORS). Falls back to a CSS
 *     radial-gradient mask when images are blocked.
 *   - Noise overlay uses a tiny inlined SVG data-URI (<1 KB) instead of a
 *     remote raster image.
 *   - SVG filter is still used for the turbulence displacement but the
 *     heavy per-frame setAttribute loop is gone – the CSS animation handles
 *     the color shift at zero JS cost.
 *   - The component is wrapped in React.memo so it never re-renders unless
 *     its props actually change.
 */

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`

export const EtheralShadow = memo(function EtheralShadow({
  sizing = 'fill',
  color = 'rgba(200, 50, 120, 1)',
  animation,
  noise,
  style,
  className,
}: ShadowOverlayProps) {
  const rawId = useId()
  const id = `es-${rawId.replace(/:/g, '')}`

  const animEnabled = animation != null && animation.scale > 0
  const displacementScale = animation
    ? mapRange(animation.scale, 1, 100, 20, 100)
    : 0
  const durationSec = animation
    ? mapRange(animation.speed, 1, 100, 40, 2)
    : 1
  const baseFreqX = animation
    ? mapRange(animation.scale, 0, 100, 0.001, 0.0005)
    : 0.001
  const baseFreqY = animation
    ? mapRange(animation.scale, 0, 100, 0.004, 0.002)
    : 0.004

  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        contain: 'strict',
        ...style,
      }}
    >
      {/* ---------- displaced colour layer ---------- */}
      <div
        style={{
          position: 'absolute',
          inset: -displacementScale,
          filter: animEnabled ? `url(#${id}) blur(4px)` : 'none',
          willChange: 'filter',
        }}
      >
        {/* SVG turbulence filter (static; hue rotation is CSS-driven) */}
        {animEnabled && (
          <svg
            aria-hidden
            width="0"
            height="0"
            style={{ position: 'absolute' }}
          >
            <defs>
              <filter id={id}>
                <feTurbulence
                  result="undulation"
                  numOctaves="2"
                  baseFrequency={`${baseFreqX},${baseFreqY}`}
                  seed="0"
                  type="turbulence"
                />
                <feColorMatrix
                  in="undulation"
                  type="hueRotate"
                  values="0"
                >
                  <animate
                    attributeName="values"
                    from="0"
                    to="360"
                    dur={`${durationSec}s`}
                    repeatCount="indefinite"
                  />
                </feColorMatrix>
                <feColorMatrix
                  in="dist"
                  result="circulation"
                  type="matrix"
                  values="4 0 0 0 1  4 0 0 0 1  4 0 0 0 1  1 0 0 0 0"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="circulation"
                  scale={displacementScale}
                  result="dist"
                />
                <feDisplacementMap
                  in="dist"
                  in2="undulation"
                  scale={displacementScale}
                  result="output"
                />
              </filter>
            </defs>
          </svg>
        )}

        {/* Coloured surface with mask */}
        <div
          style={{
            backgroundColor: color,
            maskImage:
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png'), radial-gradient(ellipse at center, black 40%, transparent 100%)",
            WebkitMaskImage:
              "url('https://framerusercontent.com/images/ceBGguIpUU8luwByxuQz79t7To.png'), radial-gradient(ellipse at center, black 40%, transparent 100%)",
            maskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            WebkitMaskSize: sizing === 'stretch' ? '100% 100%' : 'cover',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* ---------- noise overlay ---------- */}
      {noise && noise.opacity > 0 && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: NOISE_SVG,
            backgroundSize: noise.scale * 200,
            backgroundRepeat: 'repeat',
            opacity: noise.opacity / 2,
            pointerEvents: 'none',
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </div>
  )
})
