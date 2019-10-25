const express = require('express');

const Scope = require('../models/scope');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name } = req.body;

    try {
        if(await Scope.findOne({ name }))
            return res.status(400).send({ error: "scope's name already exists"})

        const scope = await Scope.create(req.body);

        return res.send({ scope });
    } catch (error) {
        return res.status(400).send({error: 'scope registration failed'});
    }
});

router.get('/list', async (req, res) => {

    try {
        const scopes = await Scope.find();
        return res.send(scopes);
    } catch (error) {
        return res.status(400).send({error: 'get scopes failed'})
    }
});

module.exports = app => {
    return app.use('/scopes', router);
}