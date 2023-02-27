import React from "react";
import { render, waitFor } from "@testing-library/react";
import renderer, { act } from "react-test-renderer";

import Hero, { HeroProps } from "../components/Hero";
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
    const tree = renderer.create(<Hero {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with a fixed height when the window is small", async () => {
    const { container } = render(<Hero {...props} />);
    const heroContent = container.getElementsByClassName("hero-content")[0];

    act(() => setScrollY(Hero.MAX_HEIGHT * 2));

    // Small width
    act(() =>
      setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH - 1, Hero.MIN_ANIM_WINDOW_HEIGHT)
    );
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(
        `${Hero.MAX_HEIGHT}px`
      )
    );

    // Small height
    act(() =>
      setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH, Hero.MIN_ANIM_WINDOW_HEIGHT - 1)
    );
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(
        `${Hero.MAX_HEIGHT}px`
      )
    );
  });

  it("renders with a variable height when the window is large", async () => {
    const { container } = render(<Hero {...props} />);
    const heroContent = container.getElementsByClassName("hero-content")[0];

    act(() =>
      setWindowSize(Hero.MIN_ANIM_WINDOW_WIDTH, Hero.MIN_ANIM_WINDOW_HEIGHT)
    );

    // Scrolled to top
    act(() => setScrollY(0));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(
        `${Hero.MAX_HEIGHT}px`
      )
    );

    // Scrolled to bottom
    act(() => setScrollY(Hero.MAX_HEIGHT * 2));
    await waitFor(() =>
      expect(getComputedStyle(heroContent).maxHeight).toEqual(
        `${Hero.MIN_HEIGHT}px`
      )
    );
  });
});
