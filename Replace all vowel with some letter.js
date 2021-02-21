//Hells Kitchen https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

function gordon(a){
    return a.toUpperCase().replace(/ /g, '!!!! ').replace(/A/g, '@').replace(/[EOUI]/g, '*')+'!!!!';
}