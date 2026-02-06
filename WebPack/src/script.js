class Factura {
    constructor(numero, cliente, monto) {
        this.numero = numero;
        this.cliente = cliente;
        this.monto = monto;
    }
    obtenerResumen() {
        return `Factura N°: ${this.numero}\nCliente: ${this.cliente}\nMonto: $${this.monto.toFixed(2)}`;
    }
    aplicarDescuento(porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            console.error("Porcentaje de descuento inválido");
            return;
        }
        this.monto -= this.monto * (porcentaje / 100);
    }
    static esMontoValido(monto) {
        return monto > 0;
    }
}

const factura1 = new Factura(1, "Juan Pérez", 1500);
console.log(factura1.obtenerResumen());
factura1.aplicarDescuento(10);
console.log(factura1.obtenerResumen());
console.log(Factura.esMontoValido(1000));

