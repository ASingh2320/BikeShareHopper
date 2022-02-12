const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bikeSlotSchema = require('./bikeSlotSchema');

const bikeRackSchema = new Schema({
    type: [bikeSlotSchema]
});

const BikeRack = mongoose.model('BikeRack', bikeRackSchema);
module.exports = BikeRack;

