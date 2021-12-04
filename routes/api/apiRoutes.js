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
    const id = req.params.id;
    const body = req.body;
    Workout.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                exercise: body
            }
        },
        {
            new: true
        }
    )
    .then((data) => {
        res.status(400).json(err);

    });
});

// get workouts in range
router.get('/api/workout/range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log("All workouts");
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;