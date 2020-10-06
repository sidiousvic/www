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

webhookRouter.post("/build/:service", (req, res) => {
  const { sender, ref } = req.body;
  const { service } = req.params;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) {
    console.log(`🔩 Running ${service} deploy script...`);
    deploy(service);
    res.status(200).send("🔧 Deploy has been triggered. ");
  } else res.status(500).send("😵 Deploy was not triggered. ");
});

async function deploy(service) {
  const runDeployScript =
    service === "sidiousvic"
      ? "sh ./deploy.sh"
      : `cd ${service} && sh ./deploy.sh`;
  const child = await exec(runDeployScript);
  const { stdout, stderr } = child;
  console.log(`${stdout}`);
  console.log(`${stderr}`);
}

module.exports = webhookRouter;
