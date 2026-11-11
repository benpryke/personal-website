import "./scroll-showcase.css";

import React, { useEffect, useRef, useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { ShowcaseItem } from "../content";
import { cx, displayUrl } from "../utils";
import { Frame } from "./Frame";

/** Items become active as they cross this band around the viewport's centre */
export const ACTIVE_BAND = "-45% 0px -54% 0px";

/** Share of an item that must be visible before it fades in on narrow screens */
export const REVEAL_THRESHOLD = 0.1;

export interface ScrollShowcaseProps {
  items: ShowcaseItem[];
  /** Gradient tone of the first item; later items step through the tones */
  tone?: number;
}

type Refs = React.MutableRefObject<(HTMLElement | null)[]>;

/**
 * Calls `onEnter` with an element's index whenever it starts intersecting
 */
const useIntersection = (
  refs: Refs,
  options: IntersectionObserverInit,
  onEnter: (index: number) => void
) =>
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && onEnter(refs.current.indexOf(entry.target as HTMLElement))
        ),
      options
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * A list of items scrolling past a sticky frame whose image crossfades to
 * match the item in view. Below the two-column breakpoint each item shows
 * its own image inline instead.
 */
export const ScrollShowcase: React.FC<ScrollShowcaseProps> = ({
  items,
  tone = 0,
}) => {
  const refs: Refs = useRef([]);
  const [active, setActive] = useState(0);
  // Items fade in once, in order, as they're scrolled to
  const [revealed, setRevealed] = useState(-1);

  useIntersection(refs, { rootMargin: ACTIVE_BAND }, setActive);
  useIntersection(refs, { threshold: REVEAL_THRESHOLD }, (i) =>
    setRevealed((r) => Math.max(r, i))
  );

  const current = items[active];

  return (
    <div className="showcase">
      <ol className="showcase-list">
        {items.map((item, i) => (
          <li
            key={item.url}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={cx(
              "showcase-item",
              i === active && "is-active",
              i <= revealed && "is-revealed"
            )}
          >
            <Frame tone={tone + i} title={displayUrl(item.url)} className="showcase-inline">
              <img src={item.image} alt="" loading="lazy" />
            </Frame>
            <h3>
              <a href={item.url}>{item.name}</a>
            </h3>
            {item.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            {item.tags && (
              <ul className="showcase-tags" aria-label="Key tech">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <div className="showcase-stage">
        <a href={current.url} className="showcase-link" tabIndex={-1} aria-hidden="true">
          <Frame tone={tone + active} title={displayUrl(current.url)}>
            {items.map((item, i) => (
              <img
                key={item.url}
                src={item.image}
                alt=""
                loading="lazy"
                className={cx(i === active && "is-active")}
              />
            ))}
          </Frame>
        </a>
        <div className="showcase-meta">
          <a href={current.url}>
            {`Visit ${displayUrl(current.url).split("/")[0]}`}
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <div className="showcase-progress">
            {items.map((item, i) => (
              <button
                key={item.url}
                type="button"
                aria-label={`Show ${item.name}`}
                aria-current={i === active}
                className={cx(i === active && "is-active")}
                onClick={() => refs.current[i]?.scrollIntoView({ block: "center" })}
              />
            ))}
            <span>{`${pad(active + 1)} / ${pad(items.length)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
