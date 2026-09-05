import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero.png.png";

function Hero() {
  const handleGetStarted = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>
          Build Better
          <br />
          <span>Web Experiences</span>
        </h1>
        <p>
          We create modern, responsive, and user-friendly websites that help
          your ideas come to life and grow online.
        </p>
        <button className="hero-button" onClick={handleGetStarted}>Get Started</button>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;