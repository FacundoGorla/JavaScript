// a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, 
//mostrando el valor de dicha variable en la consola del navegador.
function numSum(num1,num2){
    var result = num1 + num2;
    return result;
}
var aSum = numSum(8,13)
console.log(aSum)

// b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
//mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function numSum(num1,num2){
    if(typeof num1 == 'number' & typeof num2 == 'number'){
        var result = num1 + num2;
        return result;
    } else {
        alert("One of the parameters has an error");
        var result = "NaN";
        return result;
    }    
}
var bSum = numSum(5,3)
console.log(bSum)
var bSum = numSum(5,"hola")
console.log(bSum)

// c)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function checkInt(num){
    return Number.isInteger(num);
}
console.log(checkInt(23))

// d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function numSum(num1,num2){
    if(typeof num1 == 'number' & typeof num2 == 'number'){
        if(!checkInt(num1)){
            alert("first number is not an integer")
            var result = Math.round(num1);
            return result;
        } else if(!checkInt(num2)){
            alert("second number is not an integer")
            var result = Math.round(num2);
            return result;
        } else {
            var result = num1 + num2;
            return result;
        } 
    } else {
        alert("One of the parameters has an error");
        var result = "NaN";
        return result;
    }    
}
var dSum = numSum(8.123, 5)
console.log(dSum)

// e)Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
//Perdón pero no lo entendí, la función que valida si un numero entero la cree en 6c y en 6d la llame dentro de la función suma.
