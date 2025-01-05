import pretty from "pretty";
import React from "react";

import { render } from "@testing-library/react";

import { Paragraph, ParagraphProps } from "../components/Paragraph";

const props: ParagraphProps = {
  title: "title",
  body: "body",
  imgSrc: "imgSrc",
};

describe("Paragraph", () => {
  it("renders without crashing", () => {
    render(<Paragraph {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Paragraph {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
