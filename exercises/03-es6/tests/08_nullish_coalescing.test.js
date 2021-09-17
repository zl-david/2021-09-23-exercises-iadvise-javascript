describe("Nullish Coalescing", () => {
  // Extra 08.0
  it("Exercise 0 - Write shorter", () => {
    function aOrb(a, b) {
      // Rewrite the next line to use the nullish coalescing operator. Don't break the tests!
      return a !== null && a !== undefined ? a : b;
    }

    expect(aOrb(null, 5)).toEqual(5);
    expect(aOrb(undefined, 5)).toEqual(5);
    expect(aOrb("", 5)).toEqual("");
    expect(aOrb(0, 5)).toEqual(0);
  });

  // to do: Fix the unit tests by replace 'yourAnswerHere' in every unit test to the correct answer

  // 08.1
  it("Exercise 1 - number", () => {
    expect(5 || 100).toEqual("yourAnswerHere");
    expect(5 ?? 100).toEqual("yourAnswerHere");
  });

  // 08.2
  it("Exercise 2 - 0", () => {
    expect(0 || null).toEqual("yourAnswerHere");
    expect(0 ?? null).toEqual("yourAnswerHere");
  });

  // 08.3
  it("Exercise 3 - null", () => {
    expect(null || 5).toEqual("yourAnswerHere");
    expect(null ?? 5).toEqual("yourAnswerHere");
  });

  // 08.4
  it("Exercise 4 - null", () => {
    expect(null || undefined).toEqual("yourAnswerHere");
    expect(null ?? undefined).toEqual("yourAnswerHere");
  });

  // 08.5
  it("Exercise 5 - undefined", () => {
    expect(undefined || 5).toEqual("yourAnswerHere");
    expect(undefined ?? 5).toEqual("yourAnswerHere");
  });

  // 08.6
  it("Exercise 6 - empty string", () => {
    expect("" || 5).toEqual("yourAnswerHere");
    expect("" ?? 5).toEqual("yourAnswerHere");
  });

  // 08.7
  it("Exercise 7 - NaN", () => {
    expect(NaN || 5).toEqual("yourAnswerHere");
    expect(NaN ?? 5).toEqual("yourAnswerHere");
  });

  // EXTRA
  // --------------------------------------

  // Extra 08.8
  it("Exercise 8 - Implement getName", () => {
    function getName(firstName, lastName, nickName) {
      // your code here
    }

    expect(getName("John", "Doe", "Johny")).toEqual("John");
    expect(getName(null, "Doe", "Johny")).toEqual("Doe");
    expect(getName(null, null, "Johny")).toEqual("Johny");
    expect(getName()).toEqual("Not available");
    expect(getName("", "Doe", "Johny")).toEqual("");
    expect(getName("", 0, "Johny")).toEqual("");
  });
});
