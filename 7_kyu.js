//Breaking chocolate problem https://www.codewars.com/kata/breaking-chocolate-problem
function breakChocolate(n,m) {
    if (n > 0 && m > 0) return n * m - 1
    return 0;
}

//Area of an arrow  https://www.codewars.com/kata/589478160c0f8a40870000bc
function arrowArea(a,b) {
    let h = b / 2;
    return 1 / 2 * a * h;
}

//Sum of angles  https://www.codewars.com/kata/sum-of-angles
function angle(n) {
    return (n - 2) * 180;
}

//Is Undefined?  https://www.codewars.com/kata/564a6486c2070faee6000011
function isUndefined(value) {
    if (typeof value === 'undefined') return true;
    return false;
}

//Discover The Original Price  https://www.codewars.com/kata/discover-the-original-price
function discoverOriginalPrice(discountedPrice, salePercentage){
    const disc = (100 - salePercentage) / 100;
    return +(discountedPrice/disc).toFixed(2);
}

//How many times should I go?  https://www.codewars.com/kata/how-many-times-should-i-go
function howManyTimes(annualPrice, individualPrice) {
    return Math.ceil(annualPrice/individualPrice);
}

//Return the closest number multiple of 10  https://www.codewars.com/kata/return-the-closest-number-multiple-of-10
const closestMultiple10 = num => {
    return Math.round(num/10) * 10;
}

//lucky number  https://www.codewars.com/kata/55afed09237df73343000042
function isLucky(n) {
    let str = n + '';
    let sum = 0;
    for (let x = 0; x < str.length; x++) {
        sum += str[x];
    }
    return +sum === 0 || +sum % 9 === 0;
}

//Find the sum of the roots of a quadratic equation  https://www.codewars.com/kata/57d448c6ba30875437000138
function roots (a,b,c) {
    let d = b ** 2 - 4 * a * c;
    let x = -(b)/(2*a);
    let x1 = (-(b) + Math.sqrt(d)) / (2 * a);
    let x2 = (-(b) - Math.sqrt(d)) / (2 * a);
    if (d === 0) return +(x*2).toFixed(2);
    if (d > 0) return +(x1+x2).toFixed(2);
    return null;
}

//Is this a triangle?  https://www.codewars.com/kata/is-this-a-triangle
const isTriangle = (a,b,c) =>  a+b>c && b+c>a && a+c>b;

//Calculate Two People's Individual Ages  https://www.codewars.com/kata/calculate-two-peoples-individual-ages
function getAges(sum,difference){
    let y = (sum - difference) / 2;
    let o = sum - ((sum - difference)/2);
    if (sum < 0 || difference < 0 || y < 0 || o < 0) return null;
    return [o, y];
}

//Squares sequence  https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
function squares(x, n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(x);
        x **= 2;
    }
    return arr;
}



