const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send("This is the API page");
});
app.listen(8080);
console.log("Listening on port 8080");
