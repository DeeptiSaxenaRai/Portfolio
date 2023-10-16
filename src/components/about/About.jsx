import "./about.css";
import { easeInOut, motion } from "framer-motion";
import myImg from "../../assets/image/deeptinew.jpg";

function About() {
  return (
    <main className="main" id="about">
      <div className="aboutContainer">
        <h1 className="aboutHeading">ABOUT</h1>
        <div className="contentContainer">
          <motion.img
            src={myImg}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
          />
          <motion.div
            className="detail"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
          >
            <p>
              I am a front-end developer with a deep passion for designing,
              animations and coding. I have done Master in Computer Application.
            </p>
            <p>
              I am hard-working, positive, flexible and goal-oriented person who
              likes to learn something new and develop personally. I have good
              proficiency in both Norwegian and English.
            </p>
            <p>
              Resides in Bergen, Norway from last 10 years. Whenever not making
              content or writing code then I love baking, gardening, and
              painting.
            </p>
            <br></br>

            <p>
              If You are interested in my CV {"  "}
              <a
                href="https://drive.google.com/file/d/1lEPhx4qaYu1R1yb-O4DItMA4lWEKmC1a/view?usp=sharing"
                target="_blank"
              >
                click here
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
export default About;
