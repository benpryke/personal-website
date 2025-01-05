import pretty from "pretty";
import React from "react";

import { render } from "@testing-library/react";

import { Showcase, ShowcaseProps } from "../components/Showcase";

const props: ShowcaseProps = {
  title: "title",
  children: <div></div>,
};

describe("Showcase", () => {
  it("renders without crashing", () => {
    render(<Showcase {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Showcase {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
