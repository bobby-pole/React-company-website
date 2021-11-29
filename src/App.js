import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <div className="App">
        <Navbar name="Moja firma" />
        <Section1 />
        <About />
        <Offer />
        <Footer />
      </div>
    </body>
  );
}

export default App;
