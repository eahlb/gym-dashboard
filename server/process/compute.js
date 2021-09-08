const replace = (str, input) => {
    let result = str;
    input.forEach(i => result = result.replace(`%${i.name}%`, i.value));
    return result;
};

const compute = (workout) => {
    const excercises = [];
    const input = workout.input;
    workout.excercises.forEach((ex) => {
        const result = {
            excerciseName: replace(ex.excerciseName, input),
            sets: [],
        };
        ex.sets.forEach(set => {
            // TODO: Replace eval and formatting with some computing model.
            const rawLoad = replace(set.load, input)
            const load = eval(rawLoad);
            result.sets.push({
                reps: replace(set.reps, input),
                load: Math.floor(load / 2.5) * 2.5 + ' kg',
            });
        });
        excercises.push(result);
    });
    workout.excercises = excercises;
    return workout;
};

module.exports = compute;