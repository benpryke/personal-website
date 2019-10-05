import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Logo, { LogoProps } from '../components/Logo';

const props: LogoProps = {
  name: 'name',
  src: 'src',
  url: 'url'
};

describe('Logo', () => {
  it('renders without crashing', () => {
    mount(<Logo {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Logo {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
