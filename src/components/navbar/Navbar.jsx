import style from "./navbar.module.css";
import { Component } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  // function clickBarMenu() {
  //   console.log("hi");
  //   setIsClick((clicked) => !clicked);
  // }
  render() {
    return (
      <nav className={style.container}>
        <img src="./src/assets/image/BigLogo.png" />
        {/* <div className="menu-icon" onClick={clickBarMenu}>
        <i className={setIsClick.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div> */}
        <div className={style.hamburger} onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={style.navMenu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      // </div>
    );
  }
}
export default Navbar;
