import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { render } from "@testing-library/react";
import pretty from "pretty";

import SocialButton, {
  SocialButtonProps,
  socialButtons,
} from "../components/SocialButton";

const components = {
  SocialButton,
  ...socialButtons,
};

const props: SocialButtonProps = {
  name: "name",
  url: "url",
  icon: faLinkedin,
};

Object.entries(components).forEach(([name, Component]) => {
  describe(name, () => {
    it("renders without crashing", () => {
      render(<Component {...props} />);
    });

    it("should match the snapshot", () => {
      const { container } = render(<Component {...props} />);
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
