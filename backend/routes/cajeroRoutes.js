import express from "express";
import { mostrarCajero, procesarOperacion } from "../controllers/cajeroController.js";

const router = express.Router();

router.get("/", mostrarCajero);
router.post("/", procesarOperacion);

export default router;
