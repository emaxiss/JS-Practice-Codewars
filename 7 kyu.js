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


