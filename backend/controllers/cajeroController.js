// Controlador para la lógica del cajero automático
import { usuarios, cuentas } from "../data/db.js";

export const mostrarCajero = (req, res) => {
  res.status(200).render("Cajero/H_Cajero", { layout: false, title: "Cajero Automático", error: null, cuenta: "", pin: "" });
};

export const procesarOperacion = (req, res) => {
  const { cuenta, pin } = req.body;
  const usuario = usuarios.find(u => u.nip === pin);
  const cuentaObj = cuentas.find(c => c.numero === cuenta && usuario && c.usuarioId === usuario.id);

  if (!usuario || !cuentaObj) {
    return res.status(200).render("Cajero/H_Cajero", {
      layout: false,
      title: "Cajero Automático",
      error: "Cuenta o PIN incorrectos.",
      cuenta,
      pin
    });
  }

  // Redirigir a /retiro con los datos de cuenta y usuario por query params
  return res.redirect(`/retiro?cuenta=${cuentaObj.numero}&usuario=${encodeURIComponent(usuario.nombre)}`);
}; 