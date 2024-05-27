const express = require("express");

require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.get("/api/products", (req, res) => {
  res.json({
    Data: "Productxyz",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT 8000.`);
});
