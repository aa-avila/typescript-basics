function add(n1, n2, phrase) {
    return phrase + "".concat(n1 + n2);
}
var number1;
var number2;
var resultPhrase;
number1 = 3;
number2 = 5;
resultPhrase = 'The "add" result is: ';
var result = add(number1, number1, resultPhrase);
console.log(result);
