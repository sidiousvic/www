const express = require("express");
const webhookRouter = express.Router();
const u = require("util");
const exec = u.promisify(require("child_process").exec);
const githubUsername = "sidiousvic";

webhookRouter.use(function timelog(req, _, next) {
  const { path: reqUrl } = req;
  console.log("Webhook @", reqUrl, new Date().toLocaleString());
  next();
});

webhookRouter.post("/build", function triggerDeploy(req, res) {
  const { sender, ref } = req.body;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) {
    console.log(`🔩 Triggering sidiousvic.dev deploy...`);
    deploy();
    res.status(200).send("🔧 Deploy has been triggered. ");
  } else res.status(500).send("😵 Deploy was not triggered. ");
});

async function deploy() {
  const deployScript = "sh ./deploy.sh";
  await exec(deployScript);
}

module.exports = webhookRouter;
