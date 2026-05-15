const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

const INSTANCE = process.env.INSTANCE_NAME || os.hostname();

app.get('/', (req, res) => {
  res.send(`Hello from ${INSTANCE}!`);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});