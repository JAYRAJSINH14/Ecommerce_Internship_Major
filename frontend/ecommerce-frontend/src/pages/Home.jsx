import "../styles/home.css";

import banner from "../assets/images/banner.png";
import mobile from "../assets/images/mobile.jpg";
import fashion from "../assets/images/fashion.jpg";
import electronics from "../assets/images/electronics.jpg";
import appliance from "../assets/images/appliances.jpg";
import furniture from "../assets/images/furniture.jpg";
import deal from "../assets/images/deal.png";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* CATEGORY BAR */}
      <div className="category-bar">
        <Category img={mobile} name="Mobiles" />
        <Category img={fashion} name="Fashion" />
        <Category img={electronics} name="Electronics" />
        <Category img={appliance} name="Appliances" />
        <Category img={furniture} name="Furniture" />
      </div>

      {/* BANNER */}
      <div className="banner-section">
        <img src={banner} alt="Offer Banner" />
      </div>

      {/* TOP DEALS */}
      <div className="deals-section">
        <h2>Top Deals for You</h2>

        <div className="deals-row">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="deal-card" key={item}>
              <img src={deal} alt="deal" />
              <p>Special Offer</p>
              <span>From ₹999</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function Category({ img, name }) {
  return (
    <div className="category-item">
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
}
