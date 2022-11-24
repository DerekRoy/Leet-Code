// https://leetcode.com/problems/add-two-numbers/

// Faster than 95.86% of JS Submissions, memory usage less than 94.64% JS submissions on November 23, 2022
var addTwoNumbers = function (l1, l2) {
  return addTwoNumbersRecursive(l1, l2, 0);
};

var addTwoNumbersRecursive = function (l1, l2, remainder) {
  let sum = remainder;

  if (l1 !== null && l2 !== null) {
    sum += l1.val + l2.val;
    l1 = l1.next;
    l2 = l2.next;
  } else if (l1 !== null) {
    sum += l1.val;
    l1 = l1.next;
  } else if (l2 !== null) {
    sum += l2.val;
    l2 = l2.next;
  } else {
    if (remainder === 0 && sum === 0) return null;
  }
  remainder = sum >= 10 ? 1 : 0;
  return new ListNode(sum % 10, addTwoNumbersRecursive(l1, l2, remainder));
};

/*
This code calls a function that calls a recursive function with a variable remainder. In the function remainder is added to the sum,
and then the lists are checked to see if they are still valid to add numbers to the sum. If 1 or more is valide then we add the valid values to sum.
If there are no more valid values to add we see if remainder and sum is zero and return nothing else head to the recursive call.
*/
