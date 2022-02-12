const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

app.use(
    express.urlencoded({
        extended: true
    })
)

const source = process.env.ATLAS_CONNECTION;

app.use(cors());
app.use(express.json());

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userRoutes = require('./controllers/user.controller');
const bikeRoutes = require('./controllers/bikeRoutes.controller');
const bikeSlotRoutes = require('./controllers/bikeSlotRoutes.controller');
const bikeRackRoutes = require('./controllers/bikeRackRoutes.controller');
const locationRoutes = require('./controllers/locationRoutes.controller');

app.use('/users', userRoutes);
app.use('/bikeRoutes', bikeRoutes);
app.use('/bikeSlotRoutes', bikeSlotRoutes);
app.use('/bikeRackRoutes', bikeRackRoutes);
app.use('/locationRoutes', locationRoutes);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DB connected.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}.`);
})