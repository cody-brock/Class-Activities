const arrayDoubler = (arr) => {
    const newArray = [];
    arr.forEach(element => {
        newArray.push(element * 2);
    })

    return newArray;
}

const newArrayDoubler = (arr) => {
    return arr.map(element => element * 2);
}

console.log('[1,2,3]', newArrayDoubler([1,2,3]));