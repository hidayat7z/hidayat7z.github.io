import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import ReflectionCarousel from "../../components/reflectionCarousel/ReflectionCarousel";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const { contactSection, blogSection, addressSection, phoneSection } = contactPageData;

export default function Contact({ theme, onToggle }) {
  return (
    <div className="contact-main">
      <Header theme={theme} />
      <main className="contact-content">
        <ReflectionCarousel />
        <Fade bottom duration={800} distance="20px">
          <section className="contact-hero">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {contactSection.title}
            </h1>
            <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
              {contactSection.description}
            </p>
            <SocialMedia theme={theme} />
          </section>
        </Fade>

        <div className="contact-cards">
          <Fade bottom duration={900} distance="20px">
            <section className="contact-card contact-blog-card">
              <span className="contact-card-icon" aria-hidden="true">✍</span>
              <p className="contact-card-eyebrow">Ideas & writing</p>
              <h2 style={{ color: theme.text }}>{blogSection.title}</h2>
              <p style={{ color: theme.secondaryText }}>{blogSection.subtitle}</p>
              <Button text="Read my articles ↗" newTab={true} href={blogSection.link} theme={theme} />
            </section>
          </Fade>

          <Fade bottom duration={1000} distance="20px">
            <section className="contact-card contact-details-card">
              <span className="contact-card-icon contact-envelope-icon" aria-hidden="true">✉</span>
              <p className="contact-card-eyebrow">Get in touch</p>
              <h2 style={{ color: theme.text }}>Let’s connect</h2>
              <a className="contact-email" href={`mailto:${addressSection.subtitle}`}>
                {addressSection.subtitle}
              </a>
              {phoneSection.subtitle && (
                <a className="contact-phone" href={`tel:${phoneSection.subtitle.replace(/[^+\d]/g, "")}`}>
                  {phoneSection.subtitle}
                </a>
              )}
              <a className="contact-location-link" href={addressSection.location_map_link} target="_blank" rel="noopener noreferrer">
                Kolkata, India <span aria-hidden="true">↗</span>
              </a>
            </section>
          </Fade>
        </div>
      </main>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}
