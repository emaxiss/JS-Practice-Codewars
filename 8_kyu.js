//Is he gonna survive? https://www.codewars.com/kata/find-the-slope
function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}

// OR 2ND SOL.
//const hero = (bullets, dragons) => dragons * 2 <= bullets;

//Miles per gallon to kilometers per liter  https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter
function converter(mpg) {
    let a = mpg * 1.609344 / 4.54609188
    return +a.toFixed(2);
}

//Find the Slope  https://www.codewars.com/kata/find-the-slope
function slope(points) {
    let s = (points[3] - points[1]) / (points[2] - points[0]);
    if ((points[2] - points[0]) === 0) return "undefined";
    return s + '';
}

//Grasshopper - Messi Goals  https://www.codewars.com/kata/55ca77fa094a2af31f00002a
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//Beginner Series #2 Clock  https://www.codewars.com/kata/beginner-series-number-2-clock
function past(h, m, s) {
    const a = h * 3600000 + m * 60000 + s * 1000;
    return a;
}

//Grasshopper - Order of operations  https://www.codewars.com/kata/560ecf0cb040de130e00007d
function orderOperations() {
    return (2 + 2) * ((2 + 2) * 2)
}

//Grasshopper - Basic Function Fixer  https://www.codewars.com/kata/grasshopper-basic-function-fixer
function addFive(num) {
    let total = num + 5;
    return total;
}

//Training JS #2: Basic data types--Number  https://www.codewars.com/kata/training-js-number-2-basic-data-types-number
var v1 = 50;
v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250

function equal1() {
    var a = v1
    var b = v1
    return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
    var a = v3;  //set number value to a
    var b = v1; //set number value to b
    return a - b;
}

function equal3() {
    var a = v1  //set number value to a
    var b = v5; //set number value to b
    return a * b;
}

function equal4() {
    var a = v4  //set number value to a
    var b = v5   //set number value to b
    return a / b;
}

function equal5() {
    var a = v2  //set number value to a
    var b = v4; //set number value to b
    return a % b;
}

//I love you, a little , a lot, passionately ... not at all  https://www.codewars.com/kata/i-love-you-a-little-a-lot-passionately-dot-dot-dot-not-at-all
function howMuchILoveYou(nbPetals) {
    const responses = [
        "not at all",
        "I love you",
        "a little",
        "a lot",
        "passionately",
        "madly",
    ]
    return responses[nbPetals % 6];
}

//Simple Fun #1: Seats in Theater  https://www.codewars.com/kata/588417e576933b0ec9000045
function seatsInTheater(nCols, nRows, col, row) {
    let a = (nCols - col + 1) * (nRows - row);
    return a;
}

//For Twins: 2. Math operations  https://www.codewars.com/kata/for-twins-2-math-operations
function iceBrickVolume(radius, bottleLength, rimLength) {
    let a = (radius * 2) / 2 ** 0.5;
    return Math.round(a * a * (bottleLength - rimLength));
}


//Third Angle of a Triangle  https://www.codewars.com/kata/third-angle-of-a-triangle
function otherAngle(a, b) {
    return 180 - (a + b);
}

//Convert boolean values to strings 'Yes' or 'No'.  https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no
function boolToWord(bool) {
    if (bool === true) return 'Yes';
    return 'No';
}

//Super Duper Easy  https://www.codewars.com/kata/super-duper-easy
function problem(x) {
    if (typeof x === 'string') return 'Error';
    return x * 50 + 6;
}

//Who ate the cookie?  https://www.codewars.com/kata/55a996e0e8520afab9000055
function cookie(x) {
    if (typeof x === 'string') return "Who ate the last cookie? It was Zach!"
    if (typeof x === 'number') return "Who ate the last cookie? It was Monica!"
    return "Who ate the last cookie? It was the dog!"
}

//Fix the Bugs (Syntax) - My First Kata  https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata
function myFirstKata(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    } else {
        return a % b + b % a;
    }
}

//Type of sum  https://www.codewars.com/kata/type-of-sum
function typeOfSum(a, b) {
    return typeof (a + b);
}

