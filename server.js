const express = require('./my-express');
const bodyParser = require('./body-parser');

const app = express.app();

app.use(bodyParser);

app.get('/names', (req, res) => {
  res.end('names');
})
app.get('/books', (req, res) => {
  res.end('books');
})

app.listen(3000, () => {
  console.log('Server started!');
});
