import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import logo from "../../assests/images/4ummah-logo.png";
import "./FourUmmah.css";

const features = [
  {
    number: "01",
    title: "Muslim-built products",
    status: "Starting here",
    description:
      "A considered directory of apps, tools, and companies created by Muslims—so useful work is easier to discover and support.",
  },
  {
    number: "02",
    title: "Work with values in mind",
    status: "Starting here",
    description:
      "A place to find opportunities at organizations reviewed with alignment to Islamic values in mind, and to help thoughtful employers reach the right people.",
  },
  {
    number: "03",
    title: "Events across the community",
    status: "Up next",
    description:
      "Conferences, meetups, and gatherings that bring people together. Events are part of the vision, with the first version focused on products and jobs.",
  },
];

export default function FourUmmah({ theme }) {
  return (
    <div className="fourummah-page">
      <Header theme={theme} />

      <main>
        <section className="fourummah-hero" aria-labelledby="fourummah-title">
          <Fade bottom duration={900} distance="24px">
            <div className="fourummah-hero-copy">
              <p className="fourummah-eyebrow fourummah-hero-eyebrow">
                A vision <span className="fourummah-word-for">for</span> the{" "}
                <span className="fourummah-word-ummah">Ummah</span>
              </p>
              <h1 id="fourummah-title">
                A digital home for the Muslim ecosystem.
              </h1>
              <p className="fourummah-lead">
                Muslim-built products, values-conscious work, and community
                events are spread across too many places. 4Ummah brings them
                closer together, making it easier to discover what the community
                is creating and support one another.
              </p>
              <div className="fourummah-actions">
                <a
                  className="fourummah-primary-link"
                  href="https://www.4ummah.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore 4Ummah <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="fourummah-secondary-link"
                  href="#what-were-building"
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById("what-were-building")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  What we’re building <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1100} distance="24px">
            <div className="fourummah-brand-card">
              <div className="fourummah-brand-glow" aria-hidden="true" />
              <div className="fourummah-logo-frame">
                <img src={logo} alt="4Ummah logo" />
              </div>
              <p className="fourummah-brand-name">4Ummah</p>
              <p className="fourummah-brand-tagline">
                Built for the Ummah. By the Ummah.
              </p>
              <span className="fourummah-status">
                <span aria-hidden="true" /> In development · Early access soon
              </span>
              <nav className="fourummah-social-links" aria-label="4Ummah social links">
                <a href="https://linktr.ee/4ummah" target="_blank" rel="noopener noreferrer">
                  Linktree <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.linkedin.com/company/4ummahco" target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.instagram.com/4ummah.co/" target="_blank" rel="noopener noreferrer">
                  Instagram <span aria-hidden="true">↗</span>
                </a>
              </nav>
            </div>
          </Fade>
        </section>

        <section
          className="fourummah-building-section"
          id="what-were-building"
          aria-labelledby="fourummah-building-title"
        >
          <div className="fourummah-section-heading">
            <p className="fourummah-eyebrow">What we’re building</p>
            <h2 id="fourummah-building-title">
              Useful things, easier to find.
            </h2>
            <p>
              We’re starting with a few clear ways to connect people with the
              work, opportunities, and gatherings already growing across the
              Muslim community.
            </p>
          </div>

          <div className="fourummah-feature-grid">
            {features.map((feature) => (
              <article className="fourummah-feature-card" key={feature.number}>
                <div className="fourummah-feature-topline">
                  <span className="fourummah-feature-number">{feature.number}</span>
                  <span className="fourummah-feature-status">{feature.status}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="fourummah-purpose-section">
          <div className="fourummah-purpose-mark" aria-hidden="true">
            <span>4</span>
            <span>U</span>
          </div>
          <div>
            <p className="fourummah-eyebrow">Why it matters</p>
            <h2>The ideas are here. The connections can be stronger.</h2>
            <p>
              Muslim founders are building useful products. Organizations are
              hiring. Communities are gathering. But the discovery often starts
              in a different channel every time. 4Ummah is being shaped as a
              shared starting point—one that helps people find good work and
              helps good work find its people.
            </p>
          </div>
        </section>

        <section className="fourummah-founder-section">
          <p className="fourummah-eyebrow">My part in the work</p>
          <h2>From an idea to something people can use.</h2>
          <p>
            As a founder, I work across product direction, early operations,
            and execution—turning a broad idea into a focused first version,
            while learning from the people it is meant to serve. The goal is to
            build with the community, make discovery genuinely useful, and grow
            4Ummah one thoughtful step at a time.
          </p>
          <a
            className="fourummah-primary-link"
            href="https://www.4ummah.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet 4Ummah <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
