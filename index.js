const fizzbuzz = (val) => {
  if (val % 15 === 0) {
    return "FizzBuzz";
  } else if (val % 3 === 0) {
    return "Fizz";
  } else if (val % 5 === 0) {
    return "Buzz";
  }

  return String(val);
};

module.exports = fizzbuzz;
