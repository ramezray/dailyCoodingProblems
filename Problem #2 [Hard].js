// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// *****Here what your function need to do****
function manualProductArray(arr) {
  const newArray = [];
  newArray.push(arr[1] * arr[2] * arr[3] * arr[4]);
  newArray.push(arr[0] * arr[2] * arr[3] * arr[4]);
  newArray.push(arr[1] * arr[0] * arr[3] * arr[4]);
  newArray.push(arr[1] * arr[2] * arr[0] * arr[4]);
  newArray.push(arr[1] * arr[2] * arr[3] * arr[0]);
  return console.log(newArray);
}

// *****Using division -- ES6 Reduce
const es6ProductArray = arr => {
  const newArray = arr.reduce((pro, value) => pro * value, 1);
  return console.log(arr.map(value => newArray / value));
};

// *****NOT using division
const prodectArrayNoDivision = arr => {
  const newArray = [];
  let pro;
  for (let i = 0; i < arr.length; i++) {
    pro = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        pro *= arr[j];
      }
    }
    newArray.push(pro);
  }
  return console.log(newArray);
};

manualProductArray([1, 2, 3, 4, 5]);
es6ProductArray([1, 2, 3, 4, 5]);
prodectArrayNoDivision([1, 2, 3, 4, 5]);
