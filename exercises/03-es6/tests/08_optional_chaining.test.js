// To do: Make the unit tests shorter and more readable by using Optional chaining

describe("Optional Chaining", () => {
  // 07.1
  it("Exercise 1: Props", () => {
    const anObject = {};

    const result =
      anObject.with &&
      anObject.with.a &&
      anObject.with.a.very &&
      anObject.with.a.very.deeply &&
      anObject.with.a.very.deeply.nested &&
      anObject.with.a.very.deeply.nested.prop; // ← Change

    expect(result).toBeUndefined();
  });

  // 07.2
  it("Exercise 2: Optional chaining with function calls", () => {
    const anObject = { test: 1 };

    const result =
      anObject.withAFunctionWhichMightNotExist &&
      anObject.withAFunctionWhichMightNotExist(); // ← Change

    expect(result).toBeUndefined();
  });

  // 07.3
  it("Exercise 3: Array item access with optional chaining", () => {
    const items = null;

    const result = items ? items[2] : undefined; // ← Change

    expect(result).toBeUndefined();
  });
});
