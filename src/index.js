const app = require('express')();

app.get('/', (req, res) => {
  res.json({
    message: 'Docker is working 🐳',
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
