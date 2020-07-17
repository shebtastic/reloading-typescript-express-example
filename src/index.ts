import express from "express"
import { hello, } from "./greeting"
const app = express()


app.use(({method, url}, res, next) => {
    console.log(
        new Date(Date.now()),
        JSON.stringify({
            url,
            method,
        }))
    next()
})


app.get("/", (req, res) => {
    res.send(hello())
})

app.post("/post/something", (req, res) => {
    res.send(`posted ${hello()}`)
})


app.listen(8080)