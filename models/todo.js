//setting up the mongoose
const mongoose = require('mongoose');


//defining the schema of db
const todoSchema =new mongoose.Schema({
    work: {
        type: String,
        required: true
    },
    org: {
        type: String,
        required: true
    },
    duedate: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo; 