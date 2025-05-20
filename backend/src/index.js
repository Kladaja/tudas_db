const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/articles', require('./routes/articles'));
app.use('/users', require('./routes/users'));
app.use('/lectors', require('./routes/lectors'));
app.use('/bugs', require('./routes/bugs'));
app.use('/keywords', require('./routes/keywords'));
app.use('/categories', require('./routes/categories'));

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});