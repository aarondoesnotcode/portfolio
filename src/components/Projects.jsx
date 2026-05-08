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
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        {myProjects.map(({ id, title, description }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
