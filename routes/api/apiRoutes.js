const Workout = require('../../models/workout');
const router = require('express').Router();

router.get('/api/workout', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// new workout
router.post('/api/workout', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// update workout
router.put('/api/workout/:id', (req, res) => {
    Workout.findOneAndUpdate
})