import "./contact.css";
import mail from "../../assets/image/contact-img/gmail.png";
import linkedin from "../../assets/image/contact-img/linkedin.png";
// import github from "../../assets/image/contact-img/github.png";

function Contact() {
  return (
    <main className="main" id="contact">
      <div className="contactContainer">
        <h1>CONTACT</h1>
        <h3>
          Please feel free to contact me if you need any further information
        </h3>
        <a
          href="https://www.linkedin.com/in/deepti-saxena-1267023b/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" id="contactImage" />
        </a>
        <a href="mailto: deeptisaxenarai@gmail.com" target="_blank">
          <img src={mail} id="contactImage" />
        </a>
        {/* <a
          href="https://github.com/DeeptiSaxenaRai?tab=repositories"
          target="_blank"
        >
          <img src={github} />
        </a> */}
      </div>
    </main>
  );
}
export default Contact;
