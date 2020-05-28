import React from 'react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SocialButton, { SocialButtonProps, socialButtons } from '../components/SocialButton';

const components = {
  SocialButton,
  ...socialButtons,
};

const props: SocialButtonProps = {
  name: 'name',
  url: 'url',
  icon: faLinkedin,
};

Object.entries(components).forEach(([name, Component]) => {
  describe(name, () => {
    it('renders without crashing', () => {
      mount(<Component {...props}/>);
    });

    it('should match the snapshot', () => {
      const tree = renderer.create(<Component {...props}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
