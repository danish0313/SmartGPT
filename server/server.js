const express = require("express");
const app = express();
const cors = require("cors");
corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ data: ["apple", "mangos", "alls"] });
});

app.listen(8080, () => {
  console.log("server is runing on 8080");
});
