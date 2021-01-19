//Yor task is to write function factorial
// https://en.wikipedia.org/wiki/Factorial
//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(num) {
    let sum=1;
    for (let i=1;i<=num;i++)
        sum*=i
    return sum
}