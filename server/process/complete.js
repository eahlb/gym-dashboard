const repo = require('../database/repository');

const evalRule = function (output) {
    return (parameters, rules) => {
        // TODO: update parameters based on rules and output
        console.log(output)
        console.log(parameters)
        console.log(rules)
    }
}

const complete = (result) => {
    repo.updateWorkout(
        result.workout,
        workout => { workout.status = 'COMPLETED' },
    );
    // Update parameters if workout has output
    if (result.output) {
        repo.updateParameters(
            result.workout,
            evalRule(result.output),
        );
    }
}

module.exports = complete