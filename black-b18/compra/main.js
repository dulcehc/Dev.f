'use strict'
// funciócen en la que tengamos mucho dinero y compremos celulares y accesorios
// para amigos
// celulares = $$
// accesorios = $;
// dinero_disponible =
// imprimir qué compre y con cuánto me quede
// sin que el restante sea un número negativo

//precio total más impuestos

var precioCel = 1000;
var precioAcc = 577;
var dinero = 5000;
var saldo = dinero;
var celulares = 0;
var accesorios = 0;
var importe = 0;
var iva = 0.16;
var impuestoCel = impuesto(precioCel);
var impuestoAcc = impuesto(precioAcc);
var impuestoTotal = 0;


function impuesto(cantidad){
	cantidad = cantidad *iva;
	return cantidad;
}

function comprar(dinero){
	if (dinero >= precioCel + impuestoCel){    //puede comprar celulares
		dinero = dinero - (precioCel + impuestoCel);  //saldo disponible
		importe += precioCel;
		impuestoTotal += impuestoCel; 
		celulares++;
	}
	if (dinero >= precioAcc + impuestoAcc){  // saldo para comprar accesorios
		dinero = dinero - (precioAcc + impuestoAcc);
		importe += precioAcc;
		impuestoTotal += impuestoAcc;
		accesorios++;
	}
	return dinero;
}


while (saldo >= (precioCel + impuestoCel) || saldo >= (precioAcc + impuestoAcc)){
	saldo = comprar(saldo);
}
console.log('compraste '+ celulares + ' celulares');
console.log('compraste ' + accesorios + ' accesorios'); 
console.log('importe: ' + importe);
console.log('IVA: ' + parseFloat(impuestoTotal).toFixed(2));
console.log('total: $' + parseFloat(importe+impuestoTotal).toFixed(2));
console.log('te sobran $'+ parseFloat(dinero -(importe+impuestoTotal)).toFixed(2));

/*
var a = 10;
var b = 20;

function suma (x, y) {
	console.log(x + y)
}

suma(a, b);
*/