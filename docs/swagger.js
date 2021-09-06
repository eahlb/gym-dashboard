const swaggerAutoGen = require('swagger-autogen')();

const output = './server/swagger-output.json';
const routes = [
    './server/routes/workout.js',
    './server/routes/program.js',
];

const doc = {
    info: {
        version: "1.0",
        title: "Gym dashboard",
    },
    // Note: this is not the internal container port.
    host: "localhost:8080",
    basePath: "/api",
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        workout: {
            $workoutName: 'Test workout',
            // TODO: Define enum.
            $status: 'PENDING',
            $excercises: [{
                $excerciseName: 'Test exercise',
                $sets: [{ $reps: '10', $load: '100 kg' }],
            }],
        },
        program: {
            $programName: 'Test program',
            $input: [{ $name: '1RM', $value: '100 kg' }],
            $workouts: [{
                $workoutName: 'Week 1, Workout 1',
                $excercises: [{
                    $excerciseName: 'BP',
                    $sets: [{ $reps: '5', $load: '75% * %1RM%' }],
                }],
            }],
        },
    },
};

swaggerAutoGen(output, routes, doc);
