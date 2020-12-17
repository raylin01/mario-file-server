const express = require("express");
const app = express();
const PORT = 6942;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Mario!");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
