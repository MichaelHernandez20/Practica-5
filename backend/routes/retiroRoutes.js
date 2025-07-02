import express from "express";
import { mostrarRetiro, procesarRetiro, mostrarFormularioRetiro } from "../controllers/retiroController.js";

const router = express.Router();

router.get("/", mostrarFormularioRetiro);
router.post("/", procesarRetiro);
router.get("/retiro_efectivo", mostrarRetiro);
router.post("/retiro_efectivo", procesarRetiro);

export default router;
