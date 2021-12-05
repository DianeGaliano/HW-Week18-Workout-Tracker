const db = require('../models/workout');
const router = require("express").Router();


router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// new workout
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// update workout
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
        params.id,
        {
            $inc: { 
                totalDuration: req.body.duration 
            },
            $push: {
                exercise: req.body
            }
        },
        {
            new: true,
        }
    )
    .then((dbWorkout) => res.json(dbWorkout))
    .catch((err) => {
        res.status(400).json(err);

    });
});

// get workouts in range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});

module.exports = router;