function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
var result_sum = sum(2, 3); // Output: 5
var result_minus = minus(12, 3); // Output: 9
//
var calculate = function (a, b, f) {
    var result = f(a, b);
    return result;
};
//
var calculate_sum = calculate(10, 20, sum);
console.log("calculate_sum = ".concat(calculate_sum)); // Output: 30
var calculate_minus = calculate(50, 30, minus);
console.log("calculate_minus = ".concat(calculate_minus)); // Output: 20
