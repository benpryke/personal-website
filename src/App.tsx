import React, { Component } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Logo from "./components/Logo";
import Paragraph from "./components/Paragraph";
import Showcase from "./components/Showcase";
import Showpiece from "./components/Showpiece";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Hero
          name="Benjamin Pryke"
          headshot={"images/headshot.jpg"}
          fadeIn={false}
        />
        <Paragraph
          title="Story"
          body="I'm a highly driven full stack developer living and breathing the tech and FinTech startup worlds with a background in computer science and machine learning. I'm super excited by nascent and growth-phase companies, especially those using machine learning, as I'm motivated by being at the creative edge of new solutions.
Working in fast-paced startups has been perfect because I highly value diversity in my tasks and the freedom to make my own decisions and take ownership. I try to add value by understanding the bigger picture and actively engaging with projects at every level from roadmapping and architectural decisions, implementation minutiae and refactoring, to client demos and teaching. Right now, I mostly code with Python and React as these tools typically provide the most efficient and powerful routes to getting things done.
I still remember how I felt at 11 years old when my dad brought home a gigantic, discarded Windows 98 PC from work, so it's no surprise that less than a year later I had started programming. My teenage creative energy expenditure on Flash games, websites and physics simulations ultimately culminated in a Master's degree in Computer Science from Bristol University. From there I dove straight into a PhD in machine and deep learning at the University of Edinburgh before leaving to co-found a profitable boutique investment fund utilising that PhD skillset to find inefficiencies in niche markets. Realising both the long time horizon it would take to build reputation enough to obtain significant funding and the limitations of not being surrounded by other developers, I moved happily to London to join the FinTech startup Beacon.
Outside my primary work schedule, I make sure to push myself and learn in other ways such as writing data science articles, training gymnastics, and meeting others from the startup community to discuss the incredible things they're doing."
        />
        <Showcase title="Published Articles">
          <Showpiece
            title="Advanced Jupyter Notebooks: A Tutorial"
            thumbnail="images/articles/article-jupyter-advanced.jpg"
            description="Popular with serious Jupyter users, this is an adventure through scripted execution, reporting pipelines, working with databases, and much more"
            url="https://www.dataquest.io/blog/advanced-jupyter-notebooks-tutorial/"
          />
          <Showpiece
            title="Jupyter Notebook for Beginners: A Tutorial"
            thumbnail="images/articles/article-jupyter-beginners.jpg"
            description="Exploring the basics of creating a Jupyter Notebook, the important terminology, and how easily notebooks can be shared and published online"
            url="https://www.dataquest.io/blog/jupyter-notebook-tutorial/"
          />
          <Showpiece
            title="Understanding SettingwithCopyWarning in pandas"
            thumbnail="images/articles/article-settingwithcopywarning.png"
            description="A deep dive into everything there is to know about the most common (and most misunderstood) warning in pandas"
            url="https://www.dataquest.io/blog/settingwithcopywarning/"
          />
        </Showcase>
        <Paragraph
          title="Financial Developer at Beacon"
          imgSrc="images/logos/logo-beacon.jpg"
          body="Beacon Platform is a multi-award-winning FinTech start-up with international offices headquartered in New York, and in September 2017 I joined the London office. I assumed a client-facing full stack dev role developing core IP and integrated web apps, engaging in consulting projects, and providing leadership to more junior colleagues.
My responsibilities keep me constantly engaged in the balance of simultaneous projects, client communications, enhancement and support requests, code reviews, demos, discussions, interviews, etc, and we primarily use Python, React/JavaScript, CSS/LESS, Git, with Jira for agile project management.
Early on, I took joint-ownership of Glint, an incredibly cool key full stack UI project with total visibility internally and externally. Contributing heavily to its growth, working closely with management, and teaching, supporting, managing, working with and learning from the junior members of the team we hired to take Glint further has acted as a reflection of full product development.
My role thankfully permits the freedom to work with and move between multiple internal/external teams, self-direct and prioritise, and engage management at all levels. I am also fortunate enough to be able to learn from the incredibly smart, driven group of individuals that make Beacon."
        />
        <Showcase title="Gymnastics around the world">
          <Showpiece
            title="Berlin"
            thumbnail="images/gym/gym-berlin.jpg"
            description="A lot of my shots require many takes before I'm satisfied, but in this case one evening by the river at East Side Gallery I got a nice blur effect from snapping a still from a video of the action instead"
            url="https://www.instagram.com/p/BVHQRdGha1B/"
          />
          <Showpiece
            title="Skopje"
            thumbnail="images/gym/gym-skopje.jpg"
            description="Handstands are a favourite of mine, especially when a back flip is not possible. I took this in a park in Macedonia's capital, much to the interest of several onlooking kids"
            url="https://www.instagram.com/p/BU5DbhNhkEN/"
          />
          <Showpiece
            title="Budapest"
            thumbnail="images/gym/gym-budapest.jpg"
            description="I try to find the right place to do a back flip in every country I visit. When shooting in popular locations, like this one in front of the Hungarian Parliament Building, you have to wait for just the right moment every single take"
            url="https://www.instagram.com/p/BU97_sIBoZX/"
          />
        </Showcase>
        <Logos title="Professional Relationships">
          <Logo
            name="Beacon Platform"
            src="images/logos/logo-beacon.jpg"
            url="https://beacon.io"
          />
          <Logo
            name="Dataquest"
            src="images/logos/logo-dataquest.png"
            url="https://www.dataquest.io"
          />
          <Logo
            name="Machina Capital"
            src="images/logos/logo-machina-capital.png"
            url="https://www.linkedin.com/company/machina-capital"
          />
          <Logo
            name="BRACE Dementia Research"
            src="images/logos/logo-brace.png"
            url="https://www.alzheimers-brace.org"
          />
          <Logo
            name="EPSRC"
            src="images/logos/logo-epsrc.jpg"
            url="https://epsrc.ukri.org/"
          />
          <Logo
            name="The Podcast Host"
            src="images/logos/logo-the-podcast-host.png"
            url="https://www.thepodcasthost.com"
          />
          <Logo
            name="Seymour Pools"
            src="images/logos/logo-seymour-pools.jpg"
            url="https://seymourpools.co.uk"
          />
          <Logo
            name="Bristol University"
            src="images/logos/logo-bristol.png"
            url="http://www.bris.ac.uk/engineering/departments/computerscience/"
          />
          <Logo
            name="Edinburgh University"
            src="images/logos/logo-edinburgh.png"
            url="http://www.anc.ed.ac.uk/machine-learning/"
          />
        </Logos>
        <Footer fadeIn={false} />
      </div>
    );
  }
}
