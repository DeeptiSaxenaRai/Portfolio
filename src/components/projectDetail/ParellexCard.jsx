import "./cardStyle.css";
import Parallex from "../../assets/image/project-img/parallex.png";
function ParellexCard() {
  return (
    <div className="PCardContainer">
      <img src={Parallex} className="PImage" alt="parallex site" />
      <div className="Pdisc">
        <h3 className="Pheading">Parellex</h3>
        <p className="Pdetail">
          Using HTML and CSS, I create this parallax website with a slide effect
          to show our India culture and famous historical places. It creates an
          illusion when user scroll the elements at different speeds.
        </p>
        <div className="projectLink">
          <a
            href="https://deeptisaxenarai.github.io/Assingment-Parallexwebsite/"
            id="website"
          >
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/Assingment-Parallexwebsite.git"
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
