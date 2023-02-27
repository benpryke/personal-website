import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Logos, { LogosProps } from "../components/Logos";

const props: LogosProps = {
  title: "title",
  children: <div></div>,
};

describe("Logos", () => {
  it("renders without crashing", () => {
    render(<Logos {...props} />);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Logos {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
