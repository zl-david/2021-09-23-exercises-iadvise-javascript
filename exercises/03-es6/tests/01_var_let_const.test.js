// to do: Replace var/let/const with the correct var/let/const to fix the unit tests

import { exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7 } from "../src/01_var_let_const";

// 01.1: var or let

describe("var or let?", () => {
  it("Exercise 1", () => {
    expect(exercise1()).toEqual("banana");
  });

  it("Exercise 2", () => {
    expect(exercise2()).toEqual(10);
  });

  it("Exercise 3", () => {
    expect(exercise3()).toEqual("pear");
  });
});

// 01.2: var or const

describe("var or const?", () => {
  it("Exercise 4 - const values cannot be changed", () => {
    expect(exercise4).toThrow();
  });

  it("Exercise 5 - properties in const Objects can be changed", () => {
    
    expect(exercise5()).toEqual("black");
  });
});

// 01.3: Extra

describe("Extra", () => {
  it("Var or let?", () => {
    const ex6 = exercise6();

    expect(ex6[0]()).not.toEqual(10);
    expect(ex6[1]()).not.toEqual(10);
    expect(ex6[2]()).not.toEqual(10);
    expect(ex6[0]()).toEqual(0);
    expect(ex6[1]()).toEqual(1);
    expect(ex6[2]()).toEqual(2);
  });

  it("Properties in const Arrays can be changed", () => {
    expect(exercise7()).toEqual("apple");
  });
});