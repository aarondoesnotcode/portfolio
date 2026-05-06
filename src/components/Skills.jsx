import "./Skills.css";

function Skills() {
  const skills = ["python", "java", "react"];
  return (
    <section id="sections" className="skills">
      <h2>SKILLS</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}> {skill} </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
