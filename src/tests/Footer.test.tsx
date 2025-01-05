import pretty from "pretty";
import React from "react";

import { render } from "@testing-library/react";

import { BannerProps } from "../components/Banner";
import { Footer } from "../components/Footer";

const props: BannerProps = {
  fadeIn: false,
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
