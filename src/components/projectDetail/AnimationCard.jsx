import "./cardStyle.css";
import HTML from "../../assets/image/project-img/animation.png";
function AnimationCard() {
  return (
    <div className="PCardContainer">
      <img src={HTML} alt="HTML animation" className="PImage" />
      <div className="Pdisc">
        <h3 className="Pheading">HTML</h3>
        <p className="Pdetail">
          This is an animation site which I create in HTML and advance CSS. It
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
