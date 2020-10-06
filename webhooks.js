const express = require("express");
const webhookRouter = express.Router();
const { exec } = require("child_process");
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

function deploy(service) {
  const runDeployScript =
    service === "sidiousvic" ? "./deploy.sh" : `cd ${service} && ./deploy.sh`;
  const child = exec(`pwd && ${runDeployScript}`, (err, stdout, stderr) => {
    console.log(err ? stderr : stdout);
  });

  child.on("exit", (code) => console.log(code, "exited"));
}

module.exports = webhookRouter;
