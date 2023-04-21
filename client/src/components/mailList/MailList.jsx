import { Link } from "react-router-dom";
import "./mailList.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function MailList() {


  const { user } = useContext(AuthContext);

  if (user) {
    // dacă utilizatorul este autentificat, afișați descrierea
    return (
      <div className="mail">
        <h1>Your hair is the most important!</h1>
        <p>Welcome, {user.username}!</p>
        <p>Enjoy the pleasure of finding the perfect salon in your city! Our app allows you to easily search for hair salons in your area and find the one that meets your needs</p>
        <p> Say goodbye to bad hair days and hello to the perfect look with our salon finder app</p>
      </div>
    );
  } else {

  return (
    <div className="mail">
      <h1>Your hair is the most important!</h1>
      <span>Ready?</span>
      <div className="mailInputContainer">
        <div className="mailPanel">
          <span>Are you an existing client?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="mailPanel">
          <span>Are you a new client?</span>
          <Link to="/register">
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
}
