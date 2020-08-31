const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("I'm here. 👽");
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running @ PORT ${port} 🚢💨`);
});
