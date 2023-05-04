import "./project.css";
import pokemon from "../../assets/image/project-img/Pokemon.jpg";
import parallex from "../../assets/image/project-img/parallex.png";
import animation from "../../assets/image/project-img/HTML.png";
import design from "../../assets/image/project-img/design.png";
import juleoppgave from "../../assets/image/project-img/wish-list.png";

function Project() {
  return (
    <main className="main" id="project">
      {/* <div className="mainProjectContainer glow"> */}
      <div className="mainProjectContainer">
        {/* <div className="heading"> */}
        <h1>PROJECTS</h1>
        {/* </div> */}
        <div className="ProjectContainer">
          <div className="projects">
            <h4>API</h4>
            <a
              href="https://deeptisaxenarai.github.io/Pokemon-app/"
              target="_blank"
            >
              <img src={pokemon} alt="Pokemone API" />
            </a>
          </div>
          <div className="projects">
            <h4>Parallex </h4>
            <a
              href="https://deeptisaxenarai.github.io/Assingment-Parallexwebsite/"
              target="_blank"
            >
              <img src={parallex} alt="About India culture" />
            </a>
          </div>
          <div className="projects">
            <h4>Animation</h4>
            <a
              href="https://deeptisaxenarai.github.io/Animation-assignment/"
              target="_blank"
            >
              <img src={animation} alt="Animation through CSS" />
            </a>
          </div>
          <div className="projects">
            <h4>Design</h4>
            <a href="https://deeptisaxenarai.github.io/Task-3/" target="_blank">
              <img src={design} alt="Bread Basket Website" />
            </a>
          </div>
          <div className="projects">
            <h4>Assignment</h4>
            <a
              href="https://deeptisaxenarai.github.io/JuleOppgave/"
              target="_blank"
            >
              <img src={juleoppgave} alt="Wish list" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Project;
