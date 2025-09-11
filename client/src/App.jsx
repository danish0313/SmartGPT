import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/DashBoard";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("http://localhost:8080/api").then((res) =>
      res.json(),
    );
    setData(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
