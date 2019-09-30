const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const StatusSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Status = mongoose.model('Status', StatusSchema);

module.exports = Status;