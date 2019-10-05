import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Paragraph, { ParagraphProps } from '../components/Paragraph';

const props: ParagraphProps = {
  title: 'title',
  body: 'body',
  imgSrc: 'imgSrc',
};

describe('Paragraph', () => {
  it('renders without crashing', () => {
    mount(<Paragraph {...props}/>);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<Paragraph {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
