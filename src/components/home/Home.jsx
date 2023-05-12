import "./home.css";
import arrow from "../../assets/image/down-arrow.png";

function Home() {
  return (
    <div className="homeContainer" id="home">
      <h2 className="heading">Hi I'm</h2>
      <h1 className="mainHeading">DEEPTI SAXENA</h1>
      <h2 className="heading">Frontend Developer</h2>
      {/* <div className="fade"> */}
      <a className="fade" href="#about">
        <img src={arrow} />
      </a>
      {/* </div> */}
    </div>
  );
}
export default Home;
