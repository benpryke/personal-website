import React from "react";
import LazyLoad from "react-lazyload";

export interface LogoProps {
  /** Name of the organisation or entity */
  name: string;
  /** Logo URL */
  src: string;
  /** URL to their website or a relevant page */
  url: string;
}

/**
 * A logo for the Logos component
 */
const Logo: React.FC<LogoProps> = ({ name, src, url }) => {
  return (
    <a className="logo" href={url} key={name}>
      <LazyLoad height={150} offset={100}>
        <img src={src} alt={name} />
      </LazyLoad>
    </a>
  );
};

export default Logo;
