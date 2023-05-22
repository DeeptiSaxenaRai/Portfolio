import "./skill.css";
import { TagCloud as TagCloudBase } from "@frank-mayer/react-tag-cloud";

function Skill() {
  return (
    <main className="main" id="skill">
      <div className="skillContainer">
        <h1>SKILLS</h1>

        <TagCloudBase
          className="tagcloud"
          options={(window) => ({
            radius: Math.min(300, window.innerWidth, window.innerHeight) / 2,
            maxSpeed: "slow",
          })}
          onClick={(tag) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "NodeJS",
            "Git",
            "GitHub",
            "Figma",
            "SQL",
            "MongoDB",
            "Visual Studio",
            "C#",
            "ASP.Net",
          ]}
        </TagCloudBase>
      </div>
    </main>
  );
}
export default Skill;
