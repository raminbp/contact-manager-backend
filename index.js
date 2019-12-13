const dbConf = require('./config/db');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
const contactsController= require('./contacts/ContactController');




mongoose.connect(dbConf.URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`Database connected successfully at ${dbConf.URL}`);
    })
    .catch(error => {
        console.log(`Database connection failure: ${error}`)
    });




app.use('/contacts', contactsController);
app.listen(port, () => {
    console.log(`Application connected to port ${port}`);
});
