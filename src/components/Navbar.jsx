import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  /** Hash links alone fail when already on `/` with same hash but viewport scrolled away. */
  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${sectionId}` });
      return;
    }

    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (location.hash !== `#${sectionId}`) {
      navigate({ pathname: "/", hash: `#${sectionId}` }, { replace: true });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Aaron Parwany
      </Link>

      <div className="navbar-center">
        <NavLink
          to="/sidequest"
          className={({ isActive }) =>
            ["navbar-sidequest", isActive ? "is-active" : ""]
              .filter(Boolean)
              .join(" ")
          }
        >
          Sidequestmaxx
        </NavLink>
      </div>

      <ul className="navbar-sections">
        <li>
          <button
            type="button"
            className="navbar-section-link"
            onClick={() => goToSection("about")}
          >
            About me
          </button>
        </li>
        <li>
          <button
            type="button"
            className="navbar-section-link"
            onClick={() => goToSection("experience")}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            type="button"
            className="navbar-section-link"
            onClick={() => goToSection("projects")}
          >
            Projects
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
