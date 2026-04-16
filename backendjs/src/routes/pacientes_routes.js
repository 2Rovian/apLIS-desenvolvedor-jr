import { Router } from "express";

import { getPacientes, registerPaciente } from "../controllers/pacientes_controller.js";

const router = Router();

router.get("/api/v1/pacientes", getPacientes);
router.post("/api/v1/pacientes", registerPaciente);

export default router;