//Convert a Number to a String!  https://www.codewars.com/kata/convert-a-number-to-a-string
function numberToString(num) {
    return num + '';
}

//Number toString  https://www.codewars.com/kata/number-tostring
let a = 123 + '';

//Convert a String to a Number!  https://www.codewars.com/kata/convert-a-string-to-a-number
var stringToNumber = function (str) {
    return +str;
}

//Convert a Boolean to a String  https://www.codewars.com/kata/convert-a-boolean-to-a-string
function booleanToString(b) {
    return b.toString();
}

//Sum The Strings  https://www.codewars.com/kata/sum-the-strings
function sumStr(a, b) {
    return +a + +b + '';
}

//Keep up the hoop  https://www.codewars.com/kata/keep-up-the-hoop
function hoopCount(n) {
    if (n >= 10) return "Great, now move on to tricks";
    return "Keep at it until you get it";
}

//Chuck Norris VII - True or False? (Beginner)  https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner
function ifChuckSaysSo() {
    return !!null;
}

//Training JS #6: Basic data types--Boolean and conditional statements if..else  https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else
function trueOrFalse(val) {
    if (!val) return false.toString();
    return true.toString();
}

//OR
function trueOrFalse(val) {
    if (val) return 'true';
    else return 'false';
}

//Simple Comparison?  https://www.codewars.com/kata/simple-comparison
function add(a, b) {
    if (a == b) return true;
    return false;
}

//Is he gonna survive?  https://www.codewars.com/kata/is-he-gonna-survive
function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}

//Even or Odd  https://www.codewars.com/kata/even-or-odd
let even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

//Grasshopper - Debug  https://www.codewars.com/kata/55cb854deb36f11f130000e1
function weatherInfo(temp) {
    var c = convertToCelsius(temp)
    if (c <= 0) {
        return (c + " is freezing temperature")
    } else {
        return (c + " is above freezing temperature")
    }
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9)
    return celsius
}

//Grasshopper - Grade book  https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade(s1, s2, s3) {
    let mean = (s1 + s2 + s3) / 3;
    if (mean >= 90 && mean <= 100) return 'A';
    else if (mean >= 80 && mean <= 90) return 'B';
    else if (mean >= 70 && mean <= 80) return 'C';
    else if (mean >= 60 && mean <= 70) return 'D';
    else if (mean >= 0 && mean <= 60) return 'F';
}

//Determine offspring sex based on genes XX and XY chromosomes  https://www.codewars.com/kata/determine-offspring-sex-based-on-genes-xx-and-xy-chromosomes
function chromosomeCheck(sperm) {
    if (sperm === 'XX') return `Congratulations! You're going to have a daughter.`;
    return `Congratulations! You're going to have a son.`;
}

//Fix your code before the garden dies!  https://www.codewars.com/kata/57158fb92ad763bb180004e7
function rainAmount(mm) {
    if (mm < 40) return `You need to give your plant ${40 - mm}mm of water`;
    else return "Your plant has had more than enough water for today!";
}

//Training JS #6: Basic data types--Boolean and conditional statements if..else  https://www.codewars.com/kata/training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else
function trueOrFalse(val) {
    if (!val) return false.toString();
    return true.toString();
}

function trueOrFalse(val) {
    if (val) return 'true';
    else return 'false';
}

//What's the real floor?  https://www.codewars.com/kata/whats-the-real-floor
function getRealFloor(n) {
    if (n <= 0) return n;
    else if (n > 13) return n - 2;
    return n - 1;
}

//Calculate BMI  https://www.codewars.com/kata/calculate-bmi
function bmi(weight, height) {
    const bmasind = weight / height ** 2;
    if (bmasind <= 18.5) return 'Underweight';
    if (bmasind <= 25) return 'Normal';
    if (bmasind <= 30) return 'Overweight';
    else if (bmasind > 30) return 'Obese';
}

