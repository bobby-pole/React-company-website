import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-container">
          <h1 className="footer-title">
            Nazwa firmy - wszelkie prawa zastrzeżone, {new Date().getFullYear()}
          </h1>
          <ul className="foot-icons">
            <li className="foot-ic">
              <a href="#footer">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="foot-ic">
              <a href="#footer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
