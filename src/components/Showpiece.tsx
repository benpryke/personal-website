import React from 'react';

export interface ShowpieceProps {
  /** Heading to display */
  title: string,
  /** URL for the thumbnail image */
  thumbnail: string,
  /** Body text of the showpiece */
  description: string,
  /** Clicking on the showpiece opens this URL */
  url: string,
}

/**
 * A piece to show off, with an image, a title and some text
 */
export default class Showpiece extends React.Component<ShowpieceProps> {
  render() {
    const { title, thumbnail, description, url } = this.props;

    return (
      <a href={url}>
        <div className='showpiece'>
          <img src={thumbnail} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    );
  }
}
