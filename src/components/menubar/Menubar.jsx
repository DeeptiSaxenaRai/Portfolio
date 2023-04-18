import { Component } from "react";
import "./menubar.css";

class Menubar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav>
        <img src="./src/assets/image/new-logo.png" />
        <div>
          <ul
            id="navMenu"
            className={this.state.clicked ? "#navMenu active" : "#navMenu"}
          >
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times " : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}
export default Menubar;
