import type React from "react"

import { Button } from "./components/Button"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Logos } from "./components/Logos"
import { Nav } from "./components/Nav"
import { ScrollShowcase } from "./components/ScrollShowcase"
import { Section } from "./components/Section"
import {
  articles,
  headshot,
  logos,
  navLinks,
  projects,
  socials,
} from "./content"

const { linkedIn, gitHub } = socials

export const App: React.FC = () => (
  <>
    <Nav
      name="Ben Pryke"
      links={navLinks}
      cta={{ name: "Get in touch", url: "#contact" }}
    />
    <main>
      <Hero
        title={
          <>
            <span>Complex problems,</span>
            <span>
              <em>simple</em> solutions.
            </span>
          </>
        }
        lead="Hello, I'm Ben Pryke, Senior Lead Engineer."
        body="I strive to build simple solutions to complex problems through the application of engineering and leadership. By connecting big ideas to project details, I evolve system designs, polish UX, and uplift the people around me."
        actions={
          <>
            <Button href={linkedIn.url}>Connect on LinkedIn</Button>
            <Button href={gitHub.url} variant="secondary" icon={gitHub.icon}>
              GitHub
            </Button>
          </>
        }
        headshot={headshot}
        name="Benjamin Pryke"
        facts={[
          "Lifelong Programmer",
          "Double co-founder",
          "#1 on Google for 10 years",
        ]}
      />

      {/* biome-ignore lint/correctness/useUniqueElementIds: in-page link target, so the id must be static */}
      <Section
        id="about"
        prose={true}
        tinted={true}
        title={
          <>
            Technology is about <em>people</em> first and code second.
          </>
        }
      >
        <p>
          As writer of the #1 article on Google since 2017 for the term "Jupyter
          Notebook tutorial", I am an expert at communicating technical concepts
          to a variety of audiences. I confidently lead long-term, complex
          technical deliveries, plan multi-stage projects, shape roadmaps,
          connect teams and disciplines, and elevate my team.
        </p>
        <p>
          After starting my career full stack with Python and AI, most of my
          recent experience is in the TypeScript/React ecosystem. I have been
          writing code for over 25 years, have co-founded two businesses, and
          have a decade of greenfield experience in high-performing FinTech
          teams in both the start-up and banking environments.
        </p>
        <p>
          I'm working towards roles like Executive Director, Head of
          Engineering, CTO.
        </p>
      </Section>

      {/* biome-ignore lint/correctness/useUniqueElementIds: in-page link target, so the id must be static */}
      <Section id="projects" title="Recent projects.">
        <ScrollShowcase items={projects} />
      </Section>

      {/* biome-ignore lint/correctness/useUniqueElementIds: in-page link target, so the id must be static */}
      <Section id="writing" title="Published articles." tinted={true}>
        <ScrollShowcase items={articles} tone={2} />
      </Section>

      <Section title="Professional relationships.">
        <Logos logos={logos} />
      </Section>
    </main>
    <Footer
      fullName="Benjamin Pryke"
      title="Let's continue the conversation."
      socials={Object.values(socials)}
      quote={{
        text: "The biggest risk is in not taking the adventure.",
        author: "Brian Blessed",
      }}
    />
  </>
)
