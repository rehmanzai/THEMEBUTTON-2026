import React, { useEffect } from "react";
import "./Tech-Stack.css";

function TechStack() {

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".tech-section-header, .tech-cat-card, .tech-benefit-item, .tech-logo-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="tech-page-wrapper">

      {/* Background Grid */}
      <div className="tech-matrix-grid-overlay"></div>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="tech-hero-section">

        {/* LEFT SIDE */}
        <div className="tech-hero-left">

          <span className="tech-badge-pill">
            OUR CORE ENGINE
          </span>

          <h1 className="tech-hero-title">
            The Technologies That
            <br />
            Power Your{" "}
            <span className="tech-title-glow">
              Digital Growth
            </span>
          </h1>

          <p className="tech-hero-desc">
            We don't just write code. We select high-performance,
            secure, and modern frameworks to ensure your website
            is lightning fast, ultra-secure, and ready to scale.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="tech-hero-right">

          {/* TECHNOLOGY BUBBLES */}

          <div className="language-cluster-ring">

            <div
              className="fly-item bubble-1"
              style={{
                backgroundColor: "#18a9c7",
                color: "white",
              }}
            >
              REACT
            </div>

            <div
              className="fly-item bubble-2"
              style={{
                backgroundColor: "#2f7d32",
                color: "white",
              }}
            >
              NODE
            </div>

            <div
              className="fly-item bubble-3"
              style={{
                backgroundColor: "#f4511e",
                color: "white",
              }}
            >
              HTML
            </div>

            <div
              className="fly-item bubble-4"
              style={{
                backgroundColor: "#ffd51f",
                color: "#111827",
              }}
            >
              JS
            </div>

            <div
              className="fly-item bubble-5"
              style={{
                backgroundColor: "#219ebc",
                color: "white",
              }}
            >
              TAILWIND
            </div>

            <div
              className="fly-item bubble-6"
              style={{
                backgroundColor: "#388e3c",
                color: "white",
              }}
            >
              MONGO
            </div>

            <div
              className="fly-item bubble-7"
              style={{
                backgroundColor: "#315f8c",
                color: "white",
              }}
            >
              PYTHON
            </div>

            <div
              className="fly-item bubble-8"
              style={{
                backgroundColor: "#1565a6",
                color: "white",
              }}
            >
              CSS
            </div>

          </div>


          {/* DEVELOPER AVATAR */}

          <div className="developer-workspace-avatar scale-up-avatar">

            {/* MONITOR */}

            <div className="vector-monitor">

              <div className="monitor-screen-lines">

                <div
                  className="code-line-mock"
                  style={{
                    width: "75%",
                    backgroundColor: "#facc15",
                  }}
                ></div>

                <div
                  className="code-line-mock"
                  style={{
                    width: "95%",
                    backgroundColor: "#38bdf8",
                  }}
                ></div>

                <div
                  className="code-line-mock"
                  style={{
                    width: "55%",
                    backgroundColor: "#22c55e",
                  }}
                ></div>

              </div>

            </div>


            {/* PERSON */}

            <div className="vector-developer-back">

              <div className="dev-head-circle"></div>

              <div className="dev-shoulders-curve"></div>

            </div>


            {/* TABLE */}

            <div className="vector-desk-plank">

              <div className="desk-lamp-item"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ECOSYSTEM SECTION
      ===================================================== */}

      <section className="tech-ecosystem-section">


        {/* SECTION HEADER */}

        <div className="tech-section-header">

          <span className="tech-sub-badge">
            OUR CORE TECHNOLOGIES
          </span>

          <h2>
            Technologies That Power Our Solutions
          </h2>

          <p>
            We use a modern tech stack to design, develop and
            deliver impactful digital experiences.
          </p>

        </div>


        {/* =====================================================
            CATEGORY CARDS
        ===================================================== */}

        <div className="tech-categories-grid">


          {/* FRONTEND */}

          <div className="tech-cat-card">

            <div className="tech-cat-icon icon-teal">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
              </svg>

            </div>

            <h3>
              Frontend Development
            </h3>

            <p>
              Building responsive, interactive and beautiful
              user interfaces.
            </p>

            <div className="tech-tag-group">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>


          {/* BACKEND */}

          <div className="tech-cat-card">

            <div className="tech-cat-icon icon-purple">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="8"
                  rx="2"
                />
                <rect
                  x="2"
                  y="14"
                  width="20"
                  height="8"
                  rx="2"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="6.01"
                  y2="6"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="6.01"
                  y2="18"
                />
              </svg>

            </div>

            <h3>
              Backend Development
            </h3>

            <p>
              Creating robust APIs and server-side logic for
              powerful applications.
            </p>

            <div className="tech-tag-group">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST API</span>
            </div>

          </div>


          {/* DATABASE */}

          <div className="tech-cat-card">

            <div className="tech-cat-icon icon-green">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <ellipse
                  cx="12"
                  cy="5"
                  rx="9"
                  ry="3"
                />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
              </svg>

            </div>

            <h3>
              Database & Storage
            </h3>

            <p>
              Storing, managing and retrieving data securely
              and efficiently.
            </p>

            <div className="tech-tag-group">
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Firebase</span>
            </div>

          </div>


          {/* CLOUD */}

          <div className="tech-cat-card">

            <div className="tech-cat-icon icon-blue">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>

            </div>

            <h3>
              Cloud & Deployment
            </h3>

            <p>
              Hosting, deployment and version control for
              seamless delivery.
            </p>

            <div className="tech-tag-group">
              <span>GitHub</span>
              <span>Vercel</span>
              <span>Cloudinary</span>
            </div>

          </div>

        </div>


        {/* =====================================================
            WHY OUR TECH STACK
        ===================================================== */}

        <div className="tech-section-header margin-top-xl">

          <span className="tech-sub-badge badge-cyan">
            WHY OUR TECH STACK?
          </span>

          <h2>
            Built for Performance, Scalability & Success
          </h2>

        </div>


        {/* BENEFITS */}

        <div className="tech-features-benefits-grid">


          <div className="tech-benefit-item">

            <div className="benefit-icon cyan-text">
              ⚡
            </div>

            <div className="benefit-content">

              <h4>
                Fast Performance
              </h4>

              <p>
                Optimized technologies for speed and smooth
                user experience.
              </p>

            </div>

          </div>


          <div className="tech-benefit-item">

            <div className="benefit-icon teal-text">
              🛡️
            </div>

            <div className="benefit-content">

              <h4>
                Secure Solutions
              </h4>

              <p>
                We follow best security practices to protect
                your data.
              </p>

            </div>

          </div>


          <div className="tech-benefit-item">

            <div className="benefit-icon blue-text">
              📈
            </div>

            <div className="benefit-content">

              <h4>
                Easy to Scale
              </h4>

              <p>
                Our stack grows with your business without
                limitations.
              </p>

            </div>

          </div>


          <div className="tech-benefit-item">

            <div className="benefit-icon green-text">
              💻
            </div>

            <div className="benefit-content">

              <h4>
                Modern Technologies
              </h4>

              <p>
                We use the latest tools to stay ahead in the
                digital world.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            TECHNOLOGY WE USE
        ===================================================== */}

        <div className="tech-section-header margin-top-xl">

          <span className="tech-sub-badge badge-blue">
            TECHNOLOGY WE USE
          </span>

          <h2>
            Tools & Technologies We Work With
          </h2>

        </div>


        {/* TECHNOLOGY LOGOS */}

        <div className="tech-logo-row-container">

          <div className="tech-logo-card">
            <span>React</span>
          </div>

          <div className="tech-logo-card">
            <span>JS</span>
          </div>

          <div className="tech-logo-card">
            <span>Node</span>
          </div>

          <div className="tech-logo-card">
            <span>Express</span>
          </div>

          <div className="tech-logo-card">
            <span>MongoDB</span>
          </div>

          <div className="tech-logo-card">
            <span>MySQL</span>
          </div>

          <div className="tech-logo-card">
            <span>GitHub</span>
          </div>

          <div className="tech-logo-card">
            <span>Vercel</span>
          </div>

          <div className="tech-logo-card">
            <span>HTML</span>
          </div>

          <div className="tech-logo-card">
            <span>CSS</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default TechStack;