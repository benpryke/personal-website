import React from "react";
import { render } from "@testing-library/react";
import pretty from "pretty";

import Showpiece, { ShowpieceProps } from "../components/Showpiece";

const props: ShowpieceProps = {
  title: "title",
  thumbnail: "thumbnail",
  description: "description",
  url: "url",
};

describe("Showpiece", () => {
  it("renders without crashing", () => {
    render(<Showpiece {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Showpiece {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
