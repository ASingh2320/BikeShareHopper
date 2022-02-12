const BikeRack = require('../models/bikeRack.model');
const router = require('express').Router();

router.route('/new').post((req, res) => {
    const newBikeRack = new BikeRack(req.body);

    newBikeRack.save()
        .then(bikeRack => res.json(bikeRack))
        .catch(err => res.status(400).json("Error! " + err));
});

router.route('/').get((req, res) => {
    BikeRack.find()
        .then(allBikeRacks => res.json(allBikeRacks))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    BikeRack.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/update/:id').put((req, res) => {
    BikeRack.findByIdAndUpdate(req.params.id, req.body)
        .then(bikeRack => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

module.exports = router;