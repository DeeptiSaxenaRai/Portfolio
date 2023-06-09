import "./cardStyle.css";
import HTML from "../../assets/image/project-img/animation.png";
function AnimationCard() {
  return (
    <div className="ProjectCardContainer">
      <img src={HTML} className="cardImage" alt="HTML animation" />
      <div className="cardDescription">
        <h3 className="cardHeading">HTML</h3>
        <p className="cardDetail">
          This is an animation site created by using HTML and advance CSS. It
          shows that using the CSS we can easily animate any object without
          using another tool.
        </p>
        <div className="projectLink">
          <a
            href="https://deeptisaxenarai.github.io/Animation-assignment/"
            id="website"
          >
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/Animation-assignment.git"
            id="github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default AnimationCard;
