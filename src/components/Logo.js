import React from 'react';

/**
 * A logo for the Logos component
 */
export default class Logo extends React.Component {
  render() {
    const { name, src, url } = this.props;

    return (
      <a className='logo' href={url} key={name}>
        <img src={src} alt={name}/>
      </a>
    );
  }
}
