/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a)

b = window.prompt("Enter side B");
b = Number(b)

c = Math.pow(a, 2) + Math.pow(b, 2)
c = Math.sqrt(c)

console.log("Side C: ", c)

let birtday = parseInt(window.prompt("Ingrese cuántos años esta cumpliendo"))

if (birtday===18){
    console.log("Usted es considerado mayor de edad")
}

else{
    console.log("Su edad es:", birtday)
}



console.log("Programa para verificar si una persona es mayor de edad")

let edad = parseInt(window.prompt("Ingrese su edad"))

if (edad >= 18){
    console.log("Usted es mayor de edad")
} 

else if (edad < 18){
    console.log("Usted es menor de edad")
}

else{
    console.log("Ingrese un valor númerico para verificar su edad");
}


//mostar los meses del año en un array

console.log("Los meses del año son")

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(months)
console.log(months.length);
*/

// contraseña con intentos maximos

let atemps = 0;
const maxAtemps = 3;

do {
  contraseñaCorrecta = "MoisesgayButMauriEsmas";
  atemps++;
  if (atemps > maxAtemps) {
    window.alert("Ha excedido el número de intentos");
    break;
  }
  let contraseñaIntento = window.prompt("Ingrese su contraseña");

  if (contraseñaIntento === contraseñaCorrecta) {
    window.alert("Su contraseña es correcta, ¡Bienvenido!");
    console.log("Su contraseña es correcta, ¡Bienvenido!");
    break;
  }

  if (contraseñaIntento !== contraseñaCorrecta) {
    window.alert("Contraseña equivocada, intente de nuevo");
    console.log("Contraseña equivocada, intente de nuevo");
  }
} while (atemps <= maxAtemps);
