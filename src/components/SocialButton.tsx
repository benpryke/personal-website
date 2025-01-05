import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface SocialButtonProps {
  /** Name of the social network */
  name: string;
  /** URL to link to */
  url: string;
  /** FontAwesome icon class name */
  icon: IconProp;
}

/**
 * A link to social media
 */
export const SocialButton: React.FC<SocialButtonProps> = ({
  name,
  url,
  icon,
}) => {
  return (
    <a href={url} className="social-button">
      <FontAwesomeIcon icon={icon} /> {name}
    </a>
  );
};

export const LinkedInButton = ({ text }: { text?: string }) => (
  <SocialButton
    name={text ?? "LinkedIn"}
    icon={faLinkedin}
    url="https://linkedin.com/in/benjaminpryke"
  />
);
export const TwitterButton = () => (
  <SocialButton
    name="Twitter"
    icon={faTwitter}
    url="https://twitter.com/BenjaminPryke"
  />
);
export const GitHubButton = () => (
  <SocialButton
    name="GitHub"
    icon={faGithub}
    url="https://github.com/benpryke"
  />
);
export const StackOverflowButton = () => (
  <SocialButton
    name="Stack Overflow"
    icon={faStackOverflow}
    url="https://stackoverflow.com/users/604687/ninjakannon"
  />
);
export const InstagramButton = () => (
  <SocialButton
    name="Instagram"
    icon={faInstagram}
    url="https://www.instagram.com/gym_ninja_ben"
  />
);

export const socialButtons = {
  LinkedInButton,
  TwitterButton,
  GitHubButton,
  StackOverflowButton,
  InstagramButton,
};
