import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // 
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMsg(data.message);
        setEmail("");
        setPassword("");
        navigate("/"); // Redirect to home
        // Optionally save userId in localStorage
        // localStorage.setItem("userId", data.userId);
      } else {
        const error = await response.text();
        setMsg("Login failed: " + error);
      }
    } catch (err) {
      setMsg("Error connecting to server");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            </form>
            <p
            className="message"
            style={{ color: msg.includes("Login failed") ? "red" : "green" }}
            >
            {msg}
            </p>
        </div>
    </div>

  );
};

export default Login;
