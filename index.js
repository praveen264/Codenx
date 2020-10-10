const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
const dbConfig = require('./config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(express.json());


// const bookmarkRouter=require('./routes/bookmarks');
// const tagRouter=require('./routes/tags');
const answerRouter=require('./routes/answers');
const questionRouter=require('./routes/questions');
const optionRouter=require('./routes/options');




// app.use('/bookmarks',bookmarkRouter);
// app.use('/tags',tagRouter);
app.use('/answers',answerRouter);
app.use('/questions',questionRouter);
app.use('/options',optionRouter);
// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});