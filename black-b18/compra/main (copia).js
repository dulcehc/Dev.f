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
var dinero = 1000;
var saldo = dinero;
var celulares = 0;
var accesorios = 0;
var total = 0;
var iva = 1+0.15;

function impuesto(cantidad, iva){
	cantidad = cantidad *iva;
	return cantidad;
}

function comprar(dinero){
	if (dinero >= impuesto(precioCel, iva)){    //puede comprar celulares
		dinero = dinero - impuesto(precioCel, iva);  //saldo disponible
		total += impuesto(precioCel, iva);
		celulares++;
	}
	if (dinero >= impuesto(precioAcc, iva)){  // saldo para comprar accesorios
		dinero = dinero - impuesto(precioAcc, iva);
		total += impuesto(precioAcc, iva);
		accesorios++;
	}
	return dinero;
}


while (saldo >= impuesto(precioCel, iva) || saldo >= impuesto(precioAcc, iva)){
	saldo = comprar(saldo);
}
console.log('compraste '+ celulares + ' celulares');
console.log('compraste ' + accesorios + ' accesorios'); 
console.log('total: $' + total.toFixed(2));
console.log('te sobraron $'+ (dinero -total).toFixed(2));
/*
var a = 10;
var b = 20;

function suma (x, y) {
	console.log(x + y)
}

suma(a, b);
*/