import "./footer.css";

import React from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Social } from "../content";
import { displayUrl } from "../utils";

export interface FooterProps {
  fullName: string;
  title: React.ReactNode;
  socials: Social[];
  quote: { text: string; author: string };
}

/**
 * Dark page footer with social links and a large closing quote
 */
export const Footer: React.FC<FooterProps> = ({ fullName, title, socials, quote }) => (
  <footer className="footer" id="contact">
    <div className="footer-inner">
      <h2>{title}</h2>
      <ul className="footer-links">
        {socials.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url}>
              <FontAwesomeIcon icon={icon} fixedWidth />
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
);
