const swaggerAutoGen = require('swagger-autogen')();
const output = './docs/swagger_output.json';
const routes = ['./server/routes/workout.js'];
// TODO: Can't generate new file...

const doc = {
    info: {
        version: "1.0",
        title: "Gym dashboard",
    },
    // TODO: Host should be dynamic.
    host: "localhost:8080",
    basePath: "/api",
    consumes: ['application/json'],
    produces: ['application/json'],
    // TODO: Check if def. can be built from mongoose model.
    definitions: {
        workout: {
            $workoutName: 'Test workout',
            // TODO: Define enum.
            $status: 'PENDING',
            $excercises: [{
                $excerciseName: 'Test exercise',
                $sets: [{
                    $reps: '10',
                    $load: '100 kg',
                    $time: 120,
                }]
            }],
        },
    },
};

swaggerAutoGen(output, routes, doc);
