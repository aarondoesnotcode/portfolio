import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Aaron Parwany
      </Link>
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sidequest"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Sidequest
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
