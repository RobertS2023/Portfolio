import { useEffect, useRef } from "react";
import knox from "../images/knox.jpg";
import music from "../images/music.jpg";
import coding from "../images/coding.jpg";
import css from "../images/css.jpg";

const About = () => {
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
    <section ref={h3Ref} className="about section">
      <div className="about-center">
        <div className="about-title">
          <h3>A Little About Me</h3>
        </div>
        <div className="about-info">
          <div className="about-info-center">
            <img
              src={knox}
              alt="Robert Sexton"
              className="home-img about-img"
            ></img>
            <div className="about-info-title">
              <h4>My Background</h4>
            </div>
            <p>
              I am 21 years old and was born on April 23rd, 2002. I was born to
              a military family where we were constantly moving around. After my
              parents split, I moved to Southern California and grew up in the
              valley.
            </p>
          </div>
          <div className="about-info-center">
            <img
              src={music}
              alt="Robert Sexton"
              className="home-img about-img"
            ></img>
            <div className="about-info-title">
              <h4>What Made me chose this career path?</h4>
            </div>
            <p>
              I was an average student throughout grade school. Passing my
              classes with A's, B's, and rarely C's. In Sophmore Year of High
              School I joined Orchestra and learned to play the violin. I would
              be the graduating class of 2020 which hardly got a graduation.
              This would prompt me to want to pursue music production as a
              career. However, this would never come to fruition. I decided the
              more stable option for a career path would be computer
              programming.
            </p>
          </div>
          <div className="about-info-center">
            <img
              src={coding}
              alt="Robert Sexton"
              className="home-img about-img"
            ></img>
            <div className="about-info-title">
              <h4>My Skill Sets</h4>
            </div>
            <p>
              Programmers often times have their strengths and weaknesses. No
              one is perfect even professionals. I will list my strengths and
              weaknesses which will showcase how my work flow usually goes.
            </p>
            <p>
              A few strengths of mine include the ability to finish a product on
              time. Primarily because deadlines tend to stress me out so I
              ensure that a deadline will not affect my ability to work by
              simply making sure that I have properly planned out my work flow.
              This makes sure that I meet the deadline with additional time to
              work out potential bugs in my program. Another strength I possess
              is the ability to be observant, when working on a project a lot of
              programmers will shift into this tunnel vision as they are to
              focused on simply writing the code and not how the product may
              turn out. Another important strength I have is the ability to
              organize my code to be easier to find specific area in the code.
              This leads into another strength I possess which is the ability to
              debug, a common skill needed for all programmers is the ability to
              fix code that may be causing issues to the program.
            </p>
            <p>
              Although I possess quite a lot of strengths I am not perfect. A
              couple flaws I possess include the following: Easily getting burnt
              out on working on a project, only when I have been working on it
              for a long period of time. This is evident whenever I didn't
              properly get enough sleep the night before or simply don't have
              enough energy in the moment. A flaw that also coincides with the
              previous flaw is the fact that I will sometimes forget to write
              notes about what I was last working on in the program which takes
              time away from my work flow the following day.
            </p>
            <p>
              In conclusion, I posses quite a lot of different skill sets that
              make me valid as a hard working programmer. Multiple different
              strengths that make it so I know how to program efficiently,
              effectively, and on time. Despite having some flaws, my work ethic
              and skills allow me to be a proficient programmer.
            </p>
          </div>
        </div>
        <div className="about-info-center">
          <img
            src={css}
            alt="Robert Sexton"
            className="home-img about-img"
          ></img>
          <div className="about-info-title">
            <h4>Programming Languages</h4>
          </div>
          <p>
            There are multiple programming languages I am well accustomed to.
            The languages I have obtained the most knowledge in would be C++,
            Javascript, and React.js. Other languages I have some knowledge in
            would be Python, and C#.
          </p>
        </div>
      </div>

      <button onClick={handleClick} className="about-btn">
        Back To Top
      </button>
    </section>
  );
};
export default About;
