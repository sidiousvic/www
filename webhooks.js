var express = require("express");
var webhookRouter = express.Router();
var childProcess = require("child_process");
var githubUsername = "sidiousvic";

webhookRouter.use(function timelog(req, res, next) {
  console.log("Webhook @ ", Date.now());
  next();
});

webhookRouter.post("/build/:service", async (req, res) => {
  const { sender, ref } = req.body;
  const { service } = req.params;
  if (ref.indexOf("prod") > -1 && sender.login === githubUsername)
    await deploy(res, service);
});

async function deploy(res, service) {
  childProcess.exec(`cd ${service} && ./deploy.sh`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(`${service} was unable to deploy. 💥`);
    }
    return res.status(200).send(`${service} has been deployed! ⚙️`);
  });
}

module.exports = webhookRouter;
