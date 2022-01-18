function add(n1: number, n2: number, phrase: string) {
  return phrase + `${n1 + n2}`;
}

let number1: number;
let number2: number;
let resultPhrase: string;

number1 = 3;
number2 = 5;
resultPhrase = 'The "add" result is: ';

const result = add(number1, number1, resultPhrase);
console.log(result);
