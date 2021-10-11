// a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var aString1 = "GoodbyeWorld"
console.log(aString1.toUpperCase())

// b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado 
//en una nueva variable (utilizar substring).
var bString1 = "GoodbyeWorld"
var bString2 = bString1.substring(0,bString1.length)
console.log(bString2)

// c)Crear una variable de tipo string con al menos 10 caracteres y 
//generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var cString1 = "GoodbyeWorld"
var cString2 = cString1.substring(9,cString1.length)
console.log(cString2)

// d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
//Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var dString1 = "rADiuMroCKeT"
var dString2 = dString1.substring(0,1).toUpperCase() + dString1.substring(1,dString1.length).toLowerCase()
console.log(dString2)

// e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var eString1 = "Radium Rocket"
var ePosition = eString1.indexOf(" ")
console.log(ePosition)

// f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y 
//las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var fString1 = "radiumrocket softwaredevelopers"
var fSpace = fString1.indexOf(" ")
var fString2 = fString1.substring(0,1).toUpperCase() + fString1.substring(1,fSpace).toLowerCase() + fString1.substring(fSpace,fSpace+2).toUpperCase() + fString1.substring(fSpace+2,fString1.length).toLowerCase()
console.log(fString2)