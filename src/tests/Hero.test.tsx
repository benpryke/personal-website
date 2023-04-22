import React from "react";
import { render } from "@testing-library/react";
import pretty from "pretty";

import Hero, { HeroProps } from "../components/Hero";

const props: HeroProps = {
  name: "name",
  headshot: "url",
  fadeIn: false,
  fadeInOffset: 200,
  className: "cls",
  style: { color: "red" },
};

describe("Hero", () => {
  it("renders without crashing", () => {
    render(<Hero {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Hero {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
