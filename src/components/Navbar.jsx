import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme.js";
import "./Navbar.css";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";
  return (
    <button
      type="button"
      className="navbar-theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {isLight ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )}
    </button>
  );
}

function sectionLinkClass({ isActive }) {
  return ["navbar-section-link", isActive ? "is-active" : ""]
    .filter(Boolean)
    .join(" ");
}

function Navbar() {
  const location = useLocation();
  const isOnDarkRoute = location.pathname.startsWith("/sidequest");

  return (
    <nav className={`navbar ${isOnDarkRoute ? "navbar--on-dark" : ""}`.trim()}>
      <Link to="/" className="navbar-brand">
        Aaron Parwany
      </Link>

      <ul className="navbar-sections">
        <li>
          <NavLink to="/about" className={sectionLinkClass}>
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={sectionLinkClass}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={sectionLinkClass}>
            Projects
          </NavLink>
        </li>
        <li>
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
        </li>
        <li className="navbar-sections__toggle">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
