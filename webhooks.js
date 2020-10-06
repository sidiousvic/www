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

webhookRouter.post("/build/:service", async (req, res) => {
  const { sender, ref } = req.body;
  const { service } = req.params;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) {
    console.log(`🔩 Running ${service} deploy script...`);
    await deploy(service);
    return res.status(200).send("🔧 Deploy has been triggered. ");
  } else return res.status(500).send("😵 Deploy was unable to trigger. ");
});

async function deploy(service) {
  const runDeployScript =
    service === "sidiousvic" ? "./deploy.sh" : `cd ${service} && ./deploy.sh`;

  const { stdout, stderr } = await exec(`${runDeployScript}`);
  console.log(`${stdout}`);
  console.error(`${stderr}`);
}

module.exports = webhookRouter;
