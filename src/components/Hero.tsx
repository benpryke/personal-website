import "./hero.css"

import type React from "react"

import { Frame } from "./Frame"

export type HeroProps = {
  /** Headline; wrap a word in <em> to accent it */
  title: React.ReactNode
  lead: string
  body: string
  /** Call-to-action buttons */
  actions: React.ReactNode
  headshot: string
  name: string
  /** Short facts pinned beside the headshot */
  facts: string[]
}

/**
 * Opening section: headline, introduction, and a framed headshot
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  lead,
  body,
  actions,
  headshot,
  name,
  facts,
}) => (
  // biome-ignore lint/correctness/useUniqueElementIds: in-page link target, so the id must be static
  <section className="hero" id="top">
    <h1>{title}</h1>
    <div className="hero-grid">
      <div className="hero-text">
        <p className="hero-lead">{lead}</p>
        <p>{body}</p>
        <div className="hero-actions">{actions}</div>
      </div>
      <Frame tone={0} className="hero-frame">
        <div className="hero-portrait">
          <img src={headshot} alt={name} width={1354} height={1351} />
          <ul className="hero-facts">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </Frame>
    </div>
  </section>
)
