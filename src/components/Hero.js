import React from 'react';

import Banner from './Banner';
import { LinkedInButton, TwitterButton } from './SocialButton';

/**
 * A hero banner
 * 
 * Contains an image and two speech bubbles
 */
export default class Hero extends React.Component {
  static MAX_HEIGHT = 500;
  static MIN_HEIGHT = 100;
  static SCROLL_CUTOFF = Hero.MAX_HEIGHT - Hero.MIN_HEIGHT;

  constructor(props) {
    super(props);

    this.state = {
      height: Hero.MAX_HEIGHT,
    }
    
    this.computeHeight = this.computeHeight.bind(this);
  }

  componentWillMount() {
    this.scrollListener = document.addEventListener('scroll', this.computeHeight);
    this.resizeListener = window.addEventListener('resize', this.computeHeight);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('resize', this.resizeListener);
  }

  computeHeight() {
    const top = window.scrollY;
    
    // Match the min-width and min-height media rules for applying a header animation
    if (window.innerWidth < 900 || window.innerHeight < 700) {
      this.setState({
        height: Hero.MAX_HEIGHT,
      });
    } else {
      this.setState({
        height: top < Hero.SCROLL_CUTOFF ? Hero.MAX_HEIGHT - top : Hero.MAX_HEIGHT - Hero.SCROLL_CUTOFF,
      });
    }
  }

  render() {
    const { name, headshot, ...rest } = this.props;
    const headshotSize = this.state.height * 0.8;

    return (
      <Banner className='hero' {...rest}>
        <div className='hero-content' style={{ maxHeight: this.state.height }}>
          <img src={headshot} alt={name} style={{
            width: headshotSize,
            height: headshotSize,
          }}/>
          <div className='conversation'>
            <div className='greeting speech-bubble'>
              <h1>Hi, I'm {name}</h1>
            </div>
            <div className='action speech-bubble'>
              <LinkedInButton/>
              <TwitterButton/>
            </div>
          </div>
        </div>
      </Banner>
    );
  }
}
