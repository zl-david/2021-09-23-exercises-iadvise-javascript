// To do: Fix the unit tests, leave the expect lines unchanged.

import { exercise1, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9 } from "../src/07_arrays";

// 06.1: Array.from

describe("Array.from", () => {
  it("call `Array.from` with an array-like object", () => {
    expect(exercise1()).toEqual(["one", "two"]);
  });

  // it("a DOM node`s classList object can be converted", () => {
  //   expect(exercise2()).toEqual(["some", "other"]);
  // });

  it("works with function arguments", () => {
    expect(exercise3()).toEqual(10);
  });
});

// 06.2: Array.fill

describe("Array.fill", () => {
  it("`fill(0)` will populate `0` into each array element", () => {
    expect(exercise4()).toEqual([0, 0, 0]);
  });

  it("fill only changes content, adds no new elements", () => {
    expect(exercise5()).toEqual([0]);
  });

  it("second parameter to `fill()` is the position from where to start filling", () => {
    expect(exercise6()).toEqual([1, 2, 42]);
  });

  it("third parameter is the position where filling stops", () => {
    expect(exercise7()).toEqual([1, 42, 3]);
  });
});

// 06.3: Array.find / findIndex

describe("Array.find / findIndex", () => {
  it("find the first cat in the list", () => {
    expect(exercise8()).toEqual("Mikado");
  });

  it("find the index of the first cat in the list", () => {
    expect(exercise9()).toEqual(2);
  });
});


