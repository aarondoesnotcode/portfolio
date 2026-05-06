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
    <section className="projects">
      <h2>PROJECT SECTION</h2>
      <ul>
        {myProjects.map(({ id, title, description }) => (
          <li key={id}>
            {title} - {description}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
