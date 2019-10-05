import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Showcase, { ShowcaseProps } from '../components/Showcase';

const props: ShowcaseProps = {
  title: 'title',
  children: <div></div>,
};

describe('Showcase', () => {
  it('renders without crashing', () => {
    mount(<Showcase {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Showcase {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
