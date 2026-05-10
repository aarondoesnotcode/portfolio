import experienceImage from "../assets/experience-bg.jpeg";
import hackathonPhoto from "../assets/experience-hackathon.jpeg";
import ethixbaseLogo from "../assets/logos/ethixbase.png";
import infosysLogo from "../assets/logos/infosys.png";
import azeekLogo from "../assets/logos/azeek.png";
import sidequestLogo from "../assets/logos/sidequestmaxx.png";
import SplitSection from "./SplitSection.jsx";
import "./Experience.css";

function ExperienceOutboundLink({ href, platform }) {
  const isLinkedIn = platform === "linkedin";
  const label = isLinkedIn ? "LinkedIn" : "TikTok";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`experience-item__link experience-item__link--${platform}`}
      aria-label={`${label} — opens in new tab`}
    >
      {isLinkedIn ? (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07s.93-2.07 2.06-2.07c1.14 0 2.06.93 2.06 2.07s-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.27z" />
        </svg>
      )}
      <span>{label}</span>
    </a>
  );
}

function ExperienceLogo({ company, logo, logoPlain }) {
  if (logo) {
    return (
      <div
        className={[
          "experience-item__logo",
          "experience-item__logo--image",
          logoPlain ? "experience-item__logo--image-plain" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
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
      linkUrl:
        "https://www.linkedin.com/posts/aaron-parwany_im-excited-to-announce-that-ive-joined-activity-7360585711550373889-XDTg",
      linkPlatform: "linkedin",
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
      linkUrl:
        "https://www.linkedin.com/posts/aaron-parwany_thrilled-to-share-that-ive-officially-completed-activity-7360331635147296768-cU9C",
      linkPlatform: "linkedin",
    },
    {
      id: 3,
      logo: azeekLogo,
      logoPlain: true,
      company: "Azeek Revision",
      role: "Founder & Tutor",
      type: "Self-employed",
      dates: "Sep 2023 – May 2026",
      bullets: [
        "Provided personalised tutoring in computer science to 10+ students, enhancing their exam performance",
        "Produced engaging content on social media, achieving 200k+ views to promote tutoring services and share study tips",
        "Created and managed a social network community of over 400 members, fostering a supportive learning environment",
      ],
      linkUrl: "https://www.tiktok.com/@azeekrevision",
      linkPlatform: "tiktok",
    },
    {
      id: 4,
      logo: sidequestLogo,
      logoPlain: true,
      company: "Sidequestmaxx",
      role: "Social Media Creator",
      type: "Self-employed",
      dates: "Sep 2023 – May 2026",
      bullets: [
        "Produced engaging and educational content, collecting over 100k+ views",
        "Partnered with brands like TrainPal and Amber",
      ],
      linkUrl: "https://www.tiktok.com/@sidequestmaxx",
      linkPlatform: "tiktok",
    },
  ];

  return (
    <SplitSection
      id="experience"
      className="split-section--compact"
      image={experienceImage}
      imageAlt=""
      secondaryImage={hackathonPhoto}
      secondaryAlt="Infosys–Google AI Hackathon — team with certificates, London"
    >
      <div className="experience">
        <h2>Experience</h2>
        <ul className="experience-list">
          {experiences.map(
            ({
              id,
              logo,
              logoPlain,
              company,
              role,
              type,
              dates,
              bullets,
              tools,
              linkUrl,
              linkPlatform,
            }) => (
              <li key={id} className="experience-item">
                <ExperienceLogo
                  company={company}
                  logo={logo}
                  logoPlain={logoPlain}
                />
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
                  {linkUrl && linkPlatform ? (
                    <ExperienceOutboundLink
                      href={linkUrl}
                      platform={linkPlatform}
                    />
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
