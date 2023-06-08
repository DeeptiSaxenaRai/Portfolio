import "./home.css";
import { motion } from "framer-motion";
import { TagCloud as TagCloudBase } from "@frank-mayer/react-tag-cloud";
import arrow from "../../assets/image/down-arrow.png";

function Home() {
  const introContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const positionContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 5,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  const typingContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const typingText = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const imgContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 6,
        duration: 1,
      },
    },
  };

  return (
    <div className="homeContainer" id="home">
      <section className="section">
        <div className="left">
          <motion.h2
            className="heading"
            variants={introContainer}
            initial="hidden"
            animate="show"
          >
            Hi I'm
          </motion.h2>
          <motion.h1
            className="mainHeading"
            variants={typingContainer}
            initial="hidden"
            animate="show"
          >
            {Array.from("DEEPTI SAXENA").map((word, i) => (
              <motion.span key={i} variants={typingText}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            className="heading"
            variants={positionContainer}
            initial="hidden"
            animate="show"
          >
            Frontend Developer
          </motion.h2>
        </div>
        <div className="right">
          <TagCloudBase
            className="tagcloud"
            options={(window) => ({
              radius: Math.min(300, window.innerWidth, window.innerHeight) / 2,
              maxSpeed: "slow",
            })}
            onClick={(tag) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "NodeJS",
              "Git",
              "Figma",
              "SQL",
              "MongoDB",
              "C#",
              "Visual Studio",
              "ASP.Net",
            ]}
          </TagCloudBase>
        </div>
      </section>
      <motion.a
        className="fade"
        href="#about"
        variants={imgContainer}
        initial="hidden"
        animate="show"
      >
        <img src={arrow} alt="arrowImage" />
      </motion.a>
    </div>
  );
}
export default Home;
