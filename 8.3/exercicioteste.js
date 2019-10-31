const array = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12, 13, 14, 15, 16];
const top = array.slice(3, 14);
console.log(top)
console.log("----------------------------------");

const nationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}
console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))

console.log("----------------------------------");

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2, arr4;

(function() {
  arr2 = [...arr1] + [...arr3]; //concatena todos os elementos
    arr4 = [...arr1, ...arr3]; //junta os elementos
})();

console.log(arr2);
console.log(arr4);
console.log("----------------------------------");

