import "./project.css";
function Project() {
  return (
    <div className="projectContainer" id="project">
      <div className="pokemon">
        <h3>Pokemon API</h3>
        <a
          href="https://deeptisaxenarai.github.io/Pokemon-app/"
          target="_blank"
        >
          <img src="src/assets/image/Pokemon.jpg" alt="Pokemone API" />
        </a>
      </div>
      <div className="parallexSite">
        <h3>Parallex Website</h3>
        <a
          href="https://deeptisaxenarai.github.io/Assingment-Parallexwebsite/"
          target="_blank"
        >
          <img src="src/assets/image/parallex.png" alt="About India culture" />
        </a>
      </div>
      <div className="animation">
        <h3>CSS Animation</h3>
        <a
          href="https://deeptisaxenarai.github.io/Animation-assignment/"
          target="_blank"
        >
          <img src="src/assets/image/HTML.png" alt="Animation through CSS" />
        </a>
      </div>
      <div className="design">
        <h3>Design</h3>
        <a href="https://deeptisaxenarai.github.io/Task-3/" target="_blank">
          <img src="src/assets/image/design.png" alt="Bread Basket Website" />
        </a>
      </div>
      <div className="juleTask">
        <h3>Christmas Wish List</h3>
        <a
          href="https://deeptisaxenarai.github.io/JuleOppgave/"
          target="_blank"
        >
          <img src="src/assets/image/wish-list.png" alt="Wish list" />
        </a>
      </div>
    </div>
  );
}
export default Project;
