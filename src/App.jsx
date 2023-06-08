import React from "react";
import Navbar from "./components/navbar/Navbar";
import Slider from "react-slick";

import Home from "./components/home/Home";
// import Skills from "./components/skills/Skills";
import Project from "./components/projectDetail/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
