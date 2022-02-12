const BikeSlot = require('../models/bikeSlot.model');
const router = require('express').Router();

router.route('/new').post((req, res) => {
    const newBikeSlot = new bikeSlot(req.body);

    newBikeSlot.save()
        .then(bikeSlot => res.json(bikeSlot))
        .catch(err => res.status(400).json("Error! " + err));
});

router.route('/').get((req, res) => {
    bikeSlot.find()
        .then(allBikeSlots => res.json(allBikeSlots))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    bikeSlot.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/update/:id').put((req, res) => {
    bikeSlot.findByIdAndUpdate(req.params.id, req.body)
        .then(bikeSlot => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

module.exports = router;