import express from "express";

const router = express.Router();

const Value_C = [];

router.get("/", (req, res, next) => {
  res
    .status(200)
    .render("Cajero/H_Cajero", { layout: false, title: "Cajero Automatico" });
});
router.post("/", (req, res, next) => {
  console.log(req.body);

  switch (req.body.type) {
    case 1:
      Value_C.push({
        number: req.number,
      });
      break;
    case 2:
      Value_C.push({
        number: req.number,
      });
      break;
    case 3:
      Value_C.push({
        number: req.number,
      });
      break;
  }
  res
    .status(200)
    .render("Cajero/H_Cajero", { layout: false, title: "Cajero Automatico" });
});

export default router;
