/*
Una función que reciba un arreglo de números, debe regresar un arreglo con:
[numeroMayor], [todosLosPares], [NumerosNond], Sumatoria
*/

//var arreglo = [0,1,2,3,4,5,6,7,8];
//var arreglo = [100, 9, 1]

var arreglo = [1,2,3,4,5,6]

function numeros(array){
    var mayor = 0;
    var pares = [];
    var nones = [];
    var sumatoria = 0;
    var i = 0;
    var resultado = []

    for (i = 0; i < array.length; i++){
        sumatoria += array[i];

        if (array[i] % 2 == 0){  //es par
            pares.push(array[i]);
        }else{  // es non
            nones.push(array[i]);
        }

        if (array[i] > mayor){
            mayor = array[i];
        }
    }
    /*console.log('número mayor: ' + mayor);
    console.log('pares: ' + pares);
    console.log('nones: ' + nones);
    console.log('sumatoria: ' + sumatoria);*/
    resultado.push(mayor);
    resultado.push(pares);
    resultado.push(nones);
    resultado.push(sumatoria);
    return resultado;

}

console.log(numeros(arreglo));