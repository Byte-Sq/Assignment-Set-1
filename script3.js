// Sudo for number 3 assignment set 1
//1.creare a function name twoSum that takes two parameters nums and target
//2.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// let nums = prompt("Enter an array of numbers");
// let target = prompt("Enter the target number");

// let nums = [1, 2, 3, 4];
// let target = 5;



function twoSum(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    let firstIn = nums[i];
    let output = [];
    for (let j = 0; j < nums.length; j++) {
      let secondIn = nums[j];
      //   console.log(secondIn);
      if (firstIn + secondIn === target) {
        // console.log(firstIn, secondIn, target);
        output.push(firstIn, secondIn);
        console.log(`if you add ${firstIn} and ${secondIn} you get ${target}`);
      }
    }
  }
  return;
}
twoSum([1, 2, 3, 4, 5], 5);
