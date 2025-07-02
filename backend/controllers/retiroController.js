// Controlador para la lógica de retiro de efectivo
import { cuentas, transacciones, Transaccion } from "../data/db.js";

// Variable temporal para comprobante (simulación de sesión)
let ultimoComprobante = null;

function calcularDesglose(monto, modo) {
  let denominaciones;
  if (modo === "Modo_1") {
    denominaciones = [500, 100];
  } else if (modo === "Modo_2") {
    denominaciones = [1000, 200];
  } else {
    denominaciones = [1000, 500, 200, 100]; // Eficiente
  }
  let restante = monto;
  const desglose = {1000: 0, 500: 0, 200: 0, 100: 0};
  for (const billete of denominaciones) {
    desglose[billete] = Math.floor(restante / billete);
    restante = restante % billete;
  }
  return desglose;
}

export const mostrarRetiro = (req, res) => {
  if (!ultimoComprobante) {
    return res.redirect("/");
  }
  res.status(200).render("Retiro/V_Retiro", {
    layout: false,
    title: "Desglose del Retiro",
    ...ultimoComprobante,
    error: null
  });
  ultimoComprobante = null;
};

export const mostrarFormularioRetiro = (req, res) => {
  // Obtener datos de query params
  const { cuenta, usuario } = req.query;
  res.status(200).render("Retiro/F_Retiro", {
    layout: false,
    title: "Retiro de Efectivo",
    cuenta,
    usuario,
    error: null
  });
};

export const procesarRetiro = (req, res) => {
  const { cuenta, monto, modo } = req.body;
  const cuentaObj = cuentas.find(c => c.numero === cuenta);
  const montoNum = parseFloat(monto);

  if (!cuentaObj) {
    return res.status(200).render("Retiro/F_Retiro", {
      layout: false,
      title: "Retiro de Efectivo",
      cuenta,
      usuario: req.body.usuario,
      error: "Cuenta no encontrada.",
      monto,
      modo
    });
  }

  if (isNaN(montoNum) || montoNum <= 0) {
    return res.status(200).render("Retiro/F_Retiro", {
      layout: false,
      title: "Retiro de Efectivo",
      cuenta,
      usuario: req.body.usuario,
      error: "Monto inválido.",
      monto,
      modo
    });
  }

  if (cuentaObj.saldo < montoNum) {
    return res.status(200).render("Retiro/F_Retiro", {
      layout: false,
      title: "Retiro de Efectivo",
      cuenta,
      usuario: req.body.usuario,
      error: "Saldo insuficiente.",
      monto,
      modo
    });
  }

  // Calcular desglose de billetes
  const desglose = calcularDesglose(montoNum, modo);
  const totalEntregado = desglose[1000]*1000 + desglose[500]*500 + desglose[200]*200 + desglose[100]*100;
  if (totalEntregado !== montoNum) {
    return res.status(200).render("Retiro/F_Retiro", {
      layout: false,
      title: "Retiro de Efectivo",
      cuenta,
      usuario: req.body.usuario,
      error: "No es posible entregar el monto exacto con las denominaciones seleccionadas.",
      monto,
      modo
    });
  }

  // Actualizar saldo y registrar transacción
  cuentaObj.saldo -= montoNum;
  transacciones.push(new Transaccion(
    transacciones.length + 1,
    cuentaObj.numero,
    "retiro",
    montoNum,
    new Date()
  ));

  // Guardar comprobante temporal
  const now = new Date();
  ultimoComprobante = {
    exito: `Retiro exitoso. Nuevo saldo: $${cuentaObj.saldo}`,
    saldo: cuentaObj.saldo,
    cuenta: cuentaObj.numero,
    desglose,
    total: montoNum,
    fecha: now.toLocaleDateString(),
    hora: now.toLocaleTimeString()
  };

  // Redirigir a comprobante
  res.redirect("/retiro/retiro_efectivo");
}; 