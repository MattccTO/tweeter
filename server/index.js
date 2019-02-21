'use strict';

// Basic express setup and MongoDB setup

const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

const app = express();

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


MongoClient.connect(MONGODB_URI, (err, mongo) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Successfully connected to DB: ${MONGODB_URI}`);
  const DataHelpers = require('./lib/data-helpers.js')(mongo);
  const tweetsRoutes = require('./routes/tweets')(DataHelpers);
  app.use('/tweets', tweetsRoutes);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
