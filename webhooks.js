var express = require("express");
var webhookRouter = express.Router();
var { exec } = require("child_process");
var githubUsername = "sidiousvic";

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
    res.sendStatus(200).send("🔧 Deploy has been triggered. ");
    deploy(res, service);
  }
});

function deploy(res, service) {
  const runDeployScript =
    service === "sidiousvicdev"
      ? "./deploy.sh"
      : `cd ${service} && ./deploy.sh`;

  exec(`${runDeployScript}`, (err, stdout) => {
    if (err) {
      console.log(`⚠️ ${service} was unable to deploy.`);
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(`${stdout}`);
  });
}

module.exports = webhookRouter;
