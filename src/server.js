const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = 4000;

// Settings
app.set('port', PORT);


// Middleware
app.use(routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));