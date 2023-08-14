/*let numero = parseFloat(window.prompt("Ingrese un número para ver su tabla de multiplicar"))
console.log(`La tabla de multiplicar de ${numero}`)

if (isNaN(numero)) {
    console.log("Ingrese un número para generar su tabla de multiplicar");
}

for (let i = 1; i <= 10; i++){
    const resultado = numero * i

    console.log(`${numero} * ${i} = ${resultado}`)
}

*/
let numero = parseFloat(window.prompt("Ingrese un número para generar su tabla de multiplicar"))


if (isNaN(numero)){
    console.log("Ingrese un valor numerico")

} else {
    console.log(`La tabla de multiplicar de ${numero}`)

    for (let i = 1; i <=10; i++){
        const result = numero * i

        console.log(`${numero} * ${i} = ${result}`)
    }
}
