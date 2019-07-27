import React from 'react';

/**
 * A link to social media
 */
export default class SocialButton extends React.Component {
  render() {
    const { name, url, icon } = this.props;

    return (
      <a href={url} className='social-button'>
        <i className={icon}></i>{name}
      </a>
    );
  }
}

export const LinkedInButton = () => <SocialButton name='LinkedIn' icon='fab fa-linkedin' url='https://linkedin.com/in/benjaminpryke'/>;
export const TwitterButton = () => <SocialButton name='Twitter' icon='fab fa-twitter' url='https://twitter.com/BenjaminPryke'/>;
export const GitHubButton = () => <SocialButton name='GitHub' icon='fab fa-github' url='https://github.com/benpryke'/>;
export const StackOverflowButton = () => <SocialButton name='Stack Overflow' icon='fab fa-stack-overflow' url='https://stackoverflow.com/users/604687/ninjakannon'/>;
export const InstagramButton = () => <SocialButton name='Instagram' icon='fab fa-instagram' url='https://www.instagram.com/gym_ninja_ben'/>;
