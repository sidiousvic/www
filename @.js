const express = require("express");
const deploy = require("./deploy");
const app = express();

app.use(express.static(__dirname + "/ui"));

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/ui/index.html");
});

app.post("/webhooks/github", deploy);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running @ PORT ${port} 🚢💨`);
});
