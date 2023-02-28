import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import pretty from "pretty";

import Hero, {
  HeroProps,
  MIN_HEIGHT,
  MAX_HEIGHT,
  MIN_ANIM_WINDOW_WIDTH,
  MIN_ANIM_WINDOW_HEIGHT,
} from "../components/Hero";
import { setWindowSize, setScrollY } from "./utils";

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

  it("renders with a fixed height when the window is small", async () => {
    const { container } = render(<Hero {...props} />);
    const heroContent = container.getElementsByClassName("hero-content")[0];

    act(() => setScrollY(MAX_HEIGHT * 2));

    // Small width
    act(() => setWindowSize(MIN_ANIM_WINDOW_WIDTH - 1, MIN_ANIM_WINDOW_HEIGHT));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(`${MAX_HEIGHT}px`)
    );

    // Small height
    act(() => setWindowSize(MIN_ANIM_WINDOW_WIDTH, MIN_ANIM_WINDOW_HEIGHT - 1));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(`${MAX_HEIGHT}px`)
    );
  });

  it("renders with a variable height when the window is large", async () => {
    const { container } = render(<Hero {...props} />);
    const heroContent = container.getElementsByClassName("hero-content")[0];

    act(() => setWindowSize(MIN_ANIM_WINDOW_WIDTH, MIN_ANIM_WINDOW_HEIGHT));

    // Scrolled to top
    act(() => setScrollY(0));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(`${MAX_HEIGHT}px`)
    );

    // Scrolled to bottom
    act(() => setScrollY(MAX_HEIGHT * 2));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(`${MIN_HEIGHT}px`)
    );
  });
});
