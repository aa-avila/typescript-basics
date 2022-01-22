/************************************************************ */
//Basics
function add(n1, n2, phrase, show) {
    if (show) {
        return phrase + "".concat(n1 + n2);
    }
    else {
        return 'Result disabled!';
    }
}
var number1;
// let number2: number;
var resultPhrase;
// let showResult: boolean;
number1 = 3;
var number2 = 5; //<== type inference
resultPhrase = 'The "add" result is: ';
var showResult = true; //<== bool and also constant
var result = add(number1, number2, resultPhrase, showResult);
console.log(result);
/************************************************************ */
//Enum Types
var CivilStatus;
(function (CivilStatus) {
    CivilStatus[CivilStatus["MARRIED"] = 0] = "MARRIED";
    CivilStatus[CivilStatus["WIDOWED"] = 1] = "WIDOWED";
    CivilStatus[CivilStatus["SEPARATED"] = 2] = "SEPARATED";
    CivilStatus[CivilStatus["DIVORCED"] = 3] = "DIVORCED";
    CivilStatus[CivilStatus["SINGLE"] = 4] = "SINGLE";
})(CivilStatus || (CivilStatus = {}));
var person = {
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
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNums = combine(45, 34);
var combinedWords = combine('hola, ', 'como estas?');
var combinedMix = combine('mezcla de string y numero ', 345);
//const error = combine('string, ', [1, 'chau', false]); //<== esto da error ya que no coincide con los types de la funcion
console.log('Combined Nums: ', combinedNums);
console.log('Combined Words: ', combinedWords);
console.log('Combined Mix: ', combinedMix);
/************************************************************ */
//Literal + Union Types
function convert(input, resultConversion //<== literal + union
) {
    var result;
    if (resultConversion === 'to-number') {
        result = +input;
    }
    if (resultConversion === 'to-string') {
        result = input.toString();
    }
    return result;
}
var convertNumToStr = convert(89, 'to-string');
var convertStrToNum = convert('76', 'to-number');
console.log('NumToStr: ', convertNumToStr);
console.log('StrToNum: ', convertStrToNum);
var myCustom1;
var myCustom2;
myCustom1 = 3;
myCustom2 = 'qwerty';
console.log('Type Aliases: ', myCustom1, myCustom2);
/************************************************************ */
// Return Types in functions
function multiply(a, b) {
    //return 'hola'; //<-- esto da error
    return a * b;
}
console.log('Function with return type: ', multiply(4, 5));
