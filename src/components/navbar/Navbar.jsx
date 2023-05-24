import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import mainLogo from "../../assets/image/deepti-logo.png";
import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  function menuOpen() {
    setMobile((mobileOpen) => !mobileOpen);
  }

  return (
    <nav className="navbar">
      <img className="navLogo" src={mainLogo} />
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={menuOpen}
      >
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={menuOpen}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={menuOpen}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={menuOpen}
          >
            Project
          </Link>
        </li>
        {/* <li>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={menuOpen}
          >
            Skill
          </Link>
        </li> */}
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            onClick={menuOpen}
          >
            Contact
          </Link>
        </li>

        {/* <a className="active" href="#home">
          <li>Home</li>
        </a>
        <a className="active" href="#about">
          <li>About</li>
        </a>
        <a className="active" href="#project">
          <li>Project</li>
        </a>
        <a className="active" href="#skill">
          <li>Skills</li>
        </a>

        <a className="active" href="#contact">
          <li>Contact</li>
        </a> */}
      </ul>
      <button className="mobile-menu-icon" onClick={menuOpen}>
        {Mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
export default Navbar;
