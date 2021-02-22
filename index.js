//You'll need to run  node index.js and then just go to your
//browser at the localhost url it spits out to get the agent to report data.
// this app is associated with v2 FSO user account
// Swap the license key on the newrelic.js file to go between the 2
// use port 3000 for local testing

const express = require("express");
require("newrelic");
const app = express();
// const port = 3000;
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Example app listening at http://${port}`);
});
