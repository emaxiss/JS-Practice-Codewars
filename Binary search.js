const arr = [1, 3, -1, 5, 76, 33, 998, 433, 112, 4];
let target = 4;

function binarySearch(arr) {
    let arr1 = arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr1.length;
    while (left <= right) {
        let m = Math.floor((left+right)/2);
        if (arr1[m]===target) return true;
        else if (target < arr1[m]) right = m - 1;
        else if (target > arr1[m]) left = m + 1;
    }
    return false;
}

console.log(binarySearch(arr));
