import { act, fireEvent, render, screen } from "@testing-library/react"
import { type Mock, vi } from "vite-plus/test"

import {
  ACTIVE_BAND,
  REVEAL_THRESHOLD,
  ScrollShowcase,
} from "../components/ScrollShowcase"
import type { ShowcaseItem } from "../content"

const items: ShowcaseItem[] = [
  {
    name: "First",
    url: "https://first.dev/",
    image: "a.png",
    paragraphs: ["One"],
    tags: ["React"],
  },
  {
    name: "Second",
    url: "https://www.second.dev/blog/post/",
    image: "b.png",
    paragraphs: ["Two"],
  },
]

/** Simulate an item crossing the band of the given observer (0: active, 1: reveal) */
const intersect = (observer: number, index: number, isIntersecting = true) => {
  const [callback] = (window.IntersectionObserver as Mock).mock.calls[observer]
  const target = document.querySelectorAll(".showcase-item")[index]
  act(() => callback([{ isIntersecting, target }]))
}
const activate = (index: number) => intersect(0, index)
const reveal = (index: number) => intersect(1, index)
const itemClasses = (name: string) =>
  Array.from(document.querySelectorAll(".showcase-item"), (el) =>
    el.classList.contains(name),
  )

const stage = () => {
  const el = document.querySelector(".showcase-stage")
  if (!el) {
    throw new Error("Missing showcase stage")
  }
  return el
}

describe("ScrollShowcase", () => {
  beforeEach(() => {
    render(<ScrollShowcase items={items} tone={1} />)
  })

  it("renders every item with its text, tags, and title link", () => {
    expect(screen.getByRole("link", { name: "First" })).toHaveAttribute(
      "href",
      "https://first.dev/",
    )
    expect(screen.getByText("Two")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
  })

  it("gives each item an inline framed image for narrow screens", () => {
    const inline = document.querySelectorAll(".showcase-inline")
    expect(inline).toHaveLength(2)
    expect(inline[1]).toHaveTextContent("second.dev/blog/post")
  })

  it("observes items against the centre band", () => {
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        rootMargin: ACTIVE_BAND,
      },
    )
  })

  it("starts with the first item active", () => {
    const images = stage().querySelectorAll("img")
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveClass("is-active")
    expect(images[1]).not.toHaveClass("is-active")
    expect(document.querySelectorAll(".showcase-item")[0]).toHaveClass(
      "is-active",
    )
    expect(stage()).toHaveTextContent("01 / 02")
  })

  it("crossfades the stage to the item in view", () => {
    activate(1)

    const images = stage().querySelectorAll("img")
    expect(images[0]).not.toHaveClass("is-active")
    expect(images[1]).toHaveClass("is-active")
    expect(stage()).toHaveTextContent("02 / 02")
    expect(stage().querySelector(".frame")).toHaveAttribute("data-tone", "2")
    // The stage is hidden below the medium breakpoint, which jsdom doesn't evaluate
    expect(
      screen.getByRole("link", { name: /Visit second\.dev/, hidden: true }),
    ).toHaveAttribute("href", "https://www.second.dev/blog/post/")
    expect(
      screen.getByRole("button", { name: "Show Second", hidden: true }),
    ).toHaveAttribute("aria-current", "true")
  })

  it("ignores items leaving the band", () => {
    intersect(0, 1, false)
    expect(stage()).toHaveTextContent("01 / 02")
  })

  it("reveals items once, along with every item above them", () => {
    expect(window.IntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: REVEAL_THRESHOLD,
      },
    )
    expect(itemClasses("is-revealed")).toEqual([false, false])

    reveal(0)
    expect(itemClasses("is-revealed")).toEqual([true, false])

    reveal(1)
    intersect(1, 1, false)
    reveal(0)
    expect(itemClasses("is-revealed")).toEqual([true, true])
  })

  it("scrolls an item into view when its progress dot is pressed", () => {
    const scrollIntoView = vi.fn()
    Element.prototype.scrollIntoView = scrollIntoView

    fireEvent.click(
      screen.getByRole("button", { name: "Show Second", hidden: true }),
    )

    expect(scrollIntoView).toHaveBeenCalledWith({ block: "center" })
    expect(scrollIntoView.mock.contexts[0]).toBe(
      document.querySelectorAll(".showcase-item")[1],
    )
  })
})
