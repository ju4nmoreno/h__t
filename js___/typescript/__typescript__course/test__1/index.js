function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var printResult = true;
var number1 = 5;
var number2 = 2.8;
add(number1, number2, printResult);
