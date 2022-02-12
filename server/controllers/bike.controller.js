const Bike = require('../models/bike.model');
const router = require('express').Router();

router.route('/new').post((req, res) => {
    const newBike = new Bike(req.body);

    newBike.save()
        .then(bike => res.json(bike))
        .catch(err => res.status(400).json("Error! " + err));
});

router.route('/').get((req, res) => {
    Bike.find()
        .then(allBikes => res.json(allBikes))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Bike.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

router.route('/update/:id').put((req, res) => {
    Bike.findByIdAndUpdate(req.params.id, req.body)
        .then(bike => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err));
});

module.exports = router;