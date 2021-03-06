import { templateLiteralsExtra1, templateLiteralsExtra2, templateLiteralsExtra3, varLetConstExtra1 ,varLetConstExtra2 } from '../src/99_extra'

describe("var - let - const", () => {
  it("Var or let?", () => {
    const ex6 = varLetConstExtra1();

    expect(ex6[0]()).not.toEqual(10);
    expect(ex6[1]()).not.toEqual(10);
    expect(ex6[2]()).not.toEqual(10);
    expect(ex6[0]()).toEqual(0);
    expect(ex6[1]()).toEqual(1);
    expect(ex6[2]()).toEqual(2);
  });

  it("Properties in const Arrays can be changed", () => {
    expect(varLetConstExtra2()).toEqual("apple");
  });
});




describe("Template literals", () => {
  it("variable substitutions: complex strings", () => {
    const { templateString, templateStringES6} = templateLiteralsExtra1();

    expect(templateStringES6).toEqual(templateString);
  });

  it("nested", () => {
    const { getCss, getCssEs6} = templateLiteralsExtra2();

    expect(getCssEs6(false, true)).toEqual(getCss(false, true));
    expect(getCssEs6(false, false)).toEqual(getCss(false, false));
    expect(getCssEs6(true, false)).toEqual(getCss(true, false));
  });

  it("template literal on many lines", () => {
    const { templateString, templateStringES6} = templateLiteralsExtra3();

    expect(templateStringES6).toEqual(templateString);
  });
});




describe("Destructuring", () => {
  it("extract value from object with a dynamic key", () => {
    const person = { name: "John", age: 30, location: "Antwerp" };
    const KEY = "age";
    // Requirement: Use the KEY variable defined above
    const personAge = person; // ← Change: Use the key above

    expect(personAge).toEqual(30);
  });

  it("mix of function parameter types", () => {
    const fn = (id, [arr], { obj }) => {
      // ↑ To do: destructuring + add default values
      expect(id).toEqual(1);
      expect(arr).toEqual(2);
      expect(obj).toEqual(3);
    };

    fn(void 0, [], {});
  });

  it("function parameter depending on another parameter", () => {
    const fn = (arr, start) => {
      // ↑ To do: Add default value for "start" param

      // don't change ↓
      expect(start).toEqual(3);
    };

    // don't change ↓
    fn([1, 2, 3]);
  });

  it("swapping variables", () => {
    let a = 1,
      b = 2; // ← don't change

    // to do: swap a and b in 1 line!

    // don't change ↓
    expect(a).toEqual(2);
    expect(b).toEqual(1);
  });

  it("extract value from nested object in array", () => {
    const people = [
      { name: { firstName: "John", lastName: "Doe" }, age: 30 },
      { name: { firstName: "Jane", lastName: "Doe" }, age: 27 }
    ]; // ← don't change

    let firstNamePersonA,
      firstNamePersonB,
      age = people;

    // don't change ↓
    const result = "Jane is the sister of John, she's 27 years old";
    expect(
      `${firstNamePersonB} is the sister of ${firstNamePersonA}, she's ${age} years old`
    ).toEqual(result);
  });

  it("extract value from nested array in object", () => {
    const person = { name: "Louis", cats: ["Bruno", "Mikado"] }; // ← don't change

    const secondCat = person;

    // don't change ↓
    const result = "Louis' second cat is Mikado";
    expect(`Louis' second cat is ${secondCat}`).toEqual(result);
  });
});



describe("Spread operator", () => {
  it("pass all array values to Math.max", () => {
    const numbers = [2, 4, 6, 8, 10];
    const result = Math.max(numbers); // ← Change right-hand side of assignment

    expect(result).toEqual(10);
  });

  it("rest syntax to collect subset of arguments", () => {
    const multiply = (multiplier, rest) => {
      // ↑ Change
      expect(multiplier).toEqual(2);
      expect(rest).toEqual([8, 9, 6]);
    };

    multiply(2, 8, 9, 6);
  });

  it("merge deeply nested objects", () => {
    const obj = {
      a: {
        a1: {
          a11: 11,
          a12: 12
        },
        a2: {
          a21: 21,
          a22: 22
        }
      },
      b: {
        b1: {
          b11: 11,
          b12: 12
        }
      }
    };

    const obj2 = {
      a: {
        a1: {
          a13: 13
        }
      },
      c: {}
    };

    const merged = {};

    expect(merged).toEqual({
      a: {
        a1: {
          a11: 11,
          a12: 12,
          a13: 13
        },
        a2: {
          a21: 21,
          a22: 22
        }
      },
      b: {
        b1: {
          b11: 11,
          b12: 12
        }
      },
      c: {}
    });
  });
});




describe("Arrays", () => {
  describe("Array.from", () => {
    it("we can modify the value before putting it in the array", () => {
      const arrayLike = { 0: "one", 1: "two", length: 2 };
      const arr = Array.from(arrayLike); // ← Change

      expect(arr).toEqual(["ONE", "TWO"]);
    });
  });
});