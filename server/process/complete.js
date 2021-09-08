const repo = require('../database/repository');

const complete = (result) => {
    repo.updateWorkout(
        result.workout,
        workout => { workout.status = 'COMPLETED' },
    );
}

module.exports = complete