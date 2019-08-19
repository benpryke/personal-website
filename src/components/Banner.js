import React from 'react';
import classNames from 'classnames';

/**
 * A Banner is a full-width segment spanning the page
 */
export default class Banner extends React.Component {
  static defaultProps = {
    fadeIn: true,
    fadeInOffset: 100,
  };
  
  state = {
    fadedIn: false,
  };

  constructor(props) {
    super(props);

    if (props.fadeIn) {
      this.ref = React.createRef();
      this.triggerFadeIn = this.triggerFadeIn.bind(this);
      this.scrollHandler = document.addEventListener('scroll', this.triggerFadeIn);
    } else {
      this.state.fadedIn = true;
    }
  }
  
  componentDidMount() {
    if (this.props.fadeIn) {
      this.triggerFadeIn();
    }
  }

  triggerFadeIn() {
    const { fadeIn, fadeInOffset } = this.props;

    // Only trigger the fade in animation if it's switched on
    if (!fadeIn) return;
    
    // To make the fade-in more visible, we start at an offset.
    // Note: if the banner height is less than the offset and at the bottom of
    // the page, we will never be able to trigger the animation.
    const bannerTop = this.ref.current ? this.ref.current.offsetTop : Infinity;
    const windowBottom = window.scrollY + window.innerHeight;
    const fadedIn = windowBottom >= bannerTop + fadeInOffset;

    if (fadedIn) {
      document.removeEventListener('scroll', this.scrollHandler);
      this.setState({ fadedIn });
    }
  }

  render() {
    const { className, children, fadeIn, style } = this.props;
    const { fadedIn } = this.state;

    return (
      <section
        ref={this.ref}
        className={classNames('banner', {
          [className]: className,
          'faded-out': !fadedIn,
          'faded-in': fadeIn && fadedIn,
        })}
        style={style}
      >
        {children}
      </section>
    );
  }
}
