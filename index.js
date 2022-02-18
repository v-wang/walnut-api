const express = require('express');
const app = express();
app.set('view engine', 'hbs');

const appController = require('./src/controllers/app');
app.use('/', appController);

const PORT = 4000;
app.listen(PORT, () => [console.log(`Listening on port ${PORT}`)]);
