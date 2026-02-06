// src/Factura.js
import { formatearMonto } from './utils.js';

export class Factura {
    constructor(numero, cliente, monto) {
        this.numero = numero;
        this.cliente = cliente;
        this.monto = Factura.esMontoValido(monto) ? monto : 0;
    }

    obtenerResumen() {
        // Usamos la función importada de utils.js
        return `Factura N°: ${this.numero} | Cliente: ${this.cliente} | Monto: $${formatearMonto(this.monto)}`;
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje >= 0 && porcentaje <= 100) {
            this.monto -= this.monto * (porcentaje / 100);
        }
    }

    static esMontoValido(monto) {
        return monto > 0;
    }
}