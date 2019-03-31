---
path: '/jsalgorithms'
date: '2019-03-30'
title: 'JavaScript Algorithms'
author: 'Syyad Khan'
---

# Easy

#### 1. Reverse a String(ES6)

Take the string provided and reverse the order of the characters, must be a string when done.

```javascript
const revstr = str =>
  str
    .split('')
    .reverse()
    .join('')

console.log(revstr('abcdefghijklmnopqrst'))
```

---

#### 2. Factorialize(ES6)

Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

```javascript
const factorialize = num => {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
}

console.log(factorialize(5))
```

---

#### 3. Palindrome(ES6)

Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.

```javascript
const isPalindrome = str => {
  let reg = /[\W_]/g
  let newStr = str.toLowerCase().replace(reg, '')

  const revString = newStr
    .split('')
    .reverse()
    .join('')
  return revString === newStr
}

console.log(isPalindrome('racecar'))
```

---

#### 4. Longest Word(ES6)

Return the length of the longest word in the provided sentence.

Your response should be a number.

Provided test cases:

findLongestWord(“May the force be with you”) should return 5

findLongestWord(“Google do a barrel roll”) should return 6

findLongestWord(“What if we try a super-long word such as otorhinolaryngology”) should return 19

```javascript
const longestWord = str => {
  let words = str.split(' ')
  let longest = ''
  for (let word of words) {
    if (word.length > longest.length) longest = word
  }
  return longest.length

  //better way
  // return str.split(" ").sort((a, b) => {
  //   return b.length - a.length;
  // })[0];
}

console.log(longestWord('the cow jumped over moon'))
```

---

# Medium

#### 1. Equal Sides Of An Array

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

### For example:

Let's say you are given the array [1,2,3,4,3,2,1]:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

-

```javascript
function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (
      arr.slice(0, i).reduce((a, b) => a + b) ===
      arr.slice(i + 1).reduce((a, b) => a + b)
    ) {
      return i
    }
  }
  return -1
}
```

### ES6 Method

```javascript
const findEvenIndex = arr => {
  return arr.findIndex((item, index) => {
    return (
      arr.slice(0, index).reduce((a, b) => a + b, 0) ===
      arr.slice(index + 1).reduce((a, b) => a + b, 0)
    )
  })
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
```

---

#### 2. Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

-

```javascript
const uniqueInOrder = it => {
  let result = []
  let last
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]))
    }
  }

  return result
}
```

#### ES6 Method

```javascript
const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
```
