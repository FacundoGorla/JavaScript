// a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
//mostrar por consola los meses 5 y 11 (utilizar console.log).
var _Array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(_Array[5], "y ", _Array[11])

// b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(_Array.sort())

// c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
_Array.unshift("Radium")
_Array.push("Rocket")
console.log(_Array)

// d)Quitar un elemento del principio y del final del array (utilizar shift y pop).
_Array.shift()
_Array.pop()
console.log(_Array)

// e)Invertir el orden del array (utilizar reverse).
_Array.reverse()
console.log(_Array)

// f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var fString = _Array.join(" - ")
console.log(fString)

// g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var _Array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var _Array2 = _Array.slice(4,-1)
console.log(_Array2)