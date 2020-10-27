const {
    User
} = require('../models');

const UserController = {

    signup(req, res) {
        User.create(req.body)
            .then(user => res.status(201).send(user))
    }
}

module.exports = UserController;