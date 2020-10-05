var express = require("express");
var webhookRouter = express.Router();
var childProcess = require("child_process");
var githubUsername = "sidiousvic";

webhookRouter.use(function timelog(req, res, next) {
  console.log("Webhook @ ", Date.now());
  next();
});

webhookRouter.post("/", (req, res) => {
  const { sender, ref } = req.body;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) deploy(res);
});

function deploy(res) {
  childProcess.exec("cd spiders && ./deploy.sh", (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Spiders was unable to fire.");
    }
    res.status(200).send("Spiders has been fired up!");
  });
}

module.exports = webhookRouter;
