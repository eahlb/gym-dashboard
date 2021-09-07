const compute = (workout) => {
    const excercises = [];
    const input = workout.input;
    workout.excercises.forEach((ex) => {
        // TODO: Compute excercises
        excercises.push(ex);
    });
    workout.excercises = excercises;
    return workout;
}

module.exports = compute;