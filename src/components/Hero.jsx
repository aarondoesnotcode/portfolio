import "./Hero.css";

function Hero() {
  const role = "associate software engineer intern";
  return (
    <header className="hero">
      <h1>Aaron Parwany</h1>
      <p>I am a {role}</p>
    </header>
  );
}

export default Hero;
