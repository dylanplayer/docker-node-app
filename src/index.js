const express = require('express');
const app = express();

app.use(express.static('src/static/'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
