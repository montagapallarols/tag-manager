const express = require("express");
const fs = require("fs");

const cors = require("cors");

const app = express();
app.use(cors());

const port = 4000;

const getTags = () => {
  try {
    const data = fs.readFileSync("tags.json", "utf8");
    return JSON.parse(data)
  } catch (err) {
    console.error(err);
  }
};

const saveTags = (tags) => {
  fs.writeFileSync("tags.json", JSON.stringify(tags), "utf8");
};

const tags = getTags();

app.get("/tags", (req, res) => {
  res.send(tags);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
