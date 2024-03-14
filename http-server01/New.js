//arrow functions

const sum = (a, b) => {
    return a + b
}

const summing = sum(4, 5);
console.log("Sum of the given numbers : " + summing);

let nums = [1, 2, 3, 4, 5];
function transform(i) {
    return (i * 2);
}
let number = []
const vals = nums.map(transform);
console.log(vals);
//filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = [];
for (let i = 1; i <= arr.length; i++) {
    if (i % 2 == 0) {
        newArr.push(i);
    }
}
console.log(newArr);

function isEven(i) {
    if (i % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
const evenNums = arr.filter(isEven);
console.log(evenNums);