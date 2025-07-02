import express from "express";
import cajeroRoutes from "./routes/cajeroRoutes.js";
import retiroRoutes from "./routes/retiroRoutes.js";
import { engine } from "express-handlebars";
import { Projectroot } from "./utils/path.js";
import path from "path";

const app = express();

//handlebars
app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", path.join(Projectroot, "../frontend/views"));

app.use(express.urlencoded());

app.use(express.static(path.join(Projectroot, "../frontend/public/assets")));

app.use(cajeroRoutes); //Middleware
app.use("/retiro", retiroRoutes); //Middleware

app.use((req, res, next) => {
  res.status(404).render("404", { layout: false, title: "404 Page" });
});

app.listen(5005);
console.log("Servidor backend corriendo en http://localhost:5005");
