const doSomething = (arr, func) => {
    return arr.map(x => func(x))
}

console.log(doSomething([1, 2, 3], num => num * 2));
console.log(doSomething([1, 2, 3], num => num + 1));