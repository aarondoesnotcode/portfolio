import "./About.css";

function About({ bio }) {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>{bio}</p>
    </section>
  );
}

export default About;
