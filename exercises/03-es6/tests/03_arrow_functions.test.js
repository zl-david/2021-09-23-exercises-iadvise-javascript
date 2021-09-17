// To do: replace regular function declarations with arrow functions. Make the functions as short as possible!
// Make sure all tests keep working, leave the expect lines unchanged.

import { exercise1, exercise2, exercise3 } from "../src/03_arrow_functions";

// 03.1: arrow functions

describe("arrow functions", () => {
  it("single line statement - one argument - implicit return value", () => {
    const addOne = exercise1();
    
    expect(addOne(2)).toEqual(3);
  });

  it("single line statement - multiple arguments - implicit return value", () => {
    // ↓ Change: Rewrite to arrow function on single line
    const add = exercise2();

    expect(add(2, 3)).toEqual(5);
  });

  it("return object literal", () => {
    const getCat = exercise3();

    expect(getCat()).toEqual({ name: "Mikado", age: 5 });
  });
});
