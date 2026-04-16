import { db } from "../database/connection.js";

export async function getPacientes(req, res) {
    try {
        const [rows] = await db.query("SELECT * FROM tb_pacientes");
        return res.json(rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Erro ao listar pacientes" });
    }

}

export async function registerPaciente(req, res) {
    try {
        const { id, nome, dataNascimento, carteirinha, cpf } = req.body;

        if (!id || !nome || !dataNascimento || !carteirinha || !cpf) {
            return res.status(400).json({ message: "São campos obrigatórios: id, nome, carteirinha, dataNascimento, cpf" });
        }

        await db.query(
            "INSERT INTO tb_pacientes (id, nome, dataNascimento, carteirinha, cpf) VALUES (?, ?, ?, ?, ?)",
            [id, nome, dataNascimento, carteirinha, cpf]
        );

        return res.status(201).json({
            status: 201,
            message: "Paciente registrado com sucesso.",
            data: {
                id,
                nome,
                dataNascimento,
                carteirinha,
                cpf
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: "Erro ao registrar paciente.",
        })
    }

}