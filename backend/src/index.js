const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello backend!');
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
