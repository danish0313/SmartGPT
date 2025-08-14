import { useState, use, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        {data.map((x) => (
          <p>{x}</p>
        ))}
      </div>
    </>
  );
}

export default App;
