// a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
//si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
if(Math.random() >= 0.5){
    alert("Greater than 0,5")
} else {
    alert("Lower than 0,5")
}

// b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
/* 
 i) “Bebe” si la edad es menor a 2 años;
 ii) “Nino” si la edad es entre 2 y 12 años;
 iii) “Adolescente” entre 13 y 19 años;
 iv) “Joven” entre 20 y 30 años;
 v) “Adulto” entre 31 y 60 años;
 vi) “Adulto mayor” entre 61 y 75 años;
 vii) “Anciano” si es mayor a 75 años.
 */
var bAge = Math.floor(Math.random() * 100)
if(bAge < 2){
    alert("Bebe")
} else if(bAge >= 2 && bAge <= 12){
    alert("Nino")
} else if(bAge >= 13 && bAge <= 19){
    alert("Adolescente")
} else if(bAge >= 20 && bAge <= 30){
    alert("Joven")
} else if(bAge >= 31 && bAge <= 60){
    alert("Adulto")
} else if(bAge >= 61 && bAge <= 75){
    alert("Adulto mayor")
} else {
    alert("Anciano")
}
console.log(bAge)

//or utilizing Switch