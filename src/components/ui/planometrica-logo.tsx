import * as React from 'react'
import { cn } from '../../lib/utils'

export type LogoVariant = 'primary' | 'inverse' | 'transparent'

export interface PlanometricaLogoProps extends React.SVGAttributes<SVGSVGElement> {
  /**
   * Logo color variant:
   * - `primary` — white letter on brand blue background (default)
   * - `inverse` — brand blue letter on white background
   * - `transparent` — brand blue letter on transparent background
   */
  variant?: LogoVariant
  /** Width and height in pixels. Default: 48 */
  size?: number
}

const BRAND_BLUE = '#0A4C76'

/**
 * Planometrica brand logo — Cyrillic letter П in pixel-block (SCR-N Seven Extra) style.
 *
 * Construction: 3 separate rectangular blocks touching only at corner points.
 * - Top beam positioned between pillars
 * - Left and right pillars below the beam
 * - Contact at corner points only (no shared edges)
 */
const PlanometricaLogo = React.forwardRef<SVGSVGElement, PlanometricaLogoProps>(
  ({ variant = 'primary', size = 48, className, ...props }, ref) => {
    const isPrimary = variant === 'primary'
    const letterColor = isPrimary ? 'white' : BRAND_BLUE
    const showBackground = variant !== 'transparent'
    const bgColor = isPrimary ? BRAND_BLUE : 'white'

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('shrink-0', className)}
        aria-label="Planometrica"
        role="img"
        {...props}
      >
        {showBackground && (
          <rect width="1024" height="1024" rx="52" fill={bgColor} />
        )}

        {/* Top beam */}
        <rect x="340" y="200" width="345" height="130" fill={letterColor} />

        {/* Left pillar (corner-touch: top-right → beam bottom-left) */}
        <rect x="210" y="330" width="130" height="410" fill={letterColor} />

        {/* Right pillar (corner-touch: top-left → beam bottom-right) */}
        <rect x="685" y="330" width="130" height="410" fill={letterColor} />
      </svg>
    )
  }
)

PlanometricaLogo.displayName = 'PlanometricaLogo'

export { PlanometricaLogo }
