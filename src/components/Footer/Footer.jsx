import React from "react";
import "./Footer.less";
import { Link } from "@reach/router";
const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="heading-1">chamel</h1>
      <div className="footer__content">
        <div className="footer__group">
          <h3 className="heading-3">Explore chamel.com</h3>

          <Link to="#">Haute Couture</Link>
          <Link to="#">Fashion</Link>
          <Link to="#">High Jewelry</Link>
          <Link to="#">Fine Jewelry</Link>
          <Link to="#">Watches</Link>
          <Link to="#">Eyewear</Link>
          <Link to="#">Fragrance</Link>
          <Link to="#">Makeup</Link>
        </div>

        <div className="footer__group">
          <h3 className="heading-3">online services</h3>

          <Link to="#">Haute Couture</Link>
          <Link to="#">Fashion</Link>
          <Link to="#">High Jewelry</Link>
          <Link to="#">Fine Jewelry</Link>
          <Link to="#">Watches</Link>
          <Link to="#">Eyewear</Link>
          <Link to="#">Fragrance</Link>
          <Link to="#">Makeup</Link>
        </div>
        <div className="footer__group">
          <h3 className="heading-3">boutique services</h3>

          <Link to="#">Haute Couture</Link>
          <Link to="#">Fashion</Link>
          <Link to="#">High Jewelry</Link>
          <Link to="#">Fine Jewelry</Link>
          <Link to="#">Watches</Link>
          <Link to="#">Eyewear</Link>
          <Link to="#">Fragrance</Link>
          <Link to="#">Makeup</Link>
        </div>
        <div className="footer__group">
          <h3 className="heading-3">the house of chamel</h3>

          <Link to="#">Haute Couture</Link>
          <Link to="#">Fashion</Link>
          <Link to="#">High Jewelry</Link>
          <Link to="#">Fine Jewelry</Link>
          <Link to="#">Watches</Link>
          <Link to="#">Eyewear</Link>
          <Link to="#">Fragrance</Link>
          <Link to="#">Makeup</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
