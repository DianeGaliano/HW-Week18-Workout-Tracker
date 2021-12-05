const Workout = require('../models/workout');
const router = require("express").Router();


router.get('/api/workout', (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// new workout
router.post('/api/workout', ({body}, res) => {
    Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// update workout
router.put('/api/workout/:id', (req, res) => {
    Workout.findOneAndUpdate(
        params.id,
        {
            $push: {
                exercise: body
            }
        },
        {
            new: true,
            runValidators: true
        }
    )
    .then((data) => res.json(data))
    .catch((err) => {
        res.status(400).json(err);

    });
});

// get workouts in range
router.get('/api/workout/range', (req, res) => {
    Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => {
        res.status(400).json(err);

    });
});

module.exports = router;