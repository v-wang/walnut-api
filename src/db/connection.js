const mongoose = require('mongoose');
dbName = 'walnut-api';

const mongoURI =
  process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : `mongodb://127.0.0.1/${dbName}`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((instance) => {
    console.log(`Connected to db: ${instance.connections[0].name}`);
  })
  .catch((error) => console.log('Connection failed!', error));

module.exports = mongoose;
