// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Faster than 66.55% of JS Submissions, memory usage less than 41.25% JS submissions on November 23, 2022
var lengthOfLongestSubstring = function (s) {
  let seen = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (seen[char] !== undefined) {
      start = Math.max(max, seen[char] + 1);
    }

    seen[char] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
};
