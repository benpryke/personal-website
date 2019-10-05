import React from 'react';

import Banner, { BannerPassthroughProps } from './Banner';
import { LinkedInButton, TwitterButton } from './SocialButton';

export interface HeroProps extends BannerPassthroughProps {
  /** Name of our protagonist */
  name: string,
  /** URL to a headshot of the protagonist */
  headshot: string,
}

interface HeroState {
  height: number,
}

/**
 * A hero banner
 * 
 * Contains an image and two speech bubbles
 */
export default class Hero extends React.Component<HeroProps, HeroState> {
  static MAX_HEIGHT = 500;
  static MIN_HEIGHT = 100;
  static SCROLL_CUTOFF = Hero.MAX_HEIGHT - Hero.MIN_HEIGHT;
  static MIN_ANIM_WINDOW_WIDTH = 900;
  static MIN_ANIM_WINDOW_HEIGHT = 700;

  constructor(props: HeroProps) {
    super(props);

    this.state = {
      height: Hero.MAX_HEIGHT,
    }
    
    this.computeHeight = this.computeHeight.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.computeHeight);
    window.addEventListener('resize', this.computeHeight);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.computeHeight);
    window.removeEventListener('resize', this.computeHeight);
  }

  computeHeight(): void {
    const top = window.scrollY;
    
    // Match the min-width and min-height media rules for applying a header animation
    if (window.innerWidth < Hero.MIN_ANIM_WINDOW_WIDTH || window.innerHeight < Hero.MIN_ANIM_WINDOW_HEIGHT) {
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
