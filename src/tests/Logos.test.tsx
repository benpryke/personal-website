import pretty from "pretty";
import React from "react";

import { render } from "@testing-library/react";

import { Logos, LogosProps } from "../components/Logos";

const props: LogosProps = {
  title: "title",
  children: <div></div>,
};

describe("Logos", () => {
  it("renders without crashing", () => {
    render(<Logos {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Logos {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
