import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Benifit.css";
import Footer from "../../Components/Footer/footer";
import Card from "../../Components/Card/card";
import Instructions from "../../Components/Card/cardData.js";
function Benifit() {
  const Cards = Instructions.map((card) => {
    return <Card card={card} />;
  });

  return (
    <div>
      <Navbar />

      <div className="Benifitbox01">
        <h3>Why sell on SHOPSENSE?</h3>
        <p>
          Are you a passionate entrepreneur looking to showcase your unique
          products to a diverse audience? Here's why you should consider joining
          our community of sellers on ShopSense:
        </p>

        <ul>
          <li>Reach customers worldwide, breaking geographical boundaries.</li>
          <li>
            Make your products accessible to all shoppers, including those with
            visual impairments, through our innovative technology.
          </li>
          <li>
            Streamline your online store with our intuitive seller dashboard,
            simplifying inventory management, order processing, and sales
            tracking.
          </li>
          <li>
            Join a supportive community of sellers for valuable insights, tips,
            and support on your entrepreneurial journey.
          </li>
          <li>
            Benefit from our competitive commission rate of 5-8% on sales,
            maximizing your profits while leveraging our platform's features and
            resources.
          </li>
        </ul>
      </div>

      <div className="About"></div>

      <div className="Card_header">
        Set up your e-commerce store in a flash,{" "}
        <span className="Highlight">it's easy and free!</span>
      </div>

      <div className="card_holder">{Cards}</div>
      <Footer />
    </div>
  );
}

export default Benifit;
