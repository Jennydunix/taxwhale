import React from "react";
import "./HomePage.css";
import Mobile from "../assets/Taxwhale-01.png";
import Uba from "../assets/UBA.png";
import Aedc from "../assets/aedc-logo.png";
import Airtel from "../assets/Airtel-logo.png";
import Fidelity from "../assets/Fidelity-logo.png";
import Gotv from "../assets/gotv-nigeria-logo.png";
import Man from "../assets/image_1.png";
import { BsCheckCircle } from "react-icons/bs";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h5>Cryptocurrency Tax Software</h5>
          <h3>Tax report done in minutes with Taxwhale</h3>
          <p>
            When dealing with thousands of transactions, calculating crypto
            taxes can be very unsettling, but it doesn’t have to be. Use our
            crypto tax software to easily
          </p>
          <button className="btn">Calculate My Taxes</button>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Mobile} alt="" />
          </div>
        </div>
      </div>

        {/* Partner */}
      <div className="partner">
        <p className="part1">Trusted By:</p>
        <div className="box">
          {/* first */}
          <div className="first">
            <div class="flex-item">
              <img src={Uba} alt="" />
            </div>
            <div class="flex-item">
              <img src={Aedc} alt="" />
            </div>
            <div class="flex-item">
              <img src={Airtel} alt="" />
            </div>
            <div class="flex-item">
              <img src={Fidelity} alt="" />
            </div>
            <div class="flex-item">
              <img src={Gotv} alt="" />
            </div>
          </div>
          {/* second */}
          <div className="second">
            <div class="flex-item">
              <img src={Aedc} alt="" />
            </div>
            <div class="flex-item">
              <img src={Airtel} alt="" />
            </div>
            <div class="flex-item">
              <img src={Fidelity} alt="" />
            </div>
            <div class="flex-item">
              <img src={Gotv} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="featured">
        <div class="featured-text">
          <h1 class="text-1">Easy cryptocurrency Tax payment experience</h1>
          <p class="text-2">
            We've simplified the process of paying your cryptocurrency taxes
            using an organization or as an individual{" "}
          </p>
        </div>
      </div>

      <div className="bit">
        {/* left */}
        <div className="first-img">
          <img src={Man} alt="" />
        </div>

        {/* right */}
        <div className="right-bit">
          <div className="text-box">
            <h2 className="txt-1">Individual Account</h2>
            <p className="txt-2">
              We've simplified the process of paying your cryptocurrency taxes
              using an organization or as an individual{" "}
            </p>
          </div>
          <div className="icons">
            <div className="iconleft">
              <div className="circle">
                <span className="coins">
                  <BsCheckCircle /> <h4>Bitcoin</h4>
                </span>
              </div>
              <div className="circle">
                <span className="coins">
                  <BsCheckCircle /> <h4>Etherum</h4>
                </span>
              </div>
            </div>
            <div className="iconright">
              <div className="circle">
                <span className="coins">
                  <BsCheckCircle /> <h4>Dodge</h4>
                </span>
              </div>
              <div className="circle">
                <span className="coins">
                  <BsCheckCircle /> <h4>BNB</h4>
                </span>
              </div>
            </div>
          </div>
          <button className="btn">Create an Account</button>
        </div>
      </div>

      
      <div className="tax-page">
        <div className="sideA">
          <div className="top">
            <div className="txt-box">
              <h2 className="txt-3">Tax Professional</h2>
              <p className="txt-4">
                We've simplified the process of paying your cryptocurrency taxes
                using an organization or as an individual.
              </p>
            </div>
            <div className="icons">
              <div className="iconA">
                <div className="circle">
                  <span className="coins">
                    <BsCheckCircle /> <h4>Bitcoin</h4>
                  </span>
                </div>
                <div className="circle">
                  <span className="coins">
                    <BsCheckCircle /> <h4>Etherum</h4>
                  </span>
                </div>
              </div>
              <div className="iconB">
                <div className="circle">
                  <span className="coins">
                    <BsCheckCircle /> <h4>Dodge</h4>
                  </span>
                </div>
                <div className="circle">
                  <span className="coins">
                    <BsCheckCircle /> <h4>BNB</h4>
                  </span>
                </div>
              </div>
            </div>
            <button className="btn">Create an Account</button>
          </div>
          <div className="buttom">
            <h2 className="txt-5">Tax Professional Client</h2>
            <p className="txt-6">
              We've simplified the process of paying your cryptocurrency taxes
              using an organization or as an individual
            </p>
            <div className="btn2-box">
              <button className="btn2">Select Your Tax Professional</button>
            </div>
          </div>
        </div>
        <div className="sideB">
          <div className="img-2">
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
    </>
    
  );
};

export default HomePage;
