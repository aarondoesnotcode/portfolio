import bgImage from "../assets/sidequest-bg.jpeg";
import portraitImage from "../assets/sidequest-portrait.png";
import appMockup from "../assets/sidequest-app-mockup.jpg";
import "./Sidequest.css";

function Sidequest() {
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
        <h1 className="sidequest-title">Sidequestmaxx</h1>

        <div className="sidequest-about">
          <div className="sidequest-about__left">
            <figure className="sidequest-portrait">
              <img
                src={portraitImage}
                alt="Aaron outdoors with autumn mountains in the background"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="sidequest-about__text">
              <p className="sidequest-about__lead">I try to do everything.</p>
              <p className="sidequest-about__sub">
                From coding, to bouldering, to hiking&hellip;
              </p>

              <div className="sidequest-contact">
                <a
                  href="https://www.tiktok.com/@sidequestmaxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidequest-iconlink sidequest-iconlink--tiktok"
                  aria-label="TikTok @sidequestmaxx — opens in new tab"
                  title="TikTok"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.27z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/sidequestmaxx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidequest-iconlink sidequest-iconlink--instagram"
                  aria-label="Instagram @sidequestmaxx — opens in new tab"
                  title="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="mailto:sidequestmaxx@gmail.com"
                  className="sidequest-contact-cta"
                  aria-label="Email sidequestmaxx@gmail.com"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  <span>Contact me</span>
                </a>
              </div>
            </div>
          </div>

          <div className="sidequest-about__right">
            <p className="sidequest-mapnote">
              Sidequests for a more fulfilled London&hellip; coming soon.
            </p>
            <figure className="sidequest-preview">
              <img
                src={appMockup}
                alt="Sidequestmaxx app mockup: map of London with activity pins, search, filters, and event cards"
                className="sidequest-preview__img"
                width={1024}
                height={746}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidequest;
