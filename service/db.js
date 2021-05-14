const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true })
const User = mongoose.model('User', {
    orderid:mongoose.Types.ObjectId,
    title: String,
    description: String,
    status: Boolean
})
const Task = mongoose.model('Task', {
    orderid:mongoose.Types.ObjectId,
    title: String,
    description: String,
    status: Boolean
})
module.exports = {
    User,
    Task
}