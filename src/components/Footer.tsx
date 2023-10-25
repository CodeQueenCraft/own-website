import "./Footer.scss";
import lnIcon from "../assets/ln.png";
import xingIcon from "../assets/xing.png";
import mailIcon from "../assets/mail.png";
import copyrightIcon from "../assets/copyright.png";

function Footer() {
  return (
    <footer>
      <div className="contactbar-wrap">
        <h4>Thanks for Watching!</h4>
        <p>Contact me</p>
        <ul className="contactbar">
          <li className="contactbar-item">
            <a
              href="https://www.linkedin.com/in/betina-koschel-06b7a728a"
              target="_blank"
            >
              <img src={lnIcon} alt="LinkedIn" title="LinkedIn" />
            </a>
          </li>
          <li className="contactbar-item">
            <a
              href="https://www.xing.com/profile/Betina_Koschel/cv"
              target="_blank"
            >
              <img src={xingIcon} alt="Xing" title="Xing" />
            </a>
          </li>
          <li className="contactbar-item">
            <a href="mailto:betzii@web.de" target="_blank">
              <img src={mailIcon} alt="E-Mail" title="E-Mail" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright-wrap">
        <div className="copyright">
          <img src={copyrightIcon} alt="copyright" />
          <p>B. Muster</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
