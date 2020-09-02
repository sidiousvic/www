const childProcess = require("child_process");

module.exports = function deploy(req, res) {
  const sender = req.body.sender;
  const branch = req.body.ref;
  const ghusername = "sidiousvic";

  if (branch.indexOf("prod") > -1 && sender.login === ghusername) {
    childProcess.exec(`cd ${__dirname} && sh deploy.sh`, function (
      err,
      stdout,
      stderr
    ) {
      if (err) {
        console.error("Deployment failed", err);
        return res.send(500);
      }
      res.send(200);
    });
  }
};
