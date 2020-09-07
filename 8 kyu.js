//Is he gonna survive? https://www.codewars.com/kata/find-the-slope
function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}
// OR 2ND SOL.
//const hero = (bullets, dragons) => dragons * 2 <= bullets;

//Miles per gallon to kilometers per liter  https://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter
function converter (mpg) {
    let a  = mpg * 1.609344 / 4.54609188
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
function past(h, m, s){
    const a = h * 3600000 + m * 60000 + s * 1000;
    return a;
}

//Grasshopper - Order of operations  https://www.codewars.com/kata/560ecf0cb040de130e00007d
function orderOperations () {
    return (2 + 2) * ((2 + 2) * 2)
}

//Grasshopper - Basic Function Fixer  https://www.codewars.com/kata/grasshopper-basic-function-fixer
function addFive(num) {
    let total = num + 5;
    return total;
}

//Training JS #2: Basic data types--Number  https://www.codewars.com/kata/training-js-number-2-basic-data-types-number
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
    var a=v1
    var b=v1
    return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
    var a= v3;  //set number value to a
    var b= v1; //set number value to b
    return a-b;
}
function equal3(){
    var a= v1  //set number value to a
    var b=  v5; //set number value to b
    return a*b;
}
function equal4(){
    var a=v4  //set number value to a
    var b=v5   //set number value to b
    return a/b;
}
function equal5(){
    var a= v2  //set number value to a
    var b= v4; //set number value to b
    return a%b;
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