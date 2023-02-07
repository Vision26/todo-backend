const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const todos = [
    {
        name:"",
        description:"",
        imageUrl:"",
        completed:false,
        _id:uuidv4()
    }
]

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

todoRouter.post("/", (req, res) => {
    const todoBody = req.body
    todoBody._id = uuidv4()
    todos.push(todoBody)
    res.send(`${todoBody.name} is SUCCESSFULLY POSTED!`)
})

todoRouter.put("/:todoId", (req, res) => {
    const todoParam = req.params.todoId
    const todoIndex = todos.findIndex(to => to._id === todoParam)
    const todoBod = req.body
    const todoEdit = Object.assign(todos[todoIndex], todoBod)
    res.send(todoEdit)
    
})

todoRouter.delete("/:todoId", (req, res) => {
    const toParam = req.params.todoId
    const toIndex = todos.findIndex(item => item._id === toParam)
    todos.splice(toIndex, 1)
    res.send(`D E L E T E D.`)
})

//Retrieve.

todoRouter.get("/:todoId", (req, res) => {
    const tdoParam = req.params.todoId
    const tdoID = todos.find(t => t._id === tdoParam)
    res.send(tdoID)
})
module.exports = todoRouter 