import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className={`experience-card-logo${experience.company === "Nasheedio" ? " nasheedio-card-logo" : ""}`}
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          {experience.positions ? (
            <div className="experience-positions">
              {experience.positions.map((position) => (
                <div className="experience-position" key={position.title}>
                  <div className="experience-position-heading">
                    <h4 className="experience-position-title" style={{ color: theme.text }}>
                      {position.title}
                    </h4>
                    <span className="experience-position-duration" style={{ color: theme.secondaryText }}>
                      {position.duration}
                    </span>
                  </div>
                  <p className="experience-card-description" style={{ color: theme.text }}>
                    {position.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p
              className="experience-card-description"
              style={{ color: theme.text }}
            >
              {experience["description"]}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
