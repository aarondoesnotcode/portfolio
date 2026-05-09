import experienceImage from "../assets/experience-bg.jpeg";
import hackathonPhoto from "../assets/experience-hackathon.jpeg";
import ethixbaseLogo from "../assets/logos/ethixbase.png";
import infosysLogo from "../assets/logos/infosys.png";
import azeekLogo from "../assets/logos/azeek.png";
import sidequestLogo from "../assets/logos/sidequestmaxx.png";
import SplitSection from "./SplitSection.jsx";
import "./Experience.css";

function ExperienceLogo({ company, logo }) {
  if (logo) {
    return (
      <div className="experience-item__logo experience-item__logo--image">
        <img src={logo} alt={`${company} logo`} loading="lazy" />
      </div>
    );
  }
  return (
    <div className="experience-item__logo" aria-hidden="true">
      <span>{company.charAt(0).toUpperCase()}</span>
    </div>
  );
}

function Experience() {
  // To use real logos: drop a PNG into src/assets/logos/ then
  //   import infosysLogo from "../assets/logos/infosys.png"
  // and set `logo: infosysLogo` on the matching entry.
  const experiences = [
    {
      id: 1,
      logo: ethixbaseLogo,
      company: "Ethixbase360",
      role: "Associate Software Developer Intern",
      type: "Internship",
      dates: "Aug 2025 – Present",
      bullets: [
        "Enhanced client platform by developing Vue.js components and fixing bugs, improving user interface and experience",
        "Conducted rigorous QA testing on public APIs for key enterprise clients, ensuring reliability and functionality",
        "Performing platform feature demos to 100+ stakeholders, both US and EMEA teams",
        "Wrote comprehensive unit and feature tests with mocking to maintain high code quality",
      ],
      tools: "Vue.js, Jira, Laravel PHP, GitLab",
    },
    {
      id: 2,
      logo: infosysLogo,
      company: "Infosys",
      role: "Software Engineer Intern",
      type: "Internship",
      dates: "Jun 2025 – Aug 2025",
      bullets: [
        "Developed proof of concept applications with Streamlit and deployed them on GCP for scalability and real-time use",
        "Built and deployed AI agents to automate repetitive workflows, streamlining processes and reducing manual effort",
        "Trained a logistic regression model on 255k+ financial records, achieving 67% recall on underrepresented classes",
        "Delivered proof of concept demonstrations to 200+ stakeholders, integrating feedback and emphasising practicality",
      ],
      tools:
        "Streamlit, CrewAI, Scikit-learn, Pandas, NumPy, FastAPI, Git, GCP",
    },
    {
      id: 3,
      logo: azeekLogo,
      company: "Azeek Revision",
      role: "Founder & Tutor",
      type: "Self-employed",
      dates: "Sep 2023 – May 2026",
      bullets: [
        "Provided personalised tutoring in computer science to 10+ students, enhancing their exam performance",
        "Produced engaging content on social media, achieving 180k+ views to promote tutoring services and share study tips",
        "Created and managed a social network community of over 400 members, fostering a supportive learning environment",
      ],
    },
    {
      id: 4,
      logo: sidequestLogo,
      company: "Sidequestmaxx",
      role: "Social Media Creator",
      type: "Self-employed",
      dates: "Sep 2023 – May 2026",
      bullets: [
        "Produced engaging and educational content, collecting over 100k+ views",
        "Partnered with brands like TrainPal and Amber",
      ],
    },
  ];

  return (
    <SplitSection
      id="experience"
      image={experienceImage}
      imageAlt=""
      secondaryImage={hackathonPhoto}
      secondaryAlt="Infosys–Google AI Hackathon — team with certificates, London"
    >
      <div className="experience">
        <h2>Experience</h2>
        <ul className="experience-list">
          {experiences.map(
            ({ id, logo, company, role, type, dates, bullets, tools }) => (
              <li key={id} className="experience-item">
                <ExperienceLogo company={company} logo={logo} />
                <div className="experience-item__body">
                  <h3>{role}</h3>
                  <p className="experience-item__company">
                    {company} · {type}
                  </p>
                  <p className="experience-item__dates">{dates}</p>
                  <ul className="experience-item__bullets">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {tools ? (
                    <p className="experience-item__tools">
                      <span>Tools:</span> {tools}
                    </p>
                  ) : null}
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </SplitSection>
  );
}

export default Experience;
