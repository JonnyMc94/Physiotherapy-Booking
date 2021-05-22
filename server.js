// Please check the text file titled COMMENTS_READ
// This will tell you everything you need to know about development and also running the app

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientsRoute = require('./routes/clients');
const therapistRoute = require('./routes/therapist');
const sessionRoute = require('./routes/sessions');
const app = express();

// parse JSON and URL Encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/clients', clientsRoute);
app.use('/therapists', therapistRoute);
app.use('/sessions', sessionRoute);


// watch for Ctrl-C and then close database connection!
process.on("SIGINT", function () {
  console.log("\nDatabase Disconnected!\n");
  process.exit();
});

// Connect to db
mongoose.connect(
  process.env.DB_Connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
  console.log("Connected to database");
  })



app.listen(8000, () => {});