const dotenv = require('dotenv');
require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId


const User = new Schema({
    email: { type: String, unique: true },
    password: String,
})

const Todo = new Schema({
    title: String,
    description: String,
    category: String,
    done: String
})

const userModel = mongoose.model('users', User);
const todoModel = mongoose.model('todos', Todo);

module.exports = {
    userModel,
    todoModel
}

