function add(n1: number, n2: number, phrase: string, show: boolean) {
  if (show) {
    return phrase + `${n1 + n2}`;
  } else {
    return 'Result disabled!';
  }
}

let number1: number;
let number2: number;
let resultPhrase: string;
let showResult: boolean;

number1 = 3;
number2 = 5;
resultPhrase = 'The "add" result is: ';
showResult = true;

const result = add(number1, number1, resultPhrase, showResult);
console.log(result);
