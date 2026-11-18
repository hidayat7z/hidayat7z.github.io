import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

const featuredProjects = [
  {
    name: "4Ummah",
    label: "Founder · Product & operations",
    description:
      "Building a digital home for the Muslim ecosystem—bringing Muslim-built products, values-conscious work opportunities, and community events into one place.",
    logo: require("../../assests/images/4ummah-logo.png"),
    url: "https://www.4ummah.co/",
    className: "fourummah-feature",
    linkText: "Explore 4Ummah",
  },
  {
    name: "Nasheedio Content Infrastructure",
    label: "Content Lead · Nasheedio",
    description:
      "Built and managed large-scale content operations for the Nasheedio platform, curating and organizing 130,000+ content assets across 50+ categories. Designed workflows, quality-control processes, and KPI tracking systems to support content management for 100+ creators while maintaining platform content standards.",
    logo: require("../../assests/images/nasheedio-logo.jpeg"),
    url: "https://app.nasheedio.com/",
    className: "nasheedio-feature",
    linkText: "Visit Nasheedio",
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <main className="projects-page-content">
          <Fade bottom duration={900} distance="24px">
            <section className="selected-work-section" aria-labelledby="selected-work-title">
              <div className="projects-intro">
                <h1 id="selected-work-title" style={{ color: theme.text }}>
                  Products and systems built to make a difference.
                </h1>
                <p style={{ color: theme.secondaryText }}>
                  A few things I have helped build—from a community-focused platform to the content operations behind a growing product.
                </p>
              </div>
              <div className="featured-project-grid">
                {featuredProjects.map((project) => (
                  <article className={`featured-project-card ${project.className}`} key={project.name}>
                    <div className="featured-project-top">
                      <div className="featured-project-logo">
                        <img src={project.logo} alt={`${project.name} logo`} />
                      </div>
                      <span className="featured-project-label">{project.label}</span>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.linkText} <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </Fade>

          <section className="technical-projects-section" aria-labelledby="technical-projects-title">
            <div className="technical-projects-heading">
              <div>
                <h2 id="technical-projects-title" style={{ color: theme.text }}>
                  Technical Projects
                </h2>
                <p style={{ color: theme.secondaryText }}>
                  Selected repositories in data analysis, machine learning, and software development.
                </p>
              </div>
              <Button
                text="GitHub ↗"
                href="https://github.com/hidayat7z"
                newTab={true}
                theme={theme}
              />
            </div>
            <div className="repo-cards-div-main">
              {ProjectsData.data.map((repo) => (
                <GithubRepoCard repo={repo} theme={theme} key={repo.id} />
              ))}
            </div>
            <div className="technical-projects-more">
              <Button
                text="More repositories"
                href="https://github.com/hidayat7z?tab=repositories"
                newTab={true}
                theme={theme}
              />
            </div>
          </section>
        </main>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
