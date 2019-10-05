import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Showpiece, { ShowpieceProps } from '../components/Showpiece';

const props: ShowpieceProps = {
  title: 'title',
  thumbnail: 'thumbnail',
  description: 'description',
  url: 'url',
};

describe('Showpiece', () => {
  it('renders without crashing', () => {
    mount(<Showpiece {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Showpiece {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
