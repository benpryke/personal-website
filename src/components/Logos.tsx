import "./logos.css"

import type React from "react"

import type { Logo } from "../content"

export type LogosProps = {
  logos: Logo[]
}

/**
 * A grid of organisation logos
 */
export const Logos: React.FC<LogosProps> = ({ logos }) => (
  <ul className="logos">
    {logos.map(({ name, src, url }) => (
      <li key={name}>
        <a href={url}>
          <img src={src} alt={name} loading="lazy" />
        </a>
      </li>
    ))}
  </ul>
)
