import bgImage from "../assets/sidequest-bg.jpeg";
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
        <div className="sidequest-intro">
          <span className="sidequest-status" aria-label="App in development, coming soon">
            App in development · Coming soon
          </span>
          <h2>Sidequestmaxx</h2>
          <p className="sidequest-tagline">
            Sidequests for a more fulfilled London
          </p>
          <div className="sidequest-contact">
            <a
              href="https://www.tiktok.com/@sidequestmaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="sidequest-link sidequest-link--tiktok"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.27z" />
              </svg>
              <span>@sidequestmaxx</span>
            </a>
            <a
              href="mailto:sidequestmaxx@gmail.com"
              className="sidequest-link sidequest-link--email"
            >
              sidequestmaxx@gmail.com
            </a>
          </div>
        </div>
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
    </section>
  );
}

export default Sidequest;
