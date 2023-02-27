import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import Paragraph, { ParagraphProps } from "../components/Paragraph";

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
    const tree = renderer.create(<Paragraph {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
