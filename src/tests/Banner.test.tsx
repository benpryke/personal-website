import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Banner, { BannerProps } from '../components/Banner';
import { setWindowSize, setScrollY } from './utils';

// fadeInOffset must be larger than windowSize or the Banner will fade in instantly
// when scrolled even 1 pixel
const windowSize = 900;
const props: BannerProps = {
  className: 'cls',
  fadeIn: true,
  fadeInOffset: windowSize + 100,
  style: {color: 'red'},
  children: <div></div>,
};

describe('Banner', () => {
  beforeAll(() => {
    setWindowSize(windowSize, windowSize);
  });

  it('renders without crashing', () => {
    mount(<Banner {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Banner {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('initially renders visible when fadeIn is true', () => {
    const wrapper = mount(<Banner {...props}/>);
    const banner = wrapper.find('.banner');
    expect(banner.hasClass('faded-in')).toBe(false);
    expect(banner.hasClass('faded-out')).toBe(false);
  });

  it('renders invisible when fadeIn is true and the document is scrolled', () => {
    const wrapper = mount(<Banner {...props}/>);
    setScrollY(1);
    wrapper.update();
    const banner = wrapper.find('.banner');
    expect(banner.hasClass('faded-in')).toBe(false);
    expect(banner.hasClass('faded-out')).toBe(true);
  });

  it('fades in when fadeIn is true and the document is scrolled to fadeInOffset', () => {
    const wrapper = mount(<Banner {...props}/>);
    setScrollY(props.fadeInOffset);
    wrapper.update();
    const banner = wrapper.find('.banner');
    expect(banner.hasClass('faded-in')).toBe(true);
    expect(banner.hasClass('faded-out')).toBe(false);
  });
});
