const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = 4000;

// Settings
app.set('port', PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));