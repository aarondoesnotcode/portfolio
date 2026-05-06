import "./Hero.css";

function Hero() {
  const role = "associate software engineer intern at ethixbase";
  return (
    <header className="hero">
      <h1>Aaron Parwany</h1>
      <p>I am a {role}</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/aaron-parwany-29abb12a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/aarondoesnotcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </header>
  );
}

export default Hero;
