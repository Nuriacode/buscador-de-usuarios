import { Link } from "react-router-dom";
import "../components/styles/layout/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div">
        <Link to="https://github.com/Nuriacode">
          <i className="fa-brands fa-github-alt" />
        </Link>
        <Link to="https://www.linkedin.com/in/nuria-casta%C3%B1o-codesal/">
          <i className="fa-brands fa-linkedin" />
        </Link>
      </div>
      <p className="footer__text">Created by Nuria Castaño</p>
    </footer>
  );
};

export default Footer;
