import React from 'react';
import classNames from 'classnames';

interface BannerProps {
  /** CSS class name for the Banner */
  className?: string,
  /** Whether or not to fade the Banner in as it's scrolled into view */
  fadeIn: boolean,
  /**
   * How many pixels above the bottom of the viewport the Banner has to be before it fades in.
   * This ensures that the animation is visible.
   */
  fadeInOffset: number,
  /** CSS style */
  style?: object,
  /** Banners may have children */
  children?: React.ReactNode;
}

type DefaultBannerProps = keyof typeof Banner.defaultProps;
export type BannerPassthroughProps = Partial<Pick<BannerProps, DefaultBannerProps>> & Omit<BannerProps, DefaultBannerProps>;

interface BannerState {
  fadedIn: boolean,
  fadedOut: boolean,
}

/**
 * A full-width section spanning the page
 */
export default class Banner extends React.Component<BannerProps, BannerState> {
  static defaultProps = {
    fadeIn: true,
    fadeInOffset: 100,
  };
  
  state: BannerState = {
    fadedIn: false,
    fadedOut: false,
  };

  ref: React.RefObject<HTMLInputElement> | undefined;

  constructor(props: BannerProps) {
    super(props);

    if (props.fadeIn) {
      this.ref = React.createRef();
      this.triggerFadeIn = this.triggerFadeIn.bind(this);
      document.addEventListener('scroll', this.triggerFadeIn);
    } else {
      this.state.fadedIn = true;
    }
  }
  
  componentDidMount() {
    if (this.props.fadeIn) {
      this.triggerFadeIn();
    }
  }

  triggerFadeIn(): void {
    const { fadeIn, fadeInOffset } = this.props;

    // Only trigger the fade in animation if it's switched on
    if (!fadeIn) return;
    
    // To make the fade-in more visible, we start at an offset.
    // Note: if the banner height is less than the offset and at the bottom of
    // the page, we will never be able to trigger the animation.
    const bannerTop = this.ref!.current ? this.ref!.current.offsetTop : Infinity;
    const windowBottom = window.scrollY + window.innerHeight;
    const fadedIn = windowBottom >= bannerTop + fadeInOffset;

    if (fadedIn) {
      document.removeEventListener('scroll', this.triggerFadeIn);
      this.setState({ fadedIn });
    } else if (!this.state.fadedOut && window.scrollY > 0) {
      this.setState({ fadedOut: true });
    }
  }

  render() {
    const { className, children, fadeIn, style } = this.props;
    const { fadedIn, fadedOut } = this.state;

    return (
      <section
        ref={this.ref}
        className={classNames('banner', {
          [className as any]: className,
          'faded-out': fadedOut && !fadedIn,
          'faded-in': fadeIn && fadedIn,
        })}
        style={style}
      >
        {children}
      </section>
    );
  }
}
