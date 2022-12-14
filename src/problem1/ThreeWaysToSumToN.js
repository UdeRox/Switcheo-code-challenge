// # Task
// Provide 3 unique implementations of the following function.
// **Input**: `n` - any integer
// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

var sum_to_n_a = function (n) {
  if (n < 0) return sum_to_n_a(n + 1) + n;
  return sum_to_n_a(n - 1) + n;
};

var sum_to_n_b = function (n) {
  let sum = 0;
  for (let i = sum; i <= n; i++) sum += i;
  return sum;
};

var sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

console.log(sum_to_n_c(5));
