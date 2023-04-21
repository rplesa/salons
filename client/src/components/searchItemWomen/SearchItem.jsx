import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

export default function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img src={item.photo} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="city">{item.city} </span>
        <span className="address">{item.address}</span>
      </div>
      <div className="siDetails">
        <div className="siDetailTexts">
          <span className="siPrice">Our prices start from ${item.startPrice}</span>
          <Link to={`/wlist/${item._id}`}>
            <button className="siCheckButton">See the salon</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
