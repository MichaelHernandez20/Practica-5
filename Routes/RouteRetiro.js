import express from "express";

const router = express.Router();

router.get("/retiro_efectivo", (req, res, next) => {
  res.status(200).render("Retiro/V_Retiro", {
    layout: false,
    title: "Desglose del Retiro",
  });
});
router.post("/retiro_efectivo", (req, res, next) => {
  res.status(200).render("Retiro/V_Retiro", {
    layout: false,
    title: "Desglose del Retiro",
  });
});

export default router;
