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
  req.connection.setTimeout(99999);
  const { sender, ref } = req.body;
  const { service } = req.params;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) {
    console.log(`🔧 Running ${service} deploy script...`);
    await deploy(res, service);
  }
});

async function deploy(res, service) {
  const runDeployScript =
    service === "sidiousvicdev"
      ? "./deploy.sh"
      : `cd ${service} && ./deploy.sh`;

  exec(`${runDeployScript}`, (err) => {
    if (err) {
      console.log(`⚠️ ${service} was unable to deploy.`);
      console.log(err);
      return res.sendStatus(500);
    }
  });
  console.log(`⚙ ${service} has been deployed!`);
  return res.sendStatus(200);
}

module.exports = webhookRouter;
