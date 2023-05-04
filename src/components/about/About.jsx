import "./about.css";
function About() {
  return (
    <main className="main" id="about">
      <div className="aboutContainer">
        <img src="./src/assets/image/deepti.jpg" />
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
            <a href="https://docs.google.com/document/d/1BfFgmrqbf4f-huuUbunO64VGAlwZskJayPLC4pqlI3U/edit?usp=sharing">
              click here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
export default About;
