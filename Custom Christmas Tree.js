//https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e/train/javascript
function customChristmasTree(chars, n){
    let len = 0;
    for (let i = 1; i <= n; i++){
        len += i;
    }
    let toys = chars.repeat(len).slice(0, len)
    let tree = [];
    for (let i = 1; i <= n; i++){
        let s = ' '.repeat(n-i) + toys.slice(0, i).split('').join(' ');
        tree.push(s);
        toys = toys.slice(i)
    }
    let height = Math.trunc(n/3);
    for (let i = 1; i <= height; i++){
        tree.push(' '.repeat(n-1) + "|");
    }
    return tree.join('\n')
}