import React from "react";

import { Banner, type BannerProps } from "./Banner";
import { LazyLoad } from "./LazyLoad";

export interface ParagraphProps extends BannerProps {
  /** Heading */
  title: string;
  /** Paragraph text */
  body: string;
  /** URL of an image to display in the top-right, in-line with the heading */
  imgSrc?: string;
}

/**
 * A paragraph with a title
 */
export const Paragraph: React.FC<ParagraphProps> = ({
  title,
  body,
  imgSrc,
  ...rest
}) => {
  return (
    <Banner className="paragraph" {...rest}>
      <div className="paragraph-header">
        <h2>{title}</h2>
        {!!imgSrc && (
          <LazyLoad offset={100}>
            <img src={imgSrc} alt={title} />
          </LazyLoad>
        )}
      </div>
      {body.match(/[^\r\n]+/g)!.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </Banner>
  );
};
