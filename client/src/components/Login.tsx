import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface LoginProps {
  onLogin?: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((response) => {
        if (response.data === "success") {
          console.log("Login successful:", response.data);
          navigate("/home"); // Navigate to the register page
        } else {
          alert("Invalid credentials!");
        }
      });
  };

  return (
    <>
      <h1>MERN STACK LOGIN & Registration!</h1>
      <form onSubmit={handleSubmit} style={{ width: 220, margin: "2rem auto" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 6 }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 8, padding: 6 }}
          required
        />
        <button type="submit" style={{ width: "100%", padding: 6 }}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
