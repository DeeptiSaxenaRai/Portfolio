import "./cardStyle.css";
import Design from "../../assets/image/project-img/design.png";
function DesignCard() {
  return (
    <div className="PCardContainer">
      <img src={Design} className="PImage" alt="design site" />
      <div className="Pdisc">
        <h3 className="Pheading">Bread Basket</h3>
        <p className="Pdetail">
          This is online bakery shopping site with express delivery in specific
          city and added our satisfy customer list. Using HTML and CSS, I added
          the video which I took from bakery site advertisment.
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
