import React from 'react';

export interface LogoProps {
  /** Name of the organisation or entity */
  name: string,
  /** Logo URL */
  src: string,
  /** URL to their website or a relevant page */
  url: string,
}

/**
 * A logo for the Logos component
 */
export default class Logo extends React.Component<LogoProps> {
  render() {
    const { name, src, url } = this.props;

    return (
      <a className='logo' href={url} key={name}>
        <img src={src} alt={name}/>
      </a>
    );
  }
}
