import bgImage from "../assets/sidequest-bg.jpeg";
import "./Sidequest.css";

function Sidequest() {
  const sidequests = ["python", "java", "react"];
  return (
    <section id="sidequest" className="sidequest">
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="sidequest-bg"
        loading="eager"
        decoding="async"
      />
      <div className="sidequest-overlay" aria-hidden="true" />
      <div className="sidequest-inner">
        <h2>Sidequestmaxx</h2>
        <ul>
          {sidequests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sidequest;
