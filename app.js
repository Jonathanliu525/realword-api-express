const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.port || 3000;

/**
 * Middlewares
 */
// Logger
app.use(morgan('dev'));
// CORS
app.use(cors());
// Body Parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Post request received');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
