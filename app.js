const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hybrid DevOps Deployment Success 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
