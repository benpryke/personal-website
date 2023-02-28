import React from "react";

import Banner, { BannerProps } from "./Banner";

export interface ShowcaseProps extends BannerProps {
  /** Heading */
  title: string;
  /** 1-3 showpieces */
  children: React.ReactNode;
}

/**
 * A showcase of 1-3 showpieces, each represented via the Showpiece component
 */
const Showcase: React.FC<ShowcaseProps> = ({ title, children, ...rest }) => {
  return (
    <Banner className="showcase" {...rest}>
      <h2>{title}</h2>
      <div className="showpieces">{children}</div>
    </Banner>
  );
};

export default Showcase;
