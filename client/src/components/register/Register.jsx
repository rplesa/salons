import React, { useState } from "react";
import axios from "axios";
import "./register.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
        isAdmin,
      });

      setMessage("Registration successful! Please login now!");

      setTimeout(() => {
        window.location.href = "/login";
        setMessage("");
      }, 5000);

    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h1>Register</h1>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rInput"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rInput"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rInput"
            />
          </label>
          <label className="checkbox">
          I'm a stylist:
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
              <span className="checkmark"></span>
          </label>

          <button type="submit" className="rButton">
            Register
          </button>
          {errorMessage && <span className="errorRegister">{errorMessage}</span>}
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
