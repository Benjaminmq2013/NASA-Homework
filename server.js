const express = require("express")
const router = express.Router()
const app = express()
const config = require("./server-config")


app.use(router)

app.use(express.static("dist"))


app.listen((config.api.port), () =>{
    console.log("API listening on http://127.0.0.1:" + config.api.port)
})