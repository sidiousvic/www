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
    console.log("🔧 Running deploy script...");
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
      console.log(err);
      return res.status(500).send(`⚠️ ${service} was unable to deploy. `);
    }
  });
  return res.status(200).send(`⚙ ${service} has been deployed!`);
}

module.exports = webhookRouter;
