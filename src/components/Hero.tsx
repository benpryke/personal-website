import React, { useState, useEffect } from "react";
import Banner, { BannerProps } from "./Banner";
import { LinkedInButton, TwitterButton } from "./SocialButton";

export const MAX_HEIGHT = 500;
export const MIN_HEIGHT = 100;
export const MIN_ANIM_WINDOW_WIDTH = 900;
export const MIN_ANIM_WINDOW_HEIGHT = 700;

/**
 * Computes the height of the hero banner.
 * @returns The height of the hero banner
 */
function computeHeight(): number {
  // Match the min-width and min-height media rules for applying a header animation
  if (
    window.innerWidth < MIN_ANIM_WINDOW_WIDTH ||
    window.innerHeight < MIN_ANIM_WINDOW_HEIGHT
  ) {
    return MAX_HEIGHT;
  } else {
    const top = window.scrollY;
    const scrollCutoff = MAX_HEIGHT - MIN_HEIGHT;
    return top < scrollCutoff ? MAX_HEIGHT - top : MAX_HEIGHT - scrollCutoff;
  }
}

export interface HeroProps extends BannerProps {
  /** Name of our protagonist */
  name: string;
  /** URL to a headshot of the protagonist */
  headshot: string;
}

/**
 * A hero banner
 *
 * Contains an image and two speech bubbles
 */
const Hero: React.FC<HeroProps> = ({ name, headshot, ...rest }) => {
  const [height, setHeight] = useState<number>(computeHeight());
  const headshotSize = height * 0.8;

  useEffect(() => {
    const handleResize = () => setHeight(computeHeight());

    document.addEventListener("scroll", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("scroll", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Banner className="hero" {...rest}>
      <div className="hero-content" style={{ maxHeight: Math.floor(height) }}>
        <img
          src={headshot}
          alt={name}
          style={{
            width: headshotSize,
            height: headshotSize,
          }}
        />
        <div className="conversation">
          <div className="greeting speech-bubble">
            <h1>Hi, I'm {name}</h1>
          </div>
          <div className="action speech-bubble">
            <LinkedInButton />
            <TwitterButton />
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Hero;
