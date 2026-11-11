import React from "react";

import { render, screen } from "@testing-library/react";

import { App } from "../App";
import { articles, image, navLinks, projects } from "../content";

describe("image", () => {
  it("resolves bundled images and rejects missing ones", () => {
    expect(image("headshot.jpg")).toMatch(/headshot.*\.jpg/);
    expect(() => image("nope.png")).toThrow("Missing image: nope.png");
  });
});

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the headline", () => {
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /^Complex problems,\s*simple solutions\.$/
    );
  });

  it("has a target for every in-page link", () => {
    const anchors = [...navLinks.map((l) => l.url), "#top", "#contact"];
    anchors.forEach((hash) => {
      expect(document.querySelector(hash)).toBeInTheDocument();
    });
  });

  it("showcases every project and article", () => {
    [...projects, ...articles].forEach(({ name }) => {
      expect(screen.getByRole("link", { name })).toBeInTheDocument();
    });
  });

  it("observes each showcase", () => {
    // Active band and fade-in reveal, for each of the two showcases
    expect(window.IntersectionObserver).toHaveBeenCalledTimes(4);
  });
});
