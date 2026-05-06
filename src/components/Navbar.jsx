import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <strong>Aaron Parwany</strong>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
