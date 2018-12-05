const express = require('./my-express');
const bodyParser = require('./body-parser');

const app = express.app();

app.use(bodyParser);

app.use((req, res) => {
  console.log('JSON FROM CLIENT:')
  console.log(req.body);
  res.end('Response');
});

app.listen(3000, () => {
  console.log('Server started!');
});
