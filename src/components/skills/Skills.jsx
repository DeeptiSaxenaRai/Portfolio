import "./skill.css";
import React, { useEffect } from "react";
import TagCloud from "TagCloud";

// import html from "../../assets/image/skill-img/html5.png";
// import css from "../../assets/image/skill-img/css3.png";
// import js from "../../assets/image/skill-img/javascript-logo.png";
// import reactlogo from "../../assets/image/skill-img/react-logo.png";
// import figma from "../../assets/image/skill-img/figma-logo.png";
// import sql from "../../assets/image/skill-img/sql-server.png";
// import nodejs from "../../assets/image/skill-img/node-js.png";
// import csharp from "../../assets/image/skill-img/c-sharp-logo.png";
// import vs from "../../assets/image/skill-img/visual-studio.png";
// import github from "../../assets/image/skill-img/github.png";

function Skill() {
  // Here is the new codes for 3d effect
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NodeJS",
        "GitHub",
        "Figma",
        "SQL",
        "MongoDB",
        "Visual Studio",
        "C#",
        ".Net",
      ];
      const options = {
        radius: 160,
        maxSpeed: "slow",
        initSpeed: "slow",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <main className="main" id="skill">
      <div className="skillContainer">
        <h1>SKILLS</h1>
        <div className="text-shpere">
          <span className="tagcloud"></span>
        </div>
        {/* <img src={html} />
        <img src={css} />
        <img src={js} />
        <img src={reactlogo} />
        <img src={figma} />
        <img src={sql} />
        <img src={nodejs} />
        <img src={csharp} />
        <img src={vs} /> */}
        {/* <img src={github} /> */}
      </div>
    </main>
  );
}
export default Skill;
