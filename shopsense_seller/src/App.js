import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Join_section from "./Components/Join_section/join";
import Card from "./Components/Card/card";
import Instructions from "./Components/Card/cardData.js";

function App() {
  const Cards = Instructions.map((card) => {
    return <Card card={card} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Join_section />

      <div className="card_holder">{Cards}</div>
    </div>
  );
}

export default App;
