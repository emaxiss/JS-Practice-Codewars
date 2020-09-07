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
