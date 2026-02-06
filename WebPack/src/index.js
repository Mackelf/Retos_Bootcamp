// src/index.js
import { Factura } from './factura.js';
import { formatearMonto } from './utils.js';

const f1 = new Factura(1, "Empresa ABC", 1500.5);
console.log(f1.obtenerResumen());

console.log("Resumen original:", f1.obtenerResumen());

f1.aplicarDescuento(10);
console.log("Resumen con descuento:", f1.obtenerResumen());

// También puedes usar la utilidad directamente
console.log("Prueba de formato suelta:", formatearMonto(50)); // "50.00"

