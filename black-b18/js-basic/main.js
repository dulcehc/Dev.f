'use strict'
// not use undeclared variables.
// que se tienen que declarar variables sin "var", "const"
//imprima los números del 10 al 100,
//si divisibles entre 3, imprima "fizz"
// si 5 "Buzz", si los 2 "FizzBuzz"
var numero = 0;
var fin = 100;
var cadena = "";
for (numero = 0; numero <= fin; numero++){
  cadena = ""
  if (numero != 0){
    if (numero % 3 == 0){
      cadena = "Fizz";
    }
    if (numero % 5 == 0){
      cadena += "Buzz"
    }
    console.log(numero + " " + cadena)
  }
}

/*for (numero = 1; numero <= fin; numero++){
  cadena = ""
  numero % 3 == 0 ? cadena = "Fizz"
  numero % 5 == 0) ? cadena += "Buzz"
  console.log(numero + " " + cadena)
}*/

/*
var str = "hola"
var num = 10
// condición ? [SI CUMPLE] : [NO CUMPLE]
num > 20 ? console.log("mayor"): console.log("menor")
num > 20 ? console.log("mayor"): num == 10 ? console.log("diez"):
  console.log("XD")
*/
/*
var luna = "llena"
switch(luna){
  case "llena": {
    console.log("Luna llena");
    break;
  }
  case "nueva": {
    console.log("Luna nueva");
    break;
  }
  default: {
    console.log("Nublado u.u");
    break;
  }
}
*/
/*
var i = 0;
for (i = 0; i <=10; i++){
  console.log(i)
}
*/

/*
var str = "hola"
var i = 0;
for (i in str){
  console.log(str[i])
}
*/
const dos = 2;
var num = 2;
var str = "44";
var bool = true;
var obj = {}
var arr = []
var und = undefined
var notNumber = NaN

obj = {
  nombre: "Dulce",
  apellido: "Hernández",
  edad: 26,
  bandasFavoritas: {
    a: "Metallica",
    b: "Foster the People"
  }
}
//console.log(obj.bandasFavoritas.a)
// estructuras de control
if (num == 0){
  console.log("no tiene nada")
}else if (num == 5){
  console.log("XD")
}if(num == 2){
  //codigo
}else{
  //codigo
}
