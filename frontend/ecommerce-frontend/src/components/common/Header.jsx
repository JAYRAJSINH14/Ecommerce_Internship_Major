import { Link } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/images/website_logo.jpg";

import searchIcon from "../../assets/images/icons/search.jpg";
import userIcon from "../../assets/images/icons/user.jpg";
import cartIcon from "../../assets/images/icons/cart.jpg";
import sellerIcon from "../../assets/images/icons/seller.jpg";

export default function Header() {
  return (
    <header className="bm-header-wrapper">
      <div className="bm-header">

        {/* Logo */}
        <div className="bm-logo">
          <img src={logo} alt="BHARATMART" />
        </div>

        {/* Search */}
        <div className="bm-search">
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
          />
        </div>

        {/* Actions */}
        <div className="bm-actions">
          <Link to="/login" className="bm-action">
            <img src={userIcon} alt="login" />
            <span>Login</span>
          </Link>

          <div className="bm-action">
            <img src={cartIcon} alt="cart" />
            <span>Cart</span>
          </div>

          <div className="bm-action">
            <img src={sellerIcon} alt="seller" />
            <span>Become a Seller</span>
          </div>
        </div>

      </div>
    </header>
  );
}
