const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz test", () => {
  it("given 6, print Fizz", () => {
    assert(fizzbuzz(6) === "Fizz");
  });

  it("given 10, print Buzz", () => {
    assert(fizzbuzz(10) === "Buzz");
  });

  it("given 15, print FizzBuzz", () => {
    assert(fizzbuzz(15) === "FizzBuzz");
  });

  it("given 7, print 7 in String", () => {
    assert(fizzbuzz(7) === "7");
  });
});
