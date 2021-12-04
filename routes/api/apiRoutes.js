const Workout = require('../../models');
const router = require('express').Router();

router.get('/api/workouts', (req, res) => {
    Workouts.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// new workout
router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// update workout
router.put('/api/workouts/:id', (req, res) => {
    Workouts.findOneAndUpdate(
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
router.get('/api/workouts/range', (req, res) => {
    Workouts.find({})
    .then((data) => res.json(data))
    .catch((err) => {
        res.status(400).json(err);

    });
});

module.exports = router;