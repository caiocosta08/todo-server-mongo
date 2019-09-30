const express = require('express');

const Category = require('../models/category');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { name } = req.body;

    try {
        if(await Category.findOne({ name }))
            return res.status(400).send({ error: "category's name already exists"})

        const category = await Category.create(req.body);

        return res.send({ category });
    } catch (error) {
        return res.status(400).send({error: 'category registration failed'});
    }
});

router.get('/list', async (req, res) => {

    try {
        const categories = await Category.find();
        return res.send(categories);
    } catch (error) {
        return res.status(400).send({error: 'get categories failed'})
    }
});

module.exports = app => {
    return app.use('/categories', router);
}