---
path: '/jsalgorithms'
date: '2019-03-30'
title: 'JavaScript Algorithms'
author: 'Syyad Khan'
---

# #1-Equal Sides Of An Array

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

#### ES6 Method

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

-

-

# #2-Unique In Order

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
