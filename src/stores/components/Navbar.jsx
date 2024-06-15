import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { cartItems } = useCart();

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchQuery.toLowerCase()}`);
    }
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>E-Store</h2>
          </div>
        </Link>
        <form onSubmit={handleSearch} className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <Link to="/cart">
          <div className="cart">
            Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>

          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>

          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>

          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>

          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>

          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>

          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>

          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>
          <Link to="/book" className="custom-link">
            <li>Book</li>
          </Link>
          <Link to="/speaker" className="custom-link">
            <li>Speaker</li>
          </Link>
          <Link to="/tv" className="custom-link">
            <li>Tv's</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
