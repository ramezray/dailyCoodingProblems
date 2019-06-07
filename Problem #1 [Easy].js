// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// go over each element in the array and add it the rest to see if come up to K

function findTwoNumbers(arr,k){
   for (let i = 0; i < arr.length; i++){
       for (let j = 1; j< arr.length ; j++){
        if (arr[i]+arr[j] === k){
           return  console.log (true)
        }else return (console.log(false))
       }
   }
}
findTwoNumbers([10, 15, 3, 7],18)