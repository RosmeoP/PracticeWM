const numero = [1, 2, 3, 4, 5, 6, 7];
/*
// agrega número a un array
numero.push(8, 9) 

//console.log(numero)


//elimina el ultimo valor de un array
numero.pop((9))

console.log(numero);

//array original
// unshift agrega un valor al comienzo de un array
const arr = [1, 2, 3, 4, 5];

arr.unshift(0); // [0, 1, 2, 3, 4, 5]

console.log(arr)



numero.unshift(0);

console.log(numero);

//shift lo elimina
numero.shift(0);

console.log(numero);

//array original
const arr = [0, 2, 3, 4, 5, 10];

arr.includes(5);

console.log(arr.includes(5));

//Retorna el valor del índice que le pasamos. indexOf

arr.indexOf(10);

console.log(arr.indexOf(10));

//Retornan un string de un array

let arrtoString = arr.toString();

console.log(arrtoString);

//slice() toma dos parámetros. Un parámetro es el índice inicial y el otro es el final.

let numbs = [1, 10, 100, 1000, 10000];

let newNumbs = numbs.slice(0, 3);

console.log(newNumbs);

const sumNumbs = numbs.reduce((acc, ele) => acc + ele * 2, 0);
console.log(sumNumbs);

//splice() toma el índice inicial y el número de elementos a partir del índice inicial, sino se coloca el número de elementos, se tomará todo el resto del array a partir del índice inicial.
//pslice puede modificar el array original

let newNumbs1 = numbs.splice(0, 2);

console.log(newNumbs1);

let x = [1,2,3,4,5]


x.reverse();

console.log(x)


x = numbs.concat(arr);

console.log(x);

let y = x.reverse();

console.log(y);

*/

const stdin = process.openStdin();
const readFromStdin = new Promise((resolve, reject) => {
  try {
    stdin.addListener("data", (d) => {
      const fruta = d.toString().trim();
      resolve(fruta);
    });
  } catch (err) {
    reject("error");
  }
});
<<<<<<< HEAD
/*
=======

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

>>>>>>> 5444880002c462f218b32d8b0937757bdaf02dcd
const fruits = ["Apple", "Orange", "Watermelon", "Pear"];

const berries = ["strawberry", "blueberry", "rasberry"];

<<<<<<< HEAD
fruits.concat(berries)

typeof fruits
console.log(fruits)

const Newfruits = fruits.concat(berries)
=======
fruits.concat(berries);
>>>>>>> 5444880002c462f218b32d8b0937757bdaf02dcd

typeof fruits;
console.log(fruits);

const Newfruits = fruits.concat(berries);

console.log(Newfruits);

let select = prompt("Ingrese su fruta favorita");
console.log(Newfruits);

if (Newfruits.includes(select)) {
  console.log("Su fruta favorita está dentro del array");
} else {
<<<<<<< HEAD
    console.log("Su fruta favorita no está en el array");
    */

=======
  console.log("Su fruta favorita no está en el array");
}
>>>>>>> 5444880002c462f218b32d8b0937757bdaf02dcd
fruits.push(berries);

rl.question("ingrese una fruta: ", (answer) => {
  fruits.push(answer);
  console.log(fruits);
});
// readFromStdin
//   .then((fruta) => {
//     fruits.push(fruta);
//     console.log(fruits);
//   })
//   .catch((err) => console.log(err));

console.log("ingrese una fruta: ");

readFromStdin
  .then((fruta) => {
    fruits.push(fruta);
    console.log(fruits);
  })
  .catch((err) => console.log(err));
<<<<<<< HEAD

  
=======
>>>>>>> 5444880002c462f218b32d8b0937757bdaf02dcd
