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
