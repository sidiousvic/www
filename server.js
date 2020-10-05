const express = require("express");
const xRouter = express.Router();
const webhooksRouter = require("./webhooks");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

xRouter.get("/areyouthere", (_, res) => {
  res.send("I'm here. 👽");
});

xRouter.get("/%F0%9F%8D%B5", (_, res) => {
  res.status(418);
  res.send("🍓𝟙𝒆");
});

xRouter.use("/webhooks", webhooksRouter);

app.use("/x", xRouter);

const port = 9999;

app.listen(port, () => {
  console.log(`Server running @ PORT ${port}`);
});
