import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { act, render, screen } from "@testing-library/react"

import { Button } from "../components/Button"
import { Footer } from "../components/Footer"
import { Frame } from "../components/Frame"
import { Hero } from "../components/Hero"
import { Logos } from "../components/Logos"
import { Nav } from "../components/Nav"
import { Section } from "../components/Section"
import { logos, socials } from "../content"
import { setScrollY } from "./utils"

describe("Button", () => {
  it("renders a primary pill link with a trailing arrow", () => {
    render(<Button href="/go">Go</Button>)
    const link = screen.getByRole("link", { name: "Go" })
    expect(link).toHaveAttribute("href", "/go")
    expect(link).toHaveClass("button-primary")
    expect(link.querySelector(".button-arrow")).toBeInTheDocument()
  })

  it("renders a secondary pill with a leading icon and no arrow", () => {
    render(
      <Button href="/gh" variant="secondary" icon={faGithub}>
        GitHub
      </Button>,
    )
    const link = screen.getByRole("link", { name: "GitHub" })
    expect(link).toHaveClass("button-secondary")
    expect(link.querySelectorAll("svg")).toHaveLength(1)
    expect(link.querySelector(".button-arrow")).toBeNull()
  })
})

describe("Frame", () => {
  it("wraps the tone around the available gradients", () => {
    const { container } = render(<Frame tone={5}>child</Frame>)
    expect(container.firstChild).toHaveAttribute("data-tone", "1")
  })

  it("renders children directly without a title", () => {
    const { container } = render(<Frame tone={0}>child</Frame>)
    expect(container.querySelector(".frame-window")).toBeNull()
    expect(container).toHaveTextContent("child")
  })

  it("renders a window card with a title bar when titled", () => {
    const { container } = render(
      <Frame tone={0} title="example.com" className="extra">
        child
      </Frame>,
    )
    expect(container.firstChild).toHaveClass("frame", "extra")
    expect(container.querySelector(".frame-title")).toHaveTextContent(
      "example.com",
    )
    expect(container.querySelector(".frame-body")).toHaveTextContent("child")
  })
})

describe("Section", () => {
  it("renders an identified section with a heading and content", () => {
    render(
      // biome-ignore lint/correctness/useUniqueElementIds: sections are in-page link targets, so ids must be static
      <Section id="about" title="About" tinted={true} prose={true}>
        <p>Body</p>
      </Section>,
    )
    const section = screen
      .getByRole("heading", { level: 2, name: "About" })
      .closest("section")
    expect(section).toHaveAttribute("id", "about")
    expect(section).toHaveClass("section", "section-tinted", "section-prose")
    expect(screen.getByText("Body")).toBeInTheDocument()
  })

  it("omits optional modifiers", () => {
    const { container } = render(<Section title="Plain">x</Section>)
    expect(container.firstChild).toHaveAttribute("class", "section")
  })
})

describe("Nav", () => {
  const links = [
    { name: "About", url: "#about" },
    { name: "Writing", url: "#writing" },
  ]

  beforeEach(() => setScrollY(0))

  it("renders the brand, links, and call to action", () => {
    render(
      <Nav
        name="Ben"
        links={links}
        cta={{ name: "Contact", url: "#contact" }}
      />,
    )
    expect(screen.getByRole("link", { name: "Ben" })).toHaveAttribute(
      "href",
      "#top",
    )
    // Section links are hidden below the small breakpoint, which jsdom doesn't evaluate
    expect(
      screen.getByRole("link", { name: "Writing", hidden: true }),
    ).toHaveAttribute("href", "#writing")
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    )
  })

  it("condenses into a pill once the page scrolls", () => {
    render(<Nav name="Ben" links={links} cta={links[0]} />)
    const header = screen.getByRole("banner")
    expect(header).not.toHaveClass("nav-scrolled")

    act(() => setScrollY(100))
    expect(header).toHaveClass("nav-scrolled")

    act(() => setScrollY(0))
    expect(header).not.toHaveClass("nav-scrolled")
  })
})

describe("Hero", () => {
  it("renders the headline, introduction, actions, headshot, and facts", () => {
    render(
      <Hero
        title="Headline"
        lead="Lead"
        body="Body"
        actions={<a href="/x">Act</a>}
        headshot="me.jpg"
        name="Ben"
        facts={["Fact one", "Fact two"]}
      />,
    )
    expect(
      screen.getByRole("heading", { level: 1, name: "Headline" }),
    ).toBeInTheDocument()
    expect(screen.getByText("Lead")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Act" })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "Ben" })).toHaveAttribute(
      "src",
      "me.jpg",
    )
    expect(screen.getAllByRole("listitem").map((li) => li.textContent)).toEqual(
      ["Fact one", "Fact two"],
    )
  })
})

describe("Logos", () => {
  it("links every logo to its organisation", () => {
    render(<Logos logos={logos} />)
    const images = screen.getAllByRole("img")
    expect(images).toHaveLength(logos.length)
    for (const { name, url, src } of logos) {
      const img = screen.getByRole("img", { name })
      expect(img).toHaveAttribute("src", src)
      expect(img.closest("a")).toHaveAttribute("href", url)
    }
  })
})

describe("Footer", () => {
  it("renders the contact anchor, every social link, and the quote", () => {
    const list = Object.values(socials)
    const { container } = render(
      <Footer
        fullName="Benjamin"
        title="Say hi"
        socials={list}
        quote={{ text: "Go.", author: "Someone" }}
      />,
    )
    expect(container.querySelector("footer")).toHaveAttribute("id", "contact")
    expect(screen.getByRole("heading", { name: "Say hi" })).toBeInTheDocument()
    for (const { name, url } of list) {
      expect(
        screen.getByRole("link", { name: new RegExp(name) }),
      ).toHaveAttribute("href", url)
    }
    expect(container.querySelector("blockquote")).toHaveTextContent(
      "“Go.”— Someone",
    )
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Benjamin`),
    ).toBeInTheDocument()
  })
})
