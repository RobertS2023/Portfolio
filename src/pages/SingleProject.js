import { Link, useParams } from "react-router-dom";
import projects from "../data";
const SingleProject = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const { image, name } = project;
  return (
    <section className="section project">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/projects">back to projects</Link>
    </section>
  );
};

export default SingleProject;
