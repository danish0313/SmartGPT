import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNavbar from "./components/SideNavbar";

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
      <BrowserRouter>
        <div className="flex min-h-screen">
          <SideNavbar />
          <div className="flex-1 ml-0 p-0 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
