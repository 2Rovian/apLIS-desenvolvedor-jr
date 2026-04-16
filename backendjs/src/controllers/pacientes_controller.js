import { db } from "../database/connection";

export async function getPacientes(req, res) {
    const [rows] = db.query("SELECT * FROM tb_pacientes");
    return res.json(rows);
}
