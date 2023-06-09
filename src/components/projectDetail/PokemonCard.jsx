import "./cardStyle.css";
import Pokemon from "../../assets/image/project-img/pokemon.png";

function PokemonCard() {
  return (
    <div className="ProjectCardContainer">
      <img src={Pokemon} className="cardImage" alt="pokemon pics" />
      <div className="cardDescription">
        <h3 className="cardHeading">API</h3>
        <p className="cardDetail">
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
