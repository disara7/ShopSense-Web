import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import RegisterImg from "../../Components/Assets/RegisterImg.png";
import "./ButtonBar.css";
import { useNavigate } from "react-router-dom";

function ButtonBar() {
  const history = useNavigate();

  return (
    <div class="ButtonHolderform">
      <button
        className="Backformbtn"
        id="form2button"
        onClick={() => history(-1)}
      >
        BACK
      </button>
      <button className="Nextformbtn" id="form2button">
        NEXT
      </button>
    </div>
  );
}

export default ButtonBar;
