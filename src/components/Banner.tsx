import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

export interface BannerProps {
  /** CSS class name for the Banner */
  className?: string;
  /** Whether or not to fade the Banner in as it's scrolled into view */
  fadeIn?: boolean;
  /**
   * How many pixels above the bottom of the viewport the Banner has to be before it fades in.
   * This ensures that the animation is visible.
   */
  fadeInOffset?: number;
  /** CSS style */
  style?: React.CSSProperties;
  /** Banners must have children */
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  fadeIn = true,
  fadeInOffset = 100,
  className,
  style,
  children,
}) => {
  const [fadedIn, setFadedIn] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fadeIn) {
      const triggerFadeIn = () => {
        if (ref.current) {
          const bannerTop = ref.current.offsetTop;
          const windowBottom = window.scrollY + window.innerHeight;
          const fadedIn = windowBottom >= bannerTop + fadeInOffset;

          if (fadedIn) {
            document.removeEventListener("scroll", triggerFadeIn);
            setFadedIn(true);
          } else if (!fadedOut) {
            setFadedOut(true);
          }
        }
      };

      triggerFadeIn();
      document.addEventListener("scroll", triggerFadeIn);
      return () => document.removeEventListener("scroll", triggerFadeIn);
    } else {
      setFadedIn(true);
    }
  }, [fadeIn, fadeInOffset, fadedOut]);

  return (
    <section
      ref={ref}
      className={classNames("banner", {
        [className ?? ""]: className,
        "faded-out": fadedOut && !fadedIn,
        "faded-in": fadeIn && fadedIn,
      })}
      style={style}
    >
      {children}
    </section>
  );
};

export default Banner;
