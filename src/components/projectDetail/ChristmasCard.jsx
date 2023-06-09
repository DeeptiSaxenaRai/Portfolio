import "./cardStyle.css";
import Wish from "../../assets/image/project-img/Jule-assingment.png";
function ChristmasCard() {
  return (
    <div className="ProjectCardContainer">
      <img src={Wish} className="cardImage" alt="Christmis site" />
      <div className="cardDescription">
        <h3 className="cardHeading">Christmas Project</h3>
        <p className="cardDetail">
          This website is made using JavaScript and CSS. It is a christmas
          project where customer can make or modify their own item wish list and
          store locally in their computer.
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
