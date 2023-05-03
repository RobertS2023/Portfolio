import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Robbie from "../images/Robbie.JPG";
import about from "../images/about.jpg";
import ShowModal from "../pages/showModal";

const Home = () => {
  const [show, setShow] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(true);
  const h2Ref = useRef(null);

  const handleClick = () => {
    window.scrollTo(0, h2Ref.current.offsetTop);
  };
  useEffect(() => {
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
  return (
    <>
      <section ref={h2Ref} className="home-section">
        <div className="home-center">
          <div>
            <h2 className="home-title">Robert Sexton</h2>
          </div>
          <div>
            <img src={Robbie} alt="Robert Sexton" className="home-img"></img>
          </div>
        </div>
        <div className="about-home">
          <div className="home-about-info">
            <div className="home-about-info-center">
              <img
                src={about}
                alt="Robert Sexton"
                className="home-img about-img"
              ></img>
              <div className="home-about-info-title">
                <h4>A Brief Description About Me</h4>
              </div>
              <p>
                I am 20 year old college student who resides in Southern
                California. I am majoring in computer science learning multiple
                different programming languages. Currently my main programming
                languages include Javascript, C++, and the javascript framework
                React.js.
              </p>
            </div>
            <button
              className="more-info-btn"
              onClick={() => {
                setShow(!show);
                setBackToTopVisible(false);
              }}
            >
              more about info
              {show && <ShowModal setShow={setShow} />}
            </button>
          </div>
        </div>
        {backToTopVisible && (
          <button onClick={handleClick} className="about-btn">
            Back To Top
          </button>
        )}
      </section>
    </>
  );
};

export default Home;
