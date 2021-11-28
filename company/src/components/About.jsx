import React from "react";

class About extends React.Component {
  constructor() {
    super();
    const employers = [
      {
        id: 1,
        name: "Adam Nowak [Key Account Manager]",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda incidunt corporis hic optio quae rem architecto porro! Nisi aperiam laborum minima illum voluptate et magni repudiandae molestiae blanditiis vel numquam excepturi, officia expedita dolorem corporis? Veniam similique odio sint rerum molestias rem quisquam cumque ipsum.",
        url: "https://i.ibb.co/12rZw8v/robert-godwin-cdksy-Tq-EXzo-unsplash.jpg",
      },
      {
        id: 2,
        name: "Ewa Kowalska [Sales Representative]",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda incidunt corporis hic optio quae rem architecto porro! Nisi aperiam laborum minima illum voluptate et magni repudiandae molestiae blanditiis vel numquam excepturi, officia expedita dolorem corporis? Veniam similique odio sint rerum molestias rem quisquam cumque ipsum.",
        url: "https://i.ibb.co/YWgscNB/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg",
      },
      {
        id: 3,
        name: "Jan Radomski [Sales Representative]",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda incidunt corporis hic optio quae rem architecto porro! Nisi aperiam laborum minima illum voluptate et magni repudiandae molestiae blanditiis vel numquam excepturi, officia expedita dolorem corporis? Veniam similique odio sint rerum molestias rem quisquam cumque ipsum.",
        url: "https://i.ibb.co/gvwXnXM/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg",
      },
    ];

    this.state = { employers };
  }

  render() {
    return (
      <div className="container-about" id="about">
        <div className="about">
          <h1 className="headerAbout">Nasi specjaliści</h1>

          <ul>
            {this.state.employers.map(({ id, name, description, url }) => (
              <li class="employer">
                <div class="emp">
                  <img key={id} class="emp-img" src={url} alt="employee" />
                  <h4 class="emp-name">{name}</h4>
                  <p class="emp-des">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default About;
