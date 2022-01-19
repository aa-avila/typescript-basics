/************************************************************ */
function add(n1: number, n2: number, phrase: string, show: boolean) {
  if (show) {
    return phrase + `${n1 + n2}`;
  } else {
    return 'Result disabled!';
  }
}

let number1: number;
// let number2: number;
let resultPhrase: string;
// let showResult: boolean;

number1 = 3;
let number2 = 5; //<== type inference
resultPhrase = 'The "add" result is: ';
const showResult = true; //<== bool and also constant

const result = add(number1, number2, resultPhrase, showResult);
console.log(result);
/************************************************************ */

const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'Agus',
  age: 31,
  hobbies: ['piano', 'cooking']
};

console.log('person object: ', person);
