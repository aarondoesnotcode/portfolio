import "./Experience.css";

function Experience() {
  const myExperience = [
    { id: 1, job: "Infosys", desc: "8 weeks at infosys" },
    { id: 2, job: "ethixbase", desc: "12 months at ethixbase" },
  ];
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <ul>
        {myExperience.map(({ id, job, desc }) => (
          <li key={id}>
            <h3>{job}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
