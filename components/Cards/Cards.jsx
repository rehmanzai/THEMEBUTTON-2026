import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import {
  FaLaptopCode,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaCloud
} from "react-icons/fa";

function Cards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Design",
      text: "We create modern, responsive and attractive websites tailored for your audience."
    },
    {
      icon: <FaCode />,
      title: "Development",
      text: "Fast, secure and scalable web applications engineered with modern technologies."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      text: "Beautiful, engaging and user-friendly interface designs for all screen sizes."
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      text: "Cross-platform mobile applications built for smooth performance and great UX."
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      text: "Boost your search engine visibility and drive organic traffic to your business."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Hosting",
      text: "Reliable, high-speed and secure cloud hosting solutions with 99.9% uptime."
    }
  ];

  return (
    <section className="cards-section" id="services" ref={sectionRef}>
      <h2 className={`cards-heading ${isVisible ? "show" : ""}`}>Our Services</h2>

      <div className="cards-container">
        {services.map((service, index) => (
          <div
            className={`card ${isVisible ? "show" : ""}`}
            style={{ "--delay": `${index * 0.09}s` }}
            key={index}
          >
            <div className="card-icon-wrapper">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <button className="card-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;