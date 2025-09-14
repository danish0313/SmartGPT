import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../contextApi/Context";
interface LoginProps {
  onLogin?: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function
  // Get context value
  const context = useContext(AppContext);

  // If context is undefined, show an error or fallback UI
  if (!context) {
    return <div>Error: Context is not available!</div>;
  }

  // Destructure setUserLogin once we know context is available
  const { setUserLogin } = context;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((response) => {
        if (response.data === "success") {
          setUserLogin("success"); // Update context with the logged-in user's email
          localStorage.setItem("login", "success");
          console.log("Login successful:", response.data);
          navigate("/"); // Navigate to the register page
        } else {
          alert("Invalid credentials!");
        }
      });
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>LOGIN TO SMARTCHAT</h1>
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
        <br />
        <Link to={"/register"}>
          <p>Register new Account</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
