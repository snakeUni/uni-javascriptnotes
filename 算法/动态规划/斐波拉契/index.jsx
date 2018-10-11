/**
 * 实现斐波那契算法的时候我们通常会使用递归的方法，看一下常见的递归的实现
 */
function recurFib(n) {
  if (n < 2) {
    return n; 
  }
  else {
     return recurFib(n-1) + recurFib(n-2);
  } 
}
// recurFib(10) => 55

// 尾递归进行优化
function recurFibTail(n, ret1, ret2) {
  if (n === 1 ){
    return ret1;
  } else {
    return recurFibTail(n - 1, ret2, ret1 + ret2);
  }
}

// recurFibTail(10, 1, 1) => 55

//但是当递归很深的时候第一的问题就很明显了，时间问题，消耗的时间越来越多。原因也很明确，就是计算过的还会不断的重复去计算，
// 而尾递归解决这个问题，那么我们也可以用迭代的方法来处理，其实尾递归就是迭代吧。可以解决递归的时间问题

// 迭代优化
function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

// iterFib(10) => 55






