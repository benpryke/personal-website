import React from "react";
import { render } from "@testing-library/react";
import pretty from "pretty";

import Footer from "../components/Footer";
import { BannerProps } from "../components/Banner";

const props: BannerProps = {
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
    const { container } = render(<Footer {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
