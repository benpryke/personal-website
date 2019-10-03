import React, { Component } from 'react';

import Banner, { BannerPassthroughProps } from './Banner';
import { LinkedInButton, TwitterButton, GitHubButton, StackOverflowButton, InstagramButton } from './SocialButton';

/**
 * Page footer
 */
export default class Footer extends Component<BannerPassthroughProps> {
  render() {
    return (
      <Banner className='footer' {...this.props}>
        <h2>Get in touch</h2>
        <footer>
          <LinkedInButton/>
          <TwitterButton/>
          <GitHubButton/>
          <StackOverflowButton/>
          <InstagramButton/>
        </footer>
      </Banner>
    );
  }
}
