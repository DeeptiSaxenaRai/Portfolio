import "./skill.css";
// frontend skills
import html from "../../assets/image/skill-img/html5.png";
import css from "../../assets/image/skill-img/css3.png";
import js from "../../assets/image/skill-img/javascript-logo.png";
import reactlogo from "../../assets/image/skill-img/react-logo.png";
import figma from "../../assets/image/skill-img/figma-logo.png";

// Backend Skills
import sql from "../../assets/image/skill-img/sql-server.png";
import nodejs from "../../assets/image/skill-img/node-js.png";
import github from "../../assets/image/skill-img/github.png";
import csharp from "../../assets/image/skill-img/c-sharp-logo.png";
import vs from "../../assets/image/skill-img/visual-studio.png";

// import { FaHtml5 } from "react-icons/fa";
function Skill() {
  return (
    <main className="main" id="skill">
      <div className="skillContainer">
        <h1>SKILLS</h1>
        <div className="frontendContainer">
          <h3>Frontend Skills</h3>
          <img src={html} />
          <img src={css} />
          <img src={js} />
          <img src={reactlogo} />
          <img src={figma} />
        </div>
        <div className="backendContainer">
          <h3>Backend Skills</h3>
          <img src={sql} />
          <img src={nodejs} />
          <img src={github} />
          <img src={csharp} />
          <img src={vs} />
        </div>
      </div>
    </main>
  );
}
export default Skill;
