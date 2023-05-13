import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-text">
            <div className="col-1">
              <div className="tax">
                <h3>Taxwhale</h3>
                <div className="tax-info">
                <p>
                  When dealing with thousands of transactions, calculating
                  crypto taxes can be very unsettling, but it doesn’t have to
                  be. Use our crypto tax software to easily
                </p>
                </div>
              </div>
              <div className="social">
                <a href="/">
                  <FaFacebook className="icon" />
                </a>
                <a href="/">
                  <FaTwitter className="icon" />
                </a>
                <a href="/">
                  <FaInstagram className="icon" />
                </a>
                <a href="/">
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
            {/* company */}
            <div className="col-2">
              <h5>Company</h5>
              <a className="flink" href="/">
                FAQ|support
              </a>
              <a className="flink" href="/">
                Blogs
              </a>
              <a className="flink" href="/">
                Contact Us
              </a>
            </div>
            {/* Address */}
            <div className="col-3">
              <div className="add1">
                <span>
                  <BsHouseDoor />
                  <h4>Address</h4>
                </span>
                <p>
                  Zone 6, 3 Rabat Street, Off Herbert Macaulay Way, Wuse, Abuja
                </p>
              </div>
              <div className="add2">
                <p>Tel: +234 092 910709</p>
                <p>Mobile: +234 8011223344, +2349011223344</p>
                <p>Email: info@taxwhale.com, hello@taxwhales.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div class="copyright">
            <p>&copy; 2022 Taxwhale, All Rights Reserved.</p>
          </div>
          <div className="info">
            <div className="opt1">
            <a className="flink" href="/">
              Terms of Use
            </a>
            </div>
            <div className="opt2">
            <a className="flink" href="/">
              Privacy Policy
            </a>
            </div>
            <div className="opt3">
            <a className="flink" href="/">
              Google Map
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
