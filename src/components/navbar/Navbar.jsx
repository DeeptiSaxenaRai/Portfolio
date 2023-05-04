import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import mainLogo from "/portfolio/src/assets/image/new-logo.png";
import mainLogo from "../../assets/image/new-logo.png";
import "./navbar.css";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  function menuOpen() {
    setMobile((mobileOpen) => !mobileOpen);
  }

  return (
    <nav className="navbar">
      {/* <img className="navLogo" src="./src/assets/image/new-logo.png" /> */}
      <img className="navLogo" src={mainLogo} />
      <ul
        className={Mobile ? "nav-links-mobile" : "nav-links"}
        onClick={menuOpen}
      >
        <a className="active" href="#home">
          <li>Home</li>
        </a>
        <a className="active" href="#project">
          <li>Project</li>
        </a>
        <a className="active" href="#skill">
          <li>Skills</li>
        </a>
        <a className="active" href="#about">
          <li>About</li>
        </a>
        <a className="active" href="/">
          <li>Contact</li>
        </a>
      </ul>
      <button className="mobile-menu-icon" onClick={menuOpen}>
        {Mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
export default Navbar;
