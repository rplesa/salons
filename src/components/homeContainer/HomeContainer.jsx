import { React, Redirect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";

import "./homeContainer.css";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="containers">
        <div className="image-row">
          <img className="small-rectangle1" src={img1} alt="" />
          <img className="small-rectangle2" src={img4} alt="" />
          <img className="small-rectangle3" src={img3} alt="" />
          <img className="small-rectangle4" src={img5} alt="" />
          <img className="small-rectangle5" src={img6} alt="" />
          <img className="small-rectangle6" src={img9} alt="" />
        </div>
      </div>
      <div className="containers">
        <div className="description-container">
          <div className="description-box">
            <p>
              Welcome to Influence - the ultimate destination for finding the
              best hair salons and stylists in your area! We're a platform that
              connects you with the most talented professionals who are
              dedicated to creating stunning hairstyles that suit your unique
              personality and lifestyle.
            </p>
            <p>
              Our mission is to empower you to look and feel your best by
              providing you with access to top-rated salons and experienced
              stylists who use only the best products and techniques to deliver
              exceptional results. Whether you're looking for a bold new look or
              simply need a trim, we've got you covered.
            </p>
            <img src={img2} alt="" />
            <div className="image-description">
              <h2>So why wait?</h2>
              <h3>
                {" "}
                Join the Influence community today and discover your perfect
                salon and stylist!
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="image-lists">
          <div className="womenSalons">
            <img src={img7} alt="Women salons" />
            <Link to={user ? "/wlist" : "/login"}>
              <p className="descriptionLink">Women salons</p>
            </Link>
          </div>
          <div className="menSalons">
            <img src={img8} alt="Men salons" />
            <Link to={user ? "/mlist" : "/login"}>
              <p className="descriptionLink">Men salons</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
