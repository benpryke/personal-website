import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import pretty from "pretty";
import "@testing-library/jest-dom";

import Banner, { BannerProps } from "../components/Banner";
import { setWindowSize, setScrollY } from "./utils";

// fadeInOffset must be larger than windowSize or the Banner will fade in instantly
// when scrolled even 1 pixel
const windowSize = 900;
const fadeInOffset = windowSize + 100;
const props: BannerProps = {
  className: "cls",
  fadeIn: true,
  fadeInOffset,
  style: { color: "red" },
  children: <div></div>,
};

describe("Banner", () => {
  beforeAll(() => {
    act(() => setWindowSize(windowSize, windowSize));
  });

  it("renders without crashing", () => {
    render(<Banner {...props} />);
  });

  it("should match the snapshot", () => {
    const { container } = render(<Banner {...props} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it("initially renders faded-in when visible and fadeIn is true", async () => {
    const { container } = await waitFor(() =>
      render(<Banner {...props} fadeInOffset={0} />)
    );
    const banner = container.firstChild;
    expect(banner).toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });

  it("initially renders faded-out when invisible and fadeIn is true", async () => {
    const { container } = await waitFor(() => render(<Banner {...props} />));
    const banner = container.firstChild;
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).toHaveClass("faded-out");
  });

  it("fades in when fadeIn is true and the document is scrolled to fadeInOffset", async () => {
    const { container } = await waitFor(() => render(<Banner {...props} />));
    const banner = container.firstChild;

    // Scroll, but not far enough to trigger the fade-in
    act(() => setScrollY(1));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).toHaveClass("faded-out");

    // Scroll far enough to trigger the fade-in
    act(() => setScrollY(fadeInOffset));
    expect(banner).toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });

  it("does not fade in when fadeIn is false and the document is scrolled to fadeInOffset", async () => {
    const { container } = await waitFor(() =>
      render(<Banner {...props} fadeIn={false} />)
    );
    const banner = container.firstChild;

    // Scroll, but not far enough to trigger the fade-in
    act(() => setScrollY(1));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");

    // Scroll far enough to trigger the fade-in
    act(() => setScrollY(fadeInOffset));
    expect(banner).not.toHaveClass("faded-in");
    expect(banner).not.toHaveClass("faded-out");
  });
});
