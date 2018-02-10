/*
Una función que reciba un arreglo de números enteros (el arreglo debe contener
un número par de elementos); La funcion debe retornar el número mayor del resultado
de la multiplicación entre números adyacentes
*/
'use strict'
//var elementos = [9,2,4,6,1,9];
var elementos = [1];

function multiplicacion(arreglo_par){
    var i = 0;
    var size = arreglo_par.length;
    var mayor = 0;
    var aux = 0;

    if (size % 2 == 0){ //tamaño par
        for (i = 0; i < size; i+=2){
            aux = arreglo_par[i] * arreglo_par[i+1];
            if (aux > mayor){
                mayor = aux;
            }
        }
        console.log(mayor)
    }else{
        console.log('ingresa un arreglo par')
    }
}

multiplicacion(elementos);
