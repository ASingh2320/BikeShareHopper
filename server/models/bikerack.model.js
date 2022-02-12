const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeRackSchema = new Schema({
    locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
    bikeSlots: [{ type: Schema.Types.ObjectId, ref: 'BikeSlot' }]
});

const BikeRack = mongoose.model('BikeRack', bikeRackSchema);
module.exports = BikeRack;

