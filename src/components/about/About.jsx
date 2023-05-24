import "./about.css";
import myImg from "../../assets/image/deeptinew.jpg";
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
            <p>
              Resides in Bergen, Norway from last 10 years. Whenever not making
              content or writing code then I love cooking, gardening, and
              painting.
            </p>
            <br></br>

            <p>
              If You are interested in my CV {"  "}
              <a
                href="https://docs.google.com/document/d/10g059ZVcAuG5-GBVNWR4GPQ0-laivNmLoyzQclFs-Ck/edit?usp=sharing"
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
