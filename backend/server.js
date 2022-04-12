
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

mongoose.connection.once('open', () => {
    console.log("mongodb connected");
})

const User = require('./Routes/User')
const company = require('./Routes/Company')
app.use('/user', User)
app.use('/company', company)


app.listen(port, () => {
    console.log("server running on port :-" + port);
});