import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Product & Service</h3>
          <ul>
            <li>Smartphones</li>
            <li>Tablets</li>
            <li>TV & Audio</li>
            <li>Home Appliances</li>
            <li>Wearables</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Shop</h3>
          <ul>
            <li>Offers</li>
            <li>Student Advantage</li>
            <li>Corporate Store</li>
            <li>Store Locator</li>
            <li>Order Status</li>
            <li>Trade-In</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Live Chat</li>
            <li>Service Center</li>
            <li>Warranty</li>
            <li>FAQs</li>
            <li>Software Update</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>About Us</h3>
          <ul>
            <li>Company Info</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Investors</li>
            <li>Ethics</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Samsung Clone. All Rights Reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Legal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
