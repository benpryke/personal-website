import React from 'react';

import Banner, { BannerPassthroughProps } from './Banner';
import Showpiece from './Showpiece';

interface ShowcaseProps extends BannerPassthroughProps {
  /** Heading */
  title: string,
  /** 1-3 showpieces */
  children: React.ReactNode;
}

/**
 * A showcase of 1-3 showpieces, each represented via the Showpiece component
 */
export default class Showcase extends React.Component<ShowcaseProps> {
  render() {
    const { title, children, ...rest } = this.props;

    return (
      <Banner className='showcase' {...rest}>
        <h2>{title}</h2>
        <div className='showpieces'>
          {children}
        </div>
      </Banner>
    );
  }
}
