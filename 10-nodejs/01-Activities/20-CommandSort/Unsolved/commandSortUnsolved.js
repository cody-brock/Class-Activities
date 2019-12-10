// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


// VERSION 1
    // function getDigit(num, idx) {
    //     return Math.floor(Math.abs(num) / Math.pow(10,idx)) % 10;
    // }

    // function digitCount(num) {
    //     return Math.max(Math.floor(Math.log10(Math.abs(num))),0) + 1
    // }

    // function mostDigits(arr) {
    //     let maxDigits = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    //     }
    //     return maxDigits;
    // }

    // function radixSort(nums) {
    //     let maxDigitCount = mostDigits(nums);
    //     for (let k = 0; k < maxDigitCount; k++) {
    //         let digitBuckets = Array.from({length: 10}, () => []);
    //         for (let i = 0; i < nums.length; i++) {
    //             digit = getDigit(nums[i],k);
    //             digitBuckets[digit].push(nums[i]);
    //         }
    //         // console.log(digitBuckets);
    //         nums = [].concat(...digitBuckets);
    //         // console.log(nums);
    //     }
    //     // console.log(nums);
    //     return nums;
    // }

    // console.log('input: ', process.argv.slice(2));
    // console.log('output: ', radixSort(process.argv.slice(2)));
// END VERSION 1

const values = process.argv.slice(2);
console.log(values
                .map(element => parseFloat(element))
                .sort((a,b) => a-b));
