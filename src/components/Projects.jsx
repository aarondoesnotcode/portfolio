import projectsImage from "../assets/projects-bg.jpeg";
import SplitSection from "./SplitSection.jsx";
import "./Projects.css";

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "DocExplain",
      description: "Doc explaining for underserverd comm",
    },
    {
      id: 2,
      title: "Logistic regression model",
      description: "Predict default",
    },
  ];
  return (
    <SplitSection id="projects" image={projectsImage} reverse>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          {myProjects.map(({ id, title, description }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </SplitSection>
  );
}

export default Projects;
