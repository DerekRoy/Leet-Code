// https://leetcode.com/problems/two-sum/

// Faster than 87.10% of JS Submissions, memory usage less than 71.64% JS submissions on November 23, 2022
let twoSum1 = function (numbers, target) {
  let hash = {};

  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    let currentNumber = numbers[currentIndex];

    if (hash[target - currentNumber] !== undefined)
      return [hash[target - currentNumber], currentIndex];
    hash[currentNumber] = currentIndex;
  }

  return [];
};

// Faster than 49.86% of JS submssions, memory usage less than 5.26% of JS submissions on November 23, 2022
let twoSum2 = function (numbers, target) {
  let hash = {};
  let answer = [];

  numbers.forEach((currentNumber, currentIndex) => {
    if (hash[target - currentNumber] !== undefined) {
      answer = [hash[target - currentNumber], currentIndex];
      return;
    }
    hash[currentNumber] = currentIndex;
  });

  return answer;
};

// Faster than 50.26% of JS submissions, memory usage less than 5.16% of submissions on November 23,2022
let twoSum3 = function (numbers, target) {
  let hash = {};
  let answer = [];

  numbers.reduce((initial, currentNumber, currentIndex) => {
    if (initial !== undefined) hash[initial] = 0;
    if (hash[target - currentNumber] !== undefined) {
      answer = [hash[target - currentNumber], currentIndex];
      return;
    }
    hash[currentNumber] = currentIndex;
  });

  return answer;
};

/* 
Here the hash allows storage of numbers with an O(1) reference to the index of any number previously seen. From here the code iterates through
the array and checks if the target - the current number will show a result in the hash. If it does return the result. If not then keep going. 
If no result is returned then return []. 
*/
