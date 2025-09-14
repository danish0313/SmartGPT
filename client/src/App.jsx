import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideNavbar from "./components/SideNavbar";
import MainContainer from "./components/MainContainer";
import "./assets/prism.css";

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

  const user = localStorage.getItem("login");
  console.log(user);
  const SmartChatDashboard = (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className=" fixed w-1/6 h-screen m-2">
        <SideNavbar />
      </div>
      <div className=" w-5/6 ml-auto  ">
        <MainContainer />
      </div>
      {/* Main Content */}
    </div>
  );

  return (
    <>
      <BrowserRouter>
        {user === "success" ? (
          SmartChatDashboard
        ) : (
          <div className="">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
