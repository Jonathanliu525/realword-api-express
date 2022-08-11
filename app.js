const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');

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

// Load routers
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
