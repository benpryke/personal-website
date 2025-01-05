import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

export const FADE_IN_THRESHOLD = 0.1;

export interface BannerProps {
  /** CSS class name for the Banner */
  className?: string;
  /** Whether or not to fade the Banner in as it's scrolled into view */
  fadeIn?: boolean;
  /** CSS style */
  style?: React.CSSProperties;
  /** Banners must have children */
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
  fadeIn = true,
  className,
  style,
  children,
}) => {
  const [fadedIn, setFadedIn] = useState(!fadeIn);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const element = ref.current;
    const fadeIn = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFadedIn(true);
        }
      });
    };
    const options = {
      threshold: FADE_IN_THRESHOLD,
    };
    const observer = new IntersectionObserver(fadeIn, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, setFadedIn]);

  return (
    <section
      ref={ref}
      className={classNames("banner", {
        [className ?? ""]: className,
        "faded-out": !fadedIn,
        "faded-in": fadeIn && fadedIn,
      })}
      style={style}
    >
      {children}
    </section>
  );
};

export default Banner;
