import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BuilderIllustration from "./BuilderIllustration";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p className="greeting-eyebrow">FOUNDER · SOFTWARE ENGINEER</p>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <a className="greeting-contact-link" href="mailto:hidayatwork7@gmail.com">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BuilderIllustration />
          </div>
        </div>
      </div>
    </Fade>
  );
}
