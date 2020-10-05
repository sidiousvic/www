var express = require("express");
var webhookRouter = express.Router();
var c_p = require("child_process");
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
    await deploy(res, service);
  }
});

async function deploy(res, service) {
  const runDeployScript =
    service === "sidiousvicdev"
      ? "./deploy.sh"
      : `cd ${service} && ./deploy.sh`;
  try {
    await exec(`${runDeployScript}`);
    console.log("🔧 Running deploy script...");
    return res.sendStatus(200).send(`⚙ ${service} has been deployed!`);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(`⚠️ ${service} was unable to deploy. `);
  }
}

function exec(command, options = { log: false, cwd: process.cwd() }) {
  if (options.log) console.log(command);
  return new Promise((done, failed) => {
    c_p.exec(command, { ...options }, (err, stdout, stderr) => {
      if (err) {
        err.stdout = stdout;
        err.stderr = stderr;
        failed(err);
        throw new Error("⚠️ There was an error executing the deploy script.");
      }
      console.log("🔨 Command executed.");
      done({ stdout, stderr });
    });
  });
}

module.exports = webhookRouter;
