import "./contact.css";
import mail from "../../assets/image/contact-img/gmail.png";
import linkedin from "../../assets/image/contact-img/linkedin.png";
import github from "../../assets/image/skill-img/github.png";
// import copylogo from "../../assets/image/copylogo.png";

function Contact() {
  return (
    <div className="contactPage" id="contact">
      <main className="main">
        <div className="contactContainer">
          <h1>CONTACT</h1>
          <a
            href="https://www.linkedin.com/in/deepti-saxena-1267023b/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/DeeptiSaxenaRai?tab=repositories"
            target="_blank"
          >
            <img src={github} />
          </a>
          <a href="mailto: deeptisaxenarai@gmail.com" target="_blank">
            <img src={mail} />
          </a>
        </div>
      </main>
      <div className="footer">
        <p>
          <img src={copylogo} />
          <span>by deepti saxena 2023</span>
        </p>
      </div>
    </div>
  );
}
export default Contact;
