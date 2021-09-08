const replace = (str, input) => {
    let result = str;
    input.forEach(i => {
        console.log(result)
        result = result.replace(`%${i.name}%`, i.value);
    });
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
            // TODO: Compute load.  
            result.sets.push({
                reps: replace(set.reps, input),
                load: replace(set.load, input),
            })
        })
        excercises.push(result);
    });
    workout.excercises = excercises;
    return workout;
};

module.exports = compute;