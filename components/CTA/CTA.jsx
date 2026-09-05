import "./CTA.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";


function CTA() {
  const ctaRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`cta-section ${visible ? "cta-visible" : ""}`}
      ref={ctaRef}
    >

      <div className="cta-glow"></div>

      <div className="cta-container">

        {/* Icon */}
        <div className="cta-icon">
          <FaRocket />
        </div>


        {/* Text */}
        <div className="cta-content">

          <h2>
            Ready to Build
            <span> Something Amazing?</span>
          </h2>

          <p>
            Let's turn your ideas into a powerful digital
            experience that drives real results.
          </p>

        </div>


        {/* Button */}
        <Link to="/contact" className="cta-button">
          <span>Let's Work Together</span>
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
}

export default CTA;