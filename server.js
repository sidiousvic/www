const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/%F0%9F%8D%B5", (_, res) => {
  res.status(418);
  res.send("🍓𝟙𝒆 ");
});

app.get("/graphql", (_, res) => {
  res.status(200);
  res.send("I'm here. 👽");
});

const port = 9999;

app.listen(port, () => {
  console.log(`Server running @ PORT ${port}`);
});
