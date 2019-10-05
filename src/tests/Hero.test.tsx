import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Hero, { HeroProps } from '../components/Hero';
import { setWindowSize, setScrollY } from './utils';

const props: HeroProps = {
  name: 'name',
  headshot: 'url',
  fadeIn: false,
  fadeInOffset: 200,
  className: 'cls',
  style: {color: 'red'},
};

describe('Hero', () => {
  it('renders without crashing', () => {
    mount(<Hero {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Hero {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a fixed height when the window is small', () => {
    const wrapper = mount<Hero>(<Hero {...props}/>);
    setScrollY(Hero.MAX_HEIGHT * 2);
    
    // Small width
    setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH - 1, Hero.MIN_ANIM_WINDOW_HEIGHT);
    expect(wrapper.state().height).toEqual(Hero.MAX_HEIGHT);
    
    // Small height
    setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH, Hero.MIN_ANIM_WINDOW_HEIGHT - 1);
    expect(wrapper.state().height).toEqual(Hero.MAX_HEIGHT);
  });
  
  it('renders with a variable height when the window is large', () => {
    const wrapper = mount<Hero>(<Hero {...props}/>);
    setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH, Hero.MIN_ANIM_WINDOW_HEIGHT);
    
    // Scrolled to top
    setScrollY(0);
    expect(wrapper.state().height).toEqual(Hero.MAX_HEIGHT);
    
    // Scrolled to bottom
    setScrollY(Hero.MAX_HEIGHT * 2);
    expect(wrapper.state().height).toEqual(Hero.MIN_HEIGHT);
  });
});
