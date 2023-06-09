import "./cardStyle.css";
import Design from "../../assets/image/project-img/design.png";
function DesignCard() {
  return (
    <div className="ProjectCardContainer">
      <img src={Design} className="cardImage" alt="design site" />
      <div className="cardDescription">
        <h3 className="cardHeading">Bread Basket</h3>
        <p className="cardDetail">
          This is an online bakery shopping site with express delivery in
          particular areas of Bergen city. Video content in this site is taken
          from Bread Basket bakery advertisement.
          {/* This video was added in the */}
          {/* website using HTML and CSS codes. */}
        </p>
        <div className="projectLink">
          <a
            href="https://deeptisaxenarai.github.io/Bread-Basket-shop/"
            id="website"
          >
            Website
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai/Bread-Basket-shop.git"
            id="github"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default DesignCard;
