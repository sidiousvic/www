const express = require("express");
const webhookRouter = express.Router();
const { spawn } = require("child_process");
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
  let cd = "";
  if (service !== "sidiousvic") cd = `cd ${service} `;
  console.log("Pulling...");
  spawn(`${cd}git pull`);
  console.log("Deploying...");
  spawn(`${cd}npm run deploy`);
  console.log("Done!");
}

deploy("sidiousvic");

module.exports = webhookRouter;
