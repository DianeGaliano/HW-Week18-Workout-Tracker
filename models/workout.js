const mongo = require.apply('mongoose');

const Schema = mongoose.Schema;

const workoutTable = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date(),
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "What kind of exercise?"
                },
                name: {
                    type: String,
                    trim: true,

                },
                duration: {
                    type: Number,
                    required: "Please enter the duration of your exercise.",
                },
                weight: {
                    type: Number,
                    default: 0,
                },
                reps: {
                    type: Number,
                    default: 0,
                },
                sets: {
                    type: Number,
                    default: 0,
                },
                distance: {
                    type: Number,
                    default: 0 
                },
            }
        ],
    },
    {
        toJSON: {
        virtuals: true,
        },
    }
);

workoutsSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mon.model('Workout', workoutTable);

model.exports = Workout;

