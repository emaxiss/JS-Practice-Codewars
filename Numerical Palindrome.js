https://www.codewars.com/kata/58ba6fece3614ba7c200017f

    palindrome = num => {
        if (typeof num !== 'number' || num < 0)
            return "Not valid";
        else
            return num === +num.toString().split('').reverse().join('');
    }
