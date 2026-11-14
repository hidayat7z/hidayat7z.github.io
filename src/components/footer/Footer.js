import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          © {new Date().getFullYear()} {greeting.title} · Built with{" "}
          <svg
            className="footer-heart"
            role="img"
            aria-label="love"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="fourummah-heart-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#35d7bd" />
                <stop offset="100%" stopColor="#1545d2" />
              </linearGradient>
            </defs>
            <path
              fill="url(#fourummah-heart-gradient)"
              d="M12 21.1 10.6 20C5.6 15.5 2.3 12.5 2.3 8.8A5.3 5.3 0 0 1 7.7 3.5c1.7 0 3.3.8 4.3 2.1a5.6 5.6 0 0 1 4.3-2.1 5.3 5.3 0 0 1 5.4 5.3c0 3.7-3.3 6.7-8.3 11.2z"
            />
          </svg>
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