//Fuel Calculator  https://www.codewars.com/kata/57b58827d2a31c57720012e8
function fuelPrice(litres, pricePerLiter) {
    if (litres >= 10) pricePerLiter -= 0.25;
    else if (litres >= 8) pricePerLiter -= 0.20;
    else if (litres >= 6) pricePerLiter -= 0.15;
    else if (litres >= 4) pricePerLiter -= 0.10;
    else if (litres >= 2) pricePerLiter -= 0.05;
    return +(litres * pricePerLiter).toFixed(2);
}

//Holiday VI - Shark Pontoon  https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let me = pontoonDistance / youSpeed;
    let s = sharkDistance / sharkSpeed;
    if (dolphin === true) s = sharkDistance / (sharkSpeed / 2);
    if (me < s) return 'Alive!';
    return 'Shark Bait!';
}

//Alan Partridge II - Apple Turnover  https://www.codewars.com/kata/alan-partridge-ii-apple-turnover
function apple(x) {
    let newX;
    if (typeof x === 'string') newX = +x;
    newX = x;
    if (Math.pow(newX, 2) > 1000) return `It's hotter than the sun!!`;
    return 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

//Simple multiplication  https://www.codewars.com/kata/simple-multiplication
const simpleMultiplication = number => {
    return number % 2 === 0 ? number * 8 : number * 9;
}

//Area or Perimeter  https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = (l, w) => {
    return (l === w) ? l * w : (l + w) * 2;
}

//Is n divisible by x and y?  https://www.codewars.com/kata/is-n-divisible-by-x-and-y
const isDivisible = (n, x, y) => {
    return n % x === 0 && n % y === 0
}

//Rock Paper Scissors!  https://www.codewars.com/kata/rock-paper-scissors
function rps(p1, p2) {
    if (p1 === 'scissors' && p2 === 'paper') return "Player 1 won!";
    if (p1 === 'paper' && p2 === 'rock') return "Player 1 won!";
    if (p1 === 'rock' && p2 === 'scissors') return "Player 1 won!";
    if (p1 === 'rock' && p2 === 'paper') return "Player 2 won!"
    if (p1 === 'paper' && p2 === 'scissors') return "Player 2 won!"
    if (p1 === 'scissors' && p2 === 'rock') return "Player 2 won!"
    if (p1 === p2) return 'Draw!';
};

//L1: Set Alarm  https://www.codewars.com/kata/l1-set-alarm
function setAlarm(employed, vacation) {
    return employed && !vacation;
}

//Can we divide it?  https://www.codewars.com/kata/can-we-divide-it
function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0;
}

//Student's Final Grade  https://www.codewars.com/kata/students-final-grade
function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    else return 0;
}

//Are You Playing Banjo?  https://www.codewars.com/kata/53af2b8861023f1d88000832
function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') return `${name} plays banjo`;
    return `${name} does not play banjo`;
}

//Plural  https://www.codewars.com/kata/52ceafd1f235ce81aa00073a
function plural(n) {
    return n !== 1;
}

//Watermelon  https://www.codewars.com/kata/55192f4ecd82ff826900089e
function divide(weight) {
    return weight % 2 !== 1 && weight !== 2;
}

//Days in the year  https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
function yearDays(year) {
    if (year % 100 === 0 && year % 400 !== 0) return `${year} has 365 days`;
    if (year % 4 === 0) return `${year} has 366 days`;
    return `${year} has 365 days`
}

//Sum Arrays  https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

//Calculate average https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function find_average(array) {
    let avg = 0;
    for (let el of array) {
        avg += el
    }
    return avg / array.length;
}

//How good are you really?  https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
function betterThanAverage(classPoints, yourPoints) {
    let avg = 0;
    for (el of classPoints) {
        avg += el
    }
    return (avg + yourPoints) / (classPoints.length + 1) < yourPoints;
}

//Generate range of integers  https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
function generateRange(min, max, step){
    let arr = [];
    for (let x = min; x <= max; x+= step) {
        arr.push(x);
    }
    return arr;
}

//Filling an array (part 1)  https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
const arr = N => {
    let array = [];
    for (let x = 0; x < (N); x++) {
        array.push(x);
    }
    return array;
}
