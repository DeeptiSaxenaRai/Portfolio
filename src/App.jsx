import React from "react";
import Navbar from "./components/navbar/Navbar";
// import Menubar from "./components/menubar/Menubar";

import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Project from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Menubar /> */}
      <Home />
      <Project />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
