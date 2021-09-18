// To do: Make the imperative, declarative
// by making use of array methods map, filter and reduce.
// MAKE SURE ALL TESTS KEEP PASSING
//
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

import { exercise1, exercise2, exercise3, exercise4, exercise6, exercise7, exercise8 } from "../src/06_map_filter_reduce";

describe("Declarative programming", () => {
  it('Give me a list with heroes stronger than "500"', () => {
    const { imperative, declarative } = exercise1();

    expect(declarative).toEqual(imperative);
  });

  it("Give me a list of all hero names", () => {
    const { imperative, declarative } = exercise2();

    expect(declarative).toEqual(imperative);
  });

  it("Give me a list of all hero names and whether they have a hidden identity", () => {
    const { imperative, declarative } = exercise3();

    expect(declarative).toEqual(imperative);
  });

  it("Sum up all hero strength", () => {
    const { imperative, declarative } = exercise4();

    expect(declarative).toEqual(imperative);
  });

  describe("Declarative programming - combination", () => {
    it("Give me the combined strength of all hero's with a hidden identity", () => {
      expect(exercise6()).toEqual(115010);
    });

    it("Give me the combined strength of all superhumans with a hidden identity", () => {
      expect(exercise7()).toEqual(115000);
    });

    it("Give me the names of all female superhumans", () => {
      expect(exercise8()).toEqual(["Namora"]);
    });
  });
});
