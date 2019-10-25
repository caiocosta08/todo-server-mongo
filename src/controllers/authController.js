const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try {
        if(await User.findOne({ email }))
            return res.status(400).send({ error: 'user already exists'})

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({ user });
    } catch (error) {
        return res.status(400).send({error: 'registration failed'});
    }
});

router.get('/list', async (req, res) => {

    try {
        const users = await User.find();
        users.map((user) => {
            user.password = undefined;
        })

        return res.send(users);
    } catch (error) {
        return res.status(400).send({error: 'get users failed'})
    }
});

module.exports = app => {
    return app.use('/auth', router);
}