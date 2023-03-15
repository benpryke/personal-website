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
          title="Bio"
          body="I build simple solutions to complex problems by working at the intersection of engineering and management. By connecting big ideas to small details, I strive to simplify implementations, polish user experiences, and uplift the people and technology around me.
Technology is about people first and code second. As writer of the world's most popular Jupyter Notebook tutorial for 5 years running, I am an expert in communicating technical concepts with a variety of audiences. I confidently lead complex technical deliveries, plan multi-stage projects, own roadmaps, scope tasks, and manage, coach, and mentor engineers.
Most of my recent experience is in the Python and JavaScript/TypeScript ecosystems, but I have been writing full stack code for over two decades, have a decade of experience in start-ups, large companies, and academia, and 5+ years in FinTech.
I'm working towards roles like Engineering Manager, Head of Engineering, CTO."
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
        <Logos title="Professional Relationships">
          <Logo
            name="J.P. Morgan"
            src="images/logos/logo-jpmc.svg"
            url="https://jpmorgan.com"
          />
          <Logo
            name="Maeva"
            src="images/logos/logo-maeva.png"
            url="https://meetmaeva.com"
          />
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
