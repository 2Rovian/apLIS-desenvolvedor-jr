import express from "express";
import pacientes_routes from "./routes/pacientes_routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(pacientes_routes);

app.get("/hello-world", (req, res) => {
    res.json({"msg": "hello, world!"});
});

app.listen(port, () => {
    console.log("Server running on PORT: ", port)
});