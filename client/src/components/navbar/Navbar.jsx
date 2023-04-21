import { useContext, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import axios from "axios";

export default function Navbar() {
  const [error, setError]=useState("")
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log(err);
      setError('Logout failed. Please try again later.')
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="no-underline">
          <span className="logo">
            Influence
            <span className="subtext">
              transforming hair, transforming lives
            </span>
          </span>
        </Link>
        {user ? (
          <>
            <div className="navbar__username">{user.username}</div>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>
            {error && <p className="error">{error}</p>}
            {user.isAdmin && (
              <Link to="/admin">
                <button className="navButton">Add Salon</button>
              </Link>
            )}
          </>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Registrer</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
