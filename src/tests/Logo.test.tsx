import React from "react";
import { render } from "@testing-library/react";
import pretty from "pretty";

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
    const { container } = render(<Logo {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
