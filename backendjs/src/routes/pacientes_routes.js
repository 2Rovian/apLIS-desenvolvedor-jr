import { Router } from "express";

import { getPacientes } from "../controllers/pacientes_controller";

const router = Router();

router.get("/api/v1/pacientes", getPacientes);

export default router;