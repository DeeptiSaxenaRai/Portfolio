import "./cardStyle.css";
import Pokemon from "../../assets/image/project-img/pokemon.png";

function PokemonCard() {
  return (
    <div className="PCardContainer">
      <img src={Pokemon} className="PImage" alt="pokemon pics" />
      <div className="Pdisc">
        <h3 className="Pheading">API</h3>
        <p className="Pdetail">
          This project is based on API using javascript language. Specially
          design for pokemon fans that allows users to easily search and find
          any Pokemon featured in the game.
        </p>
        <div className="projectLink">
          <a href="https://deeptisaxenarai.github.io/Pokemon-app/" id="website">
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/Pokemon-app.git"
            id="github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default PokemonCard;
