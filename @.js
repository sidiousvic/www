const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/dist"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/%F0%9F%8D%B5", (_, res) => {
  res.status(418);
  res.send("🍓𝟙𝒆 ");
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running @ PORT ${port}`);
});
