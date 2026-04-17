import express from "express";
import pacientes_routes from "./routes/pacientes_routes.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(pacientes_routes);

app.get("/hello-world", (req, res) => {
    res.json({"msg": "hello, world!"});
});

app.listen(port, () => {
    console.log("Server running on PORT: ", port)
});