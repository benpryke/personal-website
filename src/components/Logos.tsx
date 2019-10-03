import React from 'react';

import Banner, { BannerPassthroughProps } from './Banner';

interface LogosProps extends BannerPassthroughProps{
  /** Heading */
  title: string,
  /** Logos */
  children: React.ReactNode;
}

/**
 * A set of logos, each represented via the Logo component
 */
export default class Logos extends React.Component<LogosProps> {
  render() {
    const { title, children, ...rest } = this.props;

    return (
      <Banner className='logos' {...rest}>
        <h2>{title}</h2>
        <div className='logo-collection'>
          {children}
        </div>
      </Banner>
    );
  }
}
