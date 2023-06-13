import "./cardStyle.css";
import Parallex from "../../assets/image/project-img/parallex.png";
function ParellexCard() {
  return (
    <div className="ProjectCardContainer">
      <img src={Parallex} className="cardImage" alt="parallex site" />
      <div className="cardDescription">
        <h3 className="cardHeading">Parellex</h3>
        <p className="cardDetail">
          This parellex website creates an illusion when user scroll the
          elements at different speeds. This website provides information about
          Indian culture and famous historical places.
        </p>
        <div className="projectLink">
          <a
            href="https://deeptisaxenarai.github.io/Parallax-website/"
            id="website"
          >
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/Parallax-website.git"
            id="github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default ParellexCard;
