import "./footer.css";
import copylogo from "../../assets/image/copylogo.png";
function Footer() {
  return (
    <div className="footer">
      <p>
        <img src={copylogo} />
        <span>by deepti saxena 2023</span>
      </p>
    </div>
  );
}
export default Footer;
