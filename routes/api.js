const db = require('../models/Workout');
const router = require("express").Router();


router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
        dbWorkout.forEach((workout) => {
            var total = 0;
            workout.exercise.forEach((e) => {
                total += e.duration;
            });
            workout.totalDuration = total;
        });
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// new workout
router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// update workout
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercise: body
            },
            $inc: { 
                totalDuration: req.body.duration 
            },
        },
        {
            new: true,
           
        }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});

// get workouts in range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then((data) => {
        consol.log("WORKOUTS");
        consol.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);

    });
});

module.exports = router;