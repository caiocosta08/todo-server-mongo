const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    scope_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    status_id: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        required: true,
    },
    date_todo: {
        type: Date,
        required: true
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

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;