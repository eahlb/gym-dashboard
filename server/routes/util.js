const GET_ALL = (func, param, res) => {
    func(param)
        .then((value) => res.status(200).json(value))
        .catch((reason) => res.status(500).json(reason));
};

const GET = (func, id, res, transform = x => x) => {
    func(id)
        .map(transform)
        .then((value) => res.status(value ? 200 : 404).json(value))
        .catch((reason) => res.status(500).json(reason));
};

const POST = (func, data, res) => {
    func(data)
        .then((value) =>
            res.status(201)
                .location(value._id)
                .json(value))
        .catch((reason) => res.status(500).json(reason));
}

module.exports = {
    GET_ALL: GET_ALL,
    GET: GET,
    POST: POST,
}