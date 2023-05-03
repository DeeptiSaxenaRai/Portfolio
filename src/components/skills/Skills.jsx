import "./skill.css";
// import { FaHtml5 } from "react-icons/fa";
function Skill() {
  return (
    <main className="main" id="skill">
      <div className="skillContainer">
        <h1>SKILLS</h1>
        <div className="frontendContainer">
          <h3>Frontend Skills</h3>
          <img src="./src/assets/image/html5.png" />
          <img src="./src/assets/image/css3.png" />
          <img src="./src/assets/image/javascript-logo.png" />
          <img src="./src/assets/image/react-logo.png" />
          <img src="./src/assets/image/figma-logo.png" />
        </div>
        <div className="backendContainer">
          <h3>Backend Skills</h3>
          <img src="./src/assets/image/sql-server.png" />
          <img src="./src/assets/image/node-js.png" />
          <img src="./src/assets/image/github-logo.png" />
          <img src="./src/assets/image/c-sharp-logo.png" />
          <img src="./src/assets/image/visual-studio.png" />
        </div>
      </div>
    </main>
  );
}
export default Skill;
