const entry = prompt("Cuantos datos desea ingresar: ");


const entries = validateInput(entry);
const numbers = [];

for (let i = 0; i < entries; i++) {

    let value = prompt(`Ingrese el ${i + 1} valor: `);

    if (isNaN(value) || value.trim() === "") {
        console.log("Por favor debe ingresar un valor.");
    }
    else {
        numbers.push(Number(value));
    }
}
console.log(numbers);

numbers.forEach((number) => console.log(Math.pow(number, 3)));

function validateInput(entry) {

    if (isNaN(entry) || entry === null || entry === undefined || entry.trim() === "") {
        console.log("Debe ingresar un numero valido");
        entry = prompt("Cuantos datos desea ingresar: ");
        const result = validateInput(entry);
        return result;
    } else {
        return Number(entry);
    }
}