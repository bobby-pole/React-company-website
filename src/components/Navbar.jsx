import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="#section1" className="logo">
          {this.props.name}
        </a>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#about">O nas</a>
          </li>
          <li className="nav-link">
            <a href="#offer">Oferta</a>
          </li>
          <li className="nav-link">
            <a href="#contact" className="disabled">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
