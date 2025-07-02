"# Practica-5" 

# Checklist de Desarrollo - Cajero Automático (Módulo: Retiro de Dinero)

## Fase 1: Análisis de Requerimientos
- [ ] Identificación de funcionalidades principales
  - [ ] Retiro de dinero
  - [ ] Validación de usuario (NIP, número de cuenta)
  - [ ] Validación de saldo suficiente
  - [ ] Actualización de saldo tras el retiro
  - [ ] Entrega de comprobante o mensaje de éxito/error
- [ ] Restricciones y reglas del negocio
  - [ ] Límites de retiro (por transacción, por día, etc.)
  - [ ] Denominaciones disponibles
  - [ ] Manejo de errores (NIP incorrecto, fondos insuficientes, etc.)

## Fase 2: Diseño
- [ ] Diseño de la interfaz de usuario
  - [ ] Pantalla de inicio (ingreso de cuenta/NIP)
  - [ ] Menú de opciones (selección de retiro)
  - [ ] Pantalla de ingreso de monto
  - [ ] Mensajes de confirmación y error
- [ ] Diseño de la arquitectura del sistema
  - [ ] Rutas y controladores (backend)
  - [ ] Estructura de vistas (frontend)
  - [ ] Modelo de datos (usuarios, cuentas, transacciones)

## Fase 3: Implementación
- [ ] Backend
  - [ ] Rutas para autenticación y retiro
  - [ ] Lógica de validación y actualización de saldo
  - [ ] Manejo de sesiones o tokens
- [ ] Frontend
  - [ ] Formularios para ingreso de datos
  - [ ] Visualización de mensajes y comprobantes
- [ ] Integración con base de datos o almacenamiento temporal

## Fase 4: Pruebas
- [ ] Pruebas unitarias de la lógica de retiro
- [ ] Pruebas de integración (flujo completo)
- [ ] Pruebas de interfaz de usuario
- [ ] Pruebas de manejo de errores y casos límite

## Fase 5: Documentación y Entrega
- [ ] Documentación del código y del usuario
- [ ] Manual de instalación y uso
- [ ] Entrega final y presentación

---

Este checklist sirve como guía para asegurar que todas las fases y puntos clave del desarrollo del módulo de retiro de dinero del cajero automático sean cubiertos y verificados. 

## Estructura Modular Propuesta

```
/backend
  /controllers
    (a crear: cajeroController.js, retiroController.js)
  /models
    (a crear: usuario.js, cuenta.js, transaccion.js)
  /routes
    - cajeroRoutes.js
    - retiroRoutes.js
  /utils
    - path.js
  - app.js
  - package.json
  - package-lock.json

/frontend
  /public
    /assets
      /css
        (todos los archivos y carpetas css actuales)
      /js
        (todos los archivos y carpetas js actuales)
  /views
    /Cajero
      - H_Cajero.hbs
    /Retiro
      - V_Retiro.hbs
    - 404.hbs
  - index.html (si aplica)
```

### Pasos para migrar el proyecto
1. Crear las carpetas `/backend` y `/frontend`.
2. Mover los archivos y carpetas a su nueva ubicación según el esquema anterior.
3. Renombrar archivos de rutas para seguir la convención modular (`RouteCajero.js` → `cajeroRoutes.js`, etc.).
4. Actualizar los imports/requires en el código para reflejar las nuevas rutas.
5. (Opcional) Crear carpetas `controllers` y `models` en backend para separar la lógica y los datos, si se desea mayor modularidad.

Esta organización permite separar claramente la lógica del backend y la presentación del frontend, facilitando el mantenimiento y la escalabilidad del proyecto. 
