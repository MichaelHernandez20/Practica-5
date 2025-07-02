import express from "express";
import RouteCajero from "./Routes/RouteCajero.js";
import RouteRetiro from "./Routes/RouteRetiro.js";
import { engine } from "express-handlebars";
import { Projectroot } from "./utils/path.js";
import path from "path";

const app = express();

//handlebars
app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded());

app.use(express.static(path.join(Projectroot, "public")));

app.use(RouteCajero); //Middleware
app.use("/retiro", RouteRetiro); //Middleware

app.use((req, res, next) => {
  res.status(404).render("404", { layout: false, title: "404 Page" });
});

app.listen(5005);
