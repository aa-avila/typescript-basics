"use strict";
function add(n1, n2, phrase, show) {
    if (show) {
        return phrase + `${n1 + n2}`;
    }
    else {
        return 'Result disabled!';
    }
}
let number1;
let resultPhrase;
number1 = 3;
let number2 = 5;
resultPhrase = 'The "add" result is: ';
const showResult = true;
const result = add(number1, number2, resultPhrase, showResult);
console.log(result);
var CivilStatus;
(function (CivilStatus) {
    CivilStatus[CivilStatus["MARRIED"] = 0] = "MARRIED";
    CivilStatus[CivilStatus["WIDOWED"] = 1] = "WIDOWED";
    CivilStatus[CivilStatus["SEPARATED"] = 2] = "SEPARATED";
    CivilStatus[CivilStatus["DIVORCED"] = 3] = "DIVORCED";
    CivilStatus[CivilStatus["SINGLE"] = 4] = "SINGLE";
})(CivilStatus || (CivilStatus = {}));
const person = {
    name: 'Agus',
    age: 31,
    civilStatus: CivilStatus.SINGLE,
    hobbies: ['piano', 'cooking'],
    role: [0, 'admin']
};
person.role[0] = 1;
person.role[1] = 'user';
console.log('person object: ', person);
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedNums = combine(45, 34);
const combinedWords = combine('hola, ', 'como estas?');
const combinedMix = combine('mezcla de string y numero ', 345);
console.log('Combined Nums: ', combinedNums);
console.log('Combined Words: ', combinedWords);
console.log('Combined Mix: ', combinedMix);
function convert(input, resultConversion) {
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
let myCustom1;
let myCustom2;
myCustom1 = 3;
myCustom2 = 'qwerty';
console.log('Type Aliases: ', myCustom1, myCustom2);
function multiply(a, b) {
    return a * b;
}
console.log('Function with return type: ', multiply(4, 5));
let someFunction;
someFunction = multiply;
console.log('Function types example: ', multiply(12, 98));
function printNumber(num) {
    console.log('printNumber: ', num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(7, 3, printNumber);
