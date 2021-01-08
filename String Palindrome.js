//https://www.codewars.com/kata/57a5015d72292ddeb8000b31

const isPalindrome = line => {
    if (typeof line === 'number')
        line = line.toString();
    return line === line.split('').reverse().join('');
}