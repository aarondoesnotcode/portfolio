import aboutImage from "../assets/about-bg.jpeg";
import SplitSection from "./SplitSection.jsx";
import "./About.css";

function About({ bio }) {
  return (
    <SplitSection id="about" image={aboutImage} reverse>
      <div className="about">
        <h2>About Me</h2>
        <p>{bio}</p>
      </div>
    </SplitSection>
  );
}

export default About;
