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
          <NavLink
            to="/sidequest"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            Sidequestmaxx
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
