import "../components/Contact/Contact.css";

import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUser,
  FaPen,
  FaArrowRight,
} from "react-icons/fa";
import "../components/Contact/Contact.css";


function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`contact-section ${visible ? "contact-visible" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-label">
            <span></span>
            CONTACT US
          </span>

          <h2>
            Let's Talk About
            <br />
            <span>Your Project</span>
          </h2>

          <p className="contact-description">
            Have an idea, question, or project in mind? We'd love to
            hear from you. Reach out and we'll get back to you as soon
            as possible.
          </p>

          {/* Contact Cards */}
          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>info@webcoding.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+123 456 7890</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>
                  123 Tech Street,
                  <br />
                  Digital City, PK
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-wrapper">

          <form className="contact-form">

            <div className="form-row">

              <div className="input-box">
                <FaUser />

                <input
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="input-box">
                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Your Email"
                />
              </div>

            </div>


            <div className="input-box">
              <FaPen />

              <input
                type="text"
                placeholder="Subject"
              />
            </div>


            <div className="textarea-box">
              <FaPen />

              <textarea
                placeholder="Your Message"
              ></textarea>
            </div>


            <button type="submit" className="contact-button">
              <span>Send Message</span>
              <FaArrowRight />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;