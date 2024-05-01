const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:boss@cluster0.9na7ok8.mongodb.net/")

const todoSchema =  mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo 
}