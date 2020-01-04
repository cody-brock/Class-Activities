const newArrayFunc = function (arr,funct) {
    return arr.filter(funct);
};


console.log('[1,2,3], num => num === 2', newArrayFunc([1,2,3], num => num === 2));
console.log('[1,2,3,4,5,6], num => num % 2 === 0', newArrayFunc([1, 2, 3, 4, 5, 6], num => num % 2 === 0));
console.log('[1,2,3,4,5,6], num => num  > 3', newArrayFunc([1, 2, 3, 4, 5, 6], num => num > 3));

