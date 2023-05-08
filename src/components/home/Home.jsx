import "./home.css";
import arrow from "../../assets/image/down-arrow-icon.png";

function Home() {
  return (
    <div className="homeContainer" id="home">
      <h2 className="heading">Hi I'm</h2>
      <h1 className="mainHeading">DEEPTI SAXENA</h1>
      <h2 className="heading">Frontend Developer</h2>
      <img src={arrow} />
    </div>
  );
}
export default Home;
