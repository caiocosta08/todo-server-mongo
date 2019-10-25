const express = require('express');

const Status = require('../models/status');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name } = req.body;

    try {
        if(await Status.findOne({ name }))
            return res.status(400).send({ error: "status's name already exists"})

        const status = await Status.create(req.body);

        return res.send({ status });
    } catch (error) {
        return res.status(400).send({error: 'status registration failed'});
    }
});

router.get('/list', async (req, res) => {

    try {
        const statuses = await Status.find();
        return res.send(statuses);
    } catch (error) {
        return res.status(400).send({error: 'get statuses failed'})
    }
});

module.exports = app => {
    return app.use('/statuses', router);
}