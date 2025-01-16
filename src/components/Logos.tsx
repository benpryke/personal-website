import React from "react";

import { Banner, type BannerProps } from "./Banner";

export interface LogosProps extends BannerProps {
  /** Heading */
  title: string;
  /** Logos */
  children: React.ReactNode;
}

/**
 * A set of logos, each represented via the Logo component
 */
export const Logos: React.FC<LogosProps> = ({ title, children, ...rest }) => {
  return (
    <Banner className="logos" {...rest}>
      <h2>{title}</h2>
      <div className="logo-collection">{children}</div>
    </Banner>
  );
};
