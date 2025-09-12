import { useState, useEffect, useContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNavbar from "./components/SideNavbar";
import MainContainer from "./components/MainContainer";
import ContextProvider from "./contextApi/Context";

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
      <ContextProvider>
        <BrowserRouter>
          <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <div className="w-1/6 h-screen">
              <SideNavbar />
            </div>
            {/* Main Content */}
            <MainContainer />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
