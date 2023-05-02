import { Link } from "react-router-dom";
import projects from "../data";
import { useEffect, useRef } from "react";

const Projects = () => {
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
    <section ref={h3Ref} className="project-section">
      <div className="projects-center">
        <div className="projects">
          <div className="project-title">
            <h2>Projects</h2>
          </div>
          <div className="project">
            <img src="" className="project-img"></img>
            <button>Project 1</button>
          </div>
          <div className="project">
            <img src="" className="project-img"></img>
            <button>Project 2</button>
          </div>
          <div className="project">
            <img src="" className="project-img"></img>
            <button>Project 3</button>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="about-btn">
        Back To Top
      </button>
    </section>
  );
};

export default Projects;
