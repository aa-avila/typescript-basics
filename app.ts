/************************************************************ */
//Basics
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
//Enum Types

enum CivilStatus {
  'MARRIED',
  'WIDOWED',
  'SEPARATED',
  'DIVORCED',
  'SINGLE'
}

const person: {
  name: string;
  age: number;
  civilStatus: number;
  hobbies: string[];
  role: [number, string]; //<== Tuple
} = {
  name: 'Agus',
  age: 31,
  civilStatus: CivilStatus.SINGLE,
  hobbies: ['piano', 'cooking'],
  role: [0, 'admin']
};

person.role[0] = 1;
person.role[1] = 'user';

console.log('person object: ', person);

/************************************************************ */
//Union Types

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedNums = combine(45, 34);
const combinedWords = combine('hola, ', 'como estas?');
const combinedMix = combine('mezcla de string y numero ', 345);
//const error = combine('string, ', [1, 'chau', false]); //<== esto da error ya que no coincide con los types de la funcion

console.log('Combined Nums: ', combinedNums);
console.log('Combined Words: ', combinedWords);
console.log('Combined Mix: ', combinedMix);

/************************************************************ */
//Literal + Union Types

function convert(
  input: number | string,
  resultConversion: 'to-string' | 'to-number' //<== literal + union
) {
  let result;
  if (resultConversion === 'to-number') {
    result = +input;
  }
  if (resultConversion === 'to-string') {
    result = input.toString();
  }
  return result;
}

const convertNumToStr = convert(89, 'to-string');
const convertStrToNum = convert('76', 'to-number');

console.log('NumToStr: ', convertNumToStr);
console.log('StrToNum: ', convertStrToNum);

/************************************************************ */
