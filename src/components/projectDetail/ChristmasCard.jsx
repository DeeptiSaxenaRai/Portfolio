import "./cardStyle.css";
import Wish from "../../assets/image/project-img/Jule-assingment.png";
function ChristmasCard() {
  return (
    <div className="PCardContainer">
      <img src={Wish} className="PImage" alt="Christmis site" />
      <div className="Pdisc">
        <h3 className="Pheading">Christmas Project</h3>
        <p className="Pdetail">
          Using JavaScript and CSS, I make this Christmas site. In this site
          user can make own wish item list which user can store locally in
          computer and delete it.
        </p>
        <div className="projectLink">
          <a href="https://deeptisaxenarai.github.io/JuleOppgave/" id="website">
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/JuleOppgave.git"
            id="github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default ChristmasCard;
