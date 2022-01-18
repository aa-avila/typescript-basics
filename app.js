function add(n1, n2, phrase, show) {
    if (show) {
        return phrase + "".concat(n1 + n2);
    }
    else {
        return 'Result disabled!';
    }
}
var number1;
var number2;
var resultPhrase;
var showResult;
number1 = 3;
number2 = 5;
resultPhrase = 'The "add" result is: ';
showResult = true;
var result = add(number1, number1, resultPhrase, showResult);
console.log(result);
