const fullname = prompt("Ingrese su nombre")

//trim hace que si ingresas un espacio lo elimina en ambos extremos del string 
if (fullname.trim() === ""){
    console.log("Debe ingresar un nombre");
}

else{
    console.log(`Hola ${fullname}`);
}

let i = 1;

do {
  console.log('Numero ' + i);
  i++;
} while (i <= 20);

console.log(i) 

