import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Handle registration logic here
    if (!form.username || !form.email || !form.password) {
      alert("All fields are required!");
      return;
    }
    axios
      .post("http://localhost:8080/registration", form)
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/login");
        console.log(form);
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <>
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
        <h1>USER SIGNUP!</h1>
        <form
          onSubmit={handleSubmit}
          style={{ width: 220, margin: "2rem auto" }}
        >
          <h2>Register</h2>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={{ width: "100%", marginBottom: 8, padding: 6 }}
              required
            />
          </div>
          <button type="submit">Register</button>
          <Link to={"/"}>
            <br />
            <p>Login Existing Account</p>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
