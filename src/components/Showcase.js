import React from 'react';

import Banner from './Banner';

/**
 * A showcase of 1-3 showpieces, each represented via the Showpiece component
 */
export default class Showcase extends React.Component {
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
