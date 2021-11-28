import React from "react";

class Section1 extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="overlay">
          <div className="container">
            <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
            <h2>Nie wierz nam na słowo - sprawdź</h2>
            <button className="button">
              <a href="#offer">oferta</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Section1;
