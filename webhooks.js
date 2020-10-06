const express = require("express");
const webhookRouter = express.Router();
const util = require("util");
const exec = util.promisify(require("child_process").exec);
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
  console.log(runDeployScript);
  try {
    const child = await exec(`${runDeployScript}`);
    const { err, stdout, stderr } = child;
    console.log(err ? stderr : stdout);
  } catch (err) {
    console.log(err, "at the catch");
  }
}

module.exports = webhookRouter;
