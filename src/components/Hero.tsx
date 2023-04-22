import React from "react";
import Banner, { BannerProps } from "./Banner";
import { LinkedInButton } from "./SocialButton";

export interface HeroProps extends BannerProps {
  /** Name of our protagonist */
  name: string;
  /** URL to a headshot of the protagonist */
  headshot: string;
}

/**
 * A hero banner
 *
 * Contains some text, a CTA, and a headshot.
 */
const Hero: React.FC<HeroProps> = ({ name, headshot, ...rest }) => {
  return (
    <Banner className="hero" {...rest}>
      <img src={headshot} alt={name} />
      <div className="text">
        <h1>Hello, I'm Ben Pryke</h1>
        <h2>Senior Lead Engineer</h2>
        <LinkedInButton text="Get in touch" />
      </div>
    </Banner>
  );
};

export default Hero;
