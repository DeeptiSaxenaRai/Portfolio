import "./contact.css";
import mail from "../../assets/image/contact-img/gmail.png";
import linkedin from "../../assets/image/contact-img/linkedin.png";
import github from "../../assets/image/skill-img/github.png";

function Contact() {
  return (
    <main className="main" id="contact">
      <div className="contactContainer">
        <h1>CONTACT</h1>
        <a
          href="https://www.linkedin.com/in/deepti-saxena-1267023b/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto: deeptisaxenarai@gmail.com" target="_blank">
          <img src={mail} />
        </a>
        <a
          href="https://github.com/DeeptiSaxenaRai?tab=repositories"
          target="_blank"
        >
          <img src={github} />
        </a>
      </div>
    </main>
  );
}
export default Contact;
