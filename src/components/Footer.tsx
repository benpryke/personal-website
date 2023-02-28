import React from "react";

import Banner, { BannerProps } from "./Banner";
import {
  LinkedInButton,
  TwitterButton,
  GitHubButton,
  StackOverflowButton,
  InstagramButton,
} from "./SocialButton";

/**
 * Page footer
 */
const Footer: React.FC<BannerProps> = (props) => {
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

export default Footer;
