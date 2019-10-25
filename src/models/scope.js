const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const ScopeSchema = new mongoose.Schema({
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

const Scope = mongoose.model('Scope', ScopeSchema);

module.exports = Scope;