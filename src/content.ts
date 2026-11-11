import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"

/** Bundled images; Vite gives each a content-hashed URL, so a changed image is never served stale */
const images = import.meta.glob<string>("./assets/images/**/*", {
  eager: true,
  import: "default",
  query: "?url",
})

/** A logo entry whose image lives at src/assets/images/logos/logo-<file> */
const logo = (name: string, file: string, url: string): Logo => ({
  name,
  url,
  src: image(`logos/logo-${file}`),
})

export type Link = {
  name: string
  url: string
}

export type Social = Link & {
  icon: IconDefinition
}

export type ShowcaseItem = Link & {
  image: string
  paragraphs: string[]
  tags?: string[]
}

export type Logo = Link & {
  src: string
}

/** URL of an image under src/assets/images */
export const image = (path: string): string => {
  const url = images[`./assets/images/${path}`]
  if (!url) {
    throw new Error(`Missing image: ${path}`)
  }
  return url
}

export const headshot = image("headshot.jpg")

export const socials = {
  linkedIn: {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://linkedin.com/in/benjaminpryke",
  },
  gitHub: {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/benpryke",
  },
  twitter: {
    name: "Twitter",
    icon: faXTwitter,
    url: "https://twitter.com/BenjaminPryke",
  },
  stackOverflow: {
    name: "Stack Overflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/604687/ninjakannon",
  },
  instagram: {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/VeryBenOfficial",
  },
} satisfies Record<string, Social>

export const navLinks: Link[] = [
  { name: "About", url: "#about" },
  { name: "Projects", url: "#projects" },
  { name: "Writing", url: "#writing" },
]

export const projects: ShowcaseItem[] = [
  {
    name: "rnblox: Building Blocks for Your Training Blocks",
    url: "https://rnblox.com",
    image: image("projects/rnblox.png"),
    paragraphs: [
      "Strava's GPS tracking and voice cues weren't enough for me, so I built my own and took 5 minutes off my race day half marathon PB.",
      "Live voice and tone cues coach you through every rep, so your phone can stay in your pocket, while GPS tracking discards coarse fixes and measures distance along the route.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Mantine",
      "Tailwind",
      "Zustand",
      "PWA",
      "Docker",
    ],
  },
  {
    name: "Maeva: The SPF Search Engine",
    url: "https://meetmaeva.com/",
    image: image("projects/maeva.png"),
    paragraphs: [
      "Since 2020, I have worked with co-founder Natalie O'Neill to build Maeva, a product search engine that begins with a niche focus on the sunscreen market.",
      "At Maeva, we believe that online product search no longer meets user needs. No company lets you search across all vendors with advanced filters that truly fit the product category. We value consistent, high quality data accessible via a wide range of tailored filters.",
      "I am responsible for the technical implementation of the product vision, including the cloud architecture, data model, data pipeline, and user interfaces.",
    ],
    tags: [
      "Firebase",
      "GCP",
      "React",
      "JavaScript",
      "TypeScript",
      "Express",
      "Python",
      "Pandas",
      "Docker",
      "NoSQL",
    ],
  },
  {
    name: "Wortle: German Wordle",
    url: "https://wortle.xyz",
    image: image("projects/wortle.png"),
    paragraphs: [
      "German version of the popular game Wordle with German keyboard, desktop and mobile support, light and dark mode, and more; built predominantly in a day.",
    ],
    tags: ["React"],
  },
]

export const articles: ShowcaseItem[] = [
  {
    name: "Advanced Jupyter Notebooks: A Tutorial",
    url: "https://www.dataquest.io/blog/advanced-jupyter-notebooks-tutorial/",
    image: image("articles/article-jupyter-advanced.png"),
    paragraphs: [
      "Popular with serious Jupyter users, this is an adventure through scripted execution, reporting pipelines, working with databases, and much more.",
    ],
  },
  {
    name: "Jupyter Notebook for Beginners: A Tutorial",
    url: "https://www.dataquest.io/blog/jupyter-notebook-tutorial/",
    image: image("articles/article-jupyter-beginners.png"),
    paragraphs: [
      "#1 Jupyter Notebook tutorial on Google since 2017. Exploring the basics of creating a Jupyter Notebook, the important terminology, and how easily notebooks can be shared and published online.",
    ],
  },
  {
    name: "Understanding SettingwithCopyWarning in pandas",
    url: "https://www.dataquest.io/blog/settingwithcopywarning/",
    image: image("articles/article-settingwithcopywarning.png"),
    paragraphs: [
      "A deep dive into everything there is to know about the most common (and most misunderstood) warning in pandas.",
    ],
  },
]

export const logos: Logo[] = [
  logo("J.P. Morgan", "jpmc.svg", "https://jpmorgan.com"),
  logo("Maeva", "maeva.png", "https://meetmaeva.com"),
  logo("Beacon Platform", "beacon.jpg", "https://beacon.io"),
  logo("Dataquest", "dataquest.png", "https://www.dataquest.io"),
  logo(
    "Machina Capital",
    "machina-capital.png",
    "https://www.linkedin.com/company/machina-capital",
  ),
  logo(
    "BRACE Dementia Research",
    "brace.png",
    "https://www.alzheimers-brace.org",
  ),
  logo("EPSRC", "epsrc.jpg", "https://epsrc.ukri.org/"),
  logo(
    "The Podcast Host",
    "the-podcast-host.png",
    "https://www.thepodcasthost.com",
  ),
  logo("Seymour Pools", "seymour-pools.jpg", "https://seymourpools.co.uk"),
  logo(
    "Bristol University",
    "bristol.png",
    "http://www.bris.ac.uk/engineering/departments/computerscience/",
  ),
  logo(
    "Edinburgh University",
    "edinburgh.png",
    "http://www.anc.ed.ac.uk/machine-learning/",
  ),
]
