// # Task
// Provide 3 unique implementations of the following function.
// **Input**: `n` - any integer
// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

var sum_to_n_a = function (n) {
  if (!Number.isInteger(n)) return "Input is not a number.";
  if (n == 0) return 0;
  if (n < 0) return sum_to_n_a(n + 1) + n;
  return sum_to_n_a(n - 1) + n;
};

var sum_to_n_b = function (n) {
  if (!(Number.isInteger(n) && n >= 0)) return "input not a number or negative";
  let sum = 0;
  for (let i = sum; i <= n; i++) sum += i;
  return sum;
};

var sum_to_n_c = function (n) {
  if (!(Number.isInteger(n))) return "input not a number or negative";
  let sum = 0;
  let orginal = n;
  do {
    sum += n;
    // orginal > 0 ? sum += n: sum -= n;
    // orginal > 0 ? n-- : n++;
    n--;
  } while (n >= 0);
  return sum;
};

// console.log(`sum_to_n_a in:5 =  ${sum_to_n_a(5)}`);
// console.log(`sum_to_n_a in:0 =  ${sum_to_n_a(0)}`);
// console.log(`sum_to_n_a in:-5 =  ${sum_to_n_a(-5)}`);
// console.log(`sum_to_n_a in:"str5" =  ${sum_to_n_a("str5")}`);
// console.log(sum_to_n_a(0));
// console.log(sum_to_n_a(-5));
// console.log(sum_to_n_a("5"));

// console.log(sum_to_n_b(5));
// console.log(sum_to_n_b(0));
// console.log(sum_to_n_b(-5));
// console.log(sum_to_n_b("5"));


console.log(sum_to_n_c(5));
// console.log(sum_to_n_c(0));
// console.log(sum_to_n_c(-5));
// console.log(sum_to_n_c("5"));
