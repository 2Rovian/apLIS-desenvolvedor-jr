import express from "express";

const app = express();
const port = 3000;

app.get("/hello-world", (req, res) => {
    res.json({"msg": "hello, world!"});
});

app.listen(port, () => {
    console.log("Server running on PORT: ", port)
});