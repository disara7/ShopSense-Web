import "./App.css";
import Card from "./Components/Card/card";
import Instructions from "./Components/Card/cardData.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.jsx";
import Benifit from "./Pages/Benifit/Benifit.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Form01 from "./Pages/RegistrationForm01/Form01.jsx";
import Form02 from "./Pages/RegistrationForm02/Form02.jsx";
import Form from "./Pages/Form/Form.js";
import AdminDashboard from "./AdminSide/AdminPages/AdminDashboard/AdminDashboard.jsx";

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
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Form01" element={<Form01 />} />
          <Route path="/Form02" element={<Form02 />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
