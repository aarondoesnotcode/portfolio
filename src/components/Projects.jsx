import projectsBg from "../assets/projects-bg.jpeg";
import projectsExtra1 from "../assets/projects-extra-1.jpeg";
import projectsExtra2 from "../assets/projects-extra-2.jpeg";
import infosysBronzePhoto from "../assets/experience-hackathon.jpeg";
import projectMortgageAdvisor from "../assets/project-mortgage-advisor.png";
import projectLogisticRegression from "../assets/project-logistic-regression.png";
import projectPaycept from "../assets/project-paycept.png";
import projectDisasterIo from "../assets/project-disaster-io.png";
import projectDocExplain from "../assets/project-docexplain.png";
import projectCareCommit from "../assets/project-carecommit.png";
import "./Projects.css";

function ProjectLinks({ linkedin, github, website }) {
  const entries = [];
  if (linkedin) {
    entries.push({
      key: "linkedin",
      href: linkedin,
      label: "LinkedIn",
      classSuffix: "linkedin",
      icon: (
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
      ),
    });
  }
  if (github) {
    entries.push({
      key: "github",
      href: github,
      label: "GitHub",
      classSuffix: "github",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    });
  }
  if (website) {
    entries.push({
      key: "website",
      href: website,
      label: "Live site",
      classSuffix: "website",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    });
  }

  if (!entries.length) return null;

  return (
    <div className="projects-card__links">
      {entries.map(({ key, href, label, classSuffix, icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`projects-card__link projects-card__link--${classSuffix}`}
          aria-label={`${label} — opens in new tab`}
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

function ProjectCardCover({ project }) {
  if (project.image) {
    return (
      <div className="projects-card__cover projects-card__cover--photo">
        <img
          src={project.image}
          alt={project.imageAlt ?? ""}
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  const initials = project.title
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`projects-card__cover projects-card__cover--gradient projects-card__cover--${project.gradient ?? "slate"}`}
      aria-hidden="true"
    >
      <span className="projects-card__cover-mark">{initials}</span>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mortgage advisor",
      subtitle: "Google · Infosys AI Hackathon",
      tools:
        "Python, Streamlit, GCP, FastAPI, CrewAI, Pandas, Scikit-learn, NumPy, Joblib",
      summary:
        "Secured 3rd place out of 15+ teams by leading a team of 3 to build an AI-enabled mortgage advisor prototype. Deployed a credit risk assessment ML model leveraging real-world financial data to predict default likelihood. Automated underwriting workflows using AI agents, delivering preliminary insights within 5 minutes. Designed an interactive Streamlit interface to present real-time mortgage insights.",
      image: projectMortgageAdvisor,
      imageAlt:
        "Virtual Mortgage Advisor app welcome screen with Start Application button",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/aaron-parwany_thrilled-to-announce-that-my-intern-only-activity-7348362926509936642-USAa",
      },
    },
    {
      id: 2,
      title: "Logistic regression model",
      subtitle: "Side project",
      summary:
        "A machine learning model, trained and tested on data to predict whether a user has heart disease or not.",
      image: projectLogisticRegression,
      imageAlt:
        "Terminal output with confusion matrix, classification report, accuracy, ROC-AUC, and F1 score",
      links: {
        github: "https://github.com/aarondoesnotcode/logistic-regression-model",
      },
    },
    {
      id: 3,
      title: "DocExplain",
      subtitle: "Global AI Hacktour Hackathon",
      summary:
        "An application that allows users to upload UK documents, uses OCR to extract and understand the content, and then breaks everything down into clear, simple explanations. It also highlights key actions and deadlines, and helps generate appeal letters with the right links and guidance.",
      image: projectDocExplain,
      imageAlt:
        "DocExplain landing page with headline and document upload area",
      links: {
        linkedin:
          "https://www.linkedin.com/feed/update/urn:li:activity:7453034953857994752/",
        github: "https://github.com/aarondoesnotcode/DocExplain",
        website: "https://docexplain.vercel.app/",
      },
    },
    {
      id: 4,
      title: "Paycept",
      subtitle: "Cursor x Briefcase hackathon",
      summary:
        "A financial agent designed to process invoices before payment. It intercepts incoming invoices, runs multiple guard layers to detect suspicious activity, and determines when automation is safe versus when human approval is necessary.",
      image: projectPaycept,
      imageAlt:
        "Paycept landing page showing autonomous AP agent and invoice workflow",
      links: {
        linkedin:
          "https://www.linkedin.com/feed/update/urn:li:activity:7457383683533008896/",
        github: "https://github.com/aarondoesnotcode/paycept",
      },
    },
    {
      id: 5,
      title: "Disaster.io",
      subtitle: "MongoDB Agentic Evolution Hackathon",
      summary:
        "During crises like floods, storms, power outages, responders need to make rapid decisions with incomplete and changing information. Our system uses specialised AI agents to assess incoming requests, track available resources, prioritise urgent cases, plan routes and continuously adapt when conditions change.",
      image: projectDisasterIo,
      imageAlt:
        "Disaster.io landing page with scenario selection for emergency response",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/aaron-parwany_another-two-hackathons-last-week-two-more-activity-7457383683533008896-clWg",
        github: "https://github.com/AjaySoll/disaster.io",
      },
    },
    {
      id: 6,
      title: "CareCommit",
      subtitle: "Cursor x Whitecircle hackathon",
      summary:
        "An AI code review tool that analyses real GitHub commits, surfaces bugs, highlights security risks and suggests actionable fixes. To top it off, we integrated WhiteCircle as a guardrail layer to keep reviews compliant and safe.",
      image: projectCareCommit,
      imageAlt:
        "CareCommit landing page for AI-powered GitHub commit review",
      links: {
        linkedin:
          "https://www.linkedin.com/posts/aaron-parwany_last-week-i-jumped-back-into-the-hackathon-activity-7448278762527444992-Q9r_",
        github: "https://github.com/aarondoesnotcode/CareCommit",
      },
    },
  ];

  const gallery = [
    {
      src: infosysBronzePhoto,
      alt: "Team holding bronze certificates after placing 3rd at the Infosys × Google AI Hackathon, London",
      caption: "Infosys × Google AI Hackathon · Infosys Technologies",
    },
    {
      src: projectsBg,
      alt: "Hackathon team presenting their project to judges",
      caption: "Global AI Hacktour · UCL",
    },
    {
      src: projectsExtra2,
      alt: "Participants gathered around a demo screen at halkin offices",
      caption: "Cursor x Briefcase · Halkin Offices",
    },
    {
      src: projectsExtra1,
      alt: "Developers working on laptops during the Cursor × White Circle hackathon at the Halkin offices",
      caption: "Cursor × White Circle · Halkin Offices",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__inner">
        <h2 className="projects-section__title">Projects</h2>
        <div className="projects-section__layout">
          <ul className="projects-grid">
            {projects.map((project) => (
              <li key={project.id} className="projects-card">
                <ProjectCardCover project={project} />
                <div className="projects-card__body">
                  <h3>{project.title}</h3>
                  {project.subtitle ? (
                    <p className="projects-card__subtitle">
                      {project.subtitle}
                    </p>
                  ) : null}
                  {project.tools ? (
                    <p className="projects-card__tools">
                      <span>Stack:</span> {project.tools}
                    </p>
                  ) : null}
                  <p className="projects-card__summary">{project.summary}</p>
                  {project.links ? <ProjectLinks {...project.links} /> : null}
                </div>
              </li>
            ))}
          </ul>
          <aside className="projects-gallery" aria-label="Hackathon scenes">
            <p className="projects-gallery__label">Highlights</p>
            <ul className="projects-gallery__list">
              {gallery.map((photo) => (
                <li key={photo.src} className="projects-gallery__item">
                  <figure>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Projects;
