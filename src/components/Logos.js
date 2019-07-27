import React from 'react';

import Banner from './Banner';

/**
 * A set of logos, each represented via the Logo component
 */
export default class Logos extends React.Component {
  render() {
    const { title, logos, children, ...rest } = this.props;

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
