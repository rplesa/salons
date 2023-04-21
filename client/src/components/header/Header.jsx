

import "./header.css";
import img from "./img/img1.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-image">
        <img src={img} alt="header-image" />
      </div>
      <div className="header-description">
        <p className="description">Beauty and Hair Inspiration</p>
        <p className="subtitle">Luxe Beauty Salons at Your Fingertips</p>
      </div>
    </div>
  );
}
