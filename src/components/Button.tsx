import "./button.css"

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type React from "react"

export type ButtonProps = {
  href: string
  children: React.ReactNode
  /** Solid ink pill (primary) or outlined pill (secondary) */
  variant?: "primary" | "secondary"
  /** Leading icon; primary buttons get a trailing arrow instead */
  icon?: IconDefinition
}

/**
 * A pill-shaped link styled as a button
 */
export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  icon,
}) => (
  <a href={href} className={`button button-${variant}`}>
    {icon ? <FontAwesomeIcon icon={icon} widthAuto={true} /> : null}
    {children}
    {variant === "primary" ? (
      <FontAwesomeIcon
        icon={faArrowRight}
        widthAuto={true}
        className="button-arrow"
      />
    ) : null}
  </a>
)
