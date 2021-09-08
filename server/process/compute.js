const replace = (str, parameters) => {
    let result = str;
    parameters.forEach(p => result = result.replace(`%${p.name}%`, p.value));
    return result;
};

const compute = (workout) => {
    const excercises = [];
    const parameters = workout.parameters;
    workout.excercises.forEach((ex) => {
        const result = {
            excerciseName: replace(ex.excerciseName, parameters),
            sets: [],
        };
        ex.sets.forEach(set => {
            // TODO: Replace eval and formatting with some computing model.
            const rawLoad = replace(set.load, parameters)
            const load = eval(rawLoad);
            result.sets.push({
                reps: replace(set.reps, parameters),
                load: Math.floor(load / 2.5) * 2.5 + ' kg',
            });
        });
        excercises.push(result);
    });
    workout.excercises = excercises;
    return workout;
};

module.exports = compute;