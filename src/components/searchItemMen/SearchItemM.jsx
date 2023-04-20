import React from "react";
import "./searchItemMen.css";
import { Link } from "react-router-dom";

export default function SearchItemMen({ item }) {
  return (
    <div className="searchItemM">
      <img src={item.photo} alt="" className="siImgM" />
      <div className="siDescM">
        <h1 className="siTitleM">{item.name}</h1>
        <span className="cityM">{item.city} </span>
        <span className="addressM">{item.address}</span>
      </div>
      <div className="siDetailsM">
        <div className="siDetailTextsM"> 
          <span className="siPriceM">Our prices start from {item.startPrice}$</span>
    
          <Link to={`/mlist/${item._id}`}>
            <button className="siCheckButtonM">See the salon</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
