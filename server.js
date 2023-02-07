const express = require("express")
const app = express()
app.use(express.json())

app.use("/todo", require("./routes/todoRouter.js"))

app.listen(4000, () => {
    console.log("Server Host: 4000...Connected.")
})