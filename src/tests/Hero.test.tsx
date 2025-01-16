import pretty from "pretty";
import React from "react";

import { render } from "@testing-library/react";

import { Hero, type HeroProps } from "../components/Hero";

const props: HeroProps = {
  name: "name",
  headshot: "url",
  fadeIn: false,
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
