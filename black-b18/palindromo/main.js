'use strict'
var palabra = 'reconocer'

function palindromo(cadena){
	var i = 0;
	var j = 0;
	var arr1 = [];
	var arr2 = [];

	for (i = 0; i < cadena.length/2; i++){
		arr1.push(cadena[i]);
	}
	for(j = cadena.length-1; j >= i-1; j--){
		arr2.push(cadena[j]);
	}
	if (arr1.toString() == arr2.toString()){
		console.log(cadena + ' es palindromo');
	}else{
		console.log(cadena + ' no es palindromo');
	}
}

palindromo(palabra);