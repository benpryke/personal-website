import React from 'react';
import LazyLoad from 'react-lazyload';

import Banner, { BannerPassthroughProps } from './Banner';

export interface ParagraphProps extends BannerPassthroughProps {
  /** Heading */
  title: string,
  /** Paragraph text */
  body: string,
  /** URL of an image to display in the top-right, in-line with the heading */
  imgSrc?: string,
}

/**
 * A paragraph with a title
 */
export default class Paragraph extends React.Component<ParagraphProps> {
  render() {
    const { title, body, imgSrc, ...rest } = this.props;

    return (
      <Banner className='paragraph' {...rest}>
        <div className='paragraph-header'>
          <h2>{title}</h2>
          {!!imgSrc &&
            <LazyLoad height={60} offset={100}>
              <img src={imgSrc} alt={title}/>
            </LazyLoad>
          }
        </div>
        {body.match(/[^\r\n]+/g)!.map((line, i) =>
          <p key={i}>{line}</p>
        )}
      </Banner>
    );
  }
}
