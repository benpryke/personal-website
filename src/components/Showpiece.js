import React from 'react';

/**
 * A piece to show off, with an image, a title and some text
 */
export default class Showpiece extends React.Component {
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
