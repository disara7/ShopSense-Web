import "./App.css";
import Card from "./Components/Card/card";
import Instructions from "./Components/Card/cardData.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Benifit from "./Pages/Benifit/Benifit.jsx";

function App() {
  const Cards = Instructions.map((card) => {
    return <Card card={card} />;
  });

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Benifit" element={<Benifit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
