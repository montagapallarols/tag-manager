const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 4000;

const getTags = () => {
  try {
    const data = fs.readFileSync("tags.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

const tags = getTags();

app.get("/tags", (req, res) => {
  res.send(tags);
});

app.post("/tags", (req, res) => {
  const newTag = req.body;
  console.log("NEW TAG", req.body)
  tags.push(newTag);
  fs.writeFile("tags.json", JSON.stringify(tags), (err) => {
    if (err) {
      res.status(500).send("error");
      return;
    }
    res.status(200).send("success");
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
