// dependencies
const express = require('express');
const methodOverride = require('method-override');
const appController = require('./src/controllers/app');

// configuration
const app = express();
app.set('views', './src/views');
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', appController);

// test route
app.get('/testhtml', (req, res) => {
  res.render('test');
});

const PORT = 4000;
app.listen(PORT, () => [console.log(`Listening on port ${PORT}`)]);
