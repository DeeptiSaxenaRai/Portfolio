import React from "react";
import Slider from "react-slick";
import SliderComp from "./SliderComp";
import "./project.css";

function Project() {
  return (
    <main className="main" id="project">
      <div className="mainProjectContainer">
        <h1>PROJECTS</h1>
        <div className="ProjectContainer">
          <slide>
            <SliderComp />
          </slide>
        </div>
      </div>
    </main>
  );
}
export default Project;
