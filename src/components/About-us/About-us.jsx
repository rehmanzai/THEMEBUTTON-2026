import "./About-us.css";
import React, { useEffect, useState } from "react";
import "./About-us.css";

function About() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".about-us");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className={`about-us ${isVisible ? "about-visible" : ""}`} id="about">

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <span className="about-label">
            WHO WE ARE
          </span>

          <h2>
            Who
            <br />
            we
            <br />
            are.
          </h2>

          <div className="about-decoration"></div>

          <h3>
            Building Digital Experiences
            <br />
            That Drive Success
          </h3>

          <p>
            We are a passionate team of developers and designers
            committed to delivering high-quality digital experiences.
            Our goal is to empower businesses with cutting-edge
            tools and responsive designs that stand out in the
            digital market.
          </p>

          <button className="about-btn">
            Learn More <span>→</span>
          </button>

        </div>


        {/* CENTER IMAGE */}
        <div className="about-image-wrapper">

          <div className="image-bg"></div>

          <img
            src="/developer.jpg.jfif"
            alt="Developer working on laptop"
            className="about-image"
          />

        </div>


        {/* RIGHT SERVICES */}
        <div className="about-services">

          <div className="service-item">

            <div className="service-icon">
              &lt;/&gt;
            </div>

            <div>
              <h3>Web Development</h3>
              <p>
                We build fast, secure, and scalable websites.
              </p>
            </div>

          </div>


          <div className="service-item">

            <div className="service-icon">
              ✎
            </div>

            <div>
              <h3>UI/UX Design</h3>
              <p>
                We design modern and intuitive user experiences.
              </p>
            </div>

          </div>


          <div className="service-item">

            <div className="service-icon">
              🚀
            </div>

            <div>
              <h3>Performance</h3>
              <p>
                We optimize websites for speed, SEO, and best
                performance.
              </p>
            </div>

          </div>


          <div className="service-item">

            <div className="service-icon">
              ◉
            </div>

            <div>
              <h3>Support</h3>
              <p>
                We provide 24/7 support and maintenance.
              </p>
            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="about-stats">

          <div className="stat-box">
            <span className="stat-icon">🚀</span>

            <div>
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
          </div>


          <div className="stat-box">
            <span className="stat-icon">👥</span>

            <div>
              <h3>99%</h3>
              <p>Happy Clients</p>
            </div>
          </div>


          <div className="stat-box">
            <span className="stat-icon">◉</span>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;