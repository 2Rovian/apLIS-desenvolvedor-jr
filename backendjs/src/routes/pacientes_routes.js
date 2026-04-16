import { Router } from "express";

import { deletePacienteById, getPacienteById, getPacientes, registerPaciente } from "../controllers/pacientes_controller.js";

const router = Router();

router.get("/api/v1/pacientes", getPacientes);
router.get("/api/v1/pacientes/:id", getPacienteById);
router.post("/api/v1/pacientes", registerPaciente);
router.delete("/api/v1/pacientes/:id", deletePacienteById);

export default router;