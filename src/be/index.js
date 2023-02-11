const express = require("express");

const cors = require("cors")

const app = express();
app.use(cors())

const port = 4000

app.get('/', (req, res) => {
  res.send('Client connected to Express server')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})