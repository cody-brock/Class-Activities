const revNum = num => {
    return Number(num.toString().split('').reverse().join(''));
}

console.log('revNum(123450)', revNum(123450));
console.log('revNum(1021)', revNum(1021));
console.log('revNum(4)', revNum(4));