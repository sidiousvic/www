var express = require("express");
var webhookRouter = express.Router();
var childProcess = require("child_process");
var githubUsername = "sidiousvic";

webhookRouter.use(function timelog(req, _, next) {
  const { path: reqUrl } = req;
  console.log("Webhook @", reqUrl, new Date().now);
  next();
});

webhookRouter.post("/build/:service", async (req, res) => {
  const { sender, ref } = req.body;
  const { service } = req.params;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername) {
    return await deploy(res, service);
  }
});

async function deploy(res, service) {
  const runDeployScript =
    service === "sidiousvicdev"
      ? "./deploy.sh"
      : `cd ${service} && ./deploy.sh`;
  childProcess.exec(`${runDeployScript}`, (err) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500).send(`${service} was unable to deploy. 💥`);
    }
    return res.sendStatus(200).send(`${service} has been deployed! ⚙️`);
  });
}

module.exports = webhookRouter;
