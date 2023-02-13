const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
  tags.push(newTag);
  fs.writeFile("tags.json", JSON.stringify(tags), (err) => {
    if (err) {
      res.status(500).send("Error writing JSON file");
      return;
    }
    res.status(200).send("Tag added successfully");
  });
});

app.delete("/tags/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("tags.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
    } else {
      let items = JSON.parse(data);
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) {
        res.status(404).send("Tag not found");
      } else {
        items.splice(index, 1);
        fs.writeFile("tags.json", JSON.stringify(items), (err) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error writing file");
          } else {
            res.status(200).send("Tag successfully deleted");
          }
        });
      }
    }
  });
});


app.put('/tags/:id', (req, res) => {
    const id = req.params.id;
    const value = req.body.value;
  
    const tag = tags.find(tag => tag.id === id);
  
    if (tag) {
      // Update value field with
      tag.value = value;
      res.status(200).json(tag);
    } else {
      res.status(404).send(`Tag with id ${id} not found.`);
    }
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
