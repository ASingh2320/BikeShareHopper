const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSlotSchema = new Schema({
    isAvailable: { type: Boolean, required: true },
    timeLeft: Number
});

const BikeSlot = mongoose.model('BikeSlot', bikeSlotSchema);
module.exports = BikeSlot;

