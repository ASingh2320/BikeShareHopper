const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    distanceTravelled: Number, 
    timeTravelled: Number
});

const Bike = mongoose.model('Bike', bikeSchema);
module.exports = Bike;

