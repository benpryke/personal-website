import "./nav.css"

import type React from "react"
import { useEffect, useState } from "react"

import type { Link } from "../content"
import { cx } from "../utils"
import { Button } from "./Button"

export type NavProps = {
  name: string
  links: Link[]
  cta: Link
}

/**
 * Fixed top navigation that condenses into a floating pill once scrolled
 */
export const Nav: React.FC<NavProps> = ({ name, links, cta }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    update()
    document.addEventListener("scroll", update, { passive: true })
    return () => document.removeEventListener("scroll", update)
  }, [])

  return (
    <header className={cx("nav", scrolled && "nav-scrolled")}>
      <nav className="nav-bar" aria-label="Main">
        <a href="#top" className="nav-brand">
          <span className="nav-dot" aria-hidden="true" />
          {name}
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <Button href={cta.url}>{cta.name}</Button>
      </nav>
    </header>
  )
}
