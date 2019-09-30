const express = require('express');

const Task = require('../models/task');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name } = req.body;

    try {
        if(await Task.findOne({ name }))
            return res.status(400).send({ error: "task's name already exists"})

        const task = await Task.create(req.body);

        return res.send({ task });
    } catch (error) {
        return res.status(400).send({error: 'task registration failed'});
    }
});

router.get('/list', async (req, res) => {

    try {
        const tasks = await Task.find();
        return res.send(tasks);
    } catch (error) {
        return res.status(400).send({error: 'get tasks failed'})
    }
});

module.exports = app => {
    return app.use('/tasks', router);
}