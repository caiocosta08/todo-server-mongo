const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const url = process.env.MONGO_URL;
const local_url = 'mongodb://localhost/dbtodo';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;