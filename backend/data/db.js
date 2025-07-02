// Archivo centralizado de datos simulados para el backend

// Clases
export class Usuario {
  constructor(id, nombre, nip) {
    this.id = id;
    this.nombre = nombre;
    this.nip = nip;
  }
}

export class Cuenta {
  constructor(numero, usuarioId, saldo) {
    this.numero = numero;
    this.usuarioId = usuarioId;
    this.saldo = saldo;
  }
}

export class Transaccion {
  constructor(id, cuentaNumero, tipo, monto, fecha) {
    this.id = id;
    this.cuentaNumero = cuentaNumero;
    this.tipo = tipo; // 'retiro', 'deposito', etc.
    this.monto = monto;
    this.fecha = fecha;
  }
}

// Datos simulados
export const usuarios = [
  new Usuario(1, "Juan Perez", "1234"),
  new Usuario(2, "Ana López", "5678"),
];

export const cuentas = [
  new Cuenta("111111", 1, 5000),
  new Cuenta("222222", 2, 3000),
];

export const transacciones = []; 