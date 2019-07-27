import React from 'react';

import Banner from './Banner';

/**
 * A paragraph with a title
 */
export default class Paragraph extends React.Component {
  render() {
    const { title, body, imgSrc, ...rest } = this.props;

    return (
      <Banner className='paragraph' {...rest}>
        <div className='paragraph-header'>
          <h2>{title}</h2>
          {!!imgSrc && <img src={imgSrc} alt={title}/>}
        </div>
        {body.match(/[^\r\n]+/g).map((line, i) =>
          <p key={i}>{line}</p>
        )}
      </Banner>
    );
  }
}
