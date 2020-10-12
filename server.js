const express = require("express");
const xRouter = express.Router();
const webhooksRouter = require("./webhooks");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

xRouter.get("/areyouthere", (_, res) => {
  res.send("I'm here! 👽");
});

xRouter.get("/%F0%9F%8D%B5", (_, res) => {
  res.status(200);
  res.send("🍓𝟙𝒆");
});

xRouter.get("/%E2%98%95", (_, res) => {
  res.status(418);
  res.send(`
  <html>
  <head>
    <meta charset="utf-8" />
    <title>VIC SIDIOUS'S TEAPOT OF DOOM! 🍵</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="icon" href="favicon.ico"><link href="bundle.css" rel="stylesheet"></head>
  <body style="background: #111; color: springgreen; font-family: 'Dank Mono'; font-size: 2.8vw; display: flex; flex-direction: row">
  <div style="font-size: 2vw; display: flex; align-items: center; width: 40%">
  <pre>
            .------.____\n         .-\'       \\ ___)\n      .-\'         \\\\\\\n   .-\'        ___  \\\\)\n.-\'          /  (\\  |)\n         __  \\  ( | |\n        /  \\  \\__\'| |\n       /    \\____).-\'\n     .\'       /   |\n    /     .  /    |                               \n  .\'     / \\/     |                      \n /      /   \\     |\n       /    /    _|_\n       \\   /    /\\ /\\\n        \\ /    /__v__\\\n         \'    |       |\n              |     .#|\n              |#.  .##|\n              |#######|\n              |#######|    
                  
  </pre>
  </div>
  <div style="display: flex; align-items: center; width: 60%">
  Coffee brewing service refused.
  <br>
  I'm a teapot. 🍵
  <br>
  <br>
  <br>
  <div style="position: absolute; bottom: 20px; right: 20px;">
  #justdoshit <a onMouseOver="this.style.color='whitesmoke'" 
  onMouseOut="this.style.color='springgreen'" 
  style="text-decoration: none; color: whitesmoke;" href="https://www.github.com/sidiousvic">@sidiousvic</a>

 
  </div>
  </div>
  </body>
  </html>
  `);
});

xRouter.use("/webhooks", webhooksRouter);

app.use("/x", xRouter);

const port = 9999;

app.listen(port, () => {
  console.log(`🚀 Server launched @ sidiousvic.dev/x`);
});
