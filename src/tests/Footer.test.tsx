import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Footer from "../components/Footer";
import { BannerPassthroughProps } from "../components/Banner";

const props: BannerPassthroughProps = {
  fadeIn: false,
  fadeInOffset: 200,
  className: "cls",
  style: { color: "red" },
};

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer {...props} />);
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Footer {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
