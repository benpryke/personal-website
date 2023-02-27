import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Logo, { LogoProps } from "../components/Logo";

const props: LogoProps = {
  name: "name",
  src: "src",
  url: "url",
};

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo {...props} />);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Logo {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
