const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

const source = process.env.ATLAS_CONNECTION;

app.use(cors());
app.use(express.json());

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB connected.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})