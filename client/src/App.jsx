import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const res = await fetch("http://localhost:8080/api").then((res) =>
      res.json()
    );
    setData(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
  <>
  <BrowserRouter>
    <Routes>
       
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
