import "./frame.css";

import React from "react";

import { cx } from "../utils";

export const TONES = 4;

export interface FrameProps {
  /** Gradient tone; wraps around the available tones */
  tone: number;
  /** When set, children sit in a window card with this title bar */
  title?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A soft gradient backdrop, optionally holding a window card
 */
export const Frame: React.FC<FrameProps> = ({
  tone,
  title,
  className,
  children,
}) => (
  <div className={cx("frame", className)} data-tone={tone % TONES}>
    {title === undefined ? (
      children
    ) : (
      <div className="frame-window">
        <div className="frame-bar">
          <span className="frame-dots" aria-hidden="true" />
          <span className="frame-title">{title}</span>
        </div>
        <div className="frame-body">{children}</div>
      </div>
    )}
  </div>
);
