// const add = function(...nums){
//     return nums.reduce(function(accumulator, currentValue){
//         return accumulator + currentValue
//     })
// }
// console.log(add(1, 2, 4, 5))

// const add = (...nums) => {
//     return nums.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     })
// }
// console.log(add(1, 2, 4, 5))

const add = (...nums) => nums.reduce((acc, cur) => acc + cur)

console.log(add(1, 2, 3, 4, 5))