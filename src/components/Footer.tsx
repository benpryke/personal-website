import React from "react";

import { Banner, type BannerProps } from "./Banner";
import {
  GitHubButton,
  InstagramButton,
  LinkedInButton,
  StackOverflowButton,
  TwitterButton,
} from "./SocialButton";

/**
 * Page footer
 */
export const Footer: React.FC<BannerProps> = (props) => {
  return (
    <Banner className="footer" {...props}>
      <h2>Get in touch</h2>
      <footer>
        <LinkedInButton />
        <TwitterButton />
        <GitHubButton />
        <StackOverflowButton />
        <InstagramButton />
      </footer>
    </Banner>
  );
};
