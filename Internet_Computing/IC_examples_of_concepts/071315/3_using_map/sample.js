var numbers = [1, 2, 3, 4, 5, 6];

var printIt = function(n) {
  console.log(n);
}

var doubleIt = function(n) {
  return n * 2;
}

numbers.map(doubleIt).forEach(printIt);
//transformation operation—map