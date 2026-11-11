import "./footer.css"

import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type React from "react"

import type { Social } from "../content"
import { displayUrl } from "../utils"

export type FooterProps = {
  fullName: string
  title: React.ReactNode
  socials: Social[]
  quote: { text: string; author: string }
}

/**
 * Dark page footer with social links and a large closing quote
 */
export const Footer: React.FC<FooterProps> = ({
  fullName,
  title,
  socials,
  quote,
}) => (
  // biome-ignore lint/correctness/useUniqueElementIds: in-page link target, so the id must be static
  <footer className="footer" id="contact">
    <div className="footer-inner">
      <h2>{title}</h2>
      <ul className="footer-links">
        {socials.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url}>
              <FontAwesomeIcon icon={icon} fixedWidth={true} />
              <span>{name}</span>
              <span className="footer-url">{displayUrl(url)}</span>
              <FontAwesomeIcon icon={faArrowRight} className="footer-arrow" />
            </a>
          </li>
        ))}
      </ul>
      <blockquote className="footer-quote">
        <p>{`“${quote.text}”`}</p>
        <footer>{`— ${quote.author}`}</footer>
      </blockquote>
      <p className="footer-legal">{`© ${new Date().getFullYear()} ${fullName}`}</p>
    </div>
  </footer>
)
