const Location = require('../models/location.model');
const router = require('express').Router();

router.route('/new').post((req, res) => {
    const newLocation = new Location(req.body);

    newLocation.save()
        .then(location => res.json(location))
        .catch(err => res.status(400).json("Error! " + err));
});

router.route('/').get((req, res) => {
    Location.find()
        .then(allLocations => res.json(allLocations))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Location.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/update/:id').put((req, res) => {
    Location.findByIdAndUpdate(req.params.id, req.body)
        .then(bikeRack => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

module.exports = router;