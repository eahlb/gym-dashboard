const repo = require('../database/repository');

const evalRule = function (output) {
    return (parameters, rules) => {
        parameters
            .forEach(p => rules
                .filter(r => r.for == p.name)
                .forEach(r => {
                    // TODO: Build away eval
                    const rule = r.increase.replace('X', output);
                    const res = eval(rule);
                    p.value = Number(p.value) + Number(res);
                })
            );
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