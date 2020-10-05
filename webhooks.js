var express = require("express");
var webhookRouter = express.Router();
var childProcess = require("child_process");
var githubUsername = "sidiousvic";

webhookRouter.use(function timelog(req, res, next) {
  console.log("Webhook @ ", Date.now());
  next();
});

webhookRouter.post("/", async (req, res) => {
  const { sender, ref } = req.body;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername)
    await deploy(res);
});

async function deploy(res) {
  childProcess.exec("cd spiders && ./deploy.sh", (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Spiders was unable to fire.");
    }
    return res.status(200).send("Spiders has been fired up!");
  });
}

module.exports = webhookRouter;
