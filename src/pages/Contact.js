import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import hire from "../images/hire.jpg";
const Contact = ({ setUser }) => {
  const [showContactList, setShowContactList] = useState(false);
  const navigate = useNavigate();
  const h3Ref = useRef(null);
  const handleClick = () => {
    window.scrollTo(0, h3Ref.current.offsetTop);
  };
  useEffect(() => {
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
  return (
    <section ref={h3Ref} className="contact section">
      <div className="contact-center">
        <div className="contact-hire">
          <div className="contact-hire-title">
            <h4>Why you should hire me</h4>
          </div>
          <img
            src={hire}
            alt="Robert Sexton"
            className="home-img about-img"
          ></img>
          <div className="hire-section">
            <h4 className="contact-title">My Skill Set</h4>
            <p>
              As stated on the about page, I am a deligent worker who knows how
              to manage my time to create programs, systems, and websites that
              are bug free and efficient.
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowContactList(!showContactList)}
          className="contact-btn"
        >
          {showContactList ? "Hide Contact List" : "Show Contact List"}
        </button>

        {showContactList && (
          <div className="contact-form">
            <div className="side-screen">
              <h3>Contact Information</h3>
              <div className="side-screen-center">
                <div>
                  <h4>Email:</h4>
                  Ionafirobertsexton@gmail.com
                </div>
                <div>
                  <h4>Phone:</h4>
                  +(951)-692-6650
                </div>
                <div>
                  <h4>Twitter:</h4>
                  <a href="https://twitter.com/BigRobCodes" target="_blank">
                    BigRobCodes
                  </a>
                </div>
                <div>
                  <h4>Instagram: </h4>
                  <a
                    href="https://www.instagram.com/itzbigrob/"
                    target="_blank"
                  >
                    itzbigrob
                  </a>
                </div>
                <div>
                  <h4>YouTube: </h4>
                  <a
                    href="https://www.youtube.com/@bigrproductions6527"
                    target="_blank"
                  >
                    BigRProductions
                  </a>
                </div>
              </div>
            </div>
            <h3>contact me</h3>
            <div class="form-group">
              <input
                type="text"
                placeholder="name"
                class="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                class="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                class="form-control"
                rows="5"
              ></textarea>
            </div>
          </div>
        )}
        <button onClick={handleClick} className="about-btn">
          Back To Top
        </button>
      </div>
    </section>
  );
};

export default Contact;
