function soma(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function verNumero(num) {
    if (num % 2 == 0) {
        console.log("O número é par");
    } else {
        console.log("O número é impar");
    }
}
export { soma, subtrair, multiplicar, dividir, verNumero };
