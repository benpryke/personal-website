import React from "react";
import LazyLoad from "react-lazyload";

export interface ShowpieceProps {
  /** Heading to display */
  title: string;
  /** URL for the thumbnail image */
  thumbnail: string;
  /** Body text of the showpiece */
  description: string;
  /** Clicking on the showpiece opens this URL */
  url: string;
}

/**
 * A piece to show off, with an image, a title and some text
 */
export const Showpiece: React.FC<ShowpieceProps> = ({
  title,
  thumbnail,
  description,
  url,
}) => {
  return (
    <a href={url}>
      <div className="showpiece">
        <LazyLoad height={200} offset={100}>
          <img src={thumbnail} alt={title} />
        </LazyLoad>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};
