import "./about.css";
import myImg from "../../assets/image/deepti.jpg";
function About() {
  return (
    <main className="main" id="about">
      <div className="aboutContainer">
        <h1>ABOUT</h1>
        <div className="contentContainer">
          <img src={myImg} />
          <div className="detail">
            <p>
              I am a front-end developer with a deep passion for designing,
              animations and coding. I have done Master in Computer Aplication.
            </p>
            <br></br>

            <p>
              Resides in Bergen, Norway from last 10 years. Whenever not making
              content or writing code then I love cooking, gardening, and
              painting.
            </p>
            <br></br>
            <br></br>
            <p>
              If You are interested in my CV {"  "}
              <a
                href="https://docs.google.com/document/d/1BfFgmrqbf4f-huuUbunO64VGAlwZskJayPLC4pqlI3U/edit?usp=sharing"
                target="_blank"
              >
                click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
