// to do: Change "templateString" in every test, make use of template literals.
// Make all tests pass, leave the expect lines unchanged.

import { exercise1, exercise2, exercise3, exercise4 } from "../src/02_template_literals";

// 02.1: template literals basics

describe("template literals basics", () => {
  it("behaves as normal string", () => {
    expect(exercise1()).toEqual("You're gonna need a bigger boat.");
  });

  it("variable substitutions: concatenate multiple values", () => {
    const { templateString, templateStringES6} = exercise2();

    expect(templateStringES6).toEqual(templateString);
  });

  it("function calls also work", () => {
    const { templateString, templateStringES6} = exercise3();

    expect(templateStringES6).toEqual(templateString);
  });
});

// 02.2: template literals multiline

describe("template literals multiline", () => {
  it("template literal on two lines", () => {
    const { templateString, templateStringES6} = exercise4();

    expect(templateStringES6).toEqual(templateString);
  });
});

