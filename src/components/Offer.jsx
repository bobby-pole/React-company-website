import React from "react";

class Offer extends React.Component {
  constructor() {
    super();
    const offers = [
      { id: 1, name: "Usługa 1", isNew: true },
      { id: 2, name: "Usługa 2", isNew: true },
      { id: 3, name: "Usługa 3", isNew: !true },
      { id: 3, name: "Usługa 4", isNew: !true },
      { id: 5, name: "Usługa 5", isNew: !true },
      { id: 6, name: "Usługa 6", isNew: true },
    ];

    this.state = { offers };
  }
  render() {
    return (
      <section className="section-offer">
        <div className="container-offer">
          <h1 className="header-offer" id="offer">
            Czym zajmuje się nasza firma?
          </h1>
          <div className="offer-items">
            {this.state.offers.map(({ id, name, isNew }) => (
              <div className="offer-box">
                {isNew ? <div className="dot"></div> : ""}
                <p className="offer-p">
                  <p key={id}>
                    {name} {isNew ? "(Nowość)" : ""}
                  </p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Offer;
