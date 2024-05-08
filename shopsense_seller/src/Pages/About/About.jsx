import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import About01 from "../../Components/Assets/AboutImg01.png";
import About02 from "../../Components/Assets/AboutImg02.png";
import "./About.css";
import Footer from "../../Components/Footer/footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="About">
        <div className="Aboutusbox01">
          <h3>ABOUT US</h3>
          <p>
            Welcome to ShopSense, where accessibility, innovation, and community
            converge to create a seamless online shopping experience for all.
            With a dedication to pushing the boundaries of e-commerce
            technology, we're committed to breaking down barriers and ensuring
            that every shopper, regardless of ability or background, can enjoy
            the convenience and joy of online shopping.
          </p>
        </div>
        <div className="AboutHeader">ABOUT SHOPSENSE</div>
        <br />
        <div className="Aboutusbox02">
          <div className="Aboutusparagraph">
            <p>
              ShopSense is more than just an online marketplace; it's a beacon
              of inclusivity and innovation in the e-commerce landscape. At
              ShopSense, we believe that everyone deserves equal access to the
              world of online shopping, regardless of their abilities. That's
              why we've developed cutting-edge technology that ensures a
              seamless experience for all users, including those with visual
              impairments. Through our platform, shoppers can explore a diverse
              range of products from sellers around the globe, confident in the
              knowledge that accessibility and inclusivity are at the forefront
              of everything we do.
              <br />
              <br />
              At ShopSense, we're not just facilitating transactions; we're
              fostering connections and empowering sellers to reach their full
              potential. Our seller community is built on collaboration,
              support, and shared success, providing a nurturing environment for
              entrepreneurs to thrive. With intuitive tools and resources at
              their fingertips, sellers can effortlessly manage their inventory,
              process orders, and connect with customers. Join us at ShopSense
              and experience the future of online shopping, where accessibility,
              innovation, and community intersect to create a truly inclusive
              marketplace for all.
              <br />
              <br />
              our commitment to inclusivity goes beyond just accessibility
              features. We strive to create a marketplace that celebrates
              diversity and empowers underrepresented voices in the retail
              industry. Through initiatives such as our diversity and inclusion
              programs, we actively support minority-owned businesses, women
              entrepreneurs, and artisans from marginalized communities,
              providing them with a platform to showcase their talents and
              products to a global audience.
            </p>
          </div>

          <div className="ImageSecAbout">
            <img src={About01} />
            <br />
            <img src={About02} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
