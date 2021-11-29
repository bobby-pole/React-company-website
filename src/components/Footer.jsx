import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <h1 className="footer-title">
            Nazwa firmy - wszelkie prawa zastrzeżone, {new Date().getFullYear()}
          </h1>
          <ul className="foot-icons">
            <li className="foot-ic">
              <i class="fa fa-facebook-square"></i>
            </li>
            <li className="foot-ic">
              <i class="fa fa-instagram"></i>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
