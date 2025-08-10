import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div" style={{ textAlign: "center" }}>
            <img
              src={require("../../assets/images/Me1.jpg")}
              alt="Eze Profile"
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                marginBottom: "20px"
              }}
            />
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "0.5rem" }}
            >
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
              }
              style={{
                maxWidth: "600px",
                margin: "0 auto 30px",
                lineHeight: "1.6",
                fontSize: "1.1rem"
              }}
            >
              {greeting.subTitle}
            </p>

            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  className="download-link-button"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>

          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
