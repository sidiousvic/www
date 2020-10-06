const express = require("express");
const webhookRouter = express.Router();
const u = require("util");
const spawn = u.promisify(require("child_process").spawn);
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
  if (service !== "sidiousvic") const cd = `cd ${service} `;
  console.log("Pulling...");
  await spawn(`${cd}git pull`);
  console.log("Deploying...");
  await spawn(`${cd}npm run deploy`);
  console.log("Done!");
}

deploy("sidiousvic");

module.exports = webhookRouter;
