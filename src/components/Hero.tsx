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

  readonly state:HeroState = {
    height: Hero.computeHeight(),
  };

  constructor(props: HeroProps) {
    super(props);
    this.setHeight = this.setHeight.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('scroll', this.setHeight);
    window.addEventListener('resize', this.setHeight);

    // As we use react-snap and ReactDOM.hydrate in prod, if the user refreshes
    // the page while scrolled down the .hero-content max-height will mismatch.
    // This effectively freezes us in a broken state unless we update height.
    // We can fix this with the following double-render hack.
    if (window.scrollY > 0) {
      this.setState({ height: this.state.height + 0.0001 });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.setHeight);
    window.removeEventListener('resize', this.setHeight);
  }

  static computeHeight(): number {
    // Match the min-width and min-height media rules for applying a header animation
    if (window.innerWidth < Hero.MIN_ANIM_WINDOW_WIDTH || window.innerHeight < Hero.MIN_ANIM_WINDOW_HEIGHT) {
      return Hero.MAX_HEIGHT;
    } else {
      const top = window.scrollY;
      return top < Hero.SCROLL_CUTOFF ? Hero.MAX_HEIGHT - top : Hero.MAX_HEIGHT - Hero.SCROLL_CUTOFF;
    }
  }

  setHeight(): void {
    this.setState({ height: Hero.computeHeight() });
  }

  render() {
    const { name, headshot, ...rest } = this.props;
    const { height } = this.state;
    const headshotSize = height * 0.8;

    return (
      <Banner className='hero' {...rest}>
        <div className='hero-content' style={{ maxHeight: height }}>
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
