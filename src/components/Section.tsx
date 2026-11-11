import "./section.css"

import type React from "react"

import { cx } from "../utils"

export type SectionProps = {
  id?: string
  /** Heading; wrap a word in <em> to accent it */
  title: React.ReactNode
  /** Tinted band with hairline borders */
  tinted?: boolean
  /** Constrain content to a reading column */
  prose?: boolean
  children: React.ReactNode
}

/**
 * A page section with a heading
 */
export const Section: React.FC<SectionProps> = ({
  id,
  title,
  tinted,
  prose,
  children,
}) => (
  <section
    id={id}
    className={cx(
      "section",
      tinted && "section-tinted",
      prose && "section-prose",
    )}
  >
    <div className="section-inner">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
)